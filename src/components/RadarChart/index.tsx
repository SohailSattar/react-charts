import React, { FC } from "react";
import { ReactEcharts } from "../LazyReactEcharts";
import { Icon } from "../types";

type ChartSerie = {
	name: string;
	color?: string;
	values: number[];
};

export interface ChartProps {
	//radar
	radarShape?: "circle" | "polygon";
	radarNameProps?: {};
	showRadarAxisLine?: boolean;
	radarAxisLineProps?: {};
	radarSplitNumber?: number;
	showRadarSplitArea?: boolean;
	radarNameGap?: number;
	radarNameFormatter?: (value: any) => string;
	radarCenterPosition?: Array<string | number>;
	radarRadius?: number | string | Array<number | string>;
	radarProps?: {};
	//
	showTitle?: boolean;
	titleText?: string;
	titleLeft?: string | number;
	titleTop?: string | number;
	titleRight?: string | number;
	titleBottom?: string | number;
	titleTextStyle?: {};
	titleProps?: {};
	//tooltip
	showTooltip?: boolean;
	tooltipFormatter?: (value: any) => string;
	//legend
	showLegend?: boolean;
	legendIcon?: Icon;
	legendTextStyle?: {};
	legendItemStyle?: {};
	legendProps?: {};
	//grid
	gridProps?: {};
	//series
	data: ChartSerie[];
	categories: Category[];
	seriesDataLineStyle?: {};
	seriesProps?: {};
	//
	className?: string;
	style?: {};
}

export type Category = {
	name?: string;
	max?: number;
};

export const RadarChart: FC<ChartProps> = ({
	//radar
	radarShape = "polygon",
	radarNameProps,
	showRadarAxisLine = false,
	radarAxisLineProps,
	radarSplitNumber = 5,
	showRadarSplitArea = true,
	radarNameGap = 15,
	radarNameFormatter,
	radarCenterPosition = ["50%", "50%"],
	radarRadius = "100%",
	radarProps,
	//title
	showTitle = true,
	titleText,
	titleLeft = "auto",
	titleTop = "auto",
	titleRight = "auto",
	titleBottom = "auto",
	titleTextStyle,
	titleProps,
	//tooltip
	showTooltip = true,
	tooltipFormatter,
	//legend
	showLegend = true,
	legendTextStyle,
	legendItemStyle,
	legendIcon = "circle",
	legendProps,
	//grid
	gridProps,
	//series
	data,
	categories,
	seriesDataLineStyle,
	seriesProps,
	className,
	style,
	//
}) => {
	const option = {
		radar: {
			shape: radarShape,
			name: {
				formatter: radarNameFormatter,
				...radarNameProps,
			},
			indicator: categories.map((category) => ({
				name: category.name,
				max: category.max,
			})),
			axisLine: { show: showRadarAxisLine, ...radarAxisLineProps },
			splitNumber: radarSplitNumber,
			splitArea: {
				show: showRadarSplitArea,
			},
			nameGap: radarNameGap,
			center: radarCenterPosition,
			radius: radarRadius,
			...radarProps,
		},
		title: {
			show: showTitle,
			text: titleText,
			textStyle: titleTextStyle,
			...titleProps,
		},
		legend: {
			show: showLegend,
			textStyle: legendTextStyle,
			itemStyle: legendItemStyle,
			icon: legendIcon,
			...legendProps,
		},
		grid: { ...gridProps },
		tooltip: {
			show: showTooltip,
			trigger: "item",
			formatter: tooltipFormatter,
		},
		series: [
			{
				type: "radar",

				data: data.map((d) => ({
					value: d.values,
					name: d.name,
					itemStyle: { color: d.color },
					areaStyle: {
						color: {
							type: "linear",
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [
								{
									offset: 0,
									color: d.color, // color at 0% position
								},
								{
									offset: 1,
									color: d.color, // color at 100% position
								},
							],
							global: true, // false by default
						},
					},
					lineStyle: seriesDataLineStyle,
				})),
				...seriesProps,
			},
		],
	};

	return <ReactEcharts className={className} style={style} option={option} />;
};

export default RadarChart;
