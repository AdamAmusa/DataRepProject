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



export default function Edit() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [event, setEvent] = useState("");


    const [selectDate, onChange] = useState(new Date());
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount

    const weekDay = selectDate.toLocaleDateString('en-US', {weekday:'long'})
    const date = selectDate.getDate()
    const month = selectDate.toLocaleDateString('end-US', {month:'long'})
    const year = selectDate.getFullYear();

    let formatDay = `${weekDay} ${date} ${month} ${year}`;



    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/schedule/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setDay(response.data.day);
                setTime(response.data.time);
                setEvent(response.data.event);
            })
            .catch(function (error) {//catches errors
                console.log(error);
            })
    }, []);
    const handleSubmit = (process) => {//function saves the data being submitted
        process.preventDefault();
        const newSchedule = {//data is organised for json format
            id: id,
            day: formatDay,
            event: event,
            time: time
        };
        axios.put('http://localhost:4000/api/schedule/' + id, newSchedule)//sends to http which has a get method
            .then((res) => {
                console.log(res.data);
                navigate('/ViewSchedule');
            });
    }
    return (
        <div style={{ height: '900px' }}>

            <h1 style={{ color: 'white'}}>Edit</h1>
            <p style={{color: 'white'}}>Use the calander to change the date</p>
            <Container className='Edit'>
                <Row>
                    <Col className='mr-4'>
                        <Form onSubmit={handleSubmit} className='Col1'  >{/*When the form is submitted the function is called to handle the data */}

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2} style={{ color: 'white' }}>
                                    Event
                                </Form.Label>
                                <Col sm={10}>
                                    <div className='mb-4'>
                                        <input type="text"
                                            className="form-control"
                                            value={event}//variable is assigned as a property
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
                                            onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                </Col>
                                <div className="form-group">
                                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                                </div>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <div >
                            <Calendar onChange={onChange} value={selectDate} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}


