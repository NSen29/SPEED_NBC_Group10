import { TDD } from './pages/TDD';
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import NavigationBar from './components/NavigationBar'
import React from 'react'
import ReactDOM from 'react-dom'


function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = '/TDD'
        component = { TDD }
        />  < /
        Switch > <
        NavigationBar / >
        <
        div className = 'max-w-screen-md mx-auto pt-20' >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Home }
        />  <
        Route exact path = '/SE-Practice'
        component = { SEPractice }
        />   <
        Route exact path = '/Submit-Article'
        component = { SubmitArticle }
        />   

        <
        /Switch >  <
        /div > < /
        Router > );

}

export default App;