import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import DisplayTable from './components/DisplayTable';
import MyForm from './components/MyForm';


function App() {
  const [list, setMyList] = useState([])
  const transData = (data) => {
    setMyList([...list, data])

  }
  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")){
      const tempArg = list.filter((item, i) => i !== id)
      setMyList(tempArg)

    }


  }
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center mt-5'>Expense Tracker</h2>
          <hr />
          <MyForm transData={transData} />
          <hr />
          <DisplayTable list={list} handleOnDelete={handleOnDelete} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
