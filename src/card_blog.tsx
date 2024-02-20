import { Stack, Flex, Box, Title } from "@mantine/core";
import { SetStateAction, useState } from "react";

import BlogArchiveButton from "./Components/BlogArchButton";

import FlavorsOfFiction from './Components/Content/Blog/FlavorsOfFiction';
import StoriesProsper from './Components/Content/Blog/StoriesProsper';
import Cryptobros from './Components/Content/Blog/Cryptobros';
import BobaFett from './Components/Content/Blog/BobaFett';



const blogDict = [
    { id: 1, comp: <FlavorsOfFiction />, title: "Flavors of Fiction", description: "Fantasy, Sci-Fi, Speculative, and Everything in Between", date: "March 9, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 2, comp: <StoriesProsper />, title: "Where do Story Franchises Prosper?", description: "Let's examine where stories find themsleves. By medium, by fanbase, by culture, these stories define themselves as they define us.", date: "April 25, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 3, comp: <Cryptobros />, title: "Cryptobros", description: "When money becomes religion, cults are bound to form.", date: "Feb 2, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },
    { id: 4, comp: <BobaFett />, title: "Why Was the Book of Boba Fett so Disjointed?", description: "A glimpse into what could have been, and why we should worry about Disney following in Marvel and DC’s footsteps.", date: "March 14, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9" },

]
// TODO: format blog posts

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
            {/* {isTruncated ?
                ( */}
            <Flex
                direction={"row"}
                bg='white'
            >

                <Stack mx={12}
                    className={isTruncated ? "anim1" : "blog-truncate"}
                >

                    {blogItem && blogItem.comp}


                </Stack>

                <Stack style={{ height: '100%' }}
                    bg={'bgColor.3'} justify="center"

                    onClick={() => setIsTruncated(!isTruncated)}>

                    {/* TODO: icon follows, stack should change and work on click */}

                    <Title order={3} p={6} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>{isTruncated ? 'Archive' : 'Back'}</Title>
                </Stack>


                {/* </Flex>

                ) : (
                    <Flex direction={"row"}>
                        <Stack style={{ height: '100%' }}
                            bg={'bgColor.4'} justify="center"
                            onClick={() => setIsTruncated(!isTruncated)}>



                            <Title order={3} p={6} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>{isTruncated ? 'Archive' : 'Back'}</Title>

                        </Stack>
                         */}
                <Stack
                    className={isTruncated ? "blog-truncate" : "anim1"}
                    ml={6} my={12}>
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

            {/*     )
             } */}

        </>
    );
}

export default Blog;