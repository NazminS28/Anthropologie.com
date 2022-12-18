import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

import "../Components/respnav.css";

export function RespNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box className="resp-nav">
      <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo will be placed here</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Search here" />
            <Box textAlign="center" >
              <Heading marginTop="30px" marginBottom="25px" size="sm">Gift</Heading>
              <Heading marginBottom="25px" size="sm">New</Heading>
              <Heading marginBottom="25px" size="sm">Gift for Mom</Heading>
              <Heading marginBottom="25px" size="sm">Dresses</Heading>
              <Heading marginBottom="25px" size="sm">Clothing</Heading>
              <Heading marginBottom="25px" size="sm">Accessories</Heading>
              <Heading marginBottom="25px" size="sm"> Home & Furniture</Heading>
              <Heading marginBottom="25px" size="sm"> Beauty & Wellness</Heading>
              <Heading marginBottom="25px" size="sm">Weddings</Heading>

            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button margin="auto" alignItems="center" colorScheme="gray">
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
