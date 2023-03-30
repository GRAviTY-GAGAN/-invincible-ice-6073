import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const SearchInput = () => {
  return (
    <Flex w={{ md: "100%" }} justify={"space-between"}>
      <Input w={"100%"} color="black" borderRightRadius={"0"} bg={"white"} />
      <Button
        fontWeight={400}
        pl={{ md: 5 }}
        pr={{ md: 5 }}
        borderLeftRadius={"0"}
        _hover={{ background: "#333" }}
        bg={"#333"}
        variant="solid"
      >
        <i class="fa-solid fa-magnifying-glass"></i> <Text ml={2}>Search</Text>
      </Button>
    </Flex>
  );
};

export default SearchInput;
