// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
//console.log(saturdayFun())

function mondayWork(action = 'go to the office'){
    return `This Monday, I will ${action}.`
}
mondayWork("work from home");
//console.log(mondayWork("take a shit"))

function wrapAdjective(flair = "*"){
    return function(adjective){
        return `You are ${flair}${adjective}${flair}!`}
    }

    console.log(wrapAdjective("*")("the slayer"))

