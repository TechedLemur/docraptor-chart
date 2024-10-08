/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BarChart } from "@/components/BarChart";
import React from "react";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

const BarChartAxisLabelsExample = () => {
  const [didWait, setDidWait] = React.useState(false);

  React.useEffect(() => {
    const finished = function () {
      // It's been 5 seconds, let's return true and make the PDF!
      return didWait;
    };
    if (!didWait) {
      setTimeout(() => {
        setDidWait(true);
      }, 2000);
    }
    (window as any).finished = finished;

    // Cleanup function to remove the exposed function when the component unmounts
    return () => {
      delete (window as any).finished;
    };
  }, [didWait]);
  return (
    <>
      {didWait ? <div>Finished</div> : <div>Loading...</div>}

      <BarChart
        className="h-80"
        data={chartdata}
        index="date"
        categories={["SolarPanels", "Inverters"]}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
        xAxisLabel="Month"
        yAxisLabel="Spend Category"
      />
    </>
  );
};

export default BarChartAxisLabelsExample;
