import { Stack, Image, Title, Text, Box, Flex } from "@mantine/core";


function BlogArchiveButton({ title, description, date, image }: { title: string, description: string, date: string, image: string }) {
    return (
        <>
            <Box maw='90%' bg={'gray.1'}

                style={{ boxShadow: '8px 8px 15px 2px rgba(0, 0, 0, 0.15)', borderRadius: '25px' }}
            >
                <Stack px={12} py={6}>


                    <Flex >
                        <Image
                            radius="md"
                            h={100}
                            w={200}
                            fit="contain"
                            src={image}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            mx={6}
                        // replace fallbackSrc with variables
                        />
                        <Stack justify="center">
                            <Title mb={0} order={3}>{title}</Title>
                            <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
                        </Stack>

                    </Flex>

                    <Text mx={6}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </>
    );
}
export default BlogArchiveButton;