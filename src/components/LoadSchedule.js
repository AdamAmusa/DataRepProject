import { useEffect, useState } from "react";
import axios from "axios";
import ViewSchedule from "./ViewSchedule";


function LoadSchedule() {

    const [data, setData] = useState([]);


    useEffect(
        () => {
            axios.get('http://localhost:4000/api/schedules')/*Generates a Http request to the url and collects data */
                //when we receive response pull the data into the setData method
                .then(
                    (response) => {//response function that sets the http data into the data constant variable using the setData function
                        setData(response.data)
                        console.log(response.data)
                    }
                )
                //when there is no response catch the error
                .catch(
                    (error) => {//function that prints out the error when the error is caught
                        console.log(error);
                    }
                );
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/schedules')/*Generates a Http request to the url and collects data */
            //when we receive response pull the data into the setData method
            .then(
                (response) => {//response function that sets the http data into the data constant variable using the setData function
                    setData(response.data)
                }
            )
            //when there is no response catch the error
            .catch(
                (error) => {//function that prints out the error when the error is caught
                    console.log(error);
                }
            )
    }
     

    return data.map(
        (data) =>{
            return <ViewSchedule  schedule={data} ReloadData = {()=> {Reload()}}></ViewSchedule>
        }
         
    );



}

export default LoadSchedule;