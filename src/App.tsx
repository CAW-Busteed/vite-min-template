import "@mantine/core/styles.css";
import './App.css';

import { Flex, Stack, Container, MantineProvider, Title, ActionIcon, Button } from "@mantine/core";
// import { IconHeart } from '@tabler/icons-react';
import { basicTheme, greenTheme, codeTheme, writeTheme } from "./theme";
import { useState } from "react";

import HistoryLg from "./Components/HistoryLg";
import SkillsBase from "./Components/SkillsBase";

import Contact from "./card_contact";
import Home from "./card_home";
import Blog from "./card_blog";
import Portfolio from "./card_port";



export default function App() {
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(basicTheme);

  // Consider using these at top level to control what is displayed
  // const [environment, setEnvironment] = useState(true);
  // const [writing, setWriting] = useState(true);
  // const [tech, setTech] = useState(true);

  // The Change Theme functions are redundant, because I expect to change them to accomodate fused themes
  const changeThemeGreen = () => {
    if (theme === basicTheme) {
      setTheme(greenTheme);
    } else if (theme === codeTheme) {
      setTheme(greenTheme);
    } else if (theme === writeTheme) {
      setTheme(greenTheme);
    }
    else {
      setTheme(basicTheme);
    }
  };

  const changeThemeCode = () => {
    if (theme === basicTheme) {
      setTheme(codeTheme);
    } else if (theme === greenTheme) {
      setTheme(codeTheme);
    } else if (theme === writeTheme) {
      setTheme(codeTheme);
    }
    else {
      setTheme(basicTheme);
    }
  };

  const changeThemeWrite = () => {
    if (theme === basicTheme) {
      setTheme(writeTheme);
    } else if (theme === codeTheme) {
      setTheme(writeTheme);
    } else if (theme === greenTheme) {
      setTheme(writeTheme);
    }
    else {
      setTheme(basicTheme);
    }
  };


  return <MantineProvider theme={theme}>


    <Container>
      <Container bg='bgColor.9' pl={0} style={{ width: '65%', display: 'flex', alignItems: 'center', position: 'absolute', right: 0, height: '100vh' }}>

        <Stack bg="white" align="center" mr={6} style={{ height: '75%', overflowY: 'auto', width: '100%' }}>
          {/* For best effects have top and bottom blur away...
          set padding for more space if needed */}



          {active === 'home' &&
            // basic home
            <Home />

          }

          {active === 'blog' &&
            // basic blog
            <Blog />
          }

          {active === 'portfolio' &&
            // basic portfolio
            <>
              <Portfolio />
            </>
          }

          {active === 'skills' &&
            // basic skills
            <>
              <SkillsBase />
              <HistoryLg />
              {/* TODO: fix the skillsbase overflow issue, check positioning/overflow of Skillsbase */}
            </>
          }

          {active === 'contact' &&
            // basic contact
            <Contact />
          }

        </Stack>

      </Container>

      <Container
        bg='bgColor.1'
        style={{ height: '100vh', width: '35%', position: 'absolute', left: 0, boxShadow: '8px 0px 15px 0px rgba(0, 0, 0, 0.15)' }} >
        <Stack>
          <Button onClick={changeThemeGreen}> Green</Button>
          <Button onClick={changeThemeCode}> Code</Button>
          <Button onClick={changeThemeWrite}> Write</Button>
        </Stack>
        <Flex justify="center" gap="xl" style={{ alignItems: 'center', justifyContent: 'center', }}>


          <Stack
            h={300}
            // bg="var(--mantine-color-body)"
            align="center"
            justify="space-between"
            py={20}
            pl={20}
          >



            {/* TODO: add icons and have them grow on hover with a word. */}
            <ActionIcon onClick={() => setActive("home")} variant="filled" color={active == 'home' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            // should the home button be bigger, or uniform?
            // style={{ backgroundColor: 'white' }}
            >
              {/* Home */}
              Home
            </ActionIcon>
            <ActionIcon onClick={() => setActive("blog")} variant='filled' color={active == 'blog' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            // style={{ backgroundColor: 'white' }}
            >
              {/* Blog */}
              Blog
            </ActionIcon>
            <ActionIcon onClick={() => setActive("portfolio")} variant='filled' color={active == 'portfolio' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            // style={{ backgroundColor: 'white' }}
            >
              {/* Portfolio */}
              Portfolio
            </ActionIcon>
            <ActionIcon onClick={() => setActive("skills")} variant='filled' color={active == 'skills' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            // style={{ backgroundColor: 'white' }}
            >
              {/* Skills */}
              Skills
            </ActionIcon>
            <ActionIcon onClick={() => setActive("contact")} variant='filled' color={active == 'contact' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            // style={{ backgroundColor: 'white' }}
            >
              {/* Contact */}
              Contact
            </ActionIcon>

          </Stack>
          <Title order={1} p={20} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Cedric Busteed</Title>



        </Flex>
      </Container>

    </Container>

  </MantineProvider >;
}
