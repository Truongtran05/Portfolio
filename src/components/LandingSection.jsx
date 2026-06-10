import React from "react";
import { Avatar, Heading, VStack, Box, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faGithub,
  faHtml5,
  faCss3Alt,
  faPython,
  faPostgresql,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faGraduationCap, faLaptopCode, faPalette, faRobot } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import avatar from "../assets/avatar_fb.jpg";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Experience Milestones
const experiences = [
  {
    title: "Software Engineering Student",
    organization: "Hanoi University of Science and Technology",
    period: "2022 - Present",
    icon: faGraduationCap,
    iconColor: "#a855f7",
  },
  {
    title: "Full-Stack Web Developer",
    organization: "Personal Projects & Dev Lab",
    period: "2023 - Present",
    icon: faLaptopCode,
    iconColor: "#d946ef",
  },
  {
    title: "Machine Learning Enthusiast",
    organization: "AI Experiments Lab",
    period: "2024 - Present",
    icon: faRobot,
    iconColor: "#3b82f6",
  },
];

// Tech stack skills
const skills = [
  { icon: faReact, label: "React", color: "#61dafb" },
  { icon: faJs, label: "JavaScript", color: "#f7df1e" },
  { icon: faHtml5, label: "HTML5", color: "#e34f26" },
  { icon: faCss3Alt, label: "CSS3", color: "#1572b6" },
  { icon: faPostgresql, label: "PostgreSQL", color: "#3776ab" },
  { icon: faJava, label: "Java", color: "#e34f26" },
  { icon: faPython, label: "Python", color: "#3776ab" },
  { icon: faGithub, label: "GitHub", color: "#ffffff" },
];

