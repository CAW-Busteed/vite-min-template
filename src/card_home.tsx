import { Box, Table } from "@mantine/core";
import '@mantine/carousel/styles.css';
// import { Carousel } from '@mantine/carousel';
import About from "./Components/About";
// import HomeCarousel from "./Components/Carousel";


const about_text = "I am a writer, editor, and developer with a passion for language, literature, and technology. I have a background in English, creative writing, and environmental policy, and I am currently studying computer science and full-stack development. I have worked as a proofreader, editor, and writer, and I have experience in tutoring, teaching, and kitchen work. I am interested in the intersection of technology and the humanities, and I am excited to continue learning and growing in the tech industry."

function Home() {
    return (
        <>
            {/* <Box my={12} style={{ height: 400 }}>

                <Carousel slideSize="70%" height={200} slideGap="lg" controlSize={29} loop>
                    <Carousel.Slide>1</Carousel.Slide>
                    <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                </Carousel>

                <HomeCarousel />
                TODO: dissect the carousel for v2 with intention of cycling through random content/ recent works
            </Box> */}
            <Box mx={36} my={12} style={{ flex: 1 }}>
                <About title="About Me" text={about_text} />
            </Box>

            {/* TODO: add a price range for freelancing */}
            <Table>

            </Table>
        </>
    );
}
export default Home;