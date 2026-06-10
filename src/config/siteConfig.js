//helper function to get environment variables in both VITE and Next.js
const getEnv = (nextKey, viteKey) => {
  return typeof process !== 'undefined' ? process.env[nextKey] : import.meta.env[viteKey];
};

export const socialMediaLinks = [
    {
        name: "Facebook",
        url: getEnv("NEXT_PUBLIC_FACEBOOK_URL","VITE_FACEBOOK_URL") || "https://www.facebook.com/"
    },
    {
        name: "GitHub",
        url: getEnv("NEXT_PUBLIC_GITHUB_URL","VITE_GITHUB_URL") || "https://github.com/"
    },
    {
        name: "LinkedIn",
        url: getEnv("NEXT_PUBLIC_LINKEDIN_URL","VITE_LINKEDIN_URL") || "https://www.linkedin.com/"
    },
    {
        name: "Email",
        url: getEnv("NEXT_PUBLIC_EMAIL", "VITE_EMAIL")
    }
]

export const projectsURLs = [
    {
        name: "Hand written digit recognizer using neural networks",
        url: getEnv("NEXT_PUBLIC_DIGIT_RECOGNIZER_URL", "VITE_DIGIT_RECOGNIZER_URL") || ""
    }
]

export const emailJSConfig = {
    serviceID: getEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID", "VITE_EMAILJS_SERVICE_ID") || "",
    templateID: getEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "VITE_EMAILJS_TEMPLATE_ID") || "",
    publicKey: getEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "VITE_EMAILJS_PUBLIC_KEY") || "",
}