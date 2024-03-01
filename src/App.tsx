import "@mantine/core/styles.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import { Flex, Stack, Container, MantineProvider, Title, ActionIcon, Button } from "@mantine/core";
import { useWindowScroll, useHover } from '@mantine/hooks';

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

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple"); 

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);

  const buttons = document.getElementsByTagName("ripple-button");
  for (const button of buttons) {
  button.addEventListener("click", createRipple);
  }
}

function useEffect(() => {
  const elements = document.querySelectorAll('.main-child');
  elements.forEach(element => {
    element.addEventListener('animationend', () => {
      if (element.classList.contains('main-child')) {
        element.style.display = 'none';
      }
    });
  });

  return () => {
    elements.forEach(element => {
      element.removeEventListener('animationend', () => {
        if (element.classList.contains('main-child')) {
          element.style.display = 'none';
        }
      });
    });
  };
}, []);


export default function App() {


  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(fullTheme);

  function setPage( activeState: string, aimState: string) {
    const element = document.getElementById(aimState);
    //check if state is different
    if (activeState !== aimState) {
      if (element) {
      // element.style.width = "90%";
      // console.log(element);
      element.style.width = "0";
      console.log(element);
      setActive(aimState);
      console.log(active);
      }
    }
      //enact exit transition
      //change state
      //enact enter transition
  }


  const changeTheme = () => {
    if (themeCombo.eco === true) {
      if (themeCombo.write === true) {
        if (themeCombo.tech === true) {
          setTheme(fullTheme);
          // combination of all themes 
        }
        else {
        setTheme(forestTheme);
        // combination of eco and write 
        }
      }
      else if (themeCombo.tech === true) {
        setTheme(oceanTheme);
        // combination of eco and tech 
      }
      else {
      setTheme(greenTheme);
      //only eco
      }
    }
    else if (themeCombo.write === true) {
      if (themeCombo.tech === true) {
        setTheme(mountainTheme);
        //  write and tech 
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


  const toggleEnv = (event) => {
    createRipple(event);
    setEnvironment(!environment);
    themeCombo.eco = !themeCombo.eco;
    {console.log(themeCombo)}
    changeTheme();
    
  }

  const toggleTech = (event) => {
    createRipple(event);
    setTech(!tech);
    themeCombo.tech = !themeCombo.tech;
    {console.log(themeCombo)}
    changeTheme();
    
  }

  const toggleWrite = (event) => {
    createRipple(event);
    setWriting(!writing);
    themeCombo.write = !themeCombo.write;
    {console.log(themeCombo)}
    changeTheme();
    
  }


  return <MantineProvider theme={theme}>


    <Container>
      <Container
        bg='bgColor.2' px={0} style={{ width: '65%', display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>

        <Stack
          className="parent"
          bg="white" align="center" pr={6} 
          >


              {/* {active === 'home' && */}
                <div 
                id="home"
                className={active === 'home' ? "main-child" : "main-childclose"}
                >
                  <Home environment={environment} writing={writing} tech={tech} />
                </div>
              {/* } */}

              {/* {active === 'blog' && */}
                <div 
                id="blog"
                className={active === 'blog' ? "main-child" : "main-childclose"}>
                  <Blog />
                </div>
                
              {/* } */}

              {/* {active === 'portfolio' && */}
                
                <div 
                id="portfolio"
                className={active === 'portfolio' ? "main-child" : "main-childclose"}> 

                  <Portfolio environment={environment} setEnvironment={setEnvironment} writing={writing} setWriting={setWriting} tech={tech} setTech={setTech} />

                </div>
              {/* } */}

              {/* {active === 'skills' && */}
                
                <div 
                id="skills"
                className={active === 'skills' ? "main-child" : "main-childclose"}>
                  <SkillsBase environment={environment} setEnvironment={setEnvironment} writing={writing} setWriting={setWriting} tech={tech} setTech={setTech} />

                </div>
              {/* } */}

              {/* {active === 'contact' && */}
                <div className={active === 'contact' ? "main-child" : "main-childclose"}>
                <Contact />
                </div>
              {/* } */}

        </Stack>

      </Container>

      <Container
        bg='bgColor.1'
        style={{ 
        height: '100vh', 
        width: '35%', position: 'fixed', top:0, left: 0, 
        boxShadow: '8px 0px 15px 0px rgba(0, 0, 0, 0.15)' }} 
        className="main">
        <Stack>
          <Button onClick={(event) => toggleEnv(event)} color={environment ? 'green' : 'gray'}
          className="ripple-button"
          > Green</Button>
          <Button onClick={(event) => toggleTech(event)} color={tech ? 'blue' : 'gray'}
          className="ripple-button"
          > Code</Button>
          <Button onClick={(event) => toggleWrite(event)} color={writing ? 'cyan' : 'gray'}
          className="ripple-button"
          > Write</Button>
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


            <ActionIcon autoContrast 
            // onClick={() => setPage(active, 'home')}
            onClick={() => setActive("home")}
            variant="filled" color={active == 'home' ? "bgColor.3" : "bgColor.5"} radius='xl' size={'lg'}
            
            >
              {/* Home */}
              Home
            </ActionIcon>
            <ActionIcon autoContrast onClick={() => setActive("blog")} variant='filled' color={active == 'blog' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            
            
            >
              {/* Blog */}
              Blog
            </ActionIcon>
            <ActionIcon autoContrast onClick={() => setActive("portfolio")} variant='filled' color={active == 'portfolio' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            
            
            >
              {/* Portfolio */}
              Portfolio
            </ActionIcon>
            <ActionIcon autoContrast onClick={() => setActive("skills")} variant='filled' color={active == 'skills' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            
            
            >
              {/* Skills */}
              Skills
            </ActionIcon>
            <ActionIcon autoContrast onClick={() => setActive("contact")} variant='filled' color={active == 'contact' ? "bgColor.3" : "bgColor.5"} radius='xl' size='lg'
            
            
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
