import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      bg: "#070314",
      card: "rgba(22, 11, 46, 0.4)",
      cardHover: "rgba(22, 11, 46, 0.6)",
      purple: "#8b5cf6",
      fuchsia: "#d946ef",
      violet: "#6d28d9",
      textMuted: "#94a3b8",
    },
  },
  fonts: {
    heading: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#070314",
        color: "white",
        minHeight: "100vh",
        overflowX: "hidden",
      },
    },
  },
  components: {
    Input: {
      variants: {
        glow: {
          field: {
            bg: "rgba(255, 255, 255, 0.03)",
            border: "1px solid",
            borderColor: "rgba(139, 92, 246, 0.2)",
            _hover: {
              borderColor: "rgba(139, 92, 246, 0.4)",
            },
            _focus: {
              borderColor: "#d946ef",
              boxShadow: "0 0 10px rgba(217, 70, 239, 0.5)",
            },
            transition: "all 0.3s ease",
          },
        },
      },
      defaultProps: {
        variant: "glow",
      },
    },
    Textarea: {
      variants: {
        glow: {
          bg: "rgba(255, 255, 255, 0.03)",
          border: "1px solid",
          borderColor: "rgba(139, 92, 246, 0.2)",
          _hover: {
            borderColor: "rgba(139, 92, 246, 0.4)",
          },
          _focus: {
            borderColor: "#d946ef",
            boxShadow: "0 0 10px rgba(217, 70, 239, 0.5)",
          },
          transition: "all 0.3s ease",
        },
      },
      defaultProps: {
        variant: "glow",
      },
    },
    Select: {
      variants: {
        glow: {
          field: {
            bg: "#070314",
            border: "1px solid",
            borderColor: "rgba(139, 92, 246, 0.2)",
            _hover: {
              borderColor: "rgba(139, 92, 246, 0.4)",
            },
            _focus: {
              borderColor: "#d946ef",
              boxShadow: "0 0 10px rgba(217, 70, 239, 0.5)",
            },
            transition: "all 0.3s ease",
            option: {
              bg: "#070314",
            },
          },
        },
      },
      defaultProps: {
        variant: "glow",
      },
    },
  },
});

export default theme;
