import { Stack, Group, Image, Title, Text, Box } from "@mantine/core";


function BlogArchiveButton({ title, description, date, image }: { title: string, description: string, date: string, image: string }) {
    return (
        <>
            <Box maw='90%' bg={'gray.1'} style={{ boxShadow: '8px 8px 15px 2px rgba(0, 0, 0, 0.15)' }}>
                <Stack px={12} py={6}>


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
                </Stack>
            </Box>
        </>
    );
}
export default BlogArchiveButton;