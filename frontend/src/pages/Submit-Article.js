import React from "react";

import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'


const SubmitArticle = () => {
    return ( <
        div >
        <
        h2 className = 'sm:text-4xl text-2xl font-bold mt-6 text-gray-900' > Submit Article < /h2>    <
        p > This will be a form to allow submitters to submit an article
        for possible inclusion in our SEPER repo. < /p>

        <
        Card >
        <
        CardContent >
        <
        form >

        <
        Grid container spacing = { 1 } >
        <
        Grid xs = { 12 }
        sm = { 6 }
        item >
        <
        TextField label = "Title"
        placeholder = "Enter Title of Article"
        variant = "outlined"
        fullWidth required / >
        <
        /Grid> <
        Grid xs = { 12 }
        sm = { 6 }
        item >
        <
        TextField label = "Authors"
        placeholder = "Enter Author Name"
        variant = "outlined"
        fullWidth required / >
        <
        /Grid> <
        Grid xs = { 12 }
        item >
        <
        TextField type = "source"
        label = "Source of Claim"
        placeholder = "Enter Source"
        variant = "outlined"
        fullWidth required / >
        <
        /Grid> <
        Grid xs = { 12 }
        sm = { 6 }
        item >
        <
        TextField type = "number"
        label = "Year of Publication"
        placeholder = "Enter Publication Year"
        variant = "outlined"
        fullWidth required / >
        <
        /Grid> <
        Grid xs = { 12 }
        sm = { 6 }
        item >
        <
        TextField label = "DOI"
        placeholder = "Enter DOI"
        variant = "outlined"
        fullWidth required / >
        <
        /Grid>  <
        Grid xs = { 12 }
        item > <
        Button variant = "contained"
        component = "label" >
        Upload File <
        input type = "file"
        hidden /
        >
        <
        /Button> <
        Button type = "submit"
        variant = "contained"
        color = "primary"
        fullWidth > Submit < /Button> < /
        Grid >


        <
        /Grid >  < /
        form > <
        / CardContent > < /
        Card > < /
        div >
    );
}

export default SubmitArticle;