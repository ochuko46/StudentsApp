import Student from "./Students";
import StudentsContext from "../Context/StudentContext";
import { useContext } from "react";

function StudentsList() {
    const {myStud:Students, studentDeleteHandler:deleteHandler} = useContext(StudentsContext)
    return ( 
        <div className="container">
            {Students.map((item) => (
                <Student deleteHandler = {deleteHandler} key={item.id} theItem={item}/>
            ))}
        </div>
     )
}

export default StudentsList;