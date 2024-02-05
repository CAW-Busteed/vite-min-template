// import React from 'react';
import { Text, Title, Stack } from "@mantine/core";

interface HistorySmProps {
    title: string;
    date: string;
    description: string;
    location: string;
}

function HistorySm({ title, date, description, location }: HistorySmProps) {

    return (
        <Stack gap={0}>
            <Text fs={'italic'} size='sm' c={'dimmed'}>{date}</Text>
            <Title order={4}>{title}</Title>
            <Text fw={500} fs={'italic'}>{location}</Text>
            <Text size="sm">{description}</Text>
        </Stack>
    );
};

export default HistorySm;
