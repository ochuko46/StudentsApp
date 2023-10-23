import StudentsContext from "../Context/StudentContext";
import { useContext } from "react";

function StudentSummary() {
    const {myStud:studCount} = useContext(StudentsContext)
    let totalCount = 0
    for (const item of studCount){
        totalCount += item.classRating
    }

    const avg = totalCount / studCount.length;
    const avgg = avg.toFixed(2);
    return (
        <div className="container">
            <h4>{studCount.length} Student Enteries</h4>
            <h4>{isNaN(avgg)? 0 : avgg} Student Average At Score</h4>
        </div>
    )
}

export default StudentSummary;