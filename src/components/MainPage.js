/*global YT*/
import { useEffect, useState } from "react";
import axios from "axios";



function MainPage() {

    const [data, setData] = useState([]);

    function loadPlayBack(){

        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;

        script.onload = () => {
            
            onYouTubeIframeAPIReady();
          };

        document.head.appendChild(script);

        

    }



    useEffect(
        () => {


            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.async = true;

            script.onload = () => {
                
                onYouTubeIframeAPIReady();
              };


            document.head.appendChild(script);

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


    const onYouTubeIframeAPIReady = ()=> {
        setTimeout(() => {
        const player = new window.YT.Player("player", {
            height: 500,
            width: 900,
            videoId: "YWyHZNBz6FE",
            playerVars: {
                playersinline: 1,
                autoplay: 0,
                controls: 1
            }

        })

    },1000);
    }


    return (

        <div>
            <h1> This is the MainPage</h1>

            <div id="player-container">
                <div id="player"></div>
            </div>

        </div>

    )


}

export default MainPage;