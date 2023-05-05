import React from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in ";
const bioSpan = "react".toUpperCase();;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar marginBottom={"30px"} src="https://i.pravatar.cc/150?img=7" size='2xl'/>
    <Heading style={{margin: "0px 0px 20px 0px"}} as="h1" size='2xl'>{greeting}</Heading>
    <Heading style={{margin: "0px 0px 5px 0px"}} as="h2" size='4xl'>{bio1}</Heading>
    <Heading as="h2" size='4xl'>{bio2}<span style={{ fontWeight: 700, color: "#18181b"}}>{bioSpan}</span></Heading>
  </FullScreenSection>
);

export default LandingSection;
