import React from "react";
import { BarChartAxisLabelsExample } from "./ChartPage";
import Script from "next/script";

export default function page(props: { params: { id: string } }) {
  const { id } = props.params;
  console.log(id);
  return (
    <>
      <Script
        id="jank"
        // strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           console.log('hello from script');
           var docraptorJavaScriptFinished = function () {
             if (window.finished) {
               return window.finished();
             }
               else {
               return false;
             }
           };
          `,
        }}
      />
      <BarChartAxisLabelsExample />;
    </>
  );
}
