import { useState } from "react";

function Topbar1() {
    const [toptext,settoptext] = useState("Coming home to roost")

    const [count,setcount] = useState(7);

    const toptextHandler = () => {
        settoptext("Going out to Hustle");
    }

    const countHandler = () => {
        setcount((very) => {
            return very + 5
        })
    }
    return ( 
        <>
        <div className="containerT">
            <h1>Student Record Manager n </h1>
            <p>{toptext}</p>
            <p>{count}</p>
        </div>
        <button onClick={toptextHandler}>Change Text</button>
        <button onClick={countHandler}>Change Count</button>
        </>
     );
}

export default Topbar1;