import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'


class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      author:'',
      description:'',
      published_date:'',
      publisher:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
 
    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .post('mongodb+srv://Chris:groupten@cluster0.3e6jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', data)
      .then(res => {
        this.setState({
          title: '',
          isbn:'',
          author:'',
          description:'',
          published_date:'',
          publisher:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };



render(){
    return (<
        div >
        <
        h2 className = 'submitForm' > Submit Article < /h2>    <
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
        item > 
        
        <
        Button variant = "contained"
        component = "label" >
        
        Upload File <
        input type = "file"
        hidden />
      
        </Button> 

        <Button 
        onClick = {this.onSubmit} 
        type = "submit"
        variant = "contained"
        color = "primary"
        fullWidth 
        > Submit 
        < /Button> 
        
        < /Grid >


        <
        /Grid >  < /
        form > <
        / CardContent > < /
        Card > < /
        div >
        
    );
}
}

export default CreateArticle;
