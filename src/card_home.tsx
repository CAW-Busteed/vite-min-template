import { Box, Table } from "@mantine/core";
import '@mantine/carousel/styles.css';
// import { Carousel } from '@mantine/carousel';
import About from "./Components/About";
// import HomeCarousel from "./Components/Carousel";


const about_text = "I am a writer, editor, and developer with a passion for language, literature, and technology. I have a background in English, creative writing, and environmental policy, and I am currently studying computer science and full-stack development. I have worked as a proofreader, editor, and writer, and I have experience in tutoring, teaching, and kitchen work. I am interested in the intersection of technology and the humanities, and I am excited to continue learning and growing in the tech industry."

const priceRange = [
    { id: 1, service: "Editing", description: "Proofreading, copyediting, and developmental editing", price: "$18-22/hr", type: ["writing"] },
    { id: 2, service: "Writing", description: "Creative writing, technical writing, and content creation", price: "$23-27/hr", type: ["writing"]},
    { id: 3, service: "Tutoring", description: "English, French, math, science, and computer science", price: "$25-30/hr", type: ["tech", "writing"]},
    { id: 4, service: "Development", description: "Web development, app development, and software development", price: "$20-25/hr", type: ["tech"]},
    { id: 5, service: "Consultation", description: "Environmental policy, tech, and writing", price: "$20-40/hr", type: ["tech", "writing", "environment"]},
    { id: 6, service: "ESG Compliance", description: "Environmental, social, and governance compliance", price: "$25-35/hr", type: ["environment"]},
    { id: 7, service: "Sustainability Analyst", description: "Sustainability, environmental policy, and environmental science", price: "$28-38/hr", type: ["environment"]}
]

interface PortfolioProps {
    environment: any;
    setEnvironment: React.Dispatch<React.SetStateAction<any>>;
    writing: any;
    setWriting: React.Dispatch<React.SetStateAction<any>>;
    tech: any;
    setTech: React.Dispatch<React.SetStateAction<any>>;
}

const Home: React.FC<PortfolioProps> = ({ environment, setEnvironment, writing, setWriting, tech, setTech }) => {

    const priceRangeTable = priceRange.map((item) => (
        // logically, this should render the table based on the state of the checkboxes...but it doesn't. TODO: fix this
        ((item.type.includes('environment') && environment) ||
        (item.type.includes('writing') && writing) ||
        (item.type.includes('tech') && tech)) && (
            <Table.Tr key={item.id}>
                <Table.Td>{item.service}</Table.Td>
                <Table.Td>{item.description}</Table.Td>
                <Table.Td>{item.price}</Table.Td>
            </Table.Tr>
        )
    )
    );

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
                <div className="content-slider">
                    <div className="slider">
                        <div className="mask">
                            <ul>
                                <li className="anim1">
                                    <div className="quote">Hello, this is a quote from a person.</div>
                                    <div className="source">- Person</div>
                                </li>
                                <li className="anim2">
                                    <div className="quote">Hello, this is a quote from another person.</div>
                                    <div className="source">- Another person</div>
                                </li>
                                <li className="anim3">
                                    <div className="quote">Hello, this is a quote from an animal.</div>
                                    <div className="source">- Animal</div>
                                </li>
                                <li className="anim4">
                                    <div className="quote">Hello, this is a quote from a plant.</div>
                                    <div className="source">- Plant</div>
                                </li>
                                <li className="anim5">
                                    <div className="quote">How do ya like that.</div>
                                    <div className="source">- Cassidy</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Box>

            <Box mx={24} my={12} style={{ flex: 1 }}>
                <About title="About Me" text={about_text} />
            </Box>

            <Box m={12}>
            <Table >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Service</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Price Range</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {priceRangeTable}
                </Table.Tbody>
            </Table>
            </Box>
        </>
    );
}
export default Home;