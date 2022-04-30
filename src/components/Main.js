import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
    return (
        <Box
            w={{ ase: '100%', md: '80%', lg: '60%' }}
            // bg='gray.100'
            m={{ base: '4rem auto', md: '10rem auto' }}
            p={2}

        >
            <Heading as='h2' size='4xl'
                textAlign={'center'}
                fontFamily='Poppins'
                m={'1rem 0'}
            >
                &lt;CoviZone&gt;
            </Heading>
            <Heading as='h4' size='xl'
                textAlign={'center'}
                fontFamily='Poppins'
            >
                HamckerBazz
            </Heading>
            <Text fontSize='lg'
                textAlign={'center'}
                fontFamily='Poppins'
                m={'1rem auto'}
                w={{ base: '100%', md: '60%' }}
            >
                This project makes extensive use of Machine Learing to detect the people roaming without mask in order to spread awareness about the ongoing pandemic crisis. The project is in development and your suggestions to improve this project are always welcomed.
            </Text>
        </Box>
    )
}

export default Main