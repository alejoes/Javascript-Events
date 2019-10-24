
var date = d3.select("#datetime"); 
var button = d3.select("#filter-btn");
button.on("click",function(){
    document.getElementById("prba").innerHTML = "";
    var newDate = datetime.value;
    var cityx = city.value;
    var statex = state.value;
    var countryx = country.value;
    var shapex = shape.value;
    var tbody = d3.select("tbody");

    if (newDate != "" && cityx === "" && statex === "" && countryx === "" && shapex === "") {
        data.forEach(function(alienReport) {
            if (alienReport.datetime===newDate) {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    } else if (newDate === "" && cityx != "" && statex === "" && countryx === "" && shapex === "") {
        data.forEach(function(alienReport) {
            if (alienReport.city===cityx) {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    } else if (newDate === "" && cityx === "" && statex != "" && countryx === "" && shapex === "") {
        data.forEach(function(alienReport) {
            if (alienReport.state===statex) {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    } else if (newDate === "" && cityx === "" && statex === "" && countryx != "" && shapex === "") {
        data.forEach(function(alienReport) {
            if (alienReport.country===countryx) {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    } else if (newDate === "" && cityx === "" && statex === "" && countryx === "" && shapex != "") {
        data.forEach(function(alienReport) {
            if (alienReport.shape===shapex) {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    } else {
        data.forEach(function(alienReport) {
            if (alienReport.datetime===newDate && alienReport.city===cityx && statex === "" && countryx === "" && shapex === "") {
                var row = tbody.append("tr");
                Object.entries(alienReport).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
                });
            } 
        })
    }
})


