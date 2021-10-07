import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Dropdown from "../components/Dropdown.js";


const SEPractice = () => {
    return ( 


        < div >
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown/>
         <optionItems tag={Link} to="/TDD"></optionItems>
           
            

        </div>
    


    );
}

export default SEPractice;