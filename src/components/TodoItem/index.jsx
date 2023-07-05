import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "./TodoItem.css";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem-check"}`}>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <CheckIcon></CheckIcon>
      </span>
      <span>
        <EditText
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
          defaultValue={props.text}
        >
          {props.text}
        </EditText>
      </span>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <ClearIcon></ClearIcon>
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
