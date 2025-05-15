"use client";

import { CovidTimelineKey } from "@/types";
import { Heading, HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const TimeseriesHeader = ({
  timeseriesFeature,
}: {
  timeseriesFeature: CovidTimelineKey;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("timeseriesFeature", e.target.value);
    router.push(`/?${params.toString()}`);
  };
  return (
    <HStack>
      <Heading as="h2" size="xl" textAlign="center">
        Timeseries analysis
      </Heading>

      <select value={timeseriesFeature} onChange={handleChange}>
        <option value="cases">Cases</option>
        <option value="deaths">Deaths</option>
        <option value="recovered">Recovered</option>
      </select>
    </HStack>
  );
};

export default TimeseriesHeader;
