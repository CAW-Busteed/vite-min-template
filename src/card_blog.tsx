import { Stack, Flex, Box, Title, Container } from "@mantine/core";
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

    const [isArchive, setIsArchive] = useState(false);
    const highestId = Math.max(...blogDict.map(item => item.id));
    const [blog, setBlog] = useState<number | null>(highestId);
    const blogItem = blogDict.find(item => item.id === blog);
    const returnClick = (PostId: SetStateAction<number | null>) => {
        setBlog(PostId);
        closeNav();
    };

    function openNav() {
        const element = document.getElementById("blogArchive");
        if (element) {
            element.style.width = "90%";
        }
    }
      
    function closeNav() {
        const element = document.getElementById("blogArchive");
        if (element) {
            element.style.width = "0";
        }
    }

    const toggleArchive = () => {
        if (isArchive === false) {
            openNav();
            setIsArchive(true);
        } else {
            closeNav();
            setIsArchive(false);
        }
    }


    return (

        <>
            
            <Flex
                direction={"row"}
                bg='white'
                className="parent"
                // style={{ position: "relative" }}
            >

                <Stack mx={36}
        
                >

                    {blogItem && blogItem.comp}


                </Stack>


                <Flex
                id="blogArchive"
                className= 'sidenav '
                justify="flex-end"
                align="center"
                
                
                
                
                >
                    <Stack 
                    className="transparentBG"
                    onClick={() =>  toggleArchive()}>

                        

                        <Title order={3} p={12} style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>Archive</Title>
                    </Stack>

                    <Stack
                        className={isArchive ? "child transparentBG" : "childclose transparentBG"}
                        // pl={12}
                        my={12}
                        align="center">
                        <Container>
                            {blogDict.map((post, index) => (

                                <Box
                                    onClick={() => returnClick(post.id)}
                                    my={12}
                                
                                >
                                    <BlogArchiveButton key={index} {...post} />
                                </Box>
                            )
                            )}
                        </Container>
                    </Stack>
                </Flex>
            </Flex>


        </>
    );
}

export default Blog;