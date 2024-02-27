import React, { useState, useEffect } from 'react'
// import { useClickOutside } from '@mantine/hooks';
import { Button, Image, Group, Title, Text, Stack, Box, Flex, Transition, Paper, Affix } from '@mantine/core';
import { useScrollIntoView, useWindowScroll } from '@mantine/hooks';

function SetComp({ title, description, date, image, childComponent }: { title: string, description: string, date: string, image: string, childComponent: React.ReactNode }) {

    const [isTruncated, setIsTruncated] = useState(false);
    const [scroll, scrollTo] = useWindowScroll();
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({
    duration: 1000,
    offset: 20,
    
  });

//   const [affixPosition, setAffixPosition] = useState({ bottom: 100, right: 80 });

//   useEffect(() => {
//     const handleScroll = () => {
//       const box = document.getElementById('myBox');
//       const boxRect = box.getBoundingClientRect();
//       const affixTop = Math.min(boxRect.bottom, window.innerHeight);

//       setAffixPosition({ bottom: affixTop, right: 80});
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
    
  function closeScroll() {
    if (isTruncated === true) {
        setIsTruncated(false);
        scrollIntoView();
    }
    else {
        setIsTruncated(true);
    }
    }

    // const clickOutsideRef = useClickOutside(() => setIsTruncated(false));


    return (
        <>
            <Box id='myBox' ref={scrollableRef} bg={'white'} style={{ boxShadow: '8px 8px 15px 2px rgba(0, 0, 0, 0.15)', borderRadius: '25px' }}>

                <Stack px={12} py={6} mt={6}>
                    {!isTruncated &&

                        <Flex >
                            <Image
                                    radius="md"
                                    h={200}
                                    w={200}
                                    fit="contain"
                                    src={image}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                    mr={36}
                                // replace fallbackSrc with variables
                            />
                            <Stack>

                                
                            
                                <Stack 
                                // ref={targetRef} 
                                justify="center">
                                        <Title mb={0} order={3}>{title}</Title>
                                        <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                                </Stack>
                                

                                <Text >
                                    {description}
                                </Text>
                                <Button mx={24} my={12} onClick={() => closeScroll()}>
                                    
                                    {isTruncated ? 'Show less' : 'Read more'}
                                    {/* change button style to simple text link */}
                                </Button>
                            </Stack>
                        </Flex>
                        
                        
                    }

                    {isTruncated &&
                        <Box>
                            <Affix position={{bottom: 100, right: 80}}
                            //{{ bottom: 100, right: 80}}
                            >
                                <Transition transition="slide-up" mounted={isTruncated}>
                                    {(transitionStyles) => (
                                        <Button
                                        style={transitionStyles}
                                        onClick={() => closeScroll()
                                            // targetRef.current?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        >
                                            Close "<i>{title}</i>"
                                        </Button>
                                    )}
                                </Transition>

                            </Affix>

                            <Flex ref={scrollableRef}>

                                <Image m={12}
                                    h={200}
                                    w="auto"
                                    fit="contain"
                                    src={image} />
                                <Stack pl={36} justify="center">
                                    <Title order={1}>{title}</Title>
                                    <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                                    {/* A share bar? */}
                                </Stack>

                               

                                {/* TODO: consider tags and definitely add a scrollup function */}
                            </Flex>
                            {childComponent}
                            <Button mx={24} my={12} onClick={() => closeScroll()}>
                        
                                {isTruncated ? 'Close' : 'Read more'}
                                {/* change button style to simple text link */}
                            </Button>
                        </Box>
                        
                        }

                    
                </Stack>

            </Box>


        </>
    );
}

export default SetComp;