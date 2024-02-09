import { Stack, Container, ActionIcon, Group } from "@mantine/core";
import { useState } from "react";

import SkillsBase from "./Components/SkillsBase";
import Portfolio from "./card_port";



function Blog() {

    const [isTruncated, setIsTruncated] = useState(true);

    // TODO: FIX THIS FUCKING MASSIVE PIECE OF SHIT I FUCKING HATE IT SO GODAMN MUCH WHY DOES EVERYONENEED A FUCKING BLOG TO SHIOT THEIR AWFUL THOUGHTS ALL OVER CYBERSPACE I FUCKING HATE THIS

    return (

        <>
            {isTruncated ?
                (
                    <Group>

                        <Container className="blog" style={{ width: '90%', display: 'flex' }}>
                            {/* full blog element */}
                            <SkillsBase />
                        </Container>

                        <Stack justify="center">
                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl" onClick={() => setIsTruncated(!isTruncated)}>{isTruncated ? 'Archive' : 'Post'}</ActionIcon>
                        </Stack>
                    </Group>

                ) : (
                    <>
                        <Stack justify="center">
                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl" onClick={() => setIsTruncated(!isTruncated)}>{isTruncated ? 'Archive' : 'Post'}</ActionIcon>
                        </Stack>
                        <Container style={{ width: '90%', display: 'flex' }} className="archive">
                            {/* blog archive scrolldown */}
                            <Portfolio />
                        </Container>
                    </>
                )
            }

        </>
    );
}

export default Blog;