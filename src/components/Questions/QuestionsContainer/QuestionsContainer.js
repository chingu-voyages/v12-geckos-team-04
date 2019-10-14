import React from 'react';
import Header from '../Header/Header'
import FormModal from '../FormModal/FormModal'
import QuestionList from '../QuestionList/QuestionList';
import InfoModal from '../InfoModal/InfoModal'
import AnswerModal from '../AnswerModal/AnswerModal'
import NewQuestionButton from '../NewQuestionButton/NewQuestionButton'
import './QuestionsContainer.css'

class QuestionsContainer extends React.Component {

    state = {
        questions: [],
        answeredQuestions: [],
        showFormModal: false,
        showInfoModal: false,
        requestedText: '',
        requestedDate: '',
        requestedTag: '',
        requestedId: ''
    }

    addQuestion = (e) => {
        e.preventDefault()
        const textInput = e.target.elements.questioninput.value.trim()
        const tagInput = e.target.elements.taginput.value.trim()
        if (textInput === '') {
            alert('Please write something')
            return
        }
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let yy = today.getFullYear().toString().substr(-2)
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        let formattedDate = dd + '/' + mm + '/' + yy
        let newQuestionObj = {
            text: textInput,
            tag: tagInput,
            date: formattedDate
        }
        const newQuestionList = [...this.state.questions, newQuestionObj]
        this.setState(() => ({questions: newQuestionList}))
        e.target.elements.questioninput.value = ''
        this.setState(() => ({showFormModal: false}))
        this.updateLocalStorage(newQuestionList, undefined)
    }

    answerQuestion = (e) => {
        e.preventDefault()
        const answerInput = e.target.elements.answerInput.value.trim()
        if (answerInput === '') {
            alert('Please write an answer')
            return
        }
        const newAnsweredQuestionObj = {
            text: this.state.requestedText,
            tag: this.state.requestedTag,
            answer: answerInput
        }
        const newAnsweredQuestionList = [...this.state.answeredQuestions, newAnsweredQuestionObj]
        const newQuestionList = this.state.questions.filter((questionObj, index, array) => index !== this.state.requestedId)
        this.setState(() => ({questions: newQuestionList, answeredQuestions: newAnsweredQuestionList, showAnswerModal: false}))
        this.updateLocalStorage(newQuestionList, newAnsweredQuestionList)
    }

    closeFormModal = (e) => {
        if (e.target.className === 'form-wrapper') {
            this.setState(() => ({showFormModal: false}))
        }
    }

    closeAnswerModal = (e) => {
        e.persist()
        if (e.target.className === 'modal-wrapper' || e.target.className === 'close-modal-button') {
            this.setState(() => ({showAnswerModal: false}))
        }
    }

    closeInfoModal = (e) => {
        e.persist()
        if (e.target.className === 'modal-wrapper' || e.target.className === 'close-modal-button' || e.target.className === 'delete--question-button') {
            this.setState(() => ({showInfoModal: false}))
        }
    }

    componentDidMount() {
        if (localStorage.getItem('questions') && localStorage.getItem('questions').length > 0) {
            const savedQuestions = JSON.parse(localStorage.getItem('questions'))
            this.setState(() => ({questions: savedQuestions}))
        }
        if (localStorage.getItem('answeredQuestions') && localStorage.getItem('answeredQuestions').length > 0) {
            const savedAnsweredQuestions = JSON.parse(localStorage.getItem('answeredQuestions'))
            this.setState(() => ({answeredQuestions: savedAnsweredQuestions}))
        }
    }

    deleteQuestion = (e, indexOfQuestion) => {
        if (e.target.className === 'delete-question-button') {
            const newQuestionList = [...this.state.questions]
            newQuestionList.splice(indexOfQuestion, 1)
            this.setState(() => ({questions: newQuestionList}))
            this.updateLocalStorage(newQuestionList, undefined)
        } else if (e.target.className === 'delete-answered-question-button') {
            const newAnsweredQuestionList = [...this.state.answeredQuestions]
            newAnsweredQuestionList.splice(indexOfQuestion, 1)
            this.setState(() => ({answeredQuestions: newAnsweredQuestionList}))
            this.updateLocalStorage(undefined, newAnsweredQuestionList)
        }
        this.setState(() => ({showInfoModal: false}))
    }

    openFormModal = () => {
        this.setState(() => ({showFormModal: true}))
    }

    updateLocalStorage = (newQuestionList, newAnsweredQuestionList) => {
        if (newQuestionList !== undefined) {
            if (localStorage.getItem('questions')) {
                localStorage.removeItem('questions')
            }
            localStorage.setItem('questions', JSON.stringify(newQuestionList))
        }
        if (newAnsweredQuestionList !== undefined) {
            if (localStorage.getItem('answeredQuestions')) {
                localStorage.removeItem('answeredQuestions')
            }
            localStorage.setItem('answeredQuestions', JSON.stringify(newAnsweredQuestionList))
        }
    }

    showAnswerModal = () => {
        this.setState(() => ({showInfoModal: false, showAnswerModal: true}))
    }

    showInfoModal = (e, text, date, tag, id, answer) => {
        e.persist();
        if (e.target.className !== 'delete-question-button') {
            this.setState(() => ({showInfoModal: true, requestedText: text, requestedDate: date, requestedTag: tag, requestedId: id, requestedAnswer: answer}))
        }
    }

    render() {

        return (
            <div className="questions-container">
                <div className="questions-content">
                    <Header title='My Questions' />
                    <NewQuestionButton openForm={this.openFormModal} />
                    {this.state.showFormModal && <FormModal addQuestion={this.addQuestion} updateList={this.updateList} closeFormModal={this.closeFormModal} />}
                    <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} showInfoModal={this.showInfoModal} />
                    {this.state.showInfoModal && <InfoModal closeInfoModal={this.closeInfoModal} deleteQuestion={this.deleteQuestion} showAnswerModal={this.showAnswerModal} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} />}
                    {this.state.showAnswerModal && <AnswerModal id={this.state.requestedId} text={this.state.requestedText} closeAnswerModal={this.closeAnswerModal} answerQuestion={this.answerQuestion} />}
                </div>
                <div className="answered-questions-content">
                    <Header title='My Answered Questions' />
                    <QuestionList questions={this.state.answeredQuestions} showInfoModal={this.showInfoModal} />
                    {this.state.showInfoModal && <InfoModal closeInfoModal={this.closeInfoModal} deleteQuestion={this.deleteQuestion} showAnswerModal={this.showAnswerModal} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} answer={this.state.requestedAnswer} />}
                </div>
            </div>
        );
    }
}

export default QuestionsContainer;