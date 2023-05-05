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
    url: "mailto: example@example.com",
  },
  {
    icon: faGithub,
    key: 'github',
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    key: 'linkedIn',
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    key: 'medium',
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    key: 'stack-overflow',
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;

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
          py={0}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul>
              <HStack
                px={16}
                py={4}
                spacing={8}
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
              <a onClick={() => handleClick('projects')} href="/#projects-section">Projects</a>
              <a onClick={() => handleClick('contactme')} href="/#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
