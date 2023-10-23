import { createContext, useState } from "react";
import Students from "../components/StudentsData";
import {v4} from "uuid";

//Context
const StudentsContext = createContext()

//Provider
export const StudentProvider = ({children}) =>{
    const [students, setStudents] = useState(Students)

    const studentAdd = (myObj)=>{
        myObj.id = v4();
        console.log(myObj)
        setStudents([myObj, ...students])
    }

  
    const studentDeleteHandler = (id)=> {
        if (window.confirm("Are you sure?")){
            setStudents(students.filter((item)=> {
                return item.id !== id
            }))
        }
    }
    

    const contextObj = {
        myStud:students,
        studentAdd,
        studentDeleteHandler
    }

    return <StudentsContext.Provider value={contextObj}>
        {children}
    </StudentsContext.Provider>
}

export default StudentsContext;