import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Pete!";
const bio1 = "A frontend developer,";
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
    <Avatar src="https://i.pravatar.cc/150?img=7" size='2xl'/>
    <h1 style={{ fontSize: "3rem" }}>{greeting}</h1>
    <h2 style={{ fontSize: "1.5rem" }}>{bio1}</h2>
    <h2 style={{ fontSize: "1.5rem" }}>{bio2}<span style={{ fontWeight: 700, color: "#18181b"}}>{bioSpan}</span></h2>
  </FullScreenSection>
);

export default LandingSection;
