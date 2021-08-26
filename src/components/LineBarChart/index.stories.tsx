import { Story } from "@storybook/react";
import React from "react";
import { LineBarChart, ChartProps, SeriesItem } from ".";
import { CHART_LEGEND, xAxisLabelStyle } from "../utils";

export default {
	title: "Charts/LineBarChart",
	component: LineBarChart,
};

const Template: Story<ChartProps> = (args) => <LineBarChart {...args} />;

const dataset: SeriesItem[] = [
	{
		color: "green",
		areaColor: ["rgba(30, 190, 27, 1)", "rgba(30, 190, 27, 0)"],
		name: "Left Hand",
		values: [
			{ value: ["Tue", 35] },
			{ value: ["Wed", 55] },
			{ value: ["Thu", 80] },
			{ value: ["Sat", 20] },
			{ value: ["Sun", 90] },
		],
		type: "line",
	},
	{
		color: "rgba(70, 150, 236, 1)",
		areaColor: ["rgba(70, 150, 236, 1)", "rgba(70, 150, 236, 0)"],
		name: "Right Hand",
		values: [
			{ value: ["Wed", 35] },
			{ value: ["Thu", 55] },
			{ value: ["Fri", 80] },
			{ value: ["Sat", 40] },
			{ value: ["Sun", 60] },
		],
		type: "line",
	},
];

const seriesProps = {
	lineStyle: {
		width: 2,
	},
	backgroundStyle: {
		color: "rgba(62, 63, 67, 0.8)",
	},
};

const CHART_TITLE = {
	fontFamily: "Spartan",
	fontWeight: "bold",
	fontSize: "14px",
	lineHeight: 24,
};

export const Primary = Template.bind({});
Primary.args = {
	titleText: "Week Days",
	titleTextStyle: CHART_TITLE,
	legendTextStyle: CHART_LEGEND,
	xAxisLabelStyle: xAxisLabelStyle,
	xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	tooltipFormatter: (v) => `${v}%`,
	data: dataset,
	titleProps: { padding: [0, 0, 0, 0] },
	yAxisFormatter: (v) => `${v}%`,
	seriesProps: seriesProps,
	showBoxBG: true,
};

export const Stacked = Template.bind({});
Stacked.args = {
	titleText: "Week Days",
	titleTextStyle: CHART_TITLE,
	legendTextStyle: CHART_LEGEND,
	xAxisLabelStyle: xAxisLabelStyle,
	xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	isStacked: true,
	data: dataset,
};
