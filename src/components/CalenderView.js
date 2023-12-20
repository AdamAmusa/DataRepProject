import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '.././Calender.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, CloseButton, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import '.././global.css';
import Textarea from '@mui/joy/Textarea';


function CalenderView() {
    //allows the value of the constant to change when something happens 
    const [day, onChange] = useState(new Date());//State for selected date in calander
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    //formats the day to a string format for easy readability
    const weekDay = day.toLocaleDateString('en-US', { weekday: 'long' })
    const date = day.getDate()
    const month = day.toLocaleDateString('end-US', { month: 'long' })
    const year = day.getFullYear();
    let formatDay = `${weekDay} ${date} ${month} ${year}`;


    const handleSubmit = (e) => {
        // Prevent the default behavior (navigating to a new page) when the link is clicked
        e.preventDefault();

        // Create an object named 'schedule' with properties initialized using state variables
        const schedule = {
            day: day,
            event: event,
            time: time,
            description: description
        }
        

        //logs information to the web page console
        axios.post('http://localhost:4000/api/schedule', schedule)
            .then()
            .catch();

        alert('Schedule successfully created!');
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
                        <Form.Label style={{ color: 'red' }}>{formatDay}</Form.Label>
                    </FormGroup>
                    <Form.Group className='mb-3'>
                        <Form.Label style={{ color: 'white' }}>Event</Form.Label>
                        <Form.Control onChange={(e) => { setEvent(e.target.value) }} value={event} placeholder='Enter event' />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Label style={{ color: 'white' }}>Time</Form.Label>
                        <Form.Control onChange={(e) => { setTime(e.target.value) }} value={time} type="time" placeholder='Enter Time' className="modalTextField" style={{ paddingRight: "6px" }} /> {/*Stack Overflow: https://stackoverflow.com/questions/68283103/how-to-change-colour-of-react-bootstrap-time-picker*/}
                    </Form.Group>

                    <Form.Group className='mb-4'>
                    <Form.Label style={{ color: 'white' }}>Description</Form.Label>
                    <Textarea onChange={(e) => { setDescription(e.target.value) }} value={description} color="neutral" minRows={2} size="lg" variant="soft"/>
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