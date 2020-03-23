// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// Keep track of all filters
var filters = []; //{};
//filters = [{ID: "#1", Element: "HI", Value: "HI"}];

function Debug3()
{
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;
  let singleFilter = {};
  // Check to see if a date was entered and filter the
  // data using that date.
  
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //Debug2();
  buildTable(filteredData);

}

function Debug5()
{
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  let myLinkAnchor = d3.select(".my-link>a");

  let filteredData = tableData;
  let singleFilter = {};
  //let obj = [{id: "datetime", value: date}];

  // Check to see if a date was entered and filter the
  // data using that date.
  
  if (d3.select("#datetime").property("value")) {
    //filters.push = {ID: 1, Element: d3.select("#datetime"), Value: d3.select("#datetime").property("value")};
    //filters.push = {ID: d3.select("#datetime"), IH: d3.select("#datetime").property("value")};
    singleFilter = {ID: "#datetime", Element: d3.select(this.ID), Value: d3.select("#datetime").property("value")};
    filters.push(singleFilter);
    //window.alert(singleFilter.ID);
    //window.alert(filters[0].Value);
    let filterue = filters.find(obj => obj.ID === "#datetime");
    window.alert(filterue.Value);
    //let filterue = filters.filter(function(e) {return e.ID == "#datetime"});
    //filteredData = filteredData.filter(row => row.datetime === filterValue.Value);
    //filteredData = filteredData.filter(row => row.datetime === date);
    filteredData = filteredData.filter(row => row.datetime === filterue.Value);
  }
  
  if (city) {
    
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //Debug2();
  buildTable(filteredData);

}

function Debug4()
{
  // Grab the datetime value from the filter
  
  
  let singleFilter = {};
  // Check to see if a date was entered and filter the
  // data using that date.
  
  
  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //Debug2();
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  Debug44(data, city, state, country, shape);
}

function Debug44(data, city, state, country, shape)
{
  let filteredData = tableData;
  
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
  buildTable(filteredData);
}

function Debug()
{
   // Grab the datetime value from the filter
   let date = d3.select("#datetime").property("value");
   let city = d3.select("#city").property("value");
   let state = d3.select("#state").property("value");
   let country = d3.select("#country").property("value");
   let shape = d3.select("#shape").property("value");
   let filteredData = tableData;
   let singleFilter = {};
   // Check to see if a date was entered and filter the
   // data using that date.
   
   if (date) {
     //filters.push({key: 'date', value: date});
     //filters.push({"date":date});
     // Apply `filter` to the table data to only keep the
     // rows where the `datetime` value matches the filter value
     filteredData = filteredData.filter(row => row.datetime === date);
   }
  //  if (date) {
  //   filters.push({"date": date});
  // }
  if (city) {
    filters.push({"city": city});
  }
  if (state) {
    filters.push({"state": state});
  }
  if (country) {
    filters.push({"country": state});
  }
  if (shape) {
    filters.push({"shape": state});
  }

   // Rebuild the table using the filtered data
   // @NOTE: If no date was entered, then filteredData will
   // just be the original tableData.
   //Debug2();
   buildTable(filteredData);
}

function Debug2() {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  
  // Loop through all of the filters and keep any data that
  // // matches the filter values
  //filters.forEach(function (item, key){
    let tmpValue;
    Object.keys(filters).forEach(function(key, val){
    if (key == "date")
    {
      tmpValue = val; //filters[key];
        filteredData = filteredData.filter(row => row.datetime === tmpValue);

    }
  });

  //let date = d3.select("#datetime").property("value");
  //filteredData = filteredData.filter(row => row.datetime === date);
  
  buildTable(filteredData);
  // for (var key in filters)
  // {
  //   //if (filters.hasOwnProperty("date"))
  //   if (key === "date")
  //   {
  //     filteredData = filteredData.filter(row => row.datetime === date);
  //   }
  //   if (key === "city")
  //   {
  //     filteredData = filteredData.filter(row => row.city === city);
  //   }
  //   if (key === "state")
  //   {
  //     filteredData = filteredData.filter(row => row.state === state);
  //   }
  //   if (key === "country")
  //   {
  //     filteredData = filteredData.filter(row => row.country === country);
  //   }
  //   if (key === "shape")
  //   {
  //     filteredData = filteredData.filter(row => row.shape === shape);
  //   }
  // }

  // // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// This function will replace your handleClick function
function updateFilters() {
  filters = []; // Empty it
  let filteredData = tableData;
  let date = d3.select("#datetime").property("value");
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Save the element, value, and id of the filter that was changed
  //let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filterNames = ["#datetime", "#city", "#state", "#country", "#shape"];
  let filterName;
  let tmpObject;
  

  for (filterName of filterNames)
  {
    if(d3.select(filterName).property("value"))
    {
        singleFilter = {ID: filterName, Element: d3.select(filterName), Value: d3.select(filterName).property("value")};
        filters.push(singleFilter);
    }
    
  }
  
  //let myLinkAnchor = d3.select(".my-link>a");
//###
  //let filteredData = tableData;
  //let singleFilter = {};
  //let obj = [{id: "datetime", value: date}];

  // Check to see if a date was entered and filter the
  // data using that date.
  // #######
  // if (d3.select("#datetime").property("value")) {
  //   //filters.push = {ID: 1, Element: d3.select("#datetime"), Value: d3.select("#datetime").property("value")};
  //   //filters.push = {ID: d3.select("#datetime"), IH: d3.select("#datetime").property("value")};
  //   singleFilter = {ID: "#datetime", Element: d3.select(this.ID), Value: d3.select("#datetime").property("value")};
  //   filters.push(singleFilter);
  //   //window.alert(singleFilter.ID);
  //   //window.alert(filters[0].Value);
  //   let filterue = filters.find(obj => obj.ID === "#datetime");
  //   window.alert(filterue.Value);
  //   //let filterue = filters.filter(function(e) {return e.ID == "#datetime"});
  //   //filteredData = filteredData.filter(row => row.datetime === filterValue.Value);
  //   //filteredData = filteredData.filter(row => row.datetime === date);
  //   filteredData = filteredData.filter(row => row.datetime === filterue.Value);
  //   #### 
  
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  // if (date) {
  //   // Apply `filter` to the table data to only keep the
  //   // rows where the `datetime` value matches the filter value
  //   filteredData = filteredData.filter(row => row.datetime === date);
  // }

  // if (date) {
  //   filters.push({"date": date});
  // }
  // if (city) {
  //   filters.push({"city": city});
  // }
  // if (state) {
  //   filters.push({"state": state});
  // }
  // if (country) {
  //   filters.push({"country": state});
  // }
  // if (shape) {
  //   filters.push({"shape": state});
  // }
  // if (date) {
  //   // Apply `filter` to the table data to only keep the
  //   // rows where the `datetime` value matches the filter value
  //   filteredData = filteredData.filter(row => row.datetime === date);
  // }
  

  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  for (var key in filters)
  {
    //if (filters.hasOwnProperty("date"))
    if (key === "date")
    {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (key === "city")
    {
      filteredData = filteredData.filter(row => row.city === city);
    }
    if (key === "state")
    {
      filteredData = filteredData.filter(row => row.state === state);
    }
    if (key === "country")
    {
      filteredData = filteredData.filter(row => row.country === country);
    }
    if (key === "shape")
    {
      filteredData = filteredData.filter(row => row.shape === shape);
    }
  }

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
//d3.selectAll("#filter-btn").on("click", handleClick);
//d3.selectAll("#filter-btn").on("click", updateFilters);
//d3.selectAll("input").on()
//d3.selectAll("#filter-btn").on("click", Debug5);
d3.selectAll("#filter-btn").on("click", Debug5);
// Build the table when the page loads
buildTable(tableData);



