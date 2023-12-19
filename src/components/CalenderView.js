import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '.././Calender.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, CloseButton, FormGroup } from 'react-bootstrap';
import axios from 'axios';


function CalenderView() {
    const [day, onChange] = useState(new Date());
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const weekDay = day.toLocaleDateString('en-US', {weekday:'long'})
    const date = day.getDate()
    const month = day.toLocaleDateString('end-US', {month:'long'})
    const year = day.getFullYear();

    let formatDay = `${weekDay} ${date} ${month} ${year}`;


    const handleSubmit = (e) => {
        
 
        

        e.preventDefault();
        

        console.log("Day: " + formatDay +
            " Event: " + event +
            " Time: " + time);

        const schedule = {
            day: formatDay,
            event: event,
            time: time
        }

        //logs information to the web page console
        axios.post('http://localhost:4000/api/schedule', schedule)
        .then()
        .catch();
    
        
    }

        
    


    return (

        //https://www.npmjs.com/package/react-calendar
        <div className='centered-container'>
            <div className='centered-content'>
                <Calendar className="calander-style" onChange={onChange} value={day} />
            </div>

            <div>
                {/* Render the form when showForm is true */}
                    <Form onSubmit={handleSubmit} >
                        <FormGroup>
                            <Form.Label style={{color:'red'}}>{formatDay}</Form.Label>
                        </FormGroup>
                        <Form.Group className='mb-3'>
                            <Form.Label style={{color:'white'}}>Event</Form.Label>
                            <Form.Control onChange={(e) => { setEvent(e.target.value) }} value={event} placeholder='Enter event' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label style={{color:'white'}}>Time</Form.Label>
                            <Form.Control onChange={(e) => { setTime(e.target.value) }} value={time} type="time" placeholder='Enter Time' className="modalTextField" style={{ paddingRight: "6px" }} /> {/*Stack Overflow: https://stackoverflow.com/questions/68283103/how-to-change-colour-of-react-bootstrap-time-picker*/}
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
            </div>
        </div>



    )

}

export default CalenderView;