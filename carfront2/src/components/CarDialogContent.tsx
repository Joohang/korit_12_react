import { Car } from "../types"
import { DialogContent , Stack} from "@mui/material"
import {TextField} from "@mui/material"

type DialogFormProps = {
  car : Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function CarDialogContent({car, handleChange} : DialogFormProps) {


  return (
    <>
      <DialogContent>
        <Stack spacing={1} marginTop={2}>
          <TextField type="text" label="브랜드" name="brand" value={car.brand} onChange={handleChange} variant="outlined"/>
          <TextField type="text" label="모델" name="model" value={car.model} onChange={handleChange} variant="outlined" />
          <TextField type="text" label="색상" name="color" value={car.color} onChange={handleChange} variant="outlined" />
          <TextField type="text" label="차량번호" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} variant="outlined" />
          <TextField type="number" label="연식" name="modelYear" value={car.modelYear} onChange={handleChange} variant="outlined" />
          <TextField type="number" label="가격" name="price" value={car.price} onChange={handleChange} variant="outlined" />

        </Stack>
      </DialogContent>
    </>
  )
}