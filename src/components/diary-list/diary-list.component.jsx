import React, { Component } from 'react';
import Form from '../form-diary/form.component';
import Entry from '../diary-entry/diary-entry.component';

class DiaryList extends Component {
    constructor(){
        super();
        this.state = {
            diary: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById('form__diary--title').value;
        const content = document.getElementById('form__diary--content').value;
        const obj = { title, content, date: Date().toLocaleString() };

        this.setState(prevState => prevState.diary.push(obj));
        console.log(this.state)
        e.target.reset();
    }

    render(){
        return (
            <div className="diary">
                <Form submit={this.handleSubmit} />
                <div className="diary-list">
                    {this.state.diary.map(({ title, content, date }, index) => (
                        <Entry key={index} title={title} content={content} date={date}  />
                    ))}
                    
                </div>
            </div>
        )
    }

}

export default DiaryList;