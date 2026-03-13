import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCars } from "../api/carapi";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { deleteCars } from "../api/carapi";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import AddCar from "./AddCar";

export default function Carlist() {
  const [open , setOpen] = useState(false) 
  const queryClient = useQueryClient();

  const columns: GridColDef[] = [
    {field: 'brand', headerName: '브랜드', width:200,},
    {field: 'model', headerName: '모델', width:200,},
    {field: 'color', headerName: '색상', width:200,},
    {field: 'registrationNumber', headerName: '차량번호', width:200,},
    {field: 'modelYear', headerName: '연식', width:200,},
    {field: 'price', headerName: '가격', width:200,},
    {
      field: 'delete',
      headerName: '',
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <button 
          onClick={()=>{
            if(confirm(`${params.row.brand}의 ${params.row.color} ${params.row.model}을 삭제하시겠습니까?`)) {
              mutate(params.row._links.self.href)
            }  
          }}
        >
          Delete
        </button>
      )
    }
  ]


  const { data, error, isSuccess } = useQuery({
    queryKey:['cars'],
    queryFn: getCars
  });

  const { mutate } = useMutation(deleteCars, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({queryKey:['cars']})
    },
    onError: err => {
      console.log(err)
    },
  });

  if(!isSuccess) {
    return <span>Loading .... </span>
  }
  else if (error) {
    return <span>자동차 데이터를 가져오던 중 오류가 발생</span>
  }
  else {
    return (
      <>
        <AddCar />
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId={row => row._links.self.href}
        />
        <Snackbar 
          open={open}
          autoHideDuration={2000}
          onClose={()=>setOpen(false)}
          message='해당 차량 정보가 삭제되었습니다.'
        />
      </>
    )
  }
}