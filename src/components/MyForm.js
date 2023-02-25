import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const MyForm = ({transData}) => {
    const [formData, setFormData] = useState({})
    const handleChange = (e)=>{
        const{name, value} = e.target
        setFormData({...formData, [name]:value})

    }
    const handleSubmit = (e)=>{
      console.log(formData)
        e.preventDefault()
        transData(formData)
        
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Row className='gap-1'>
        <Col md={2}>
        <Form.Select onChange={handleChange} name='type'>
            <option value="">Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Control required onChange={handleChange} name='name' placeholder="Transaction Here.." />
        </Col>
        <Col md={2}>
          <Form.Control required onChange={handleChange} name='amount' type='number' placeholder="Amount" />
        </Col>
        <Col md={2}>
          <Form.Control required onChange={handleChange} type='date' name='date' placeholder="Date" />
        </Col>
        <Col md={2}>
        <Button type='submit'><i className="fa-solid fa-plus"></i>Add</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default MyForm
