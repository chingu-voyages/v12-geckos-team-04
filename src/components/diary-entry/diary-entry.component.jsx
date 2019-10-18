import React from "react";
import "./diary-entry.style.scss";

const Entry = props => {
  return (
    <div className='diary__entry'>
      <div className='delete-item' onClick={props.delete}>
        X
      </div>
      <h3 className='diary__date'>{props.date}</h3>
      <h4 className='diary__entry--header'>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
};

export default Entry;
