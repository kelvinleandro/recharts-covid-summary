import { Box } from "@chakra-ui/react";
import React from "react";
import VaccineHeader from "./vaccine-header";
import VaccineChart from "./vaccine-chart";

type Props = {
  country: string;
};

const VaccinePanel = ({ country }: Props) => {
  return (
    <Box>
      <VaccineHeader />
      <VaccineChart country={country} />
    </Box>
  );
};

export default VaccinePanel;
