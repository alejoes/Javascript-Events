
var date = d3.select("#datetime"); 
var button = d3.select("#filter-btn");
button.on("click",function(){
    document.getElementById("prba").innerHTML = "";
    var newDate = datetime.value;
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


