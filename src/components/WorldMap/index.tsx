import { registerMap } from "echarts";
import React, { FC } from "react";
import ReactEcharts from "../LazyReactEcharts";
import WorldData from "geojson-world-map";

export interface MapProps {
  //title
  showTitle?: boolean;
  titleText?: string;
  titleSubtext?: string;
  titleSubtextURL?: string;
  titleLeft?: string | number;
  titleTop?: string | number;
  titleRight?: string | number;
  titleBottom?: string | number;
  titleTextStyle?: {};
  titleProps?: {};
  //tooltip
  showTooltip?: boolean;
  tooltipShowDelay?: number;
  tooltipTransitionDuration?: number;
  tooltipFormatter?: (value: any) => string;
  tooltipProps?: {};
  //visual map
  showVisualMap?: boolean;
  visualMapText?: [string, string];
  visualMapRealTime?: boolean;
  visualMapCalculable?: boolean;
  visualMapInRangeColor?: string[];
  //series
  dataPoints: { name: string; value: number }[];
  //
  style?: {};
  className?: string;
}

export const WorldMap: FC<MapProps> = ({
  //title
  showTitle = true,
  titleText,
  titleSubtext,
  titleSubtextURL,
  titleLeft = "auto",
  titleTop = "auto",
  titleRight = "auto",
  titleBottom = "auto",
  titleTextStyle,
  titleProps,
  //tooltip
  showTooltip = true,
  tooltipShowDelay = 0,
  tooltipTransitionDuration = 0.2,
  tooltipFormatter,
  tooltipProps,
  //visual map
  showVisualMap = true,
  visualMapText = ["High", "Low"],
  visualMapRealTime = false,
  visualMapCalculable = true,
  visualMapInRangeColor,
  //
  dataPoints,
  //
  style,
  className,
}) => {
  registerMap("world", WorldData);

  dataPoints = dataPoints.sort((a, b) => a.value - b.value);

  const option = {
    title: {
      show: showTitle,
      text: titleText,
      subtext: titleSubtext,
      sublink: titleSubtextURL,
      textStyle: titleTextStyle,
      left: titleLeft,
      top: titleTop,
      right: titleRight,
      bottom: titleBottom,
      ...titleProps,
    },
    tooltip: {
      show: showTooltip,
      trigger: "item",
      showDelay: tooltipShowDelay,
      transitionDuration: tooltipTransitionDuration,
      formatter: tooltipFormatter,
      ...tooltipProps,
    },
    visualMap: {
      show: showVisualMap,
      min: 0,
      max: dataPoints[dataPoints.length - 1]?.value || 0,
      text: visualMapText,
      realtime: visualMapRealTime,
      calculable: visualMapCalculable,
      inRange: {
        color: visualMapInRangeColor ?? ["lightskyblue", "yellow", "orangered"],
      },
    },
    series: [
      {
        roam: true,
        name: titleText,
        type: "map",
        mapType: "world",
        data: dataPoints,
      },
    ],
  };

  return <ReactEcharts className={className} style={style} option={option} />;
};

export default WorldMap;
