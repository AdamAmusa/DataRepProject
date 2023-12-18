import { Card } from 'react-bootstrap';
import '.././ViewSchedule.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Countdown from 'react-countdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ViewSchedule(props) {



    return (



        <div>
            {/*Card container */}
            <Container>
                <Row >
                    <Col>
                        <Card className="card" >
                            <Card.Body>
                                <div className="card-contents">
                                    <Card.Title><h2>{props.schedule.event}</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{props.schedule.day}</Card.Subtitle>
                                    <Card.Text>
                                        {props.schedule.time}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                            <h1><Countdown style={{ fontSize: '50px' }} date={props.schedule.day} /></h1>
                        </Card>
                    </Col>
                    <Col>
                        <div className="mb-4"><Button size="lg"  as="input" type="button" value="Delete"/></div>
                        <div className="mb-4"><Button size="lg" as="input" type="button" value="Edit"/></div>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}

export default ViewSchedule;