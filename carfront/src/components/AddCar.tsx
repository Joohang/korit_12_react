import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import Car from "../types";
import { ChangeEvent, useState } from "react";
import { addCar } from "../api/carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddCar() {
  const queryClient = useQueryClient();

  const {mutate} = useMutation(addCar, {
    onSuccess : () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError : err => console.log(err),
  });




  const[ open, setOpen ] = useState(false);
  const[ car, setCar ] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber :'',
    modelYear :0,
    price: 0,
  });

  // 한줄 짜리라서 필요없을 것 같지만
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setCar({...car,[event.target.name]:event.target.value})
  }

  const handleSave = () => {
    mutate(car);    // 얘가 carapi.ts에 있는 addCar() 함수에 해당합니다.
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber :'',
      modelYear :0,
      price: 0,
    })
    handleClickClose();
  }

  return(
    <>
      <button onClick={handleClickOpen}>New Car</button> 
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>new car</DialogTitle>
        <DialogContent>
          <input type="text" placeholder="브랜드" name="brand" value={car.brand} onChange={handleChange}/><br />
          <input type="text" placeholder="모델" name="model" value={car.model} onChange={handleChange} /><br />
          <input type="text" placeholder="색상" name="color" value={car.color} onChange={handleChange} /><br />
          <input type="text" placeholder="차량번호" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} /><br />
          <input type="number" placeholder="연식" name="modelYear" value={car.modelYear} onChange={handleChange} /><br />
          <input type="number" placeholder="가격" name="price" value={car.price} onChange={handleChange} /><br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClickClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </>
  )
}