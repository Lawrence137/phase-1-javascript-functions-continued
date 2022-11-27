// code your solution here
function saturdayFun(task = 'roller-skate'){
    return `This Saturday, I want to ${task}!`
}

function mondayWork(job = 'go to the office'){
    return `This Monday, I will ${job}.`
}

function wrapAdjective(adj){
    return function(val = "special"){
        return `You are ${adj}${val}${adj}!`
    }
}

