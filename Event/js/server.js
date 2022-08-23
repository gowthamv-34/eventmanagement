//const { constants } = require("buffer");

const firebaseConfig = {
    apiKey: "AIzaSyCrejIQJig8nI5DujraEYg_aTVcfEC7eGU",
    authDomain: "eventform-63ce0.firebaseapp.com",
    databaseURL: "https://eventform-63ce0-default-rtdb.firebaseio.com",
    projectId: "eventform-63ce0",
    storageBucket: "eventform-63ce0.appspot.com",
    messagingSenderId: "353388835827",
    appId: "1:353388835827:web:46e8377f870ebcf87cd886"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database

var eventformDB = firebase.database().ref('eventform');

document.getElementById('eventform').addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var num = getElementVal('num');
    var sub = getElementVal('sub');
    var msg = getElementVal('msg');
    //console.log(name, email, num, sub, msg);
    saveMessages(name, email, num, sub, msg);
}

const saveMessages = (name, email, num, sub, msg) => {
    var neweventform = eventformDB.push();

    neweventform.set({
        name: name,
        email: email,
        num: num,
        sub: sub,
        msg: msg,
    });
};




const getElementVal = (id) => {
    return document.getElementById(id).value;
}