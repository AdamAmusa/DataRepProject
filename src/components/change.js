import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';
import '.././Edit.css';
import '.././global.css';
import Textarea from '@mui/joy/Textarea';



export default function Change() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method

    //allows the value of the constant to change when something happens 
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [event, setEvent] = useState("");
    const [description, setDescription] = useState('');
    const [selectDate, onChange] = useState(new Date());//State for selected date in calander


    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();


    //formats the date to an object
    const dateObj = new Date(selectDate);
    //formats the day to a string format for easy readability
    const weekDay = dateObj.toLocaleDateString('en-US', {weekday:'long'})
    const date = dateObj.getDate()
    const month = dateObj.toLocaleDateString('end-US', {month:'long'})
    const year = dateObj.getFullYear();
    //fully formatted day saved into variable
    let formatDay = `${weekDay} ${date} ${month} ${year}`; 
 
   
    
   

 console.log("Formatted  Day: " + formatDay)

    useEffect(() => {
        
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/schedule/' + id)
            .then((response) => {
                //initial date in calander is equal to what is in the database
                onChange(response.data.day)
                // Assign Response data to the arrays using useState.
                setDay(response.data.day);
                setTime(response.data.time);
                setEvent(response.data.event);
                setDescription(response.data.description)
            })
            .catch(function (error) {//catches errors
                console.log(error);
            })
    }, []);
    const Submit = (process) => {//function saves the data being submitted
        process.preventDefault();

        
        const newSchedule = {//data is organised for json format
            id: id,
            day: selectDate,
            event: event,
            time: time,
            description: description
        };
        axios.put('http://localhost:4000/api/schedule/' + id, newSchedule)//sends to http which has a get method
            .then((res) => {
                console.log(res.data);
                navigate('/ViewSchedule');//redirects to the previus page on selection
            });
    }
    return (
        <div style={{ height: '900px' }}>

            <h1 style={{ color: 'white'}}>Edit</h1>
            <p style={{color: 'white'}}>Use the calander to change the date</p>
            
            <Container className='Edit'>
                <Row>
                    <Col className='mr-4'>
                        <Form onSubmit={Submit} className='Col1'  >{/*When the form is submitted the function is called to handle the data */}

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2} style={{ color: 'white' }}>
                                    Event
                                </Form.Label>
                                <Col sm={10}>
                                    <div className='mb-4'>
                                        <input type="text"
                                            className="form-control"
                                            value={event}//variable is assigned as a property
                                            //variable changes as the input changes
                                            onChange={(e) => setEvent(e.target.value)} /> 
                                    </div>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2} style={{ color: 'white' }}>
                                    Day
                                </Form.Label>
                                <Col sm={10}>
                                    <div className='mb-4'>
                                        <input type="text"
                                            className="form-control"
                                            disabled='true'
                                            value={formatDay}//variable is assigned as a property
                                            //variable changes as the input changes
                                            onChange={(e) => setDay(e.target.value)} />
                                    </div>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2} style={{ color: 'white' }}>
                                    Time
                                </Form.Label>
                                <Col sm={10}>
                                    <div className='mb-4'>
                                        <input type="text"
                                            className="form-control"
                                            
                                            value={time}//variable is assigned as a property
                                            //variable changes as the input changes
                                            onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2} style={{ color: 'white' }}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <div className='mb-4'>
                                    {/*Variable changes as the input changes */}
                                    <Textarea onChange={(e) => { setDescription(e.target.value) }} value={description} color="neutral" minRows={2} size="lg" variant="soft"></Textarea>
                                    </div>
                                </Col>
                                <div className="form-group">
                                    {/*Submit button which calls the function */}
                                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                                </div>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <div >
                            {/*Calander with a function which handles the changes in selected day */}
                            <Calendar onChange={onChange} value={selectDate} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}


