import { useState } from 'react'
import { Button, Image, Group, Title, Text, Stack, Box, Flex } from '@mantine/core';

function SetComp({ title, description, date, image, childComponent }: { title: string, description: string, date: string, image: string, childComponent: React.ReactNode }) {

    const [isTruncated, setIsTruncated] = useState(false);

    return (
        <>
            <Box bg={'gray.1'} style={{ boxShadow: '8px 8px 15px 2px rgba(0, 0, 0, 0.15)' }}>
                <Stack px={12} py={6}>
                    {!isTruncated &&
                        <Stack>
                            <Group >
                                <Image
                                    radius="md"
                                    h={50}
                                    w={200}
                                    fit="contain"
                                    src={image}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                // replace fallbackSrc with variables
                                />
                                <Stack justify="center">
                                    <Title mb={0} order={3}>{title}</Title>
                                    <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                                </Stack>

                            </Group>

                            <Text mx={6}>
                                {description}
                            </Text>
                        </Stack>}

                    {isTruncated &&
                        <Box>
                            <Flex>

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
                            </Flex>
                            {childComponent}
                        </Box>}

                    <Button mx={24} my={12} onClick={() => setIsTruncated(!isTruncated)}>
                        {isTruncated ? 'Show less' : 'Read more'}
                        {/* change button style to simple text link */}
                    </Button>
                </Stack>

            </Box>


        </>
    );
}

export default SetComp;