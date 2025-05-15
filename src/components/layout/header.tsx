"use client";

import { Flex, Heading, HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("country", e.target.value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <Flex justifyContent="space-between" px={8} pt={2} w="100%">
      <Heading as="h1" size="3xl" textAlign="center">
        Covid-19 Summary
      </Heading>

      <HStack>
        <Heading as="h2" size="xl" textAlign="center">
          Country:
        </Heading>

        <select
          value={searchParams.get("country") || "all"}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="brazil">Brazil</option>
          <option value="usa">USA</option>
        </select>
      </HStack>
    </Flex>
  );
};

export default Header;
