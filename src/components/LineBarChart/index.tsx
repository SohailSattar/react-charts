import * as React from "react";
import { ReactEcharts } from "../LazyReactEcharts";
import { ChartColor, GradientDirection, toEChartsColor } from "../utils";
import {
	Orientation,
	AxisType,
	HorizontalPosition,
	VerticalPosition,
	Icon,
	TooltipTrigger,
	TooltipAxisPointerType,
} from "../types";

export interface SeriesItem {
	values: Array<{
		value:
			| number
			| [string, number]
			| [number, string]
			| [string, number, number];
		color?: ChartColor;
	}>;
	color?: ChartColor;
	areaColor?: ChartColor;
	name?: string;
	type?: "line" | "bar";
	stack?: boolean;
	radius?: number;
	barWidth?: number;
}

export interface ChartProps {
	//title
	showTitle?: boolean;
	titleText?: string;
	titleLeft?: string | number;
	titleTop?: string | number;
	titleRight?: string | number;
	titleBottom?: string | number;
	titleTextStyle?: {};
	titleProps?: {};
	//legend
	showLegend?: boolean;
	legendType?: "plain" | "scroll";
	legendTextStyle?: {};
	legendIcon?: Icon;
	legendProps?: {};
	//grid
	gridProps?: {};
	//tooltip
	showTooltip?: boolean;
	tooltipTrigger?: TooltipTrigger;
	tooltipConfine?: boolean;
	tooltipAxisPointerType: TooltipAxisPointerType;
	tooltipFormatter?: (value: number) => string;
	tooltipProps?: {};
	//xAxis
	xAxis?: string[];
	xAxisType?: AxisType;
	xAxisShow?: boolean;
	xAxisPosition?: VerticalPosition;
	xAxisFormatter?: (value: number) => string;
	xAxisLabelStyle?: {};
	xAxisProps?: {};
	//yAxis
	yAxis?: string[];
	yAxisType?: AxisType;
	yAxisShow?: boolean;
	yAxisPosition?: HorizontalPosition;
	useyAxisFormat?: boolean;
	yAxisFormatter?: (value: number) => string;
	yAxisLabelStyle?: {};
	yAxisProps?: {};
	//series
	showBoxBG?: boolean;
	data: Array<SeriesItem>;
	isStacked?: boolean;
	seriesProps?: {};
	//
	orientation?: Orientation;
	style?: {};
	className?: string;
}

export const LineBarChart: React.FC<ChartProps> = ({
	//title
	showTitle = true,
	titleText,
	titleLeft = "auto",
	titleTop = "auto",
	titleRight = "auto",
	titleBottom = "auto",
	titleTextStyle,
	titleProps,
	//legend
	showLegend = true,
	legendType = "plain",
	legendTextStyle,
	legendIcon = "circle",
	legendProps,
	//grid
	gridProps,
	//tooltip
	showTooltip = true,
	tooltipTrigger = "axis",
	tooltipConfine = true,
	tooltipAxisPointerType = "line",
	tooltipFormatter,
	tooltipProps,
	//xAxis
	xAxis,
	xAxisType = "category",
	xAxisShow = true,
	xAxisPosition = "bottom",
	xAxisFormatter,
	xAxisLabelStyle,
	xAxisProps,
	//yAxis
	yAxis,
	yAxisType = "value",
	yAxisShow = true,
	yAxisPosition = "left",
	yAxisFormatter,
	yAxisLabelStyle,
	yAxisProps,
	//series
	showBoxBG = false,
	isStacked = false,
	seriesProps,
	data,
	orientation = "vertical",
	//
	style,
	className,
}) => {
	const series = data.map((seriesItem) => ({
		type: Boolean(seriesItem.type) === true ? seriesItem.type : "bar",
		name: seriesItem.name,
		itemStyle: {
			color: seriesItem.color,
		},
		showBackground: showBoxBG,
		barMaxWidth: seriesItem.barWidth ?? "100%",
		...seriesProps,
		stack: isStacked,
		data: seriesItem.values?.map((value) => ({
			itemStyle: {
				color:
					value.color &&
					toEChartsColor(value.color, GradientDirection.BottomToTop),
				borderRadius: seriesItem.radius && seriesItem.radius,
			},
			value: value.value,
		})),
	}));

	if (series.length === 1) {
		series[0].type = "bar";
	}

	const option = {
		title: {
			show: showTitle,
			text: titleText,
			textStyle: titleTextStyle,
			left: titleLeft,
			top: titleTop,
			right: titleRight,
			bottom: titleBottom,
			...titleProps,
		},
		legend: {
			show: showLegend,
			type: legendType,
			textStyle: legendTextStyle,
			icon: legendIcon,
			...legendProps,
		},

		grid: {
			...gridProps,
		},
		tooltip: {
			show: showTooltip,
			trigger: tooltipTrigger,
			confine: tooltipConfine,
			axisPointer: {
				type: tooltipAxisPointerType,
			},
			formatter: (series: any) => {
				const valueLabel = series[0].axisValueLabel || "";
				return [
					`<b>${valueLabel}</b>`,
					...series
						.map((s: any) => ({
							marker: s.marker,
							name: s.seriesName,
							value: s.data.value[orientation === "vertical" ? 1 : 0],
							numeralValue: s.data.value[s.data.value.length - 1],
						}))
						.map(
							(v: any) =>
								`${v.marker} ${v.name} <b>${
									tooltipFormatter ? tooltipFormatter(v.value) : v.value
								}</b>${v.numeralValue !== v.value ? `(${v.numeralValue})` : ""}`
						),
				].join("<br>");
			},
			...tooltipProps,
		},
		xAxis: {
			show: xAxisShow,
			type: xAxisType,
			data: xAxis,
			position: xAxisPosition,
			axisLabel: {
				...xAxisLabelStyle,
				formatter: (v: any) => (xAxisFormatter ? xAxisFormatter(v) : `${v}`),
			},
			...xAxisProps,
		},
		yAxis: {
			show: yAxisShow,
			type: yAxisType,
			data: yAxis,
			position: yAxisPosition,
			axisLabel: {
				...yAxisLabelStyle,
				formatter: (v: any) => (yAxisFormatter ? yAxisFormatter(v) : `${v}`),
			},
			...yAxisProps,
		},
		series: series,
	};

	return (
		<ReactEcharts
			option={option}
			notMerge={true}
			className={className}
			style={style}
			lazyUpdate={true}
		/>
	);
};

export default LineBarChart;
