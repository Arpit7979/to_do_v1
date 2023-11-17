
exports.newDate = newDate;

function newDate (){
var today = new Date();
var options = {
 weekday:"long",
 day:"numeric",
 month:"long"
};
var day = today.toLocaleDateString("en-us",options);
return day;
};


exports.newDay = newDay;

function newDay (){
    var today = new Date();
    var options = {
     weekday:"long",
    };
    
    var day = today.toLocaleDateString("en-us",options);
    return day;
    
    };

    console.log(module.exports);