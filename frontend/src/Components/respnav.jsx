import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Image
            margin="auto"
            width="90%"
            src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
          />

          <DrawerBody>
            <Box textAlign="center">
              <Heading marginTop="30px" marginBottom="25px" size="sm">
                <Link to="/">Gift</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="/"> New</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link> Gift for Mom</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="/cloth"> Dresses</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="/shoes"> Clothing</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="furniture"> Accessories</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="gardens"> Home & Furniture</Link>{" "}
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link> Beauty & Wellness</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                {" "}
                <Link to="/"> Weddings</Link>
              </Heading>
              <Heading marginBottom="25px" size="sm">
                <Link to="/sale"> Sale</Link>
              </Heading>
             
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
