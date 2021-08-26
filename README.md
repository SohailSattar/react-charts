# Sports Analytics Charts

Available Charts

In the project directory, you can get following charts:

1. Line Bar Chart
2. Pie Chart
3. Donut Chart
4. Radar Chart

All the chart components will have following common properties:
Property Name | Datatype | Optional | Default Value | Description
:-- | :--:| :--------: | :-- | ------------
showTitle     | _boolean_  | Yes      | ```true```          | Set this to ```false``` to prevent the title from showing.
titleText     | _string_   | Yes      |    Empty string           | The main title text, supporting for ```\n``` for newlines.
titleLeft     | _string_ <br/>or<br/> _number_  | Yes      | ```'auto'```<br/><br/>```'center'``` for Donut chart       | Distance between title component and the left side of the container.<br/><br/> ```titleLeft``` value can be instant pixel value like ```20```; it can also be a percentage value relative to container width like ```'20%'```; and it can also be ```'left'```, ```'center'```, or ```'right'```.<br/><br/>If the ```titleLeft``` value is set to be ```'left'```, ```'center'```, or ```'right'```, then the component will be aligned automatically based on position.
titleTop      | _string_ <br/>or<br/> _number_  | Yes      | ```'auto'```<br/><br/>```'middle'``` for Donut chart               | Distance between title component and the top side of the container.<br/><br/>```titleTop``` value can be instant pixel value like ```20```; it can also be a percentage value relative to container width like ```'20%'```; and it can also be ```'top'```, ```'middle'```, or ```'bottom'```.<br/><br/>If the ```titleLeft``` value is set to be ```'top'```, ```'middle'```, or ```'bottom'```, then the component will be aligned automatically based on position.
titleRight    | _string_ <br/>or<br/> _number_  | Yes      |    ```'auto'```    | Distance between title component and the right side of the container.<br/><br/>```titleRight``` value can be instant pixel value like ```20```; it can also be a percentage value relative to container width like ```'20%'```.<br/><br/>Adaptive by default.
titleBottom   | _string_ <br/>or<br/> _number_   | Yes      |   ```'auto'```            | Distance between title component and the bottom side of the container.<br/><br/>```titleBottom``` value can be instant pixel value like ```20```; it can also be a percentage value relative to container width like ```'20%'```.<br/><br/>Adaptive by default.
titleTextStyle | _object_   | Yes      |               | To define the title text style.<br/><br/>titleTextStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
titleProps     | _object_   | Yes      |               | To define all other miscellaneous title related properties.<br/><br/>Following could be passed as properties in the titleProps object:<br/><br/>```padding```  title space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.<br/><br/>```itemGap``` The gap between the main title and subtitle.<br/><br/>```backgroundColor``` Background color of title, which is transparent by default.<br/><br/>```borderColor``` Border color of title. Support the same color format as backgroundColor.<br/><br/>```borderWidth``` Border width of title.<br/><br/>```borderRadius``` The radius of rounded corner. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses.
showLegend     | _boolean_    | Yes      |  ```true```         | Set this to ```false``` to hide the legend.<br/><br/>__Not available in Donut chart__
legendType     | _string_    | Yes      |  ```'plain'```         | Type of legend. Options values could be ```'plain```, or ```'scroll'```.
legendTextStyle | _object_   | Yes      |               | To define the legend text style.<br/><br/>legendTextStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre><br/>__Not available in Donut chart__
legendIcon     | string    | Yes      |  ```'circle'```         | Icon of the legend items.<br /><br />```legendIcon``` can be: ```'circle'```, ```'rect'```, ```'roundRect'```, ```'triangle'```, ```'diamond'```, ```'pin'```, ```'arrow'```, ```'none'```.<br/><br/>__Not available in Donut chart__
legendProps     | _object_   | Yes      |               | To define all other miscellaneous legend related properties. Following are few of the properties:<br/><br/>```bottom``` Distance between legend component and the bottom side of the container.<br/><br/>```itemWidth``` Image width of legend symbol.<br/><br/>```itemHeight``` Image height of legend symbol.<br/><br/>```itemGap``` The distance between each legend, horizontal distance in horizontal layout, and vertical distance in vertical layout.<br/><br/>```padding``` legend space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.<br/><br/>__Not available in Donut chart__
gridProps     | _object_   | Yes      |               | To define all other miscellaneous grid related properties. Following can be the possible properties:<br/><br/>```show``` Whether to show the grid in rectangular coordinate.<br/><br/>```left``` Distance between grid component and the left side of the container.<br/><br/>```top``` Distance between grid component and the top side of the container.<br/><br/>```right``` Distance between grid component and the right side of the container.<br/><br/>```bottom``` Distance between grid component and the bottom side of the container.<br/><br/>```width``` Width of grid component. Adaptive by default.<br/><br/>```height``` Height of grid component. Adaptive by default.
showTooltip     | _boolean_    | Yes      |  ```true```         | Set this to ```false``` to hide the tooltip.
tooltipTrigger     | _string_  | Yes      | ```'axis'``` for Line Bar Chart<br/><br/> ```'item'``` for Donut Chart          | Type of triggering.<br/><br/>Options could be:<br/><br/>**```'item'```** Triggered by data item, which is mainly used for charts that don't have a category axis like scatter charts or pie charts.<br/><br/>**```'axis'```** Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.
tooltipTextStyle | _object_   | Yes      |               | To define the legend text style.<br/><br/>tooltipTextStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
tooltipProps     | _object_   | Yes      |               | To define all other miscellaneous tooltip related properties. Following can be the possible properties:<br/><br/>```padding```  The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.<br/><br/>```backgroundColor``` The background color of tooltip's floating layer.<br/><br/>```borderColor``` The border color of tooltip's floating layer.<br/><br/>```borderWidth``` The border width of tooltip's floating layer.
seriesProps | _object_   | Yes      |               | To define all other miscellaneous series related properties.<br/><br/>```backgroundStyle```<br/><br/>```lineStyle```
style | _object_ | Yes | | Styling for the chart. e.g. <br/><br/><pre>{<br/>  boxSizing: 'border-box',<br/>  width: '100%',<br/>  height: '100%',<br/>}</pre>
className | _string_ | Yes | | CSS class for the chart.

