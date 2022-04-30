import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'

const Cards = () => {
    return (
        <Box
            w={{ base: '100%', md: '60%' }}
            // h={'20rem'}
            m={'auto'}
            p={'6rem 0'}
            bg='gray.100'
            borderRadius={{ base: '4rem 4rem 0 0', md: '10rem 10rem 0 0' }}
        >
            <Heading as='h2' size='xl'
                textAlign={'center'}
                // textDecoration='underline'
                fontFamily={'Poppins'}
            // m={'1rem 0'}
            >
                Highlights
            </Heading>
            {/* <Divider /> */}
        </Box>
    )
}

export default Cards