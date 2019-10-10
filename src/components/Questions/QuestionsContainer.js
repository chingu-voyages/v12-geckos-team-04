import React from 'react';
import Header from './Header'
import Form from './Form'
import QuestionList from './QuestionList';
import InfoModal from './InfoModal'
import './Questions.css'

class QuestionsContainer extends React.Component {

    state = {
        questions: [],
        showModal: false
    }

    componentDidMount() {
        if (localStorage.getItem('questions') && localStorage.getItem('questions').length > 0) {
            const savedQuestions = JSON.parse(localStorage.getItem('questions'))
            this.setState(() => ({questions: savedQuestions}))
        }
    }

    deleteQuestion = (indexOfQuestion) => {
        debugger
        const newQuestionList = [...this.state.questions]
        newQuestionList.splice(indexOfQuestion, 1)
        this.setState(() => ({questions: newQuestionList}))
        this.updateLocalStorage(newQuestionList)
    }

    addQuestion = (e) => {
        debugger
        e.preventDefault()
        const textInput = e.target.elements.input.value.trim()
        if (textInput === '') {
            alert('Please write something')
            return
        }
        e.target.elements.input.value = ''
        const newQuestionList = [...this.state.questions, textInput]
        this.setState(() => ({questions: newQuestionList}))
        this.updateLocalStorage(newQuestionList)
    }

    updateLocalStorage = (newQuestionList) => {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions')
        }
        localStorage.setItem('questions', JSON.stringify(newQuestionList))
    }

    closeModal = () => {
        this.setState(() => ({showModal: false}))
    }

    showModal = () => {
        this.setState(() => ({showModal: true}))
    }

    render() {

        return (
            <div className="questions-container">
                <div className="questions-content">
                    <Header />
                    <Form addQuestion={this.addQuestion} updateList={this.updateList} />
                    <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} showModal={this.showModal} />
                    {this.state.showModal && <InfoModal closeModal={this.closeModal} />}
                </div>
            </div>
        );
    }
}

export default QuestionsContainer;