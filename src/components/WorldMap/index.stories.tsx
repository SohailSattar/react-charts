import { Story } from "@storybook/react";
import React from "react";
import { WorldMap, MapProps } from ".";

export default {
  title: "Charts/WorldMap",
  component: WorldMap,
};

const Template: Story<MapProps> = (args) => <WorldMap {...args} />;

const dataset = [
  { name: "Pakistan", value: 4822023 },
  { name: "Russia", value: 123445 },
  { name: "Poland", value: 555666 },
  { name: "Nigeria", value: 123 },
];

const tooltipFormatter = function (params) {
  var value = (params.value + "").split(".");
  value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
  return params.seriesName + "<br/>" + params.name + ": " + value;
};

export const Primary = Template.bind({});
Primary.args = {
  dataPoints: dataset,
  tooltipFormatter: tooltipFormatter,
  //   visualMapInRangeColor: ["green", "blue"],
};
