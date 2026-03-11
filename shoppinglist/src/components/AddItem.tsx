import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Item } from "../App";
// 4번 라인의 경우 전에는 types.ts에서 불러왔었습니다.

type AddItemProps = {
  addItem: (item:Item)=>void;
}
export default function AddItem (props : AddItemProps) {
  const [ open, setOpen ] = useState(false);
  const [ item, setItem ] = useState<Item>({
    product: '',
    amount: '',
  }) 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItem = () => {
    props.addItem(item); //항목을 추가하는 상위 컴포넌트의 함수 addItem()
    // 그 다음에 TextField
    setItem({product:'',amount:''});
    handleClose();
  }

  return(
    <>
      <Button onClick={handleOpen} variant="text">ADDITEM</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField  value={item.product} label='product' margin="dense" fullWidth
            onChange={(event) => setItem({ ...item, product: event.target.value })}
          />
          <TextField  value={item.amount} label='amount' margin="dense" fullWidth
            onChange={(event) => setItem({ ...item, amount: event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            cancle
          </Button>
          <Button onClick={addItem}>
            add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

