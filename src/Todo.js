import React, { useState } from "react";
import "./Todo.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import { List, ListItem, ListItemText, Modal,Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border:'2px solid #000',
    boxShadow:theme.shadows[5],
    padding:theme.spacing(2,4,3),
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input,setInput]=useState('');
  const classes=useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo=()=>{
    //update todo with new input
db.collection('todos').doc(props.todo.id).set({
  todo: input
},{merge:true});

    setOpen(false);
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
