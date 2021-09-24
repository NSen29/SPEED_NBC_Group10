import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'



const SEPractice = () => {
    return ( <
        div >
        <
        h2 className = 'sm:text-4xl text-2xl font-bold mt-6 text-gray-900' > Select SE Practice to get evidence
        for the claimed benefits < /h2>  <
        ul >
        <
        li className = "inline-block pt-4 pb-4" >
        <
        Link to = "/TDD"
        className = "pl-6 pr-8" >
        Test Driven Development <
        /Link>  < /
        li > <
        /ul>   < /
        div >

    );
}

export default SEPractice;