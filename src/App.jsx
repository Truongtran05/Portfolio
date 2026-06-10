import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import AppTheme from "./themes/AppTheme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={AppTheme}>
        <AlertProvider>
          <Box as="main" pt="60px" position="relative" minH="100vh" overflow="hidden">
            {/* Glowing blur background blobs */}
            <Box
              position="absolute"
              top="-10%"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "300px", md: "600px" }}
              h={{ base: "300px", md: "600px" }}
              bg="radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(7, 3, 20, 0) 70%)"
              filter="blur(60px)"
              pointerEvents="none"
              zIndex={0}
            />
            <Box
              position="absolute"
              top="40%"
              right="-10%"
              w={{ base: "250px", md: "500px" }}
              h={{ base: "250px", md: "500px" }}
              bg="radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, rgba(7, 3, 20, 0) 70%)"
              filter="blur(80px)"
              pointerEvents="none"
              zIndex={0}
            />
            <Box
              position="absolute"
              bottom="10%"
              left="-10%"
              w={{ base: "300px", md: "550px" }}
              h={{ base: "300px", md: "550px" }}
              bg="radial-gradient(circle, rgba(109, 40, 217, 0.15) 0%, rgba(7, 3, 20, 0) 70%)"
              filter="blur(70px)"
              pointerEvents="none"
              zIndex={0}
            />

            <Box position="relative" zIndex={1}>
              <Header />
              <Routes>
                <Route path="/" element={<LandingSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactMeSection />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </Box>
            <Alert />
          </Box>
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
