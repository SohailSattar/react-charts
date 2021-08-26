import { Story } from "@storybook/react";
import React from "react";
import { RadarChart, ChartProps, Category } from ".";

export default {
	title: "Charts/RadarChart",
	component: RadarChart,
};

const seriesCategories: Category[] = [
	{ name: "A", max: 100 },
	{ name: "B", max: 100 },
	{ name: "C", max: 100 },
	{ name: "D", max: 100 },
];

const datasetNew = [
	{
		color: "rgba(45, 176, 217, 0.3)",
		name: "serie 1",
		values: [50, 75, 75, 75],
	},
	{
		color: "rgba(253, 107, 60, 0.3)",
		name: "serie 2",
		values: [55, 25, 45, 65],
	},
];

const legendProps = {
	bottom: 0,
	itemWidth: 13,
	itemHeight: 13,
	itemGap: 10,
	icon: "circle",
	padding: 10,
	type: "scroll",
};

const Template: Story<ChartProps> = (args) => <RadarChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: datasetNew,
	categories: seriesCategories,
	legendItemStyle: {
		fontSize: "12px",
		fontWeight: "500",
		fontFamily: "Spartan",
	},
	gridProps: { left: 80, top: 80, right: 50, bottom: 80 },
	legendProps: legendProps,
};
