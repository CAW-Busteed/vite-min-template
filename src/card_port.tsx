import { Flex, ActionIcon, Stack } from '@mantine/core';
import { useState } from 'react'

import SetComp from './Components/SetComp';
import Doggone from './Components/Content/Portfolio/Doggone';

//// For sorting, filtering, and searching:
// let tags = [];

const projDict = [
    { id: 1, types: 'writing', title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9", childComponent: <Doggone /> },
    { id: 2, types: 'environment', title: "Cattastic", description: "MEOW MEWOMEOW MOSAJNCHSD VJHSD VJ S MEEEEEEEOW   ne or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9", childComponent: <Doggone /> },
]


function Portfolio() {
    // const [active, setActive] = useState('all');
    const [environment, setEnvironment] = useState(true);
    const [writing, setWriting] = useState(true);
    const [tech, setTech] = useState(true);



    return (
        <>


            <Flex mx={36} my={12} style={{ width: '90%', height: '100%' }}>
                <div className="sticky-element">
                    {/* TODO: add to CSS

                    .sticky-element {
                        position: sticky;
                        top: 0;
                    }
                    */}
                    <Stack pr={12}>
                        <ActionIcon
                            onClick={() => setEnvironment(!environment)}
                            variant='filled' color={environment ? 'green' : 'gray'} radius='xl' size='lg'
                        // style={{ backgroundColor: 'white' }}
                        >
                            leaf
                        </ActionIcon>

                        <ActionIcon
                            onClick={() => setWriting(!writing)}
                            variant='filled' color={writing ? 'cyan' : 'gray'} radius='xl' size='lg'
                        // style={{ backgroundColor: 'white' }}
                        >
                            pen
                        </ActionIcon>

                        <ActionIcon
                            onClick={() => setTech(!tech)}
                            variant='filled' color={tech ? 'blue' : 'gray'} radius='xl' size='lg'
                        // style={{ backgroundColor: 'white' }}
                        >
                            code
                        </ActionIcon>
                    </Stack>
                </div>

                <Stack>
                    {projDict.map((post, index) => (
                        ((post.types === 'environment' && environment) ||
                            (post.types === 'writing' && writing) ||
                            (post.types === 'tech' && tech)) && (
                            <SetComp key={index} {...post} />
                        )
                    ))}

                </Stack>
            </Flex>
        </>
    );
}

export default Portfolio;