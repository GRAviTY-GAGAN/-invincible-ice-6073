import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RadioCard from "../components/SingleProduct/RadioCard";

const SingleProduct = () => {
  let product = JSON.parse(localStorage.getItem("product")) || null;

  console.log(product, "PROD");

  const options = ["S", "M", "L", "XL", "2XL"];
  const [productSize, setProductSize] = useState("");

  console.log(productSize);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: setProductSize,
  });

  const group = getRootProps();
  return (
    <Box
      w={{ base: "90%", lg: "80%", xl: "70%", "2xl": "70%" }}
      m={"auto"}
      mt={"4rem"}
      mb={"4rem"}
      bg={"white"}
      borderRadius="10px"
    >
      <Flex direction={{ base: "column", lg: "row", "2xl": "row" }}>
        <Box
          p={4}
          w={{ base: "100%", md: "100%", lg: "70%", xl: "50%", "2xl": "50%" }}
        >
          <Image
            w={{ base: "100%", lg: "90%", xl: "100%", "2xl": "80%" }}
            src={product?.image}
            m={"auto"}
            borderRadius="15px"
          />
        </Box>
        <Flex
          pr={{ "2xl": "40px" }}
          w={{ lg: "70%" }}
          direction={"column"}
          justify={{ lg: "" }}
          p={4}
          ml={{ xl: "20px" }}
        >
          <Heading fontSize={{ base: "2xl" }} fontWeight={500}>
            {product?.name}
          </Heading>
          <Text pt={{ base: "1" }} pb={{ base: "1" }} fontWeight={600}>
            Rating: {product?.rating}
          </Text>
          <Text
            pt={{ base: "1" }}
            pb={{ base: "1" }}
            fontWeight={600}
            color={"brand.100"}
          >
            Price: ₹ {product?.price}
          </Text>
          <Flex
            flexWrap={"wrap"}
            justify={"space-around"}
            w={"fit-content"}
            pt={{ base: "2" }}
            pb={{ base: "4" }}
            {...group}
          >
            {options.map((value, i) => {
              const radio = getRadioProps({ value });
              return (
                <Box key={i} mr={{ base: "3.3px", sm: "10px" }}>
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                </Box>
              );
            })}
          </Flex>
          <Box>
            <Button
              pt={"1px"}
              fontWeight={500}
              _hover={{
                backgroundColor: "#333",
                color: "white",
              }}
              variant={"solid"}
              color={"white"}
              bg="#333"
              mr={4}
            >
              ADD TO CART{" "}
            </Button>
            <Button
              _hover={{
                backgroundColor: "brand.100",
                color: "white",
              }}
              bg={"brand.100"}
              color={"white"}
              variant={"solid"}
            >
              <Flex fontWeight={500} align={"center"} justify={"center"}>
                <i className="fa-solid fa-box-open"></i>
                <Text pt={"1px"} ml={2}>
                  BUY NOW
                </Text>
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
