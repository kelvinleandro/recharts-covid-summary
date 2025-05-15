import { CovidTimelineKey } from "@/types";
import { Box } from "@chakra-ui/react";
import React from "react";
import ComparisonHeader from "./comparison-header";
import ComparisonChart from "./comparison-chart";

type Props = {
  sortBy: CovidTimelineKey;
};

const ComparisonPanel = ({ sortBy }: Props) => {
  return (
    <Box>
      <ComparisonHeader sortBy={sortBy} />
      <ComparisonChart sortBy={sortBy} />
    </Box>
  );
};

export default ComparisonPanel;
