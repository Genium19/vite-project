import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem-check"}`}>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        O
      </span>

      <EditTextarea
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        defaultValue={props.text}
        
      >
        {props.text}
      </EditTextarea>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
      {/* <EditText
        className="TodoItem"
        name="textbox3"
        defaultValue={props.text}
        editButtonProps={{ style: { marginLeft: "5px", width: 16 } }}
        showEditButton
      /> */}
    </li>
  );
}

export { TodoItem };
