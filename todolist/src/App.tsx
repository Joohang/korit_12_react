import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import './App.css'

export type Todo = {
  task : string;
  time : string;
}

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const addTodo = (todo:Todo) =>{
    setTodos([todo,...todos]);
  }
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar >
            <Typography variant='h6'>
              To DO List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo addTodo={addTodo}/>
        <List>
          {
            todos.map((todo,index)=>
              <ListItem key={index} divider>
                <ListItemText 
                  primary={todo.task}
                  secondary={todo.time}
                />
              </ListItem>
            )
          }
        </List>
      
      
      </Container>
    </>
  )
}

export default App
