import React from "react";
import { Card, CardRootProps, Text, TextProps } from "@chakra-ui/react";

const TextCardRoot = ({ children, ...props }: CardRootProps) => {
  return (
    <Card.Root p={4} {...props}>
      {children}
    </Card.Root>
  );
};

const TextCardTitle = ({ children, ...props }: TextProps) => {
  return (
    <Card.Header>
      <Text fontWeight="bold" fontSize="2xl" {...props}>
        {children}
      </Text>
    </Card.Header>
  );
};

const TextCardBody = ({ children, ...props }: TextProps) => {
  return (
    <Card.Body>
      <Text fontWeight="semibold" fontSize="4xl" {...props}>
        {children}
      </Text>
    </Card.Body>
  );
};

const TextCard = {
  Root: TextCardRoot,
  Title: TextCardTitle,
  Body: TextCardBody,
};

export default TextCard;
