
const returnFirstTwoDrivers= function lol(arg){
    arg=['Antonia','Nuru','Amari','Mo']
return arg.slice(0,2);

}
const returnLastTwoDrivers=function (arg){
    arg=['Antonia','Nuru','Amari','Mo']
    return arg.slice(-2);
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=function(multiplyvalue){
    return function kiki(mym){
        return multiplyvalue * mym;
    }
    
}  
const fareDoubler=function doublefare(double){
    return double * 2;

}
const fareTripler=function tripplefare(triple){
    return triple * 3;
}
const selectDifferentDrivers= function (arg,cok){
    return cok(arg);
}