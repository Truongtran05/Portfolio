import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if(response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      enquiry: '',
      comment: '',
    },
    onSubmit: (values) => {submit(values)},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      enquiry: Yup.string().required('Required'),
      comment: Yup.string().min(15, 'Comment must be at least 15 characters').required('Required'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      py={{ base: 12, md: 20 }}
      px={4}
      alignItems="center"
    >
      <VStack w="100%" maxW="700px" spacing={8} mx="auto">
        <VStack spacing={2} textAlign="center">
          <Box
            border="1px solid rgba(217, 70, 239, 0.3)"
            borderRadius="full"
            px={4}
            py={1.5}
            fontSize="xs"
            bg="rgba(217, 70, 239, 0.05)"
            color="#d946ef"
            fontWeight="600"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            Get In Touch
          </Box>
          <Heading as="h1" id="contactme-section" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
            Contact me
          </Heading>
        </VStack>

        <Box
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          bg="brand.card"
          border="1px solid rgba(139, 92, 246, 0.15)"
          backdropFilter="blur(16px)"
          boxShadow="0 10px 40px rgba(0, 0, 0, 0.3)"
          w="100%"
          transition="all 0.3s"
          _hover={{
            borderColor: "rgba(217, 70, 239, 0.45)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
            bg: "brand.cardHover",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName" fontSize="sm" fontWeight="600" color="white">
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                  borderColor="rgba(139, 92, 246, 0.2)"
                  bg="rgba(15, 10, 36, 0.3)"
                  _hover={{ borderColor: "rgba(139, 92, 246, 0.4)" }}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email" fontSize="sm" fontWeight="600" color="white">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  borderColor="rgba(139, 92, 246, 0.2)"
                  bg="rgba(15, 10, 36, 0.3)"
                  _hover={{ borderColor: "rgba(139, 92, 246, 0.4)" }}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.enquiry && formik.errors.enquiry}>
                <FormLabel htmlFor="enquiry" fontSize="sm" fontWeight="600" color="white">
                  Type of enquiry
                </FormLabel>
                <Select
                  id="enquiry"
                  name="enquiry"
                  {...formik.getFieldProps('enquiry')}
                  borderColor="rgba(139, 92, 246, 0.2)"
                  bg="rgba(15, 10, 36, 0.3)"
                  _hover={{ borderColor: "rgba(139, 92, 246, 0.4)" }}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.enquiry}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment" fontSize="sm" fontWeight="600" color="white">
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={180}
                  {...formik.getFieldProps('comment')}
                  borderColor="rgba(139, 92, 246, 0.2)"
                  bg="rgba(15, 10, 36, 0.3)"
                  _hover={{ borderColor: "rgba(139, 92, 246, 0.4)" }}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                isLoading={isLoading}
                bg="linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)"
                color="white"
                fontWeight="600"
                h={12}
                borderRadius="xl"
                transition="all 0.2s"
                _hover={{
                  boxShadow: "0 0 20px rgba(217, 70, 239, 0.6)",
                  transform: "translateY(-1px)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
