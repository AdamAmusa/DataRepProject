import Calander from "./CalenderView";
import '.././MainPage.css';
import '.././global.css';

function MainPage() {

    return (
        //Main Page that includes the title and description
        <div className="MainPage">
            <h1><font color="white">Scheduler</font></h1>
            <p><font color="gray">Schedule an event using the calander</font></p>
            <Calander></Calander>
            

        </div>

    )


}

export default MainPage;