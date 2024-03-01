import React, { useState, useEffect, useRef } from 'react'
// import { useClickOutside } from '@mantine/hooks';
import { Button, Image, Title, Text, Stack, Box, Flex, Transition, Affix } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';


function SetComp({ title, description, date, image, childComponent }: { title: string, description: string, date: string, image: string, childComponent: React.ReactNode }) {

    const [isTruncated, setIsTruncated] = useState(false);
    const [scroll, scrollTo] = useWindowScroll();

    const elementRef = useRef<HTMLDivElement | null>(null);
    const [elementTop, setElementTop] = useState(0);

    useEffect(() => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setElementTop(rect.top + window.scrollY);
        }
    }, [elementRef]);
    
    function closeScroll(x: number) {
        
        if (isTruncated === true) {
            console.log(x);
            console.log('isTruncated, closing');
            scrollTo({ y: x });
            
            setIsTruncated(false);
            
        }
        else {
            x = scroll.y;
            console.log(x);
            console.log('is not Truncated, opening');
            setIsTruncated(true);
        }
    }
    


    return (
        <>
            <Box id='myBox' 
            // ref={scrollableRef} 
            bg={'white'} 
            style={{ boxShadow: '8px 8px 15px 2px rgba(0, 0, 0, 0.15)', borderRadius: '25px' }}>

                <Stack 
                ref={elementRef}
                id='topElement'
                px={12} py={6} mt={6}>
                    {!isTruncated &&

                        <Flex 
                        // ref={targetRef}
                         >
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
                                justify="center">
                                        <Title mb={0} order={3}>{title}</Title>
                                        <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                                </Stack>
                                

                                <Text >
                                    {description}
                                            
                                </Text>
                                <Button mx={24} my={12} onClick={() => closeScroll(elementTop)}>
                                    
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
                                        onClick={() => closeScroll(elementTop)
                                        }
                                        >
                                            Close "<i>{title}</i>"
                                        </Button>
                                    )}
                                </Transition>

                            </Affix>

                            <Flex 
                            // ref={scrollableRef}
                            >

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
                            <Button mx={24} my={12} onClick={() => closeScroll(elementTop)}>
                        
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