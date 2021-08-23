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
    else if(currentTime = time9am.hour()){
        $('#time-9am').toggleClass('present')
    }
    else {
        $('time-9am').toggleClass('future')
    }

    if(currentTime > time10am.hour()){
        $('#time-10am').toggleClass('past')
    }
    else if(currentTime = time9am.hour()){
        $('#time-10am').toggleClass('present')
    }
    else {
        $('time-10am').toggleClass('future')
    }

    if(currentTime > time11am.hour()){
        $('#time-11am').toggleClass('past')
    }
    else if(currentTime = time11am.hour()){
        $('#time-11am').toggleClass('present')
    }
    else {
        $('time-11am').toggleClass('future')
    }

    if(currentTime > time12pm.hour()){
        $('#time-12pm').toggleClass('past')
    }
    else if(currentTime = time12pm.hour()){
        $('#time-12am').toggleClass('present')
    }
    else {
        $('time-12pm').toggleClass('future')
    }
    
    if(currentTime > time1pm.hour()){
        $('#time-1pm').toggleClass('past')
    }
    else if(currentTime = time1pm.hour()){
        $('#time-1pm').toggleClass('present')
    }
    else {
        $('time-1pm').toggleClass('future')
    }

    if(currentTime > time2pm.hour()){
        $('#time-2pm').toggleClass('past')
    }
    else if(currentTime = time1pm.hour()){
        $('#time-2pm').toggleClass('present')
    }
    else {
        $('time-2pm').toggleClass('future')
    }
    
    if(currentTime > time3pm.hour()){
        $('#time-3pm').toggleClass('past')
    }
    else if(currentTime = time1pm.hour()){
        $('#time-3pm').toggleClass('present')
    }
    else {
        $('time-3pm').toggleClass('future')
    }

    if(currentTime > time4pm.hour()){
        $('#time-4pm').toggleClass('past')
    }
    else if(currentTime = time4pm.hour()){
        $('#time-4pm').toggleClass('present')
    }
    else {
        $('time-4pm').toggleClass('future')
    }


    if(currentTime > time5pm.hour()){
        console.log('it works')
        $('#time-5pm').toggleClass('past')
    }
    else if(currentTime == time5pm.hour()){
        $('#time-5pm').toggleClass('present')
    }
    else {
        console.log('We should be logging this')
        $('#time-5pm').toggleClass('future')
    }
}
    
function updateClock(){
    currentDay = moment().format("dddd, MMM, Do")
    currentTime = moment().hour()
    clock.text(currentDay)
    }

setInterval(updateClock, 1000)

function retrieveList(){
    
}
updateClock()
updatePlanner()