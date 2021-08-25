var localData = window.localStorage
var reUseAbleInputs = []
var clock = $('#clock')
var currentTime
var currentDay
var time9am = moment().hour(9).minute(0).second(0)
var time10am = moment().hour(10).minute(0).second(0)
var time11am = moment().hour(11).minute(0).second(0)
var time12pm = moment().hour(12).minute(0).second(0)
var time1pm = moment().hour(13).minute(0).second(0)
var time2pm = moment().hour(14).minute(0).second(0)
var time3pm = moment().hour(15).minute(0).second(0)
var time4pm = moment().hour(16).minute(0).second(0)
var time5pm = moment().hour(17).minute(0).second(0)


function updatePlanner() {
    if(currentTime > time9am.hour()){
        console.log('it works')
        $('#time-9am').toggleClass('past')
    }
    else if(currentTime == time9am.hour()){
        $('#time-9am').toggleClass('present')
    }
    else {
        $('#time-9am').toggleClass('future')
    }
    
    if(currentTime > time10am.hour()){
        $('#time-10am').toggleClass('past')
    }
    else if(currentTime == time9am.hour()){
        $('#time-10am').toggleClass('present')
    }
    else {
        $('#time-10am').toggleClass('future')
    }
    
    if(currentTime > time11am.hour()){
        $('#time-11am').toggleClass('past')
    }
    else if(currentTime == time11am.hour()){
        $('#time-11am').toggleClass('present')
    }
    else {
        $('#time-11am').toggleClass('future')
    }
    
    if(currentTime > time12pm.hour()){
        $('#time-12pm').toggleClass('past')
    }
    else if(currentTime == time12pm.hour()){
        $('#time-12pm').toggleClass('present')
    }
    else {
        $('#time-12pm').toggleClass('future')
    }
    
    if(currentTime > time1pm.hour()){
        $('#time-1pm').toggleClass('past')
    }
    else if(currentTime == time1pm.hour()){
        $('#time-1pm').toggleClass('present')
    }
    else {
        $('#time-1pm').toggleClass('future')
    }
    
    if(currentTime > time2pm.hour()){
        $('#time-2pm').toggleClass('past')
    }
    else if(currentTime == time2pm.hour()){
        $('#time-2pm').toggleClass('present')
    }
    else {
        $('#time-2pm').toggleClass('future')
    }
    
    if(currentTime > time3pm.hour()){
        $('#time-3pm').toggleClass('past')
    }
    else if(currentTime == time3pm.hour()){
        $('#time-3pm').toggleClass('present')
    }
    else {
        $('#time-3pm').toggleClass('future')
    }
    
    if(currentTime > time4pm.hour()){
        $('#time-4pm').toggleClass('past')
    }
    else if(currentTime == time4pm.hour()){
        $('#time-4pm').toggleClass('present')
    }
    else {
        $('#time-4pm').toggleClass('future')
    }
    
    
    if(currentTime > time5pm.hour()){
        console.log('it works')
        $('#time-5pm').toggleClass('past')
    }
    else if(currentTime == time5pm.hour()){
        $('#time-5pm').toggleClass('present')
    }
    else {
        console.log(currentTime, time5pm.hour())
        console.log('We should be logging this')
        $('#time-5pm').toggleClass('future')
    }
    retrieveLocalStorage()
}

function updateClock(){
    currentDay = moment().format("dddd, MMM, Do")
    currentTime = moment().hour()
    clock.text(currentDay)
    }

setInterval(updateClock, 1000)

function setLocalStorage(){
    console.log('Local Storage has been set')
    var input9am = document.getElementById('time-9am').value
    localData.setItem('am9', input9am)
    var input10am = document.getElementById('time-10am').value
    localData.setItem('am10', input10am)
    var input11am = document.getElementById('time-11am').value
    localData.setItem('am11', input11am)
    var input12pm = document.getElementById('time-12pm').value
    localData.setItem('apm12', input12pm)
    var input1pm = document.getElementById('time-1pm').value
    localData.setItem('pm1', input1pm)
    var input2pm = document.getElementById('time-2pm').value
    localData.setItem('pm2', input2pm)
    var input3pm = document.getElementById('time-3pm').value
    localData.setItem('pm3', input3pm)
    var input4pm = document.getElementById('time-4pm').value
    localData.setItem('pm4', input4pm)
    var input5pm = document.getElementById('time-5pm').value
    localData.setItem('pm5', input5pm)
    var storedUserInputs = {}
    storedUserInputs.hours = localData
    retrieveLocalStorage()
    
}
function retrieveLocalStorage () {
    document.getElementById('time-9am').innerText = localData.getItem('am9')
    document.getElementById('time-10am').innerText = localData.getItem('am10')
    document.getElementById('time-11am').innerText = localData.getItem('am11')
    document.getElementById('time-12pm').innerText = localData.getItem('pm12')
    document.getElementById('time-1pm').innerText = localData.getItem('pm1')
    document.getElementById('time-2pm').innerText = localData.getItem('pm2')
    document.getElementById('time-3pm').innerText = localData.getItem('pm3')
    document.getElementById('time-4pm').innerText = localData.getItem('pm4')
    document.getElementById('time-5pm').innerText = localData.getItem('pm5')
    
    
    
    

    
}
updateClock()
updatePlanner()
