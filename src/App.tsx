import "@mantine/core/styles.css";
import './App.css';

import { Flex, Stack, Container, MantineProvider, Title, ActionIcon, Button } from "@mantine/core";
// import { IconHeart } from '@tabler/icons-react';
import { basicTheme, greenTheme, codeTheme, writeTheme, fullTheme, oceanTheme, forestTheme, mountainTheme } from "./theme";
import { useState } from "react";

// import HistoryLg from "./Components/HistoryLg";
import SkillsBase from "./Components/SkillsBase";

import Contact from "./card_contact";
import Home from "./card_home";
import Blog from "./card_blog";
import Portfolio from "./card_port";

let themeCombo = {
  eco : true,
  write : true,
  tech : true
};

export default function App() {
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(basicTheme);



  const changeTheme = () => {
    if (themeCombo.eco === true) {
      if (themeCombo.write === true) {
        if (themeCombo.tech === true) {
          setTheme(fullTheme);
          // combination of all themes UPDATE
        }
        else {
        setTheme(forestTheme);
        // combination of eco and write REPLACE
        }
      }
      else if (themeCombo.tech === true) {
        setTheme(oceanTheme);
        // combination of eco and tech REPLACE
      }
      else {
      setTheme(greenTheme);
      //only eco
      }
    }
    else if (themeCombo.write === true) {
      if (themeCombo.tech === true) {
        setTheme(mountainTheme);
        // only write and tech REPLACE
      }
      else {
        setTheme(writeTheme);
        // only write
      }
    }
    else if (themeCombo.tech === true) {
      setTheme(codeTheme);
      // only tech
    }
    else {
      setTheme(basicTheme);
      // none
    }
  }

  // Consider using these at top level to control what is displayed
  const [environment, setEnvironment] = useState(true);
  const [writing, setWriting] = useState(true);
  const [tech, setTech] = useState(true);


  const toggleEnv = () => {
    setEnvironment(!environment);
    themeCombo.eco = !themeCombo.eco;
    {console.log(themeCombo)}
    changeTheme();
    
  }

  const toggleTech = () => {
    setTech(!tech);
    themeCombo.tech = !themeCombo.tech;
    {console.log(themeCombo)}
    changeTheme();
    
  }

  const toggleWrite = () => {
    setWriting(!writing);
    themeCombo.write = !themeCombo.write;
    {console.log(themeCombo)}
    changeTheme();
    
  }


  return <MantineProvider theme={theme}>


    <Container>
      <Container
        bg='bgColor.2' pl={0} style={{ width: '65%', display: 'flex', alignItems: 'center', position: 'absolute', right: 0, height: '100vh' }}>

        <Stack
          bg="white" align="center" mr={6} style={{ height: '75%', overflowY: 'auto', width: '100%' }}>
          {/* For best effects have top and bottom blur away...
          set padding for more space if needed */}



          {active === 'home' &&
            // basic home
            <Home environment={environment} setEnvironment={setEnvironment} writing={writing} setWriting={setWriting} tech={tech} setTech={setTech}/>

          }

          {active === 'blog' &&
            // basic blog
            <Blog />
          }

          {active === 'portfolio' &&
            // basic portfolio
            <>
              <Portfolio environment={environment} setEnvironment={setEnvironment} writing={writing} setWriting={setWriting} tech={tech} setTech={setTech} />
            </>
          }

          {active === 'skills' &&
            // basic skills
            <>
              <SkillsBase environment={environment} setEnvironment={setEnvironment} writing={writing} setWriting={setWriting} tech={tech} setTech={setTech} />

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
        style={{ 
        height: '100vh', width: '35%', position: 'absolute', left: 0, 
        boxShadow: '8px 0px 15px 0px rgba(0, 0, 0, 0.15)' }} 
        className="main">
        <Stack>
          <Button onClick={() => toggleEnv()} color={environment ? 'green' : 'gray'}> Green</Button>
          <Button onClick={() => toggleTech()} color={tech ? 'blue' : 'gray'}> Code</Button>
          <Button onClick={() => toggleWrite()} color={writing ? 'cyan' : 'gray'}> Write</Button>
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
