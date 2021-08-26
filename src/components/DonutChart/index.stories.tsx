import { Story } from "@storybook/react";
import React from "react";
import { DonutChart, ChartProps } from ".";

export default {
	title: "Charts/DonutChart",
	component: DonutChart,
};

const Template: Story<ChartProps> = (args) => <DonutChart {...args} />;

const dataset = [
	{ name: "Sunday", value: 34, color: "blue" },
	{ name: "Monday", value: 44, color: "rgb(223, 76, 78)" },
];

const CHART_TITLE = {
	fontFamily: "Spartan",
	fontWeight: "bold",
	fontSize: "14px",
	lineHeight: 24,
};

const titleProps = {
	backgroundColor: "rgba(0, 0, 0, 0.3)",
	fontSize: "14px",
	fontWeight: "bold",
	padding: [35, 25],
};

const tooltipTextStyle = {
	fontFamily: "Oswald",
	color: "grey",
};

const seriesNormalItemLabelProps = {
	fontSize: "12",
	fontWeight: "bold",
	position: "inner",
};

const seriesNormalItemLabelFormatter = (d) => {
	return d.value + "%";
};

const seriesItemStyleEmphasisLabel = {
	show: true,
	fontSize: "12",
	fontWeight: "bold",
};

export const Primary = Template.bind({});
Primary.args = {
	titleText: "1st\n Place",
	titleTextStyle: CHART_TITLE,
	titleBorderRadius: 90,
	titleProps: titleProps,
	tooltipTextStyle: tooltipTextStyle,
	seriesNormalItemLabelProps: seriesNormalItemLabelProps,
	seriesNormalItemLabelFormatter: seriesNormalItemLabelFormatter,
	seriesItemStyleEmphasisLabel: seriesItemStyleEmphasisLabel,
	data: dataset,
};
