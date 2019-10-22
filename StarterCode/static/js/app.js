// // from data.js
// var tableData = data;

// // YOUR CODE HERE!



// inputDate.on("change", function() {
//     var inputDate = d3.event.target.value;
//     var tbody = d3.select("tbody");

//     data.forEach(function(alienReport) {
//         if (alienReport.date===inputDate) {
//             var row = tbody.append("tr");
//             Object.entries(alienReport).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//             });
        
//         };
//     });
// });
var date = d3.select("#datetime"); 
var button = d3.select("#filter-btn");
button.on("click",function(){
    document.getElementById("prba").innerHTML = "";
    
    date.on("change",function(){
        var newDate = d3.event.target.value;
        var tbody = d3.select("tbody");
        data.forEach(function(alienReport) {
            if (alienReport.datetime===newDate) {
                console.log(alienReport);
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    })

})


