function Card({children,reverse}) {
    return < div className= { `myCard ${reverse? 'changeMode': null }` }>
        {children}
    </div>
}
 
export default Card;