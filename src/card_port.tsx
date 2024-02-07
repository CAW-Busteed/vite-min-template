import { Flex, ActionIcon, Stack } from '@mantine/core';
import { useState } from 'react'

import PostComp from './Components/PostComp';

const test_text = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. <br /> Ipsum suspendisse ultrices gravida dictum fusce ut. Ut morbi tincidunt augue interdum velit euismod. Arcu non odio euismod lacinia at quis. Scelerisque purus semper eget duis. Dictum non consectetur a erat nam at lectus urna. Vulputate odio ut enim blandit volutpat maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus. Nisi quis eleifend quam adipiscing vitae proin. Mus mauris vitae ultricies leo integer. Dignissim diam quis enim lobortis. Congue nisi vitae suscipit tellus mauris. Sit amet luctus venenatis lectus magna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eget velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor. Habitasse platea dictumst quisque sagittis. Ultrices tincidunt arcu non sodales neque sodales. Libero enim sed faucibus turpis. Molestie at elementum eu facilisis. Vulputate sapien nec sagittis aliquam. Arcu vitae elementum curabitur vitae nunc sed. Habitant morbi tristique senectus et. Dolor purus non enim praesent elementum. Sit amet dictum sit amet. Lobortis mattis aliquam faucibus purus in massa tempor. Neque sodales ut etiam sit. Ornare massa eget egestas purus viverra accumsan in. Adipiscing tristique risus nec feugiat in. Ut tristique et egestas quis. Tincidunt arcu non sodales neque sodales ut etiam sit. Lacus viverra vitae congue eu consequat ac felis donec. Maecenas sed enim ut sem. A diam sollicitudin tempor id eu nisl nunc mi. Turpis egestas integer eget aliquet nibh. Vulputate ut pharetra sit amet aliquam id diam. A diam maecenas sed enim. Tellus mauris a diam maecenas. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Est ante in nibh mauris cursus mattis molestie a iaculis. Lacus vel facilisis volutpat est velit. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Dolor sit amet consectetur adipiscing elit. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Congue eu consequat ac felis donec et odio. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Faucibus turpis in eu mi bibendum. Quam id leo in vitae. Dui nunc mattis enim ut. Lectus mauris ultrices eros in. Iaculis urna id volutpat lacus. Quam nulla porttitor massa id neque. Tortor condimentum lacinia quis vel eros donec. Augue ut lectus arcu bibendum at varius vel pharetra vel. At tempor commodo ullamcorper a lacus vestibulum. Habitant morbi tristique senectus et netus et malesuada. Eget est lorem ipsum dolor sit amet consectetur. Ac turpis egestas integer eget aliquet nibh praesent. Eleifend mi in nulla posuere sollicitudin aliquam. Sapien faucibus et molestie ac. Tempor orci eu lobortis elementum nibh."


function Portfolio() {
    const [active, setActive] = useState('all');


    return (
        <>


            <Flex mx={36} my={12} style={{ width: '90%', height: '100%' }}>
                <div className="sticky-element">
                    {/* TODO: add to CSS

                    .sticky-element {
                        position: sticky;
                        top: 0;
                    }
                    */}
                    <Stack pr={12}>
                        <ActionIcon onClick={() => setActive("environment")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                            null
                        </ActionIcon>

                        <ActionIcon onClick={() => setActive("writing")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                            null
                        </ActionIcon>

                        <ActionIcon onClick={() => setActive("tech")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                            null
                        </ActionIcon>
                    </Stack>
                </div>

                <Stack align='center'>
                    <PostComp title="Doggone" content={test_text} date="Jul 16, 2022" />
                    <PostComp title="Cattastic" content={test_text} date="Jul 16, 2022" />
                    <PostComp title="Cattastic" content={test_text} date="Jul 16, 2022" />
                    <PostComp title="Cattastic" content={test_text} date="Jul 16, 2022" />
                    <PostComp title="Cattastic" content={test_text} date="Jul 16, 2022" />
                </Stack>

            </Flex>
        </>
    );
}

export default Portfolio;