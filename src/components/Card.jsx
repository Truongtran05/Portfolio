import { Heading, HStack, Image, Link, Text, VStack, Box, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Card = ({ title, description, imageSrc, url, index = 0 }) => {
  const isEven = index % 2 === 0;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      w="100%"
      mb={12}
    >
      <Stack
        direction={{ base: "column", lg: isEven ? "row" : "row-reverse" }}
        spacing={{ base: 6, lg: 12 }}
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        bg="brand.card"
        border="1px solid rgba(139, 92, 246, 0.15)"
        backdropFilter="blur(16px)"
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.3)"
        align="center"
        justify="space-between"
        transition="all 0.3s ease"
        _hover={{
          borderColor: "rgba(217, 70, 239, 0.45)",
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
          bg: "brand.cardHover",
        }}
      >
        {/* Project Details (Text Block) */}
        <VStack align="start" spacing={4} flex="1.2">
          <Text
            fontSize="xs"
            fontWeight="700"
            color="#d946ef"
            letterSpacing="widest"
            textTransform="uppercase"
            textShadow="0 0 10px rgba(217, 70, 239, 0.2)"
          >
            Featured Project
          </Text>
          <Heading as="h3" size="lg" color="white" fontWeight="700" letterSpacing="tight">
            {title}
          </Heading>
          
          {/* Overlapping description container */}
          <Box
            p={5}
            bg="rgba(7, 3, 20, 0.7)"
            border="1px solid rgba(139, 92, 246, 0.15)"
            borderRadius="xl"
            boxShadow="0 8px 25px rgba(0,0,0,0.4)"
            w="100%"
          >
            <Text color="brand.textMuted" fontSize="sm" lineHeight="tall">
              {description}
            </Text>
          </Box>
          
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            borderRadius="full"
            px={6}
            py={3}
            bg="linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)"
            color="white"
            fontWeight="600"
            fontSize="sm"
            transition="all 0.2s ease-in-out"
            _hover={{
              textDecoration: "none",
              boxShadow: "0 0 18px rgba(217, 70, 239, 0.6)",
              transform: "scale(1.03)",
            }}
          >
            <HStack spacing={2} align="center">
              <Text>See Project</Text>
              <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </HStack>
          </Link>
        </VStack>

        {/* Project Image Frame */}
        <Box
          flex="1"
          width="100%"
          maxW={{ base: "100%", lg: "460px" }}
          borderRadius="xl"
          overflow="hidden"
          border="1px solid rgba(139, 92, 246, 0.2)"
          boxShadow="0 15px 35px rgba(0, 0, 0, 0.4)"
          position="relative"
          role="group"
        >
          {/* Subtle Glow Overlay */}
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(217, 70, 239, 0.15) 100%)"
            opacity={0.7}
            zIndex={1}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 0 }}
            pointerEvents="none"
          />
          <Image
            src={imageSrc}
            alt={title}
            transition="transform 0.5s ease"
            _groupHover={{ transform: "scale(1.05)" }}
            width="100%"
            height="auto"
            display="block"
          />
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default Card;
