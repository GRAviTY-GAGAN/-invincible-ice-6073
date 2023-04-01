import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserAndCart = () => {
  const navigate = useNavigate();

  return (
    <Flex align={"center"}>
      <Box
        cursor={"pointer"}
        p={4}
        // borderLeft={"1px solid RGBA(0, 0, 0, 0.24)"}
        // borderRight={"1px solid RGBA(0, 0, 0, 0.24)"}
      >
        <Flex align={"center"}>
          <Text fontSize={{ base: "md", lg: "large" }} mr={2}>
            Cart
          </Text>
          <Box position={"relative"} fontSize={{ base: "small", lg: "large" }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              top={"-5px"}
              right="-9px"
              backgroundColor={"white"}
              color="black"
              borderRadius={"50%"}
              w={"15px"}
              h={"15px"}
              fontSize={{ base: "small" }}
              position={"absolute"}
            >
              0
            </Box>
            <i className="fa-solid fa-cart-shopping"></i>
          </Box>
        </Flex>
      </Box>
      <Popover trigger="hover">
        <Box
          cursor={"pointer"}
          p={2}
          _hover={{
            background: "#333",
            color: "",
            borderTopRadius: "5px",
          }}
          //   borderRight={"1px solid RGBA(0, 0, 0, 0.24)"}
        >
          <PopoverTrigger>
            <Flex align={"center"}>
              <Text fontSize={{ base: "md", lg: "large" }} mr={2}>
                User
              </Text>
              <Flex
                borderRadius={50}
                justify={"center"}
                align={"center"}
                fontSize={{ base: "small", lg: "large" }}
                h={{ base: 7, lg: 10 }}
                w={{ base: 7, lg: 10 }}
                bg={"RGBA(0, 0, 0, 0.24)"}
              >
                <i className="fa-solid fa-user"></i>
              </Flex>
            </Flex>
          </PopoverTrigger>
          <PopoverContent borderColor="#333" w={"10rem"} bg={"#333"}>
            {/* <PopoverArrow /> */}
            {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
            <PopoverBody borderColor={"#333"}>
              <Text pb={2} pt={2}>
                Hello, user
              </Text>
              <Button
                _hover={{
                  background: "RGBA(255, 255, 255, 0.48)",
                  color: "",
                  borderTopRadius: "5px",
                }}
                variant={"solid"}
                fontWeight={500}
                w={"100%"}
                bg={"RGBA(255, 255, 255, 0.48)"}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign In
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Box>
      </Popover>
    </Flex>
  );
};

export default UserAndCart;
