import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import SearchInput from "./SearchInput";
import NavCategory from "./NavCategory";
import UserAndCart from "./UserAndCart";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      pl={{ base: 2, lg: 45 }}
      pr={{ base: 0, lg: 45 }}
      color={"white"}
      bg={"brand.100"}
    >
      <Flex align={"center"}>
        <Flex>
          <Text mr={2} fontSize={{ base: "20px", lg: "2xl" }}>
            <i className="fa-solid fa-box-open"></i>
          </Text>
          <Text fontSize={{ base: "xl", lg: "2xl" }}>FlashDeal</Text>
        </Flex>
        <Spacer />
        {/* <HamburgerIcon fontSize={"2xl"} onClick={onOpen} /> */}
        {/* <Spacer /> */}
        <Box w={{ lg: "60%" }} display={{ base: "none", md: "block" }}>
          <SearchInput />
        </Box>
        <Spacer />

        <UserAndCart />
        {/* <Spacer /> */}
      </Flex>
      <Box>
        <Drawer
          h="fit-content"
          placement={"top"}
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent w={"fit-content"} h={"fit-content"}>
            <Text fontSize={"sm"} p={3} pb={0} pl={4}>
              TOP CATEGORIES
            </Text>
            <DrawerBody pl={1} pr={1}>
              <NavCategory />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
