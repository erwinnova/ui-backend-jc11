import React, { Component } from 'react';
import { Button, CustomInput } from 'reactstrap';
import './App.css';
import Axios from 'axios';
import { API_URL } from './support/API_URL';
import {connect} from 'react-redux';
import { Login, keepLogin } from './redux/actions'


class App extends Component{
  state = {
    addImageFileName : 'Select File',
    addImageFile: undefined
  }
  
  componentDidMount(){
    let { keepLogin } = this.props;
    keepLogin()
  }

  // register = () => {
  //   let username = this.refs.username.value;
  //   let email = this.refs.email.value;
  //   let password = this.refs.password.value;
  //   let confirmPass = this.refs.confirm.value;
  //   if(password === confirmPass){
  //     Axios.post(API_URL + `/users/register`, {
  //       username,
  //       password,
  //       email
  //     })
  //     .then((res) => {
  //       console.log(res)
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   }
  // }

  onBtnLogIn = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.Login(username, password)
  }

  onBtnAddImageFile = (e) => {
    if(e.target.files[0]){
        this.setState({ addImageFileName: e.target.files[0].name, addImageFile : e.target.files[0] })
    }else{
        this.setState({ addImageFileName : 'Select Image', addImageFile : undefined })
    }
}

uploadImage = () => {
  let { addImageFile } = this.state;
  if(addImageFile){
    let formData = new FormData()
    formData.append('image', addImageFile)
    Axios.post(API_URL+'/image/upload', formData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }
}

  render(){
    console.log(this.props.user)
    // console.log(this.state.addImageFile)
    return(
      <div className='container'>
        <div className='d-flex justify-content-center'>
            <form className='box'>
            <div className='p-5'>
                <h1 style={{textAlign:"center"}}>Welcome Back!</h1>
            <input ref='username' type='text' className='form-control mt-3' placeholder='Username or Email'/>
            <input ref='password' type='password' className='form-control mt-3' placeholder='Password'/>
            <Button size='lg' style={{borderRadius:'24px', backgroundColor:'white', color:'black', marginTop: '20px'}} className='form-control login-btn' onClick={this.onBtnLogIn}>Sign In</Button>
            </div>
            </form>
        </div>
        {/* <CustomInput onChange={this.onBtnAddImageFile} label={this.state.addImageFileName} type='file'/> */}
        <Button onClick={this.uploadImage}>
          Upload 
        </Button>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, { Login, keepLogin })(App);
