//Constants
const WAGE_PER_HR = 20;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const MAX_MONTHLY_HRS = 100;
const TOTAL_MONTHLY_DAYS = 20;
//Variables
var hrsInDay;
var monthlyWage = 0;
var totalHrs = 0;
var day = 0;

function WageCalculator(){
    for(var day = 0; day < TOTAL_MONTHLY_DAYS; day++){
        var empCheck = Math.floor(Math.random() * 3);
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
        if(totalHrs <= 100 ){
            var dailyWage = WAGE_PER_HR * hrsInDay;
            monthlyWage = monthlyWage + dailyWage;
            console.log(` Day: ${day} | Daily Wage: ${ dailyWage } | Total Wage: ${monthlyWage} `);
            totalHrs = totalHrs + hrsInDay;
        }
    }

    console.log("Monthly Employee Wage : " + monthlyWage);
    console.log("Total Working Hrs: " +totalHrs);
}
WageCalculator();
