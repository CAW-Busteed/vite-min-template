import SkillsGraph from './SkillsGraph';
import { Box, Group, ActionIcon, Text, Stack } from '@mantine/core';
import { useState } from 'react'
// import ST_write from 'assets/skilltab_write.svg';
// import ST_tech from 'assets/skilltab_code.svg';
// import ST_env from 'assets/skilltab_env.svg';


function SkillsBase() {
    const [active, setActive] = useState('tech');


    return (
        <>
            <Group mx={36} my={12} style={{ width: '90%', height: '100%' }}>
                <Stack pr={12}>
                    <ActionIcon onClick={() => setActive("environment")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                        {/* Environment Icon */}
                        {/* {ST_env} */}
                    </ActionIcon>

                    <ActionIcon onClick={() => setActive("writing")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                        {/* Writing Icon */}
                        {/* {ST_write} */}
                    </ActionIcon>

                    <ActionIcon onClick={() => setActive("tech")} variant='outline' color='gray' radius='xl' size='lg' style={{ backgroundColor: 'white' }}>
                        {/* Programming Icon */}
                        {/* {ST_tech} */}
                    </ActionIcon>
                </Stack>

                <Stack style={{ width: '90%', height: '100%' }}>
                    <Box>
                        {/* Brief description */}
                        {active === 'environment' &&
                            <Text>
                                This is a sample text for the first
                            </Text>}
                        {active === 'writing' &&
                            <Text>
                                This is a sample text for the next one, the writing one
                            </Text>}
                        {active === 'tech' &&
                            <Text>
                                This is a sample text
                            </Text>}
                    </Box>

                    <Box m={36} >
                        {/* Hard Skills in percentages */}
                        {active === 'environment' &&
                            <><SkillsGraph skill='Sustainability' proficiency={80} />
                                <SkillsGraph skill='example' proficiency={67} />
                            </>}

                        {active === 'tech' &&
                            <><SkillsGraph skill='Python' proficiency={40} />
                                <SkillsGraph skill='example' proficiency={97} />
                            </>}

                        {active === 'writing' &&
                            <><SkillsGraph skill='technical writing' proficiency={75} />
                                <SkillsGraph skill='example' proficiency={12} />
                            </>}

                    </Box>
                </Stack>

            </Group>


        </>

    )
};

export default SkillsBase;