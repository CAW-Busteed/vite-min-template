import { Flex, ActionIcon, Stack } from '@mantine/core';
import { useState } from 'react'

import SetComp from './Components/SetComp';
import Doggone from './Components/Content/Portfolio/Doggone';
import Violence from './Components/Content/Portfolio/WhatIsViolence';
import FightWriting from './Components/Content/Portfolio/FightWriting';
import Bull from './Components/Content/Portfolio/Bull';
import CasualtyFae from './Components/Content/Portfolio/CasualtyFae';
import VoidBorne from './Components/Content/Portfolio/Voidborne';
import CreepingBriar from './Components/Content/Portfolio/CreepingBriar';
import Synethesia1999 from './Components/Content/Portfolio/Synthestesia1999';
import BetweenWingbeats from './Components/Content/Portfolio/BetweenWingbeats';
import SpaceBetween from './Components/Content/Portfolio/SpaceBetween';
import SustainableMiami from './Components/Content/Portfolio/SustainableMiami';
import Earthbound from './Components/Content/Portfolio/Earthbound';
import BEHOLD from './Components/Content/Portfolio/BEHOLD';
import MouseAndDragon from './Components/Content/Portfolio/MouseAndDragon';
import GenesisSeed from './Components/Content/Portfolio/GenesisSeed';
import ForestAnt from './Components/Content/Portfolio/ForestAnt';
import Anxiety from './Components/Content/Portfolio/Anxiety';
import Ripples from './Components/Content/Portfolio/Ripples';
import SilverBullet from './Components/Content/Portfolio/SilverBullet';
import SkormsDeal from './Components/Content/Portfolio/SkormsDeal';
import GrowingPains from './Components/Content/Portfolio/GrowingPains';
import ThousandAndOneGifts from './Components/Content/Portfolio/ThousandAndOne';
import TheJoke from './Components/Content/Portfolio/TheJoke';
import ConstructedIntelligence from './Components/Content/Portfolio/Constructed';
import Glide from './Components/Content/Portfolio/Glide';
import Imperfect from './Components/Content/Portfolio/Imperfect';
import CorruptionsCure from './Components/Content/Portfolio/CorruptionsCure';
import ClearMountain from './Components/Content/Portfolio/ClearMountain';
import SplitsvilleRace from './Components/Content/Portfolio/SplitsvilleRace';
import Bloom from './Components/Content/Portfolio/Bloom';
import DigitalAfterlife from './Components/Content/Portfolio/DigitalAfterlife';
import WoodMan from './Components/Content/Portfolio/WoodMan';
import BreakTheIce from './Components/Content/Portfolio/BreakTheIce';
import Simulacrum from './Components/Content/Portfolio/Simulacrum';

//// For sorting, filtering, and searching:
// let tags = [];

const placeholderImg = "https://miro.medium.com/v2/resize:fit:720/format:webp/0*umR6D4kD-RNyP-t9";
const placeholderText = "This is a series of words of various lengths used to adjust and determine the proper usage of the app. Please acknowledge that computers can be fickle. ";

