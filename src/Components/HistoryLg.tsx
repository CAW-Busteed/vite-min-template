// import React from 'react';
import { Title, Stack, Flex } from "@mantine/core";
import HistorySm from './HistorySm';

function HistoryLg() {
    return (
        <Flex mx={36} gap={'xl'}
            justify="space-between" >
            <Stack
                style={{ flex: 1 }}
                justify="flex-start">
                <Title order={3}>Education</Title>
                <HistorySm title="Harvard CS50" date="2023" description="Computer Science, full-stack development, database management, and common computer languages." location="Remote" />
                <HistorySm title="University of Iowa" date="2018 - 2020" location="Iowa City, IA" description="B.A. Major in English and Creative Writing, Minor in Environmental Policy and Planning" />
                <HistorySm title="Miami Dade College" date="2017 - 2018" location="Miami, FL" description="A.A. in English and Sustainability" />
                <HistorySm title="McGill University" date="2014 - 2016" location="Montreal, Quebec" description="Studied history, literature, biology, and oceanography." />
                <HistorySm title="Coral Reef Senior High" date="2010 - 2014" location="Miami, FL" description="International Baccaleaureate, English Society, volunteer tutor." />
            </Stack>
            <Stack
                style={{ flex: 1 }}
                justify="flex-start">
                <Title order={3}>Work History</Title>
                <HistorySm title="Proofreader" date="2014 - Current" location="Freelance" description="Collaborated with Chinese, Japanese, and Korean translators to polish rough translations into publishable English works." />
                {/* <HistorySm title="Writer" date="2014 - Current" location="Freelance Remote" description="Wrote articles, essays, and stories for various publications." /> */}
                <HistorySm title="Clinician" date="2022 - 2023" location="Lindamood-Bell Learning, Miami" description="Tutored students with learning disabilities through English, history, and science." />
                <HistorySm title="Editor" date="2020 - 2021" location="Ki Books" description="Read, summarized, and edited non-fiction books while meeting tight deadlines." />
                <HistorySm title="Kitchen Assistant" date="2019 - 2020" location="Burger Haul, Iowa City" description="Cleaning, organization, kitchen prep, disposal, and other roles." />
            </Stack>
        </Flex>
    );
};

export default HistoryLg;
