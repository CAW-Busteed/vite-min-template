import { Stack, ActionIcon, Flex, Box } from "@mantine/core";
import { SetStateAction, useState } from "react";

import BlogArchiveButton from "./Components/BlogArchButton";

import FlavorsOfFiction from './Components/Content/Blog/FlavorsOfFiction';
import StoriesProsper from './Components/Content/Blog/StoriesProsper';
import Cryptobros from './Components/Content/Blog/Cryptobros';
import BobaFett from './Components/Content/Blog/BobaFett';
import Doggone from "./Components/Content/Portfolio/Doggone";


const blogDict = [
    { id: 1, comp: <FlavorsOfFiction />, title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 2, comp: <FlavorsOfFiction />, title: "Cattastic", description: "MEOW MEWOMEOW MOSAJNCHSD VJHSD VJ S MEEEEEEEOW   ne or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 3, comp: <FlavorsOfFiction />, title: "Flavors of Fiction", description: "Fantasy, Sci-Fi, Speculative, and Everything in Between", date: "March 9, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 4, comp: <StoriesProsper />, title: "Where do Story Franchises Prosper?", description: "Let's examine where stories find themsleves. By medium, by fanbase, by culture, these stories define themselves as they define us.", date: "April 25, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 5, comp: <Cryptobros />, title: "Cryptobros", description: "When money becomes religion, cults are bound to form.", date: "Feb 2, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 6, comp: <BobaFett />, title: "Why Was the Book of Boba Fett so Disjointed?", description: "A glimpse into what could have been, and why we should worry about Disney following in Marvel and DC’s footsteps.", date: "March 14, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 7, comp: <Doggone />, title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
]


function Blog() {

    const [isTruncated, setIsTruncated] = useState(true);
    const highestId = Math.max(...blogDict.map(item => item.id));
    const [blog, setBlog] = useState<number | null>(highestId);
    const blogItem = blogDict.find(item => item.id === blog);
    const returnClick = (PostId: SetStateAction<number | null>) => {
        setBlog(PostId);
        setIsTruncated(!isTruncated);
    };



    return (

        <>
            {isTruncated ?
                (
                    <Flex direction={"row"}>

                        <Stack mx={12}>

                            {blogItem && blogItem.comp}

                            {/* This is where the most recent blog would go, the highest id in the Dict. Until archive use*/}
                        </Stack>

                        <Stack style={{ height: '100%' }}
                            bg={'gray.3'} justify="center"
                            onClick={() => setIsTruncated(!isTruncated)}>

                            {/* TODO: icon follows, stack should change and work on click */}

                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl">{isTruncated ? 'Archive' : 'Post'}</ActionIcon>
                        </Stack>


                    </Flex>

                ) : (
                    <Flex direction={"row"}>
                        <Stack style={{ height: '100%' }}
                            bg={'gray.4'} justify="center"
                            onClick={() => setIsTruncated(!isTruncated)}>

                            {/* TODO: icon follows, stack should change and work on click */}

                            <ActionIcon variant="outline" color="teal" radius="xl" size="xl" >{isTruncated ? 'Archive' : 'Back'}</ActionIcon>
                        </Stack>
                        <Stack ml={6} my={12}>
                            {blogDict.map((post, index) => (

                                <Box
                                    onClick={() => returnClick(post.id)}
                                // TODO: fix switching does not bring the scroll back up. 
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