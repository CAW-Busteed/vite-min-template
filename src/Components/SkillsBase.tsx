import SkillsGraph from './SkillsGraph';
import { Box, Group, Text, Stack } from '@mantine/core';

import HistoryLg from './HistoryLg';
// import { useState } from 'react'
// import ST_write from 'assets/skilltab_write.svg';
// import ST_tech from 'assets/skilltab_code.svg';
// import ST_env from 'assets/skilltab_env.svg';

const skillsDict = [
    { skill: 'Python', type: 'tech', proficiency: 75 },
    { skill: 'Data Analysis', type: 'tech', proficiency: 97 },
    { skill: 'C & C++', type: 'tech', proficiency: 50 },
    { skill: 'Lua', type: 'tech', proficiency: 15 },
    { skill: 'Software Integration', type: 'tech', proficiency: 80 },
    { skill: 'Database Management', type: 'tech', proficiency: 55 },
    { skill: 'Fullstack Development', type: 'tech', proficiency: 70 },
    { skill: 'Sustainability', type: 'environment', proficiency: 80 },
    { skill: 'GIS', type: 'environment', proficiency: 45 },
    { skill: 'Education & Outreach', type: 'environment', proficiency: 99 },
    { skill: 'Monitoring & Sampling', type: 'environment', proficiency: 30 },
    { skill: 'Gardening', type: 'environment', proficiency: 60 },
    { skill: 'Technical Writing', type: 'writing', proficiency: 70 },
    { skill: 'Editing', type: 'writing', proficiency: 85 },
    { skill: 'Translation', type: 'writing', proficiency: 80 },

]

interface PortfolioProps {
    environment: any;
    setEnvironment: React.Dispatch<React.SetStateAction<any>>;
    writing: any;
    setWriting: React.Dispatch<React.SetStateAction<any>>;
    tech: any;
    setTech: React.Dispatch<React.SetStateAction<any>>;
}


const SkillsBase: React.FC<PortfolioProps> = ({ environment, setEnvironment, writing, setWriting, tech, setTech }) => {
    // const [environment, setEnvironment] = useState(true);
    // const [writing, setWriting] = useState(true);
    // const [tech, setTech] = useState(true);

    const sortedSkills = skillsDict.sort((a, b) => b.proficiency - a.proficiency);
    const topSevenSkills = sortedSkills.slice(0, 7);


    return (
        <>
            <Group
                bg='white'
                mx={36} my={12} style={{ width: '90%', height: '100%' }}>


                <Stack style={{ width: '90%', height: '100%' }}>
                    <Box>
                        {/* Brief description */}
                        {environment &&
                            <Text>
                                Enthusiastic and versatile, I am a junior
                                software developer with a unique
                                blend of experiences as a teacher,
                                tutor, writer, and proofreader. My
                                journey has equipped me with strong
                                problem-solving skills, effective
                                communication, and a creative
                                mindset.
                                In my roles, I've thrived in collaborative
                                environments, working with cross-functional teams to deliver impactful
                                solutions. I bring a keen eye for detail,
                                cultivated through years of writing
                                and proofreading, to the world of
                                programming. My commitment to
                                continuous improvement,
                                adaptability, and a positive work ethic
                                makes me a valuable addition to any
                                team.

                            </Text>}
                        {writing &&
                            <Text>
                                I seek to better my understanding
                                of the editorial industry, as well as
                                work to benefit people, promote
                                inclusivity, and enact sustainable
                                practices. I will also benefit from
                                working with a large variety of
                                people on an international scale.

                            </Text>}
                        {tech &&
                            <Text>
                                I hope to break into the field. I am
                                dedicated to building a better
                                future for the generations that
                                follow me, primarily through
                                sustainable development and
                                practices. I strive to live a
                                sustainable lifestyle and I want to
                                empower others on a similar path.
                            </Text>}
                    </Box>

                    <Box m={6}
                    >
                        <Stack>
                            {topSevenSkills.map((skill, index) => (
                                ((skill.type === 'environment' && environment) ||
                                    (skill.type === 'writing' && writing) ||
                                    (skill.type === 'tech' && tech)) && (
                                    <SkillsGraph key={index} {...skill} />
                                )
                            ))}

                        </Stack>

                    </Box>

                    <HistoryLg />
                </Stack>

            </Group >


        </>

    )
};

export default SkillsBase;