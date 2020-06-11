# Data Journalism and D3

This is a web application that displays a scatter plot to analyze the health risks facing particular demographics using information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System. The following outlines the steps.

## Step 1

Create a scatter plot between two of the data variables that represents each state with circle elements. 
* `app.js` file is used to pull in the data from `data.csv` by using the `d3.csv` function.
* Include state abbreviations in the circles.
* Create and situate axes and labels to the left and bottom of the chart.

- - -

## Step 2

Include more demographics and more risk factors. Place additional labels in the scatter plot and give them click events so that your users can decide which data to display. Animate the transitions for your circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

### Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged)—we've already included this plugin in your assignment directory.
