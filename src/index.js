import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import * as firebase from 'firebase';

let store = createStore(()=>{})



//initialize firebase
var config = {
    apiKey: "AIzaSyAD75pjv5JFCpYuABzCyRrQU6mGntjVcMw",
    authDomain: "reel-time-d398b.firebaseapp.com",
    databaseURL: "https://reel-time-d398b.firebaseio.com",
    projectId: "reel-time-d398b",
    storageBucket: "",
    messagingSenderId: "326470101496",
    appId: "1:326470101496:web:b7ca8024ec83deff"
}
firebase.initializeApplication(config)


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    
    //     document.getElementById("user_div").style.display = "block";
    //     document.getElementById("login_div").style.display = "none";
    
    //     var user = firebase.auth().currentUser;
    
    //     if(user != null){
    
    //     var email_id = user.email;
    //     document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    
    //     }
    
    //     } else {
    //       // No user is signed in.
    
    //     document.getElementById("user_div").style.display = "none";
    //     document.getElementById("login_div").style.display = "block";
    
    //     }
    // });
    
    // function login(){
    
    //     var userEmail = document.getElementById("email_field").value;
    //     var userPass = document.getElementById("password_field").value;
    
    //     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //       // Handle Errors here
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    
    //     window.alert("Error : " + errorMessage);
    
    
    //     });
    
    // }
    
    // function logout(){
    //     firebase.auth().signOut();
    // }
    