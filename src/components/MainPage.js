import { useEffect, useState } from "react";
import axios from "axios";



function MainPage() {

const [data, setData] = useState([]);

    useEffect(
        () => {
            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.async = true;
            axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhwBKCmPbeDuUIC4-PjxB9gQYJysdANys&q=joji&type=video&part=snippet')/*Generates a Http request to the url and collects data */
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
            );
    }, []
    );




return(

    <div>
        <h1> This is the MainPage</h1>

        <h1>
            Page Info: {data.pageInfo?.totalResults}
        </h1>

       
    </div>

)


}

export default MainPage;