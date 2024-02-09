import { Title, Stack, Text, Button } from "@mantine/core";

// TODO: add a form to send an email?
// TODO: Have it fill out the whole box  OR: have it slip from below the nav bar with socials and copyright

function Contact() {
    return (

        <>
            <Stack mx={36} style={{ flex: 1 }}>

                {/* <Flex
                    // mih={50}
                    gap="md"
                    justify="center"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                > */}
                <Title my={12} order={2}>Contact</Title>
                <Stack px={12} gap={'xs'}>
                    <Title order={5}>Email: </Title>
                    <Text><a href='mailto:cedric.a.busteed@gmail.com'> cedric.a.busteed@gmail.com</a></Text>
                </Stack>
                <Stack px={12} gap={'xs'}>
                    <Title order={5}>Phone: </Title>
                    <Text><a href='786-208-7395'> (786) 208-7395</a></Text>
                </Stack>
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
                {/* </Flex> */}
            </Stack>
        </>
    );
}

export default Contact;