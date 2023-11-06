import { Center, Text, Container } from '@mantine/core';

const footerStyle = {
    backgroundColor: '#Eff0f0'
};

const year = new Date().getFullYear();

export function Footer() {
    return (
        <div style={footerStyle}>
            <Container pt={50} pb={50}>
                <Center>
                    <Text fw={550}>Oskar Westmeijer • {year}</Text>
                </Center>
            </Container>
        </div>
    );
}
