import React from "react"
// import {Component} from "react"

import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent component did mount");
    }

    componentDidUpdate() { console.log("componentDidUpdate"); }
    componentWillUnmount() { console.log("componentWillUnmount"); }

    render() {
        console.log("Parent Render");

        return (
            <>
                <h1>About Class Component</h1>
                <h2>this is namaste react</h2>
                <UserClass name={"Shivi Class"} location={"LDH class"} />
                <UserClass name={"Shibu"} location={"GD"} />
            </>
        )
    }
}



// const About = () => {
//     return (
//         <>
//             <div>
//                 <h1>About</h1>
//                 <h2>this is namaste react</h2>
//             </div>
//             <User name={"Shivi Function"} location={"LDH Function"} />
//             <UserClass name={"Shivi Class"} location={"LDH class"} />
//         </>
//     )
// }

export default About

