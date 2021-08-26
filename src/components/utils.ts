import { LinearGradient } from "echarts/lib/util/graphic";

export enum GradientDirection {
  LeftToRight,
  RightToLeft,
  TopToBottom,
  BottomToTop,
}

const directionsMap = {
  [GradientDirection.LeftToRight]: [1, 0, 0, 0],
  [GradientDirection.RightToLeft]: [0, 0, 1, 0],
  [GradientDirection.BottomToTop]: [0, 1, 0, 0],
  [GradientDirection.TopToBottom]: [0, 0, 0, 1],
};

// export const CHART_TITLE = {
// 	color: "red",
// 	fontFamily: "Spartan",
// 	fontWeight: "bold",
// 	fontSize: "14px",
// 	lineHeight: 24,
// };

export type ChartColor = string | [string, string];

export const CHART_LEGEND = {
  color: "black",
  fontFamily: "Spartan",
  fontWeight: "bold",
  fontSize: 12,
};

export function toEChartsColor(
  color: ChartColor = "#000",
  gradientDirection: GradientDirection
) {
  if (Array.isArray(color)) {
    return new LinearGradient(...directionsMap[gradientDirection], [
      { offset: 0, color: color[0] },
      { offset: 1, color: color[1] },
    ]);
  } else {
  }
}

const hexRange = (val: number) => Math.min(255, Math.max(0, val));

export const createExpMap = (k: number, from = 0, to = 100) => (
  num: number
) => {
  const a = 100 / (Math.pow(to, k) - Math.pow(from, k));
  const b = -a * Math.pow(from, k);

  return a * Math.pow(num, k) + b;
};

export const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  const r = hexRange((num >> 16) + amt);
  const b = hexRange(((num >> 8) & 0x00ff) + amt);
  const g = hexRange((num & 0x0000ff) + amt);

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

export const createColorGetter = (k: number, minValue = 0, maxValue = 100) => (
  baseColour: string,
  value: number
) => {
  const expMap = createExpMap(k, minValue, maxValue);
  const num = Math.floor(expMap(value));

  return `${lightenDarkenColor(baseColour, num)}`;
};

export const xAxisLabelStyle = { fontWeight: "bold", fontSize: "12px" };

export const DONT_SHOW = { show: false };
