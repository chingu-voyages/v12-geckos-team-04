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
            this.updateList()
        }
    }

    deleteItem = (indexOfItem) => {
        this.setState((prevState) => ({questions: prevState.questions.splice(indexOfItem, 1)}))
        this.updateLocalStorage()
    }

    handleAdd = (e) => {
        e.preventDefault()
        const textInput = e.target.elements.input.value.trim()
        if (textInput === '') {
            alert('Please write something')
            return
        }
        e.target.elements.input.value = ''
        const currentQuestions = [...this.state.questions]
        this.setState(() => ({questions: currentQuestions.push(textInput)}))
        this.updateLocalStorage()
    }

    updateLocalStorage = () => {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions')
        }
        const currentQuestions = [...this.state.questions]
        localStorage.setItem('questions', JSON.stringify(currentQuestions))
        this.updateList()
    }

    updateList = () => {
        const savedArray = JSON.parse(localStorage.getItem('questions'))
        this.setState(() => ({questions: savedArray}))
    }

    render() {

        return (
            <div>
                <Header />
                <QuestionList questions={this.state.questions} deleteItem={this.deleteItem} />
                <Form handleAdd={this.handleAdd} updateList={this.updateList} />
            </div>
        );
    }
}

export default QuestionsContainer;
