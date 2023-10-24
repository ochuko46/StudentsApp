import { useState , useContext} from "react";
import StudentsContext from "../Context/StudentContext";
import Card from "./shared/card";
import MainButton from "./shared/MainButton";
import RatingSelector from "./RatingSelector";


function StudentForm() {
    
    const {studentAdd}= useContext(StudentsContext)   
    const [text,setText]= useState('')
    const [classRating,setClassRating] = useState()
    const [isDisabled,setIsDisabled]= useState(true)
    const [valMessage,setValMessage]= useState('')

    const textHandler = (e)=> {
        if (text === '') {
            setIsDisabled(true)
            setValMessage(null)
        } else if (text !== '' && text.trim().length <= 5) {
            setIsDisabled(true)
            setValMessage('Character is less than 5')
        } else {
            setIsDisabled(false)
            setValMessage(null)
        }
        setText(e.target.value);
        
    } 

    const studentFormhandler = (e) => {
        e.preventDefault();
        const myObj = {
            fullName: text,
            classRating,
        };
    
        studentAdd(myObj);
        setText('');
    };
    
    return <div className="container">
        <Card>
        <form onSubmit={studentFormhandler} >
            <h2>Enter Student with Rating</h2>
            <RatingSelector theRating ={(f)=> {
                setClassRating(f)
                }}/>
            <div className="input-group">
                <input onChange={textHandler} type="text" value={text} placeholder="Enter your content" />                
                <MainButton isDisabled={isDisabled} >Add Task</MainButton>
            </div>
            {valMessage ? <div>{valMessage}</div>: null }
           
        </form>
    </Card>
    </div>
}

export default StudentForm;