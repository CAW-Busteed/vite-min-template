import { Flex, Stack, Container, Button } from "@mantine/core";

interface MainTogglesProps {
    env: Function;
    writing: Function;
    tech: Function;
    event: any;
}


function MainToggles({ env, writing, tech, event}: MainTogglesProps) {

    return (
        <>
            <Stack>
                <Button onClick={(event) => env(event)} 
                className="ripple-button"
                > Green</Button>
                <Button onClick={(event) => tech(event)}
                className="ripple-button"
                > Code</Button>
                <Button onClick={(event) => writing(event)}
                className="ripple-button"
                > Write</Button>
            </Stack>


            {/* Half circles with active and non active buttons */}

        </>
    );
};

export default MainToggles;