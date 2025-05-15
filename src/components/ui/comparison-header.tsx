"use client";

import { Heading, HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ComparisonHeader = ({ sortBy }: { sortBy: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortTableBy", e.target.value);
    router.push(`/?${params.toString()}`);
  };
  return (
    <HStack>
      <Heading as="h2" size="xl" textAlign="center">
        Countries comparison
      </Heading>

      <select value={sortBy} onChange={handleChange}>
        <option value="cases">Cases</option>
        <option value="deaths">Deaths</option>
        <option value="recovered">Recovered</option>
      </select>
    </HStack>
  );
};

export default ComparisonHeader;
