import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText, IconButton  } from "@mui/material"
import { useState } from "react"
import './App.css'
import AddItem from "./components/AddItem"


export type Item = {
  product : string;
  amount: string;
  price: number;
}

function App() {
  const [ items, setItems ] = useState<Item[]>([]);

  const addItem = (item:Item) =>{
    setItems([item,...items]);
    
  }
  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems)

  }
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar >
            <Typography variant='h6'>
              Shopping List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item,index)=>
              <ListItem key={index} divider secondaryAction={
                <IconButton edge='end' aria-label="delete" onClick={()=>deleteItem(index)}>
                  <span style={{ fontSize: '14px', color: 'red' }}>삭제</span>
                </IconButton>
              }>
                <ListItemText 
                  primary={item.product}
                  secondary={`${item.amount}  ${item.price}원`}
                  
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
