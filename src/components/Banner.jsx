function Banner(Props) {

    return ( 
        <>
        <div className="banner container">
            <h2>main banner</h2>
        </div>
        <div className="containerP">
        <div className="manage"><h1>Student Record Manager</h1></div>
        <div className="listN">
            <p>James Samuel</p>
            <p>Gbenga Taiwo</p>
            <p>Kunle Owolabi</p>
            <p>Nelson Okpeithe</p>
            <p>Zion Adelele</p>
            <p>David Odezi</p>
            <p>Aminat Ayoade</p>
            <p>Ayoade Yusuf</p>
        </div>
        <p>The sum {parseFloat(Props.x) + parseFloat(Props.y)}</p>
        <h3>Profile</h3>
        <ul>
            <li>First- Name {Props.fname}</li>
            <li>Last- Name {Props.lname}</li>
            <li>age {Props.age}</li>
        </ul>

    </div>
   </>
     );


}
Banner.defaultProps = {
    fname: "Praise"
}
export default Banner;