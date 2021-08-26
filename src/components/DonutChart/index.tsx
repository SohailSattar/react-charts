import React from "react";
import { ReactEcharts } from "../LazyReactEcharts";
import { ChartColor } from "../utils";

import { TooltipTrigger } from "../types";

/**
 * ChartSegment interface
 * @property {number}  value
 * @property {ChartColor}  color
 * @property {string}  name
 *  */
export interface ChartSegment {
	value: number;
	color: ChartColor;
	name?: string;
}

/**
 * ChartProps interface
 *  */
export interface ChartProps {
	//title
	/** Display the title of chart. 	Set this to false to prevent the title from showing. */
	showTitle?: boolean;
	/** The main title text, supporting for \n for newlines. */
	titleText?: string;
	titleTextStyle?: {};
	titleLeft?: string;
	titleBorderRadius?: number | Array<number>;
	titleTop?: string;
	titleProps?: {};
	//labelline
	showLabelLine?: boolean;
	//tooltip
	showTooltip?: boolean;
	tooltipTrigger?: TooltipTrigger;
	tooltipConfine?: boolean;
	tooltipTextStyle?: {};
	tooltipProps?: {};
	//series
	data: Array<ChartSegment>;
	radius?: [string, string];
	seriesProps?: {};
	showNormalItemStyleSeriesLabel?: boolean;
	seriesNormalItemLabelProps?: {};
	seriesNormalItemLabelFormatter?: (value: string) => string;
	showSeriesItemStyleNormalLabelLine?: boolean;
	seriesItemStyleNormalProps?: {};
	seriesItemStyleEmphasisLabel?: {};
	seriesItemStyleEmphasisProps?: {};
	//
	avoidLabelOverlap?: boolean;
	className?: string | undefined;
	style?: {};
}

export const DonutChart: React.FC<ChartProps> = ({
	showTitle = true,
	titleText,
	titleLeft = "center",
	titleTop = "middle",
	titleBorderRadius = 90,
	titleTextStyle,
	titleProps,
	//labelline
	showLabelLine = true,
	//tooltip
	showTooltip = true,
	tooltipTrigger = "item",
	tooltipTextStyle,
	tooltipProps,
	//series
	radius = ["55%", "90%"],
	data,
	seriesProps,
	showNormalItemStyleSeriesLabel = true,
	seriesNormalItemLabelProps,
	seriesNormalItemLabelFormatter,
	showSeriesItemStyleNormalLabelLine = false,
	seriesItemStyleNormalProps,
	seriesItemStyleEmphasisLabel,
	seriesItemStyleEmphasisProps,
	//
	avoidLabelOverlap = false,
	className,
	style,
}) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			show: showTitle,
			text: titleText,
			borderRadius: titleBorderRadius,
			textStyle: titleTextStyle,
			width: "100%",
			left: titleLeft,
			top: titleTop,
			...titleProps,
		},
		labelLine: {
			show: showLabelLine,
		},

		series: [
			{
				type: "pie",
				radius: radius,
				avoidLabelOverlap: avoidLabelOverlap,

				data: data.map((segment) => ({
					...segment,
					itemStyle: {
						color: segment.color,
					},
				})),

				itemStyle: {
					normal: {
						label: {
							show: showNormalItemStyleSeriesLabel,
							formatter: seriesNormalItemLabelFormatter,
							...seriesNormalItemLabelProps,
						},
						labelLine: {
							show: showSeriesItemStyleNormalLabelLine,
						},
						...seriesItemStyleNormalProps,
					},
					emphasis: {
						scale: true,
						scaleSize: 20,
						label: seriesItemStyleEmphasisLabel,
						...seriesItemStyleEmphasisProps,
					},
				},
				...seriesProps,
			},
		],

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					alignTo: "connectors",
					enabled: true,

					formatter: "{b} {d}%",
				},
			},
		},
		tooltip: {
			show: showTooltip,
			trigger: tooltipTrigger,
			formatter: "{b} {d}%",
			textStyle: tooltipTextStyle,
			...tooltipProps,
		},
	};

	return (
		<ReactEcharts
			option={options}
			notMerge={true}
			className={className}
			style={style}
			lazyUpdate={true}
		/>
	);
};

export default DonutChart;
