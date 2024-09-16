"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BarChartAxisLabelsExample = dynamic(
  () => import("./ChartPage"),

  { ssr: false }
);

export default function Page(props: { params: { id: string } }) {
  const { id } = props.params;
  console.log(id);
  return (
    <>
      <BarChartAxisLabelsExample />
    </>
  );
}
