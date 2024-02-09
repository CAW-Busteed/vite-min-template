import { Stack, ActionIcon, Flex, Box } from "@mantine/core";
import { useState } from "react";

import BlogArchiveButton from "./Components/BlogArchButton";

import Doggone from './Components/Content/Portfolio/Doggone';

const blogDict = [
    { id: 1, title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 2, title: "Cattastic", description: "MEOW MEWOMEOW MOSAJNCHSD VJHSD VJ S MEEEEEEEOW   ne or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
]




function Blog() {

    const [isTruncated, setIsTruncated] = useState(true);
    // const [blog, setBlog] = useState(); figure out how to jump from one blog to another via box click

    return (

        <>
            {isTruncated ?
                (
                    <Flex direction={"row"}>

                        <Stack>
                            full blog element
                            <Doggone />
                            {/* This is where the most recent blog would go, deafult. Test using Doggone */}
                        </Stack>

                        <Stack bg={'gray.3'} justify="center">
                            {/* TODO: icon follows, stack should change and work on click */}
                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl" onClick={() => setIsTruncated(!isTruncated)}>{isTruncated ? 'Archive' : 'Post'}</ActionIcon>
                        </Stack>


                    </Flex>

                ) : (
                    <Flex direction={"row"}>
                        <Stack bg={'gray.4'} justify="center">
                            {/* TODO: icon follows, stack should change and work on click */}
                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl" onClick={() => setIsTruncated(!isTruncated)}>{isTruncated ? 'Archive' : 'Post'}</ActionIcon>
                        </Stack>
                        <Stack ml={6} my={12}>
                            {blogDict.map((post, index) => (

                                <Box
                                // TODO: onClick={() => setBlog()}
                                >
                                    <BlogArchiveButton key={index} {...post} />
                                </Box>
                            )
                            )}

                        </Stack>
                    </Flex>
                )
            }

        </>
    );
}

export default Blog;