import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText, TextField,IconButton,Checkbox,Box,Paper,Dialog,DialogActions,DialogTitle,Button,DialogContent } from "@mui/material"
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AddIcon from '@mui/icons-material/Add'
import DeletIcon from '@mui/icons-material/Delete'
import './App.css'

export type Todo = {
  id: number;
  task : string;
  completed : boolean;
}

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const[open,setOpen] = useState(false);

  // 추가 함수
  const handleAddTodo = () =>{
    if(inputValue.trim() !== '') {
      setTodos([...todos,
        {id:Date.now(), task: inputValue,completed:false} //shoppinglist와 다르게 가져감
      ]);
    }
    setInputValue('');
    setOpen(false);
  }
  // 완료 상태 토글
  const handleToggleTodo = (id : number) => {
    setTodos(
      todos.map(todo=>todo.id===id ? {...todo, completed:!todo.completed} : todo)
    )
  }
  // 삭제
  const handleDeleteTodo = ( id : number) => {
    setTodos(
      todos.filter(todo=>todo.id !== id)
    );
  }
  // 모달 열리고 닫히는 부분 정의하겠습니다(왜 컴포넌트 분리 안하나요? -> 여러분들이 나중에 분리할겁니다.)
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => {   
    setInputValue('');
  }
  return (
    <>
      <Container maxWidth='sm' sx={{mt:5}}>
        <Paper elvation={3} sx={{p:4, borderRadius:2}}>
          {/** 타이틀 및 추가 버튼 영역 작생헜습니다. */}
          <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', mb:3}}>
            <Typography
              variant="h4"
              component='h1'
              color='primary'
              fontWeight='bold'
              sx={{m:0}}
            >
              📝할 일 목록
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={handleOpenDialog}
              startIcon={<AddIcon />}
              disableElevation
            >
            새 할일
            </Button>
          </Box>
          <List>
            {
              todos.map(todo => (
                <ListItem
                  key={todo.id} 
                  divider
                  secondaryAction={
                    <IconButton edge='end' aria-label='delete' onClick={()=>handleDeleteTodo(todo.id)}>
                      <DeletIcon color='error'/>
                    </IconButton>
                  }
                  disablePadding
                >
                  <Checkbox
                    edge='start'
                    checked={todo.completed}
                    onChange={()=>handleToggleTodo(todo.id)}
                  />
                  <ListItemText
                    primary={todo.task}
                    sx={{textDecoration:todo.completed ? 'line-through': 'none'}}
                  />
                </ListItem>
              ))
            }
          </List>     
        </Paper>  

        {/** 추가 버튼 눌렀을 때 Dialog 모달 띄우겠습니다. */}    
        <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth='xs'>
          <DialogTitle>새 할일 추가<AddIcon/></DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label='할 일 입력'
              type ='text'
              fullWidth
              variant="outlined"
              value={inputValue}
              onChange={e=>setInputValue(e.target.value)}
              onKeyDown={e =>{
                if(e.key==='Enter') {
                  handleAddTodo();
                  setOpen(false);
                }
              }
            }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>취소</Button>
            <Button onClick={handleAddTodo} variant="contained">추가</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  )
}

export default App
