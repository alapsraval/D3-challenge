# Data Journalism and D3 

This is a web application that displays a scatter plot to analyze the health risks facing particular demographics using information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System. 

https://alapsraval.github.io/D3-data-journalism/

The following outlines the steps.

## Step 1 - Scatter plot

A scatter plot between two of the data variables that represents each state with circle elements. 
* `app.js` file is used to pull in the data from `data.csv` by using the `d3.csv` function.
* State abbreviations are included in the circles.
* Axes and labels are displayed to the left and bottom of the chart.

- - -

## Step 2 - Scatter plot with additional information and tooltips

More demographics and risk factors are included, with additional labels in the scatter plot and transitions for circles' locations as well as the range of axes.

Tooltips are implemented using D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. 
>`d3-tip.js` plugin used in this project is developed by [Justin Palmer](https://github.com/Caged)
