import "@mantine/core/styles.css";
import { Flex, Stack, Button, Container, MantineProvider, Title, ActionIcon } from "@mantine/core";
// import { IconHeart } from '@tabler/icons-react';
import { theme } from "./theme";
import PostComp from "./Components/PostComp";
import HistoryLg from "./Components/HistoryLg";
import SkillsBase from "./Components/SkillsBase";
import { useState } from "react";
// import About from "./Components/About";

const test_text = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. <br /> Ipsum suspendisse ultrices gravida dictum fusce ut. Ut morbi tincidunt augue interdum velit euismod. Arcu non odio euismod lacinia at quis. Scelerisque purus semper eget duis. Dictum non consectetur a erat nam at lectus urna. Vulputate odio ut enim blandit volutpat maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus. Nisi quis eleifend quam adipiscing vitae proin. Mus mauris vitae ultricies leo integer. Dignissim diam quis enim lobortis. Congue nisi vitae suscipit tellus mauris. Sit amet luctus venenatis lectus magna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eget velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor. Habitasse platea dictumst quisque sagittis. Ultrices tincidunt arcu non sodales neque sodales. Libero enim sed faucibus turpis. Molestie at elementum eu facilisis. Vulputate sapien nec sagittis aliquam. Arcu vitae elementum curabitur vitae nunc sed. Habitant morbi tristique senectus et. Dolor purus non enim praesent elementum. Sit amet dictum sit amet. Lobortis mattis aliquam faucibus purus in massa tempor. Neque sodales ut etiam sit. Ornare massa eget egestas purus viverra accumsan in. Adipiscing tristique risus nec feugiat in. Ut tristique et egestas quis. Tincidunt arcu non sodales neque sodales ut etiam sit. Lacus viverra vitae congue eu consequat ac felis donec. Maecenas sed enim ut sem. A diam sollicitudin tempor id eu nisl nunc mi. Turpis egestas integer eget aliquet nibh. Vulputate ut pharetra sit amet aliquam id diam. A diam maecenas sed enim. Tellus mauris a diam maecenas. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Est ante in nibh mauris cursus mattis molestie a iaculis. Lacus vel facilisis volutpat est velit. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Dolor sit amet consectetur adipiscing elit. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Congue eu consequat ac felis donec et odio. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Faucibus turpis in eu mi bibendum. Quam id leo in vitae. Dui nunc mattis enim ut. Lectus mauris ultrices eros in. Iaculis urna id volutpat lacus. Quam nulla porttitor massa id neque. Tortor condimentum lacinia quis vel eros donec. Augue ut lectus arcu bibendum at varius vel pharetra vel. At tempor commodo ullamcorper a lacus vestibulum. Habitant morbi tristique senectus et netus et malesuada. Eget est lorem ipsum dolor sit amet consectetur. Ac turpis egestas integer eget aliquet nibh praesent. Eleifend mi in nulla posuere sollicitudin aliquam. Sapien faucibus et molestie ac. Tempor orci eu lobortis elementum nibh."

export default function App() {
  const [active, setActive] = useState('home');

  return <MantineProvider theme={theme}>


    <Container>
      <Container bg='cyan' pl={0} style={{ width: '65%', display: 'flex', alignItems: 'center', position: 'absolute', right: 0, height: '100vh' }}>

        <Stack bg="white" align="center" mr={24} style={{ height: '75%', overflowY: 'auto' }}>
          {/* For best effects have top and bottom blur away...
          set padding for more space if needed */}



          {active === 'home' &&
            // basic home
            null
          }

          {active === 'blog' &&
            // basic blog
            null
          }

          {active === 'portfolio' &&
            // basic portfolio
            <>
              <PostComp title="Doggone" content={test_text} date="Jul 16, 2022" />
              <PostComp title="Cattastic" content={test_text} date="Jul 16, 2022" />
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
            null
          }

        </Stack>

      </Container>

      <Flex style={{ height: '100vh', width: '35%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', boxShadow: '8px 0px 15px 0px rgba(0, 0, 0, 0.15)' }} justify="space-between" gap="xl">
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="flex-start"
          py={20}
          pl={20}
        >
          <ActionIcon onClick={() => setActive("home")} variant='outline' color='gray' radius='xl' size='xl' style={{ backgroundColor: 'white' }}>
            {/* Home */}
          </ActionIcon>
          <ActionIcon onClick={() => setActive("blog")} variant='outline' color='gray' radius='xl' size='xl' style={{ backgroundColor: 'white' }}>
            {/* Blog */}
          </ActionIcon>
          <ActionIcon onClick={() => setActive("portfolio")} variant='outline' color='gray' radius='xl' size='xl' style={{ backgroundColor: 'white' }}>
            {/* Portfolio */}
          </ActionIcon>
          <ActionIcon onClick={() => setActive("skills")} variant='outline' color='gray' radius='xl' size='xl' style={{ backgroundColor: 'white' }}>
            {/* Skills */}
          </ActionIcon>
          <ActionIcon onClick={() => setActive("contact")} variant='outline' color='gray' radius='xl' size='xl' style={{ backgroundColor: 'white' }}>
            {/* Contact */}
          </ActionIcon>

        </Stack>
        <Title order={1} p={20} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Cedric Busteed</Title>
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="flex-end"
          p={20}
        >
          <Button>Twitter</Button>
          <Button>Medium</Button>
          <Button>Facebook</Button>
          <Button>GitHub</Button>
          <Button>Youtube</Button>
        </Stack>


      </Flex>

    </Container>

  </MantineProvider >;
}
