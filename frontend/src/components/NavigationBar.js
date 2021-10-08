import React from 'react'
import { Link } from 'react-router-dom'


const NavigationBar = () => {
    return (

        <
        nav className = 'border-b-4 border-blue-700 w-full text-center fixed top-0 w-full bg-blue-600 front-bold text-lg text-white' >
        <
        ul >
        <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/"
        className = "pl-6 pr-8" >
        Home < /Link>      < /
        li > <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/Submit-Article"
        className = "pl-6 pr-8" >
        Submit an Article <
        /Link>  < /
        li > <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/SE-Practice"
        className = "pl-6 pr-8" >
        Software Engineering Practices <
        /Link>    < /
        li > <
        /ul>    < /
        nav >


    );
}



export default NavigationBar