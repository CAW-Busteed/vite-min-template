import { Title, Stack, Text, Flex, Image, Box } from "@mantine/core";
import Pic from "./assets/cb_profile_image.jpg";

interface AboutProps {
    title: string;
    text: string;
}

function About({ title, text }: AboutProps) {
    return (
        <Flex>
            <Stack mr={12}>
                <Title order={3}>{title}</Title>
                <Text>{text}</Text>
            </Stack>
            <Box>
                <Image radius={'xl'} src={Pic} />
            </Box>
        </Flex>
    );
};

export default About;
