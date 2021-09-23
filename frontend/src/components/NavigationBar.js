import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return ( < nav className = "border-b-4 border-green-700 text-center fixed top-0 bg-green-600 front-bold text-lg text-white" >
        <
        ul >
        <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/"
        className = "pl-6 pr-8" >
        Home <
        /Link>   < /
        li > <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/Submit-Article"
        className = "pl-6 pr-8" >
        SubmitArticle <
        /Link> < /
        li > <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/SE-Practise"
        className = "pl-6 pr-8" >
        SEPractice <
        /Link>  < /
        li >

        <
        /ul>


        <
        /nav>


    )
}



export default NavigationBar