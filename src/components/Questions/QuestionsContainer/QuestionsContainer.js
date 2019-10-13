import React from 'react';
import Header from '../Header/Header'
import Form from '../Form/Form'
import QuestionList from '../QuestionList/QuestionList';
import InfoModal from '../InfoModal/InfoModal'
import NewQuestionButton from '../NewQuestionButton/NewQuestionButton'
import './QuestionsContainer.css'

class QuestionsContainer extends React.Component {

    state = {
        questions: [],
        showForm: false,
        showModal: false,
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
        this.setState(() => ({showForm: false}))
        this.updateLocalStorage(newQuestionList)
    }

    closeForm = (e) => {
        if (e.target.className === 'form-wrapper') {
            this.setState(() => ({showForm: false}))
        }
    }

    closeModal = (e) => {
        e.persist()
        if (e.target.className === 'modal-wrapper' || e.target.className === 'close-modal-button' || e.target.className === 'delete-button') {
            this.setState(() => ({showModal: false}))
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

    openForm = () => {
        this.setState(() => ({showForm: true}))
    }

    updateLocalStorage = (newQuestionList) => {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions')
        }
        localStorage.setItem('questions', JSON.stringify(newQuestionList))
    }

    showModal = (e, text, date, tag, id) => {
        e.persist();
        if (e.target.className !== 'delete-question-button') {
            this.setState(() => ({showModal: true, requestedText: text, requestedDate: date, requestedTag: tag, requestedId: id}))
        }
    }

    render() {

        return (
            <div className="questions-container">
                <div className="questions-content">
                    <Header />
                    <NewQuestionButton openForm={this.openForm} />
                    {this.state.showForm && <Form addQuestion={this.addQuestion} updateList={this.updateList} closeForm={this.closeForm} />}
                    <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} showModal={this.showModal} />
                    {this.state.showModal && <InfoModal closeModal={this.closeModal} deleteQuestion={this.deleteQuestion} id={this.state.requestedId} text={this.state.requestedText} date={this.state.requestedDate} tag={this.state.requestedTag} />}
                </div>
            </div>
        );
    }
}

export default QuestionsContainer;