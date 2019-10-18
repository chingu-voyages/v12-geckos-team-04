import React, { Component } from "react";
import Form from "../form-diary/form.component";
import Entry from "../diary-entry/diary-entry.component";
import moment from "moment";

class DiaryList extends Component {
  constructor() {
    super();
    this.state = {
      diary: []
    };
  }

  getDiary = param => {
    if (localStorage.getItem("diary") === null) {
      const diary = [];
      diary.push(param);
      localStorage.setItem("diary", JSON.stringify(diary));
    } else {
      const diary = JSON.parse(localStorage.getItem("diary"));
      diary.push(param);
      // this.setState(prevState => prevState.diary.push(param));
      localStorage.setItem("diary", JSON.stringify(diary));
    }
    this.setState({ diary: JSON.parse(localStorage.getItem("diary")) });
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = document.getElementById("form__diary--title").value;
    const content = document.getElementById("form__diary--content").innerHTML;
    const date = new Date();
    const m = moment(date);
    const obj = {
      id: date.valueOf(),
      title,
      content,
      date: m.format("LLL")
    };

    console.log(obj);

    this.getDiary(obj);
    e.target.reset();
  };

  handleDelete = id => {
    const diary = JSON.parse(localStorage.getItem("diary"));
    const newDiary = diary.filter(diaryItem => diaryItem.id !== id);
    localStorage.setItem("diary", JSON.stringify(newDiary));

    this.setState({ diary: JSON.parse(localStorage.getItem("diary")) });
  };

  componentDidMount() {
    if (localStorage.getItem("diary")) {
      this.setState({ diary: JSON.parse(localStorage.getItem("diary")) });
      console.log("aa");
    }
  }

  render() {
    return (
      <div className='diary'>
        <Form submit={this.handleSubmit} />
        <div className='diary-list'>
          {this.state.diary.length
            ? this.state.diary.map(({ id, title, content, date }, index) => (
                <Entry
                  key={index}
                  title={title}
                  content={content}
                  date={date}
                  id
                  delete={() => {
                    this.handleDelete(id);
                  }}
                />
              ))
            : "Nothing to see here..."}
          {/* {this.state.diary.map(({ title, content, date }, index) => (
            <Entry key={index} title={title} content={content} date={date} />
          ))} */}
        </div>
      </div>
    );
  }
}

export default DiaryList;
