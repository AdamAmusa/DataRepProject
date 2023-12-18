import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import '.././Calender.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CloseButton } from 'react-bootstrap';
import axios from 'axios';

function CalenderView() {
    const [day, onChange] = useState(new Date());
    const [showForm, setShowForm] = useState(false);

    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const weekDay = day.toLocaleDateString('en-US', {weekday:'long'})
    const date = day.getDate()
    const month = day.toLocaleDateString('end-US', {month:'long'})
    const year = day.getFullYear();

    const clickDay = () => {
        setShowForm(true)
    }
    const handleCloseForm = () => {
        setShowForm(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let formatDay = `${weekDay} ${date} ${month} ${year}`;

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
    
        setShowForm(false);
    }

        
    


    return (

        //https://www.npmjs.com/package/react-calendar
        <div className='centered-container'>
            <div className='centered-content'>
                <Calendar onChange={onChange} value={day} onClickDay={clickDay} />
            </div>

            <div>
                {/* Render the form when showForm is true */}
                {showForm && (
                    <Form onSubmit={handleSubmit} >
                        <div className="position-relative">
                            <CloseButton onClick={handleCloseForm} className="position-absolute top-5 end-0"></CloseButton>
                        </div>
                        <Form.Group className='mb-3'>
                            <Form.Label>Event</Form.Label>
                            <Form.Control onChange={(e) => { setEvent(e.target.value) }} value={event} placeholder='Enter event' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Time</Form.Label>
                            <Form.Control onChange={(e) => { setTime(e.target.value) }} value={time} type="time" placeholder='Enter Time' className="modalTextField" style={{ paddingRight: "6px" }} /> {/*Stack Overflow: https://stackoverflow.com/questions/68283103/how-to-change-colour-of-react-bootstrap-time-picker*/}
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                )}
            </div>
        </div>



    )

}

export default CalenderView;