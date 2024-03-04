import { useEffect, useState } from "react"

const User = ({ name }) => {

    const [count, setCount] = useState(0)
    const [count2] = useState(2)
    useEffect(
        () => {
            console.log("UseEffect");
            return () => {
                console.log("UseEffect render");
            }

        }, []
    )
    console.log("render");
    return (
        <>
            <div className="user-card">
                <h1>count = {count}</h1>
                <h1>count2 = {count2}</h1>
                <h2>Functional component</h2>
                <h2>Name : {name}</h2>
                <h3>Location: LDH</h3>
                <h4>Contact: sim@example.com</h4>
            </div>
        </>
    )
}
export default User