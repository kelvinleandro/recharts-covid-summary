import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

const VaccineHeader = () => {
  return (
    <HStack>
      <Heading as="h2" size="xl" textAlign="center">
        Vaccine coverage
      </Heading>
    </HStack>
  );
};

export default VaccineHeader;
