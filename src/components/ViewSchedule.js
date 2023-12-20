import { Card } from 'react-bootstrap';
import '.././ViewSchedule.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Countdown from 'react-countdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '.././global.css';
import { Link } from 'react-router-dom';

function ViewSchedule(props) {

    //formats day into a object to access date functions 
    const { day } = props.schedule;
    const dateObj = new Date(day);

    //formats it back to string for redability
    const weekDay = dateObj.toLocaleDateString('en-US', {weekday:'long'})
    const date = dateObj.getDate()
    const month = dateObj.toLocaleDateString('en-US', {month:'long'})
    const year = dateObj.getFullYear();

    let formatDay = `${weekDay} ${date} ${month} ${year}`;

    return (



        <div className='ViewSchedule'>
          
 
            {/*Card container */    /*Prints out the data from the database using the props object */}
            <Container className="myContainer">
                <Row>
                    <Col>
                        <Card className="card" >
                            <Card.Body>
                                <div className="card-contents">
                                    <Card.Title><h2>{props.schedule.event}</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{formatDay}</Card.Subtitle>
                                    <Card.Text >
                                    <p className="card-text"><b>Time: </b></p> {props.schedule.time}
                                    </Card.Text>
                                    <Card.Text className="card-text">
                                    <p className="card-text"><b>description:</b></p>{props.schedule.description}
                                    </Card.Text>
                                    
                                </div>
                            </Card.Body>
                            <h1><Countdown style={{ fontSize: '50px' }} date={props.schedule.day} /></h1>
                        </Card>
                    </Col>
                    <Col>
                        <div className="mb-4">
                            <Button variant = "danger" as="input" type='button' size="lg" onClick={(e)=>{
                                //calls the get function and deletes the data from the database using the id
                                axios.delete('http://localhost:4000/api/schedule/'+props.schedule._id)
                                .then((res)=>{
                                    //reload function from the load Schedule component (Reloads the page when button is pressed)
                                    let reload = props.ReloadData();
                                    
                                })
                                .catch();
                            }} value="Delete"/>
                        </div>
                        <div className="mb-4">
                                {/*Redirects the page to the edit component */}
                                <Link  className="btn btn-primary"  to={'/change/' + props.schedule._id}>Edit</Link>  
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}

export default ViewSchedule;