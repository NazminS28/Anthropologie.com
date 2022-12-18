import { AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Alert } from "bootstrap";
import React from "react";

export default function Placed() {
  return (
    <div>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Order Placed !
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks You for your order .
        </AlertDescription>
      </Alert>
    </div>
  );
}
