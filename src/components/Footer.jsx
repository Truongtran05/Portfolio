import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid rgba(139, 92, 246, 0.1)"
      backgroundColor="rgba(7, 3, 20, 0.4)"
      backdropFilter="blur(8px)"
      py={6}
      mt={12}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="1024px"
        mx="auto"
        px={6}
        gap={2}
      >
        <Text fontSize="sm" color="brand.textMuted">
          Built by{" "}
          <Text as="span" fontWeight="600" bgGradient="linear(to-r, #c084fc, #e879f9)" bgClip="text">
            Truong Tran
          </Text>
        </Text>
        <Text fontSize="xs" color="rgba(255, 255, 255, 0.3)">
          © {new Date().getFullYear()} • All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
