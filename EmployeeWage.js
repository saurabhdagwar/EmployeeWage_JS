const WAGE_PER_HR = 20;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const TOTAL_MONTHLY_DAYS = 20;
var hrsInDay;
var monthlyWage = 0;
var empCheck = Math.floor(Math.random() * 3);
for(var day = 0; day < TOTAL_MONTHLY_DAYS; day++ ){
    switch(empCheck){
        case IS_FULL_TIME: 
            hrsInDay = 8;
            break;
        case IS_PART_TIME:
            hrsInDay = 4;
            break;
        default:
            hrsInDay = 0;
            break;
    }
var dailyWage = WAGE_PER_HR * hrsInDay;
monthlyWage = monthlyWage + dailyWage;
}
console.log("Monthly Employee Wage : " + monthlyWage);