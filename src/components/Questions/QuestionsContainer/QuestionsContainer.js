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
        this.updateLocalStorage(newQuestionList)
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
        if (e.target.className === 'modal-wrapper' || e.target.className === 'close-modal-button' || e.target.className === 'delete-button') {
            this.setState(() => ({showInfoModal: false}))
        }
    }

    componentDidMount() {
        if (localStorage.getItem('questions') && localStorage.getItem('questions').length > 0) {
            const savedQuestions = JSON.parse(localStorage.getItem('questions'))
            this.setState(() => ({questions: savedQuestions}))
        }
    }

    deleteQuestion = (indexOfQuestion) => {
        const newQuestionList = [...this.state.questions]
        newQuestionList.splice(indexOfQuestion, 1)
        this.setState(() => ({questions: newQuestionList}))
        this.updateLocalStorage(newQuestionList)
    }

    openFormModal = () => {
        this.setState(() => ({showFormModal: true}))
    }

    updateLocalStorage = (newQuestionList) => {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions')
        }
        localStorage.setItem('questions', JSON.stringify(newQuestionList))
    }

    showAnswerModal = () => {
        this.setState(() => ({showInfoModal: false, showAnswerModal: true}))
    }

    showInfoModal = (e, text, date, tag, id) => {
        e.persist();
        if (e.target.className !== 'delete-question-button') {
            this.setState(() => ({showInfoModal: true, requestedText: text, requestedDate: date, requestedTag: tag, requestedId: id}))
        }
    }

    render() {

        return (
            <div className="questions-container">
                <div className="questions-content">
                    <Header />
                    <NewQuestionButton openForm={this.openFormModal} />
                    {this.state.showFormModal && <FormModal addQuestion={this.addQuestion} updateList={this.updateList} closeFormModal={this.closeFormModal} />}
                    <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} showInfoModal={this.showInfoModal} />
                    {this.state.showInfoModal && <InfoModal closeInfoModal={this.closeInfoModal} deleteQuestion={this.deleteQuestion} showAnswerModal={this.showAnswerModal} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} />}
                    {this.state.showAnswerModal && <AnswerModal id={this.state.requestedId} text={this.state.requestedText} closeAnswerModal={this.closeAnswerModal} />}
                </div>
            </div>
        );
    }
}

export default QuestionsContainer;