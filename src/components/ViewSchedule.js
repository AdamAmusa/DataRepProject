import { Card } from 'react-bootstrap';
import '.././ViewSchedule.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Countdown from 'react-countdown';

function ViewSchedule(props) {



    return(

        

        <div>
            {/*Card container */}
            <div>
            <Card className="card" >
                <Card.Body>
                    <div className="card-contents">
                    <Card.Title>{props.schedule.event}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.schedule.day}</Card.Subtitle>
                    <Card.Text>
                        {props.schedule.time}
                    </Card.Text>
                    </div>
                </Card.Body>
                 <Countdown date={props.schedule.day}/>
            </Card>
            </div>
        </div>

);

}

export default ViewSchedule;