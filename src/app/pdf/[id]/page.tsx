import React from "react";
import { BarChartAxisLabelsExample } from "./ChartPage";

export default function page(props: { params: { id: string } }) {
  const { id } = props.params;
  console.log(id);
  return <BarChartAxisLabelsExample />;
}
