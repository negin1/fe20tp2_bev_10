

export const saveCountries = (countryArr) => {
    // inpuit: ['sweden', 'norway']
    // save each of the countries to the user's database
    let countryObjArr = countryArr.map(item => ({ [item]: true }))
    // countryObjArr: [{sweden: true}, {norway:true}]
    let countryObj = Object.assign(...countryObjArr)
    // desired: {sweden: true, norway: true}
    firebase.user(userID).child('city').update(countryObj)
}

export const removeCountry = (country) => {
    let countryObj = { [country]: null };
    firebase.user(userID).child('countries').update(countryObj)
}

export const saveConfirmed = (confirmedArr) => {
    // inpuit: ['sweden', 'norway']
    // save each of the countries to the user's database
    let confirmedObjArr = confirmedArr.map(item => ({ [item]: true }))
    // countryObjArr: [{sweden: true}, {norway:true}]
    let confirmedObj = Object.assign(...confirmedObjArr)
    // desired: {sweden: true, norway: true}
    firebase.user(userID).child('confirmed').update(confirmedObj)
    console.log(confirmedObj);
}

export const saveRecovered = (recoveredArr) => {

    let recoveredObjArr = recoveredArr.map(item => ({ [item]: true }))

    let recoveredArr = Object.assign(...recoveredObjArr)

    firebase.user(userID).child('recovered').update(recoveredObj)
    console.log(confirmedObj)