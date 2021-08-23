var clock = $('#clock')
var now
var time9am = moment().hour(9).minute(0).second(0)
var time10am = moment().hour(10).minute(0).second(0)
var time11am = moment().hour(11).minute(0).second(0)
var time12pm = moment().hour(12).minute(0).second(0)
var time1pm = moment().hour(13).minute(0).second(0)
var time2pm = moment().hour(14).minute(0).second(0)
var time3pm = moment().hour(15).minute(0).second(0)
var time4pm = moment().hour(16).minute(0).second(0)
var time5pm = moment().hour(17).minute(0).second(0)
console.log(`The current hour is 9am ${time9am.hour()}`)
console.log(`The current hour is 5pm ${time5pm.hour()}`)

function test () {
    if(time9am.hour() < time5pm.hour()) {
        console.log('The test worked')
    }
    else{
        console.log('The Test Failed')
    }
}
function checkTime () {
    if(now.hour() > time9am.hour()){
        
    }
}

function updateClock(){
    now = moment().format("dddd, MMM, Do")
    clock.text(now)
    console.log(now)}

setInterval(updateClock, 1000)
updateClock(
)
test()