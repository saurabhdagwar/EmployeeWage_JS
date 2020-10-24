const wagePerHr = 20;
const hrsInDay = 8;
var empCheck = Math.floor(Math.random() * 2);
if(empCheck == 1){
    console.log("Employee is Present ");
} 
else{
    console.log("Employee is Absent ");
}
var dailyWage = wagePerHr * hrsInDay * empCheck;
console.log("Daily Employee Wage : " + dailyWage);