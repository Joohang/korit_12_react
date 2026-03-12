import { useState } from 'react'

import './App.css'
import { AppBar, Container, Toolbar,List, ListItem, ListItemText, Typography } from '@mui/material'
import AddItem from './components/AddItem';

export type Item = {
  product: string;
  amount: string;
  price?: number;
}

function App() {
  const[ items, setItems ] = useState<item[]>([])

  const addItem = (item:Item) => {
    setItems([item,...items]);
  }

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h3'>
              장바구니
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item,index)=>
            <ListItem key={index} divider>
              <ListItemText 
                primary={item.product}
                secondary={`${item.amount},${item.price}원`}
              />
            </ListItem>)

          }
        </List>
      </Container>
    </>
  )
}

export default App
