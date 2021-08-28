// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
                let row = tbody.append("tr");

                Object.keys(filters).forEach((key) => {
                    let userInput = d3.select("#" + key).property("value");
                    if (userInput) {
                        updateFilters = updateFilters.filter(row => row[key] === userInput)
                    };
                });
            }

            function handleClick() {
                d3.selectAll("#filter-btn").on("click", handleClick);
                let date = d3.select("#datetime").property("value");

                let filteredData = tableData;

                if (date) {
                    filteredData = filteredData.filter(row => row.datetime === date);
                };
                buildTable(filteredData);

            };

            d3.selectAll("#filter-btn").on("click", handleClick);

            buildTable(tableData);