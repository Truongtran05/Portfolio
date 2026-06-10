import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor="rgba(11, 7, 30, 0.95)"
          border="1px solid"
          borderColor={isSuccess ? "rgba(72, 187, 120, 0.4)" : "rgba(245, 101, 101, 0.4)"}
          backdropFilter="blur(20px)"
          boxShadow={isSuccess ? "0 0 30px rgba(72, 187, 120, 0.2)" : "0 0 30px rgba(245, 101, 101, 0.2)"}
          borderRadius="2xl"
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color="white">
            {isSuccess ? '🎉 All good!' : '⚠️ Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody color="brand.textMuted">{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              type="button"
              onClick={() => {
                // console.log("closing alert");
                onClose();
              }}
              bg={isSuccess ? "green.500" : "red.500"}
              color="white"
              borderRadius="xl"
              _hover={{
                bg: isSuccess ? "green.600" : "red.600",
                boxShadow: isSuccess ? "0 0 15px rgba(72, 187, 120, 0.4)" : "0 0 15px rgba(245, 101, 101, 0.4)",
              }}
            >
              Close
          </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
