import Calander from "./CalenderView";
import '.././MainPage.css';

function MainPage() {

    //const [data, setData] = useState([]);





    return (

        <div>
            <h1><font color="white">Scheduler</font></h1>
            <p><font color="gray">Schedule an event using the calander</font></p>
            <Calander></Calander>
            

        </div>

    )


}

export default MainPage;