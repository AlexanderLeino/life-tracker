var clock = $('#clock')

function updateClock(){
    var now = moment().format("dddd, MMM, Do")
    clock.text(now)
    console.log(now)}

setInterval(updateClock, 1000)
updateClock()