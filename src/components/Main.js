import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
    return (
        <Box
            w={{ base: '100%', md: '60%' }}
            // bg='gray.100'
            m={'4rem auto'}
            p={2}

        >
            <Heading as='h2' size='2xl'
                textAlign={'center'}
                fontFamily='Poppins'
                m={'1rem 0'}
            >
                Project Name
            </Heading>
            <Heading as='h4' size='xl'
                textAlign={'center'}
                fontFamily='Poppins'
            >
                team Name
            </Heading>
            <Text fontSize='lg'
                textAlign={'center'}
                fontFamily='Poppins'
                m={'1rem auto'}
                w={{ base: '100%', md: '60%' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            </Text>
        </Box>
    )
}

export default Main