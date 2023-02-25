import React from 'react'
import { Button, Table } from 'react-bootstrap'

const DisplayTable = ({ list, handleOnDelete }) => {
  const total = list.reduce((acc,item)=>{
    if(item.type === "income"){
      return acc + +item.amount
    }
    if(item.type === "expense"){
      return acc - +item.amount
    }

  },0)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Transaction Name</th>
          <th>Income</th>
          <th>Expense</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {
          list.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.date}</td>
              <td>{item.name}</td>
              {item.type === 'income' ? (
                <>
                  <td className='text-success fw-bold'>{item.amount}</td>
                  <td></td>
                </>
              ) : (
                <>
                  <td></td>
                  <td className='text-danger fw-bold'>{item.amount}</td>

                </>)}

              <td>
                <Button onClick={()=>handleOnDelete(i)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))
        }
        <tr className='fw-bolder fs-3'>
          <td colSpan={5}>
            Total
          </td>
          <td>{total}</td>
        </tr>

      </tbody>
    </Table>
  )
}

export default DisplayTable
