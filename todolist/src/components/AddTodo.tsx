import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Todo } from "../App";
// 4번 라인의 경우 전에는 types.ts에서 불러왔었습니다.

type AddTodoProps = {
  addTodo: (todo:Todo)=>void;
}
export default function AddTodo (props : AddTodoProps) {
  const [ open, setOpen ] = useState(false);
  const [ todo, setTodo ] = useState<Todo>({
    id:0,
    task : '',
    completed : true,
  }) 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddTodo = () => {
    props.handleAddTodo(todo); //항목을 추가하는 상위 컴포넌트의 함수 addItem()
    // 그 다음에 TextField
    setTodo({task:'',time:''});
    handleClose();
  }

  return(
    <>
      <Button onClick={handleOpen} variant="text">Add TO DO</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField  value={todo.task} label='task' margin="dense" fullWidth
            onChange={(event) => setTodo({ ...todo, task: event.target.value })}
          />
          <TextField  value={todo.time} label='time' margin="dense" fullWidth
            onChange={(event) => setTodo({ ...todo, time: event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            cancle
          </Button>
          <Button onClick={addTodo}>
            add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