const projDict = [
    { id: 1, types: 'writing', title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: placeholderImg, childComponent: <Doggone /> },
    { id: 2, types: 'environment', title: "Cattastic", description: "MEOW MEWOMEOW MOSAJNCHSD VJHSD VJ S MEEEEEEEOW   ne or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: placeholderImg, childComponent: <Doggone /> },
    { id: 3, types: 'writing', title: "Violence is...", description: "A bit of classwork meditating on the nature of violence. I think it gives a good insight to my mindset and philosphy at the time.", date: "Aug 4, 2021", image: placeholderImg, childComponent: <Violence /> },
    { id: 4, types: 'writing', title: "Fight Writing: From Fact to Fiction", description: placeholderText, date: "Aug 4, 2021", image: placeholderImg, childComponent: <FightWriting /> },
    { id: 5, types: 'writing', title: "The Bull", description: placeholderText, date: "Aug 4, 2021", image: placeholderImg, childComponent: <Bull /> },
    { id: 6, types: "writing", title: "Casualty of the Fey", description: placeholderText, date: "Aug 9, 2021", image: placeholderImg, childComponent: <CasualtyFae /> },
    { id: 7, types: "writing", title: "Void-borne", description: placeholderText, date: "Aug 9, 2021", image: placeholderImg, childComponent: <VoidBorne /> },
    { id: 8, types: "writing", title: "Creeping Briar Bush", description: placeholderText, date: "Aug 9, 2021", image: placeholderImg, childComponent: <CreepingBriar /> },
    { id: 9, types: "writing", title: "Synesthesia 1999", description: placeholderText, date: "Aug 9, 2021", image: placeholderImg, childComponent: <Synethesia1999 /> },
    { id: 10, types: "writing", title: "Between Wingbeats", description: placeholderText, date: "Aug 9, 2021", image: placeholderImg, childComponent: <BetweenWingbeats /> },
    { id: 11, types: "writing", title: "The Space Between Us", description: placeholderText, date: "Aug 23,2021", image: placeholderImg, childComponent: <SpaceBetween /> },
    { id: 12, types: "environment", title: "An Introduction to Sustainability in Miami", description: placeholderText, date: "Dec 8, 2021", image: placeholderImg, childComponent: <SustainableMiami /> },
    { id: 13, types: "writing", title: "Earthbound", description: placeholderText, date: "Dec 9, 2021", image: placeholderImg, childComponent: <Earthbound /> },
    { id: 14, types: "writing", title: "BEHOLD!", description: placeholderText, date: "Dec 13, 2021", image: placeholderImg, childComponent: <BEHOLD /> },
    { id: 15, types: "writing", title: "The Mouse and the Dragon", description: placeholderText, date: "Dec 30, 2021", image: placeholderImg, childComponent: <MouseAndDragon /> },
    { id: 16, types: "writing", title: "Genesis Seed", description: placeholderText, date: "Dec 30,2021", image: placeholderImg, childComponent: <GenesisSeed /> },
    { id: 17, types: "writing", title: "Ant in a Forest", description: placeholderText, date: "Jan 4, 2022", image: placeholderImg, childComponent: <ForestAnt /> },
    { id: 18, types: "writing", title: "Anxiety", description: placeholderText, date: "Jan 10, 2022", image: placeholderImg, childComponent: <Anxiety /> },
    { id: 19, types: "writing", title: "Ripples", description: placeholderText, date: "Jan 21, 2022", image: placeholderImg, childComponent: <Ripples /> },
    { id: 20, types: "writing", title: "Silver Bullet", description: placeholderText, date: "Jan 28, 2022", image: placeholderImg, childComponent: <SilverBullet /> },
    { id: 21, types: "writing", title: "Skorm's Deal", description: placeholderText, date: "Feb 10, 2022", image: placeholderImg, childComponent: <SkormsDeal /> },
    { id: 22, types: "writing", title: "Growing Pains", description: placeholderText, date: "Feb 21, 2022", image: placeholderImg, childComponent: <GrowingPains /> },
    { id: 23, types: "writing", title: "The Thousand-and-One Gifts", description: placeholderText, date: "Feb 25, 2022", image: placeholderImg, childComponent: <ThousandAndOneGifts /> },
    { id: 24, types: "writing", title: "The Joke", description: placeholderText, date: "March 1, 2022", image: placeholderImg, childComponent: <TheJoke /> },
    { id: 25, types: "writing", title: "Constucted", description: placeholderText, date: "March 22, 2022", image: placeholderImg, childComponent: <ConstructedIntelligence /> },
    { id: 26, types: "writing", title: "Glide", description: placeholderText, date: "March 23, 2022", image: placeholderImg, childComponent: <Glide /> },
    { id: 27, types: "writing", title: "What are We?", description: placeholderText, date: "March 29, 2022", image: placeholderImg, childComponent: <Imperfect /> },
    { id: 28, types: "writing", title: "Corruption's Cure", description: placeholderText, date: "May 9, 2022", image: placeholderImg, childComponent: <CorruptionsCure /> },
    { id: 29, types: "writing", title: "Clear Mountain Ambush", description: placeholderText, date: "June 3, 2022", image: placeholderImg, childComponent: <ClearMountain /> },
    { id: 30, types: "writing", title: "Race Across Splitsville", description: placeholderText, date: "July 9, 2022", image: placeholderImg, childComponent: <SplitsvilleRace /> },
    { id: 31, types: 'writing', title: "Doggone", description: "Practically nobody likes flying. Those that do are either clinically insane or have something to tide them over. The airline provides alcohol, but some people bring along a friend. This fuzzy friend may end up dividing the passengers. A story inspired by Patricia.", date: "Jul 16, 2022", image: placeholderImg, childComponent: <Doggone /> },
    { id: 32, types: "writing", title: "Bloom", description: placeholderText, date: "Aug 24, 2022", image: placeholderImg, childComponent: <Bloom /> },
    { id: 33, types: "writing", title: "Digital Afterlife", description: placeholderText, date: "Oct 21, 2022", image: placeholderImg, childComponent: <DigitalAfterlife /> },
    { id: 34, types: "writing", title: "Wood Man", description: placeholderText, date: "Oct 28, 2022", image: placeholderImg, childComponent: <WoodMan /> },
    { id: 35, types: "writing", title: "Break the Ice", description: placeholderText, date: "Nov 2, 2022", image: placeholderImg, childComponent: <BreakTheIce /> },
    { id: 36, types: "writing", title: "Simulacrum", description: placeholderText, date: "Dec 19, 2022", image: placeholderImg, childComponent: <Simulacrum /> },

    // { id: 37, types: "writing", title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 38, types: "writing", title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 39, types: "writing", title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 40, types: "writing", title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 41, types: null, title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 43, types: null, title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 44, types: null, title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 45, types: null, title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 46, types: null, title: null, description: null, date: null, image: null, childComponent: null },
    // { id: 47, types: null, title: null, description: null, date: null, image: null, childComponent: null },
]

// TODO: go over them and mark the ones that cause errors/have bad formatting. Also tags?


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