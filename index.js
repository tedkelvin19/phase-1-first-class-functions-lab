// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}    
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler){
    return function(fareMultiplier){
       return fareMultiplier*fareQuintupler
    }   
}

function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2
}

function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}
function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}