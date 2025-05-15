import React from "react";
import { Grid } from "@chakra-ui/react";
import { apiService } from "@/services/api";
import TextCard from "./text-card";

const GeneralPanel = async ({ country }: { country: string }) => {
  const data = await apiService.getCovidAll(country);

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
    >
      <TextCard.Root>
        <TextCard.Title>Cases</TextCard.Title>
        <TextCard.Body>{(data.cases / 1_000_000).toFixed(2)}M</TextCard.Body>
      </TextCard.Root>

      <TextCard.Root>
        <TextCard.Title>Deaths</TextCard.Title>
        <TextCard.Body>{(data.deaths / 1_000_000).toFixed(2)}M</TextCard.Body>
      </TextCard.Root>

      <TextCard.Root>
        <TextCard.Title>Recovered</TextCard.Title>
        <TextCard.Body>
          {(data.recovered / 1_000_000).toFixed(2)}M
        </TextCard.Body>
      </TextCard.Root>

      <TextCard.Root>
        <TextCard.Title>Active</TextCard.Title>
        <TextCard.Body>{(data.active / 1_000_000).toFixed(2)}M</TextCard.Body>
      </TextCard.Root>
    </Grid>
  );
};

export default GeneralPanel;
