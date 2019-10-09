import React from 'react';
import Header from './Header'
import Form from './Form'
import QuestionList from './QuestionList';

class QuestionsContainer extends React.Component {

    state = {
        questions: []
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
        this.updateLocalStorage()
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
        this.updateLocalStorage()
    }

    updateLocalStorage = () => {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions')
        }
        const currentQuestions = [...this.state.questions]
        localStorage.setItem('questions', JSON.stringify(currentQuestions))
    }

    render() {

        return (
            <div>
                <Header />
                <QuestionList questions={this.state.questions} deleteQuestion={this.deleteQuestion} />
                <Form addQuestion={this.addQuestion} updateList={this.updateList} />
            </div>
        );
    }
}

export default QuestionsContainer;