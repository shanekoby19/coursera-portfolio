import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    key: 'email',
    url: "mailto: skobylecky1@gmail.com ",
  },
  {
    icon: faGithub,
    key: 'github',
    url: "https://github.com/shanekoby19",
  },
  {
    icon: faLinkedin,
    key: 'linkedIn',
    url: "https://www.linkedin.com/in/shane-kobylecky/",
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    console.log(element);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul>
              <HStack
                px={16}
                py={4}
                spacing={4}
              >
                {socials.map(social => (
                  <a style={{ textDecoration: "none", listStyle: "none" }} href={social.url} target="_blank" key={social.key}>
                    <li>
                      <FontAwesomeIcon icon={social.icon} size='2x' />
                    </li>
                  </a>
                ))}
              </HStack>
            </ul>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={() => handleClick('contactme')} href="/#contactme">Contact Me</a>
              <a onClick={() => handleClick('projects')} href="/#projects">Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
