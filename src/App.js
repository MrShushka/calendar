
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import Calendar from './components/Calendar/Calendar';
import React, {useState} from 'react';
import Modal from './components/modal/Modal';
import Form from './components/Form/Form';
import  moment from 'moment';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [day, setDay] = useState(new Date());

  const openModal = (day) =>
  {
    setShowModal(true);
    setDay(day);
  }

  const closeModal = () =>
  {
    setShowModal(false);
  } 

  



  return (
    
    <div className="App">
    {console.log('erender')}
      <Modal show = {showModal} modalClosed  ={closeModal}>
          {console.log(day)}
          <Form day={day}/>
      </Modal>

     <ToolBar/>
     
      <div className = 'container'>
        <div className ='left-side'>
        </div>
        <div className='right-side'>
          <Calendar callmodal = {openModal} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
