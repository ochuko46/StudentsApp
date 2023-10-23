import Card from "./shared/card";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import StudentsContext from "../Context/StudentContext";

function Student ({theItem}) {
    const {studentDeleteHandler} = useContext(StudentsContext)    


    return < Card reverse ={false} >
            {/* <div className="idcirle">{theItem.id}</div> */}
            <p className="fullnamep">{theItem.fullName}</p>
            <div className="ratingSqr">{theItem.classRating}</div> 
            < button onClick={()=> studentDeleteHandler(theItem.id)} className="btn btn-danger" >
                <AiFillCloseCircle className="del" />
                Delete</button>  
         </Card>
}    
export default Student;