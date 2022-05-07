import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box
            w={{ base: '100%', md: '96%', lg: '80%' }}
            m={'auto'}
            color='white'
            p={'1rem 0'}
            fontFamily={'Poppins'}
            d='flex'
            justifyContent={{ base: 'center', md: 'right' }}
            cursor='context-menu'
        >
            &copy; HamckerBazz {new Date().getFullYear()}
        </Box>
    )
}

export default Footer