For component specific properties, scroll to the respective component.

## Line Bar Chart

**Line Bar Chart**: is the combination of two charts i.e. Line and Bar chart (Stacked/Unstacked). The chart type can be set accordingly by passing the type within the dataset provided.

To use:
```javascript
import { LineBarChart } from "sports-platform-chart-sdk";
```

### Syntax
```javascript
<LineBarChart data={series} />
```
Here _data_ is a mandatory property which expects an array of SeriesItem objects.

### SeriesItem:
SeriesItem consists of following properties.

Property Name | Datatype | Optional 
:-- | ---------| -------- 
values | <pre>Array<{<br/>  value: \| number \| [string, number] \| [number, string] \| [string, number, number];<br/>  color?: string \| [string, string];<br/>}></pre> | No
color | string \| [string, string] | Yes
areaColor | string \| [string, string] | Yes
name | string | Yes
type | "line" or "bar" | Yes
radius | number | Yes
barWidth | number | Yes

### Example
Following will be the generic properties for both line and bar (stacked/unstacked) charts
```javascript
//title text style
const CHART_TITLE = {
	color: "#000",
	fontFamily: "Spartan",
	fontWeight: "bold",
	fontSize: "14px",
	lineHeight: 24,
};
	
//Properties for title property
const titleProps = { padding: [15, 15, 15, 15] };

//Legend text style
const CHART_LEGEND = {
	color: "#000",
	fontFamily: "Spartan",
	fontSize: 12,
};

//Properties for legend property
const legendProps = {
	bottom: 0,
	itemWidth: 13,
	itemHeight: 13,
	itemGap: 10,
	icon: "circle",
	padding: 10,
	type: "scroll",
};

//Properties for grid property
const gridProps = {
	left: 80,
	top: 80,
	right: 50,
	bottom: 100,
};
```
In order to define the chart type, we have to pass the chart type in the SeriesItem object. If no type is passed, then the bar chart will be displayed. Below data set will display line chart (Notice the type being set as "line" in both objects

```javascript
const dataset: SeriesItem[] = [
	{
		color: "#69c2f1",
		name: "Average Prize Money Per Month",
		values: [
			{ value: ["Wed", 15] },
			{ value: ["Thu", 75] },
			{ value: ["Fri", 40] },
			{ value: ["Sat", 50] },
			{ value: ["Sun", 60] },
		],
		type: "line",
	},
	{
		color: "#E1BC74",
		name: "Average Prize Money Gain",
		values: [
			{ value: ["Wed", 35] },
			{ value: ["Thu", 55] },
			{ value: ["Fri", 70] },
			{ value: ["Sat", 40] },
			{ value: ["Sun", 90] },
		],
		type: "line",
	},
];
  
```
To convert the above dataset to bar, simply set the type to bar i.e.
```javascript
{
.
  type: "bar",
.
}
```
If the type is set as ```bar```, the chart can also be converted to stacked chart by simply passing in the ```true``` value to ```isStacked``` property i.e.
```javascript
<LineBarChart isStacked={true} .... />
```
We created the properties above, but didnt use them yet. To use them, we can simply pass them to our LineBarChart component
```javascript
<LineBarChart
	titleText="Distribution"
	titleTextStyle={CHART_TITLE}
	titleProps={titleProps}
	showLegend={true}
	legendTextStyle={CHART_LEGEND}
	legendProps={legendProps}
	gridProps={gridProps}
	data={dataset}
	style={{
		boxSizing: "border-box",
		width: "800px",
		height: "500px",
	}}/>
```

### Output
Line chart
![image](https://user-images.githubusercontent.com/40142350/115671186-4d599500-a35b-11eb-9ca1-c599e795cb4c.png)

Bar Chart (Unstacked)
![image](https://user-images.githubusercontent.com/40142350/115670779-da501e80-a35a-11eb-9d88-78de16112b08.png)

Unstacked Bar Chart (with Shadow)
![image](https://user-images.githubusercontent.com/40142350/115671072-2c913f80-a35b-11eb-9a2b-435d0d4bbe3b.png)

Bar Chart (Stacked)
![image](https://user-images.githubusercontent.com/40142350/115670856-ecca5800-a35a-11eb-9f74-d60523c77184.png)

Stacked Bar Chart (with Shadow)
![image](https://user-images.githubusercontent.com/40142350/115671028-1edbba00-a35b-11eb-8444-f27cdcaa4f66.png)

### Properties
Apart from data property, LineBarChart contains properties as following:

Property Name | Datatype | Optional | Default Value | Description
:-- | :--:| :--------: | :-- | ------------
tooltipConfine     | _boolean_   | Yes      | ```true```              | Whether confine tooltip content in the view rect of chart instance.<br /><br/>Useful when tooltip is cut because of 'overflow: hidden' set on outer dom of chart instance, or because of narrow screen on mobile.
tooltipAxisPointerType     | _string_  | Yes      | ```'line'```          | Indicator type.<br/><br/>Options:<br/> ```'line'```: line indicator.<br/><br/>```'shadow'```: shadow crosshair indicator.<br/><br/>```'none'```: no indicator displayed.<br/><br/>```'cross'``` crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.
xAxis     | _string array_   | Yes      |               | Category data.
xAxisType     | _string_   | Yes      |    ```'category'```           | Type of axis.<br/><br/>Options:<br/>```'value'``` Numerical axis, suitable for continuous data.<br/><br/>```'category'``` Category axis, suitable for discrete category data.
xAxisShow     | _boolean_   | Yes      |  ```true```             | Set this to ```false``` to hide the xAxis.
xAxisPosition     | _string_   | Yes      |  ```'bottom'```             | The position of x axis.<br/><br/>Options:<br/>```'top'``` <br/><br/>```'bottom'```<br/><br/>The first x axis in grid defaults to be on the bottom of the grid, and the second x axis is on the other side against the first x axis.
xAxisFormatter     | function   | Yes      |               | Formatter of axis label, which supports string template and callback function. Following are the examples of the formatter:<br/>**Use string template; template variable is the default label of axis {value}**<pre> formatter: '{value} %'</pre>**Use callback.**<pre>formatter: function (value, index)<br/>{<br/>return value + '%';<br/>}</pre>
xAxisLabelStyle | _object_   | Yes      |               | To define the xAxis label style.<br/><br/>xAxisLabelStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  padding: 5,<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
xAxisProps     | _object_   | Yes      |               | To define all other miscellaneous xAxis related properties.<br/><br/>Properties can be:<br/><br/>```axisLabel```<br/><br/>```splitLine```<br/><br/>```data```
yAxis     | _string array_   | Yes      |               | Category data.
yAxisType     | _string_   | Yes      |    ```'value'```           | Type of axis.<br/><br/>Options:<br/>```'value'``` Numerical axis, suitable for continuous data.<br/><br/>```'category'``` Category axis, suitable for discrete category data.
yAxisShow     | _boolean_   | Yes      |  ```true```             | Set this to ```false``` to hide the yAxis.
yAxisPosition     | _string_   | Yes      |  ```'left'```             | The position of y axis.<br/><br/>Options:<br/>```'left'```<br/><br/>```'right'```<br/><br/>The first y axis in grid defaults to be the left ('left') of the grid, and the second y axis is on the other side against the first y axis.
yAxisFormatter     | function   | Yes      |               | Formatter of axis label, which supports string template and callback function. Following are the examples of the formatter:<br/>**Use string template; template variable is the default label of axis {value}**<pre> formatter: '{value} %'</pre>**Use callback.**<pre>formatter: function (value, index)<br/>{<br/>return value + '%';<br/>}</pre>
yAxisLabelStyle | _object_   | Yes      |               | To define the xAxis label style.<br/><br/>yAxisLabelStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  padding: 5,<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
yAxisProps     | _object_   | Yes      |               | To define all other miscellaneous yAxis related properties.<br/><br/>Properties can be:<br/><br/>```axisLabel```<br/><br/>```splitLine```<br/><br/>```data```
showBoxBG | _boolean_ | Yes | ```false``` | Set this to ```true``` to show the bar background.
isStacked | _boolean_ | Yes | ```false``` | Set this to ```true``` to show the stacked bar chart.<br/><br/>_Works only with bar chart_.
data | _SeriesItem array_   | No      |               | Dataset on which the bar/line chart will be plotted.
orientation | _string_ | Yes | ```'vertical'``` | Graph orientation. It has two options i.e. ```'horizontal'``` and ```'vertical'```


## Pie Chart

To use:
```javascript
import { PieChart } from "sports-platform-chart-sdk";
```

### Syntax
```javascript
<PieChart data={series} />
```

### SeriesItem:
Property Name | Datatype | Optional 
:-- | ---------| -------- 
values | number | No
color | string  | No
name | string | No

### Example
Dataset of SeriesItem type
```javascript
const dataset: SeriesItem[] = [
	{ value: 25, name: "a", color: "#06A899" },
	{ value: 50, name: "b", color: "rgba(0, 152, 217, 0.8)" },
	{ value: 13, name: "c", color: "#E1BC74" },
	{ value: 12, name: "d", color: "rgba(107, 151, 236, 0.8)" },
];
```

Properties used for styling and formatting
```javascript
const titleProps = {
	padding: 15,
};

const legendProps = {
	bottom: 0,
	padding: 10,
	itemWidth: 13,
	itemHeight: 13,
	itemGap: 10,
};

const tooltipFormatter = (item: any) => {
	const valueLabel = item.name || "";
	const value = item.value;
	const percent = item.percent;
	return [
		`<b>${valueLabel}</b>`,
		`${item.marker} ${value} (${percent}%)`,
	].join("<br>");
};

```

We can also pass in the events like click or mouseover etc to the component.

```javascript
//events
const clickHander = (a: any) => {
  //clicking event code.
};

const events = {
	click: clickHander,
};
```

Passing them to the properties

```javascript
<PieChart
	titleText={"AVG Power By Day"}
	titleTextStyle={CHART_TITLE}
	titleProps={titleProps}
	legendTextStyle={CHART_LEGEND}
	legendProps={legendProps}
	data={dataset}
	tooltipFormatter={tooltipFormatter}
	events={events}
	style={{
		width: "600px",
		height: "300px",
		float: "left",
	}}/>
```

### Output
![image](https://user-images.githubusercontent.com/40142350/115687249-0b384f80-a36b-11eb-9fdb-d6a5aa347f95.png)

### Properties
PieChart consists of these properties.

Property Name | Datatype | Optional | Default Value | Description
:-- | :--:| -------- | :-- | ------------
showSeriesDataLabel | _boolean_ | Yes    |  ```true```      | Set this to ```false``` to hide the series data's label.
data | _SeriesItem array_ | No | | Dataset on which the Pie chart will be plotted.
seriesItemStyle | _object_   | Yes      |               | To define the legend text style.<br/><br/>legendTextStyle can have ```borderColor```, ```borderWidth``` etc.<br/><br/>tooltipTextStyle can have ```color```, ```fontStyle```, ```fontWeight``` etc.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
showSeriesDataLabelLine    | _boolean_    | Yes      |  ```true```         | Set this to ```false``` to hide the series data label line.
radius | _string_ | Yes | ```'55%'``` | Sets the radius of the Pie chart.
seriesDataLabelProps | _object_   | Yes      |               | To define all other miscellaneous series data label related properties.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
seriesDataLabelFormatter | function   | Yes      |               | Formatter of axis label, which supports string template and callback function. Following are the examples of the formatter:<br/>**Use string template; template variable is the default label of axis {value}**<pre> formatter: '{value} %'</pre>**Use callback.**<pre>formatter: function (value, index)<br/>{<br/>return value + '%';<br/>}</pre>
seriesItemStyleEmphasisProps | _object_   | Yes      |               | To define all other miscellaneous series item style emphasis related properties.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
notMergeProp | _boolean_ | Yes    |  ```true``` 
lazyUpdate | _boolean_ | Yes    |  ```true``` 
events | _object_ | Yes | | To pass the events. For Pie chart, following events can be used ```click```, ```'dblclick'```, ```'mousedown'```, ```'mousemove'```, ```'mouseup'```, ```mouseover```, ```'mouseout'```, ```'globalout'```, ```'contextmenu'``` e.g. ```{click: onClickHandler}```


## Donut Chart

To use:
```javascript
import { DonutChart } from "sports-platform-chart-sdk";
```

### Syntax
```javascript
<DonutChart data={series} />
```

### ChartSegment:
Property Name | Datatype | Optional 
:-- | ---------| -------- 
value | number | No
color | string \| [string, string] | No
name | string | Yes

### Example
Dataset of type ChartSegment
```javascript
const dataset: ChartSegment[] = [
	{ name: "Sunday", value: 34, color: "blue" },
	{ name: "Monday", value: 44, color: "rgb(223, 76, 78)" },
];
```

Properties used for styling and formatting
```javascript
const titleProps = {
	fontSize: "14px",
	fontWeight: "bold",
};

const titleTextStyle = {
	color: "black",
};

const seriesNormalItemLabelProps = {
	fontSize: "12",
	fontWeight: "bold",
	position: "inner",
};

const seriesNormalItemLabelFormatter = (d: any) => {
	return d.value + "%";
};

const emphasisLabelStyle = {
	show: true,
	fontSize: "12",
	fontWeight: "bold",
};

const tooltipTextStyle = {
	fontFamily: "Oswald",
};
```

Passing data, events and properties to the component.
```javascript
<DonutChart
	titleText={"Donut Chart"}
	titleTextStyle={titleTextStyle}
	titleProps={titleProps}
	tooltipeTextStyle={tooltipTextStyle}
	data={dataset}
	seriesNormalItemLabelProps={seriesNormalItemLabelProps}
	seriesNormalItemLabelFormatter={seriesNormalItemLabelFormatter}
	emphasisLabelStyle={emphasisLabelStyle}
	style={{
		boxSizing: "border-box",
		width: "800px",
		height: "600px",
		}}/>
```

### Output
![image](https://user-images.githubusercontent.com/40142350/115693752-45a4eb00-a371-11eb-8f51-acdbe321129b.png)

### Properties
DonutChart consists of these properties.

Property Name | Datatype | Optional | Default Value | Description
:-- | :--:| -------- | :-- | ------------
titleBorderRadius     | _number_ <br/>or<br/> _array of numbers_   | Yes      |    ```90```         |  The radius of rounded corner. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses.<br/><br/>For example:<br/>```titleBorderRadius={5}``` will consistently set the size of 4 rounded corners<br/>```titleBorderRadius={[5, 5, 0, 0]}``` (clockwise upper left, upper right, bottom right and bottom left).
showLabelLine     | _boolean_    | Yes      |  ```true```         | Set this to ```false``` to hide the label line.
radius | _[string, string]_ | Yes | ```["55%", "90%"]``` | Sets the radius of the Donut chart.
data | _ChartSegment array_ | No | | Dataset on which the Donut chart will be plotted.
showNormalItemStyleSeriesLabel | _boolean_ | Yes    |  ```true```      | Set this to ```false``` to hide the series label's normal label.
seriesNormalItemLabelProps | _object_   | Yes      |               | To define all other miscellaneous series label's normal label related properties.
seriesNormalItemLabelFormatter | _function_   | Yes      |               | Formatter of axis label, which supports string template and callback function. Following are the examples of the formatter:<br/>**Use string template; template variable is the default label of axis {value}**<pre> formatter: '{value} %'</pre>**Use callback.**<pre>formatter: function (value, index)<br/>{<br/>return value + '%';<br/>}</pre>
showSeriesItemStyleNormalLabelLine | _boolean_ | Yes    |  ```true```      | Set this to ```false``` to hide the series label's normal label line.
seriesItemStyleNormalProps | _object_ | Yes      |               | To define all other miscellaneous series label's normal label line related properties.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
seriesItemStyleEmphasisLabel | _object_   | Yes      |               | To define the series ItemStyle Emphasis Label.<br/><br/>seriesItemStyleEmphasisLabelStyle can have ```show``` which will take boolean i.e. ```true``` or ```false``` as value, ```fontSize```, and/or ```fontWeight``` etc.
seriesItemStyleEmphasisProps | _object_ | Yes      |               | To define all other miscellaneous series label Emphasis related properties.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>


## Radar Chart

To use:
```javascript
import { RadarChart } from "sports-platform-chart-sdk";
```

### Syntax
```javascript
<RadarChart categories={categories} data={series} />
```
data property is an array of ChartSeries
### ChartSerie:
Property Name | Datatype | Optional 
:-- | ---------| -------- 
name | string | No
color | string | Yes
values | _array of numbers_ | No

_categories_ property is an array of Category datatype
### Category:
Property Name | Datatype | Optional 
:-- | ---------| -------- 
name | string | Yes
max | string | Yes

### Example
Dataset of type ChartSerie
```javascript
const dataset: ChartSerie[] = [{
	color: "#d70a0a",
	name: "serie 1",
	values: [50, 75, 75, 75]
	},
	{
	name: "serie 2",
	values: [55, 25, 45, 65]
	}];
```

Categories
```javascript
const seriesCategories: Category[] = [
	{ name: "A", max: 100 },
	{ name: "B", max: 100 },
	{ name: "C", max: 100 },
	{ name: "D", max: 100 },
];
```

Properties used for styling and formatting
```javascript
const titleProps = {
	padding: 15,
};

const legendProps = {
	bottom: 0,
	itemWidth: 13,
	itemHeight: 13,
	itemGap: 10,
	icon: "circle",
	padding: 10,
	type: "scroll",
};

const radarNameFormatter = (v: any) => {
	const newValue = v;
	return newValue;
};
```

Passing data, categories and properties to the component.
```javascript
<RadarChart
	radarNameFormatter={radarNameFormatter}
	titleText={"Donut Chart"}
	titleTextStyle={CHART_TITLE}
	titleProps={titleProps}
	legendProps={legendProps}
	categories={seriesCategories}
	data={dataset}
	style={{
		boxSizing: "border-box",
		width: "800px",
		height: "500px",
	}}/>
```

### Output
![image](https://user-images.githubusercontent.com/40142350/116038081-054bb280-a67a-11eb-8596-bb8e46b0a8dd.png)

### Properties
Property Name | Datatype | Optional | Default Value | Description
:-- | :--:| -------- | :-- | ------------
radarShape | string | Yes | ```'polygon'``` | Radar render type, in which ```'polygon'``` and ```'circle'``` are supported.
radarNameProps  | _object_   | Yes      |               | To define all other miscellaneous radar name related properties.<br/><br/>For example: An object of styles:<br/><pre>{<br/>  fontFamily: "Spartan",<br/>  fontWeight: "bold",<br/>  fontSize: "14px",<br/>  lineHeight: 24,<br/>}</pre>
showRadarAxisLine | _boolean_    | Yes      |  ```false```         | Set this to ```true``` to show the radar axis line.
radarAxisLineProps | _object_   | Yes      |               | To define all other miscellaneous radar axis line related properties.<br/><br/>For example:<br/><br/>```symbol``` Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It's set to be 'none' by default, meaning no arrow for either end. If it is set to be 'arrow', there shall be two arrows. If there should only one arrow at the end, it should set to be ['none', 'arrow'].<br/><br/>```symbolSize``` Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.
radarSplitNumber | _number_ | Yes | ```5``` | Segments of _category_ axis.
showRadarSplitArea | _boolean_    | Yes      |  ```true```         | Split area of axis in grid area.
radarNameGap | _number_ | Yes | ```15``` | Distance between the indicator's name and axis.
radarNameFormatter | _function_   | Yes      |               | Formatter of axis label, which supports string template and callback function. Following are the examples of the formatter:<br/>**Use string template; template variable is the default label of axis {value}**<pre> formatter: '{value} %'</pre>**Use callback.**<pre>formatter: function (value, index)<br/>{<br/>return value + '%';<br/>}</pre>
radarCenterPosition | _array of string_<br/>or<br/>_array of number_ | Yes |  ```["50%", "50%"]``` | Center position of , the first of which is the horizontal position, and the second is the vertical position.<br/><br/>Percentage is supported. When set in percentage, the item is relative to the container width, and the second item to the height.
radarRadius | _number_<br/>or<br/>_string_<br/>or<br/>_array of number_<br/>or<br/>_array of string_ | Yes | ```100%``` | Radius of the radar.
radarProps  | _object_   | Yes      |               | To define all other miscellaneous radar related properties.
data | _ChartSerie array_ | No | | Dataset on which the Radar chart will be plotted.
categories | _Category array_ | No | | Indicator of radar chart, which is used to assign multiple variables(dimensions) in radar chart.
