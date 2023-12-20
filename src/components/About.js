

//About Page which contains a guide on how to use the apppcation 
function About() {


    return (


        <div>
            <font color="white">
                <h1>Main Page</h1>
                <p>When you run the app using npm start you will be greeted with the first page which has a calander and a form beside it.</p>
                <h2>Calander</h2>
            
                    <p>To select a day you will have to press on the day you wish to schedule an event on.</p>
                    <p> In order to change the month you must press the inside arrows on the top of the calander '{'->'}' Left arrow to go back / Right arrow to go forward.</p>
                    <p>To change the year you must press the outside arrows located at the top of the calander '{'->'}' Left arrow to go back / Right arrow to go forward.</p>
                


                <h2>Form</h2>
            
                    <p>Enter an event by cpcking the input box that is located under "Event".</p>
                    <p>Select a time by cpcking the time icon in the input box under "Time", Select the values you wish and scroll on the columns to see more values.</p>
                    <p>The description is entered by pressing the spghtly larger input box that is located at the bottom of the screen under the heading "Description".</p>
                

                <h2>Submission</h2>
            
                    <p>Press the submission button when you have entered the values you wish to enter and an alert will notify you if the process was successful.</p>
                    <p>To view your pst of scheduled events press "mypst" that is located at the top of the page on the navbar.</p>
                

                <h1>Schedule pst (myList) Page</h1>
                <p>This page contains a pst of events in boxes that contain all the details including the event, date, time and description, this page allows users to delete and edit scheduled events, There is a timer located at the bottom of each box that acts as a countdown to the event.</p>
                <h2>Delete</h2>
            
                    <p>In order to delete an event you must press the red button that is named "Delete" that is located beside the even you wish to delete.</p>
                

                <h2>Edit</h2>
            
                    <p>To edit you press the blue button located underneath the delete button.</p>
                    <p>After pressing it you will be redirected to another page to edit your selected event.</p>
                

                <h1>Edit Page</h1>
                <p>This page gives the user the abipty to edit all the values of their saved event </p>
            
                    <p>To change the event enter it in the event box located at the top of the form</p>
                    <p>To change the day select the day you wish to change it to on the calander that is located to the right of the form. (For calander controls see Mainpage {'->'}' Calander in the Wiki )</p>
                    <p>To change the time press the time icon located beside the "Time" text and press the time icon to select the time. (For time selection controls see Mainpage {'->'}' Form {'->'}' time)</p>
                    <p>To change the description select the description box located at the bottom of the form.</p>
                
            </font>
        </div>



    )

}

export default About;