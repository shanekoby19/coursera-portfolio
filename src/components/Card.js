import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <VStack color="black" alignItems={"left"} bg="white" borderRadius={"10px"} paddingBottom={"10px"}>
      <Image borderRadius={"10px"} src={imageSrc}></Image>
      <Heading as="h2" paddingLeft="10px" size='md'>{title}</Heading>
      <Text paddingLeft="10px">{description}</Text>
      <HStack>
        <Text paddingLeft="10px" size="sm">See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
