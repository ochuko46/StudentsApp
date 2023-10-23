import Banner from "./components/Banner";
import StudentsList from "./components/StudentsList";
import StudentForm from "./components/StudentForm";
import StudentSummary from "./components/StudentSummary";
import Topbar from "./components/Topbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/Pages/About";
import { StudentProvider } from "./Context/StudentContext";




function App() { 
    return (
        <StudentProvider>
        <BrowserRouter>       
        <Topbar/>
        <Routes>
            <Route path="/" element={
                <>
                <StudentSummary/>     
                <StudentForm/> 
                <StudentsList />       
                <Banner x= {23} y= {14} lname = "Saamuel" age = {35}/>               
                </>

            } />
            <Route path="/about" element={<About/>} />
        </Routes>
        </BrowserRouter>
        </StudentProvider>  
     );
}

export default App;