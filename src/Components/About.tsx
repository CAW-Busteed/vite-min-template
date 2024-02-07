import { Title, Stack, Text, Flex, Image } from "@mantine/core";
// import Pic from "./assets/cb_profile_image.jpg";

//TODO: figure out why the image can't be imported

interface AboutProps {
    title: string;
    text: string;
}

function About({ title, text }: AboutProps) {
    return (
        <Flex>
            <Stack>
                <Title order={3}>{title}</Title>
                <Text>{text}</Text>
            </Stack>
            {/* <Image radius={'xl'}>{Pic}</Image> */}
        </Flex>
    );
};

export default About;
