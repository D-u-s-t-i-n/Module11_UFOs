# Module11 UFOs

# Challenge Notes
The challenge expands the single filter javascript to multi (5) filters. 

The project flow is as follows:
- Initialize
  - The table with the data (from data.js)
  - Event listener button click to call updateFilter
  - filters object to blank
- **updateFilter** function executes when button is clicked
  - Clear the filters object to blank to prevent previous button click filter from interfering
  - Loops through the textfields. If the field is blank, do not add to the filters
  - If field as value, add the fieldname and value to filters object
  - After all fields are checked, **filterTable** function is called
- **filterTable** function
  - FilteredData equals whole data set
  - Loops through the filter objects
  - Applies filter if the key matches with the element/column to filter
  - After all filters are checked, **buildTable** function is called
- **buildTable** function
  - Accepts filteredData as input and re-populates the table

Through this challenge, the following lessons were learned:
- Difference between objects and arrays
- Apply foreach in objects
- For loops can use continue to skip to next iteration, but foreach cannot

Room for (possible) improvement
- I'm not sure if d3 filters can be stored in object to eliminate the five filter if statements.
