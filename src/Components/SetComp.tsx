import { useState } from 'react'
import { Button, Image, Group, Title, Text, Stack, Box } from '@mantine/core';

function SetComp({ title, description, date, childComponent }: { title: string, description: string, date: string, childComponent: React.ReactNode }) {

    const [isTruncated, setIsTruncated] = useState(true);

    return (
        <>
            <Box maw='90%' bg={'gray.1'} style={{ border: '1px solid black' }}>
                <Stack px={12} py={6}>
                    <Group >
                        <Image
                            radius="md"
                            h={50}
                            w={200}
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        // replace src and fallbackSrc with variables
                        />
                        <Stack>
                            <Title mb={0} order={3}>{title}</Title>
                            <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                        </Stack>

                    </Group>

                    <Text mx={6} lineClamp={isTruncated ? 4 : false}>
                        {description}
                    </Text>
                    {isTruncated && <Box>
                        {childComponent}
                    </Box>}

                    <Button mx={24} onClick={() => setIsTruncated(!isTruncated)}>
                        {isTruncated ? 'Show more' : 'Show less'}
                        {/* change button style to simple text link */}
                    </Button>
                </Stack>

            </Box>


        </>
    );
}

export default SetComp;