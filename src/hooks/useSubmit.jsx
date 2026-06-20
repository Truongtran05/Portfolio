import {useState} from "react";
import emailjs from "@emailjs/browser";
import {emailJSConfig} from "../config/siteConfig";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    if(data) console.log("Submitting form with data:", data);
    setLoading(true);
    try {
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        data,
        emailJSConfig.publicKey
      );
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, response, submit };
}

export default useSubmit;
