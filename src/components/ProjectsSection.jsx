import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import Card from "./Card";
import digitRecognizerImage from "../assets/digitRecogProjectImg.png";
import {projectsURLs} from "../config/siteConfig";

const projects = [
  {
    title: "Hand written digit recognizer using neural networks",
    description:
      "Simple web application that allows users to draw a digit (0-9) on a canvas and uses a pre-trained neural network model to recognize the digit and provide feedback to the user.",
    getImageSrc: () => digitRecognizerImage,
    url: projectsURLs.find((project) => project.name === "Hand written digit recognizer using neural networks")?.url || "",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      py={{ base: 16, md: 24 }}
      px={4}
      alignItems="center"
    >
      <VStack spacing={2} mb={16} textAlign="center">
        <Box
          border="1px solid rgba(139, 92, 246, 0.3)"
          borderRadius="full"
          px={4}
          py={1.5}
          fontSize="xs"
          bg="rgba(139, 92, 246, 0.05)"
          color="#a855f7"
          fontWeight="600"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          My Works
        </Box>
        <Heading as="h1" id="projects-section" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
          Featured Projects
        </Heading>
      </VStack>

      <VStack spacing={8} w="100%" maxW="1000px" px={{ base: 2, md: 4 }}>
        {projects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            index={index}
          />
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
