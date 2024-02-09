import "@mantine/core/styles.css";

import { Flex, Stack, Container, MantineProvider, Title, ActionIcon } from "@mantine/core";
// import { IconHeart } from '@tabler/icons-react';
import { theme } from "./theme";
import { useState } from "react";
import HistoryLg from "./Components/HistoryLg";
import SkillsBase from "./Components/SkillsBase";

import Contact from "./card_contact";
import Home from "./card_home";
import Blog from "./card_blog";
import Portfolio from "./card_port";



export default function App() {
  const [active, setActive] = useState('home');

  return <MantineProvider theme={theme}>


    <Container>
      <Container bg='cyan' pl={0} style={{ width: '65%', display: 'flex', alignItems: 'center', position: 'absolute', right: 0, height: '100vh' }}>

        <Stack bg="white" align="center" mr={24} style={{ height: '75%', overflowY: 'auto', width: '100%' }}>
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
            </>
          }

          {active === 'contact' &&
            // basic contact
            <Contact />
          }

        </Stack>

      </Container>

      <Flex style={{ height: '100vh', width: '35%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', boxShadow: '8px 0px 15px 0px rgba(0, 0, 0, 0.15)' }} justify="center" gap="xl">
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="flex-start"
          py={20}
          pl={20}
        >
          {/* TODO: add icons and have them grow on hover with a word. */}
          <ActionIcon onClick={() => setActive("home")} variant={active == 'home' ? "filled" : "outline"} color='cyan' radius='xl' size='xl'
          // style={{ backgroundColor: 'white' }}
          >
            {/* Home */}
            Home
          </ActionIcon>
          <ActionIcon onClick={() => setActive("blog")} variant={active == 'blog' ? "filled" : "outline"} color='gray' radius='xl' size='xl'
          // style={{ backgroundColor: 'white' }}
          >
            {/* Blog */}
            Blog
          </ActionIcon>
          <ActionIcon onClick={() => setActive("portfolio")} variant={active == 'portfolio' ? "filled" : "outline"} color='gray' radius='xl' size='xl'
          // style={{ backgroundColor: 'white' }}
          >
            {/* Portfolio */}
            Portfolio
          </ActionIcon>
          <ActionIcon onClick={() => setActive("skills")} variant={active == 'skills' ? "filled" : "outline"} color='gray' radius='xl' size='xl'
          // style={{ backgroundColor: 'white' }}
          >
            {/* Skills */}
            Skills
          </ActionIcon>
          <ActionIcon onClick={() => setActive("contact")} variant={active == 'contact' ? "filled" : "outline"} color='gray' radius='xl' size='xl'
          // style={{ backgroundColor: 'white' }}
          >
            {/* Contact */}
            Contact
          </ActionIcon>

        </Stack>
        <Title order={1} p={20} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Cedric Busteed</Title>



      </Flex>

    </Container>

  </MantineProvider >;
}