// Interactive Orbit Constellation
const OrbitSystem = () => {
  const containerRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 500, height: 400 });

  React.useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth || 500,
        height: containerRef.current.offsetHeight || 400,
      });
    }
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  // Adaptive orbits for responsiveness
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const radiusInner = isMobile ? 80 : 105;
  const radiusOuter = isMobile ? 135 : 170;

  const positionedSkills = skills.map((skill, index) => {
    const isOuter = index >= 4;
    const radius = isOuter ? radiusOuter : radiusInner;
    const angleOffset = isOuter ? Math.PI / 4 : 0;
    const angle = ((index % 4) / 4) * 2 * Math.PI + angleOffset;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return {
      ...skill,
      x,
      y,
      radius,
    };
  });

  return (
    <Box
      ref={containerRef}
      position="relative"
      h={{ base: "320px", md: "420px" }}
      w="100%"
      maxW="500px"
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Dashed Connecting Lines */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {positionedSkills.map((skill, idx) => (
          <motion.line
            key={idx}
            x1={centerX}
            y1={centerY}
            x2={centerX + skill.x}
            y2={centerY + skill.y}
            stroke="rgba(139, 92, 246, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: idx * 0.1 }}
          />
        ))}
      </svg>

      {/* Orbit paths */}
      <Box
        position="absolute"
        w={`${radiusInner * 2}px`}
        h={`${radiusInner * 2}px`}
        border="1px dashed rgba(139, 92, 246, 0.15)"
        borderRadius="full"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="absolute"
        w={`${radiusOuter * 2}px`}
        h={`${radiusOuter * 2}px`}
        border="1px dashed rgba(139, 92, 246, 0.1)"
        borderRadius="full"
        pointerEvents="none"
        zIndex={0}
      />

      {/* Central Monogram Logo Node */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(139, 92, 246, 0.4)",
            "0 0 35px rgba(217, 70, 239, 0.6)",
            "0 0 20px rgba(139, 92, 246, 0.4)",
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          zIndex: 2,
          width: isMobile ? "56px" : "68px",
          height: isMobile ? "56px" : "68px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <FontAwesomeIcon icon={faCode} color="white" size={isMobile ? "sm" : "lg"} />
      </motion.div>

      {/* Floating Interactive Satellites */}
      {positionedSkills.map((skill, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            left: `calc(50% + ${skill.x}px - 20px)`,
            top: `calc(50% + ${skill.y}px - 20px)`,
            zIndex: 3,
          }}
          whileHover={{ scale: 1.25 }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3 + (idx % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.15,
          }}
        >
          <Box
            w="40px"
            h="40px"
            borderRadius="full"
            bg="rgba(11, 7, 30, 0.9)"
            border="1px solid rgba(139, 92, 246, 0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 4px 15px rgba(0, 0, 0, 0.5)"
            cursor="pointer"
            title={skill.label}
            transition="all 0.2s ease"
            _hover={{
              borderColor: "#d946ef",
              boxShadow: "0 0 15px rgba(217, 70, 239, 0.5)",
            }}
          >
            <FontAwesomeIcon icon={skill.icon} color={skill.color} size="sm" />
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

const LandingSection = () => {
  // Hero section animation controls
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <FullScreenSection
      justifyContent="flex-start"
      alignItems="center"
      isDarkBackground
      py={{ base: 16, md: 24 }}
      px={4}
    >
      {/* 1. Hero Block */}
      <MotionVStack
        spacing={6}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        textAlign="center"
        mb={{ base: 16, md: 24 }}
        maxW="800px"
        width="100%"
      >
        {/* Hello Badge */}
        <Box
          border="1px solid rgba(217, 70, 239, 0.3)"
          borderRadius="full"
          px={4}
          py={1.5}
          fontSize="xs"
          bg="rgba(217, 70, 239, 0.06)"
          color="#d946ef"
          fontWeight="600"
          letterSpacing="wider"
          textTransform="uppercase"
          boxShadow="0 0 15px rgba(217, 70, 239, 0.1)"
        >
          👋 Hello! I am Truong Tran
        </Box>

        {/* Pulsing Avatar Frame */}
        <Box position="relative" my={3}>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.6)",
                "0 0 20px rgba(139, 92, 246, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              borderRadius: "50%",
              padding: "4px",
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(217, 70, 239, 0.5) 100%)",
            }}
          >
            <Avatar
              src={avatar}
              alt="Truong Tran"
              size="2xl"
              border="2px solid #070314"
            />
          </motion.div>
        </Box>

        {/* Premium Header */}
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="800"
          lineHeight="shorter"
          letterSpacing="tight"
        >
          A software engineer
          <Box
            as="span"
            display="inline-block"
            position="relative"
            px={2}
            mx={1}
            zIndex={1}
            _after={{
              content: '""',
              position: "absolute",
              left: 0,
              bottom: "4px",
              w: "100%",
              h: "28%",
              bg: "rgba(217, 70, 239, 0.25)",
              zIndex: -1,
              borderRadius: "sm",
            }}
          >
          </Box>
        </Heading>

        {/* Hero Bio */}
        <VStack spacing={3} mt={4}>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="brand.textMuted"
            maxW="600px"
            lineHeight="tall"
          >
            I am currently a Software Engineering student at <strong>Hanoi University of Science and Technology</strong>.
          </Text>
        </VStack>
      </MotionVStack>

      {/* 2. Educational & Personal Milestones */}
      <VStack spacing={6} w="100%" maxW="1000px" mb={{ base: 16, md: 24 }}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="700"
          textAlign="center"
          mb={2}
        >
          Education & Milestones
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          w="100%"
        >
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              p={6}
              borderRadius="2xl"
              bg="brand.card"
              border="1px solid rgba(139, 92, 246, 0.15)"
              backdropFilter="blur(16px)"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.2)"
              _hover={{
                borderColor: "rgba(217, 70, 239, 0.4)",
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.15)",
                bg: "brand.cardHover",
              }}
            >
              <HStack spacing={4} align="flex-start">
                <Box
                  p={3}
                  bg="rgba(139, 92, 246, 0.1)"
                  borderRadius="xl"
                  border="1px solid rgba(139, 92, 246, 0.2)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={exp.iconColor}
                >
                  <FontAwesomeIcon icon={exp.icon} size="lg" />
                </Box>
                <VStack align="start" spacing={1}>
                  <Heading as="h3" fontSize="md" fontWeight="600" color="white">
                    {exp.title}
                  </Heading>
                  <Text fontSize="xs" fontWeight="600" color="#c084fc">
                    {exp.organization} • {exp.period}
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </Box>
      </VStack>

      {/* 3. Tech Stack & Orbital Visualization */}
      <VStack spacing={4} w="100%" maxW="800px" textAlign="center" mb={12}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="700"
          maxW="600px"
          lineHeight="shorter"
        >
          My tech-stack
        </Heading>

        {/* Render Orbit Node Constellation */}
        <OrbitSystem />
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
