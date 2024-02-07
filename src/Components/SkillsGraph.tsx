import { Stack, Group, Text } from '@mantine/core';

type SkillsGraphProps = {
    skill: string;
    proficiency: number;
}


function SkillsGraph({ skill, proficiency }: SkillsGraphProps) {

    return (
        <>
            <Stack gap={'xs'}>
                <Group justify='space-between'>
                    {/* Hard skill 1 */}
                    <Text>
                        {skill}
                    </Text>
                    <Text>
                        {proficiency}%
                    </Text>
                </Group>
                {/* line here limited by percentage listed above */}
                <div style={{ display: 'flex', width: '100%', height: '4px' }}>
                    <div style={{ width: `${proficiency}%`, backgroundColor: 'black' }} />
                    <div style={{ width: `${100 - proficiency}%`, backgroundColor: 'gray' }} />
                </div>
            </Stack>
        </>
    )
}
export default SkillsGraph;
