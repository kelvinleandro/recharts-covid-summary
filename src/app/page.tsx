import Header from "@/components/layout/header";
import ComparisonPanel from "@/components/ui/comparison-panel";
import GeneralPanel from "@/components/ui/general-panel";
import TimeseriesPanel from "@/components/ui/timeseries-panel";
import VaccinePanel from "@/components/ui/vaccine-panel";
import { CovidTimelineKey } from "@/types";
import { Grid, VStack } from "@chakra-ui/react";

type Props = {
  searchParams: Promise<{
    country: string;
    sortTableBy: CovidTimelineKey;
    timeseriesFeature: CovidTimelineKey;
  }>;
};

export default async function Home({ searchParams }: Props) {
  let { country, sortTableBy, timeseriesFeature } = await searchParams;

  country = country || "all";
  sortTableBy = sortTableBy || "cases";
  timeseriesFeature = timeseriesFeature || "cases";

  return (
    <VStack w="100%">
      <Header />
      <GeneralPanel country={country} />

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={8}
      >
        <TimeseriesPanel
          country={country}
          timeseriesFeature={timeseriesFeature}
        />
        <ComparisonPanel sortBy={sortTableBy} />
        <VaccinePanel country={country} />
      </Grid>
    </VStack>
  );
}
