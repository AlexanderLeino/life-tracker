var clock = $('#clock')
var currentTime
var currentDay
var time9am = moment().hour(9).minute(0).second(0)
var time10am = moment().hour(10).minute(0).second(0)
var time11am = moment().hour(11).minute(0).second(0)
var time12pm = moment().hour(12).minute(0).second(0)
var time1pm = moment().hour(13).minute(0).second(0)
var time1pm = moment().hour(14).minute(0).second(0)
var time2pm = moment().hour(15).minute(0).second(0)
var time3pm = moment().hour(16).minute(0).second(0)
var time4pm = moment().hour(17).minute(0).second(0)
var time5pm = moment().hour(18).minute(0).second(0)

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
    }

setInterval(updateClock, 1000)

updateClock()
updatePlanner()