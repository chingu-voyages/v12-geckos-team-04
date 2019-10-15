import React from 'react';
import AnsweredInfoModal from './AnsweredInfoModal'
import Header from './Header'
import FormModal from './FormModal'
import QuestionList from './QuestionList';
import UnansweredInfoModal from './UnansweredInfoModal'
import AnswerModal from './AnswerModal'
import NewQuestionButton from './NewQuestionButton'
import styles from './questions-styles/QuestionsContainer.module.css'

class QuestionsContainer extends React.Component {

    state = {
        questions: [],
        answeredQuestions: [],
        showFormModal: false,
        showUnansweredInfoModal: false,
        showAnsweredInfoModal: false,
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

    closeModals = (e) => {
        e.persist()
        if (e.target.classList.contains('close-button') || e.target.classList.contains('modal-wrapper')) {
            this.setState(() => ({showUnansweredInfoModal: false, showAnsweredInfoModal: false, showFormModal: false, showAnswerModal: false}))
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
        if (e.target.classList.contains('delete-unanswered')) {
            const newQuestionList = [...this.state.questions]
            newQuestionList.splice(indexOfQuestion, 1)
            this.setState(() => ({questions: newQuestionList}))
            this.updateLocalStorage(newQuestionList, undefined)
        } else if (e.target.classList.contains('delete-answered')) {
            const newAnsweredQuestionList = [...this.state.answeredQuestions]
            newAnsweredQuestionList.splice(indexOfQuestion, 1)
            this.setState(() => ({answeredQuestions: newAnsweredQuestionList}))
            this.updateLocalStorage(undefined, newAnsweredQuestionList)
        }
        this.setState(() => ({showUnansweredInfoModal: false, showAnsweredInfoModal: false}))
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
        this.setState(() => ({showUnansweredInfoModal: false, showAnswerModal: true}))
    }

    showInfoModal = (e, text, date, tag, id, answer, answered) => {
        e.persist();
        if (answered === 'false') {
            this.setState(() => ({showUnansweredInfoModal: true, requestedText: text, requestedDate: date, requestedTag: tag, requestedId: id, requestedAnswer: answer}))
        } else {
            this.setState(() => ({showAnsweredInfoModal: true, requestedText: text, requestedDate: date, requestedTag: tag, requestedId: id, requestedAnswer: answer}))
        }
    }

    render() {

        return (
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.content}>
                        <Header title='My Questions' />
                        <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} showInfoModal={this.showInfoModal} answered='false' />
                    </div>
                    <NewQuestionButton openForm={this.openFormModal} />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.content}>
                        <Header title='My Answered Questions' />
                        <QuestionList questions={this.state.answeredQuestions} showInfoModal={this.showInfoModal} answered='true' />
                    </div>
                </div>
                {this.state.showFormModal && <FormModal addQuestion={this.addQuestion} updateList={this.updateList} closeModal={this.closeModals} />}
                {this.state.showUnansweredInfoModal && <UnansweredInfoModal closeModal={this.closeModals} deleteQuestion={this.deleteQuestion} showAnswerModal={this.showAnswerModal} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} />}
                {this.state.showAnsweredInfoModal && <AnsweredInfoModal closeModal={this.closeModals} deleteQuestion={this.deleteQuestion} showAnswerModal={this.showAnswerModal} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} answer={this.state.requestedAnswer} />}
                {this.state.showAnswerModal && <AnswerModal id={this.state.requestedId} text={this.state.requestedText} closeModal={this.closeModals} answerQuestion={this.answerQuestion} />}
            </div>
        );
    }
}

export default QuestionsContainer