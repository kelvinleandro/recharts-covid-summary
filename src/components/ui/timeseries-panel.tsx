import { Box } from "@chakra-ui/react";
import React from "react";
import TimeseriesHeader from "./timeseries-header";
import TimeseriesChart from "./timeseries-chart";
import { CovidTimelineKey } from "@/types";

type Props = {
  country: string;
  timeseriesFeature: CovidTimelineKey;
};

const TimeseriesPanel = ({ country, timeseriesFeature }: Props) => {
  return (
    <Box>
      <TimeseriesHeader timeseriesFeature={timeseriesFeature} />
      <TimeseriesChart
        country={country}
        timeseriesFeature={timeseriesFeature}
      />
    </Box>
  );
};

export default TimeseriesPanel;
