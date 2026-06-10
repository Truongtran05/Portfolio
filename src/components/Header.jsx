import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { socialMediaLinks } from "../config/siteConfig";
import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const hoverStyle = {
  textDecoration: "none",
  color: "#d946ef",
  textShadow: "0 0 10px rgba(217, 70, 239, 0.6)",
  transform: "translateY(-1px)",
};

const Header = () => {
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 10) setVisible(true);
      else if (currentScrollPos < prevScrollPos && prevScrollPos - currentScrollPos > 70) setVisible(true);
      else setVisible(false);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto:" + (socialMediaLinks.find((link) => link.name === "Email")?.url || ""),
    },
    {
      icon: faGithub,
      url: socialMediaLinks.find((link) => link.name === "GitHub")?.url || "https://github.com",
    },
    {
      icon: faLinkedin,
      url: socialMediaLinks.find((link) => link.name === "LinkedIn")?.url || "https://www.linkedin.com",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      position="fixed"
      top="15px"
      left="50%"
      transform={visible ? "translateX(-50%)" : "translateX(-50%) translateY(-100%)"}
      width="calc(100% - 30px)"
      maxWidth="1200px"
      borderRadius="full"
      border="1px solid rgba(139, 92, 246, 0.15)"
      backgroundColor="rgba(7, 3, 20, 0.75)"
      backdropFilter="blur(16px)"
      boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 20px rgba(139, 92, 246, 0.1)"
      transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
      opacity={visible ? 1 : 0}
      zIndex={1000}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={{ base: 6, md: 10 }}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {socials.map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  display="inline-flex"
                  alignItems="center"
                  borderRadius="full"
                  p={1}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition="all 0.2s ease-in-out"
                  _hover={hoverStyle}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: 4, md: 8 }}>
              <Link
                as={RouterLink}
                to="/"
                fontWeight="500"
                fontSize="sm"
                color={isActive("/") ? "#d946ef" : "white"}
                textShadow={isActive("/") ? "0 0 10px rgba(217, 70, 239, 0.4)" : "none"}
                transition="all 0.2s ease-in-out"
                _hover={hoverStyle}
              >
                About
              </Link>
              <Link
                as={RouterLink}
                to="/projects"
                fontWeight="500"
                fontSize="sm"
                color={isActive("/projects") ? "#d946ef" : "white"}
                textShadow={isActive("/projects") ? "0 0 10px rgba(217, 70, 239, 0.4)" : "none"}
                transition="all 0.2s ease-in-out"
                _hover={hoverStyle}
              >
                Projects
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                fontWeight="500"
                fontSize="sm"
                color={isActive("/contact") ? "#d946ef" : "white"}
                textShadow={isActive("/contact") ? "0 0 10px rgba(217, 70, 239, 0.4)" : "none"}
                transition="all 0.2s ease-in-out"
                _hover={hoverStyle}
              >
                Contact
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
