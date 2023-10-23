import propTypes from "prop-types"

function BodyContent(props) {
    const attendance = [
        {id:1, name:"Zion Alele"},
        {id:2, name:"Ayoade Yusuf"},
        {id:3, name:"David Odezi"},
        {id:4, name:"oluwagbenga Taiwo"},
        {id:5, name:"Ife Oladepo"},
        {id:6, name:"Kunle Owolabi"},
        {id:7, name:"Nelson Okpithe"},
        {id:8, name:"Aminat Ayoade"},
        
    ]
    return (
        <div className="containerB">
            <ul>
                {
                    attendance.map((item) =>
                    <li key={item.id}>{item.name}</li>
                    )
                    
                }
            </ul>
            <h2 className="fullname">
                <ul>
                    <li>First Name: {props.first_name}</li>
                    <li>Last Name: {props.last_name}</li>
                    <li>Age: {props.age}</li>
                    <li>Status: {props.studentSat}</li>
                    <li>proptypestext: {props.str_num}</li>
                </ul>
            </h2>
        </div>
      )
}

BodyContent.defaultProps = {
    studentSat: "No data found"
}

BodyContent.propTypes = {
    str_num: propTypes.number.isRequired

}
export default BodyContent;