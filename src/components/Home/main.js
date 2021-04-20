import react from 'react';
import LineGraph from './LineGraph';
import LineGraphDeaths from './LineGraphDeaths'
import LineGraphRecovered from './LineGraphRecovered'

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById(covidDataForm).addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    var country = getInputVal('country');
    var confirmed = getInputVal('confirmed');
    var recovered = getInputVal('recovered');
    var deaths = getInputVal('deaths');
    var days = getInputVal('90 days', '7 days', '365 days');

    // save Graph
    saveGraph(country, confirmed, recovered, deaths, days);
}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save graph to firebase
function saveGraph(country, confirmed, recovered, deaths, days) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        country: country,
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        days: days
    });
}

export default submitForm;