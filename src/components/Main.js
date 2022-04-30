import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Heading, Slide, Tag, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box className='main'
            w={{ base: '100%', md: '96%', lg: '80%' }}
            // bg='gray.100'
            m={{ base: '4rem auto', md: '10rem auto' }}
            p={2}

        >
            <Heading
                as='h2'
                size='4xl'
                textAlign={'center'}
                fontFamily='Poppins'
                m={'1rem 0'}
                // color='white'
                bgClip='text'
                bgGradient='linear(to-l, #FD6E6A, #FFC600)'
            >
                &lt;CoviZone&gt;
            </Heading>
            <Box
                m={'0.5rem auto'}
                w={{ base: '100%', md: '96%', lg: '80%' }}
                d={'flex'}
                gap={'1rem'}
                flexWrap={'wrap'}
                justifyContent={'center'}
            >
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <Avatar
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
                        bg={'pink'}
                        size='xs'
                        name='Python'
                        ml={-1}
                        mr={2}
                    />
                    <TagLabel>Python</TagLabel>
                </Tag>
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <Avatar
                        src='https://th.bing.com/th/id/OIP.riAj889ZOePSATbx-bXnUQHaHa?pid=ImgDet&rs=1'
                        size='xs'
                        name='Firebase'
                        ml={-1}
                        mr={2}
                    />
                    <TagLabel>Firebase</TagLabel>
                </Tag>
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <Avatar
                        src='https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0'
                        bg={'pink'}
                        size='xs'
                        name='React'
                        ml={-1}
                        mr={2}
                    />
                    <TagLabel>React</TagLabel>
                </Tag>
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <Avatar
                        src='https://www.chartjs.org/docs/latest/favicon.ico'
                        size='xs'
                        name='Chart.js'
                        ml={-1}
                        mr={2}
                    />
                    <TagLabel>Chart.js</TagLabel>
                </Tag>
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <Avatar
                        src='https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg'
                        size='xs'
                        name='Chakra UI'
                        ml={-1}
                        mr={2}
                    />
                    <TagLabel>Chakra UI</TagLabel>
                </Tag>
            </Box>
            <Heading as='h4' size='xl'
                textAlign={'center'}
                fontFamily='Poppins'
                color='white'
            >
                HamckerBazz
            </Heading>
            <Text fontSize='lg'
                textAlign={'center'}
                fontFamily='Poppins'
                color='white'
                m={'1rem auto'}
                w={{ base: '100%', md: '60%' }}
            >
                This project makes extensive use of Machine Learning to detect the people wandering without mask in order to spread awareness about the ongoing pandemic crisis. The project is in development and your suggestions to improve this project are always welcome.
            </Text>
            <Box
                d='flex'
                justifyContent='center'
                p={'1rem'}
            >
                <Button onClick={onToggle}
                    fontFamily='Poppins'
                    fontWeight={'600'}
                    size={'lg'}
                    borderRadius='1rem'
                    color={'#1967d2'}
                    p={'1rem 2rem'}
                    rightIcon={<ChevronRightIcon />}
                    _active={{
                        transform: 'scale(0.95)'
                    }}
                >
                    Quote Us
                </Button>
                <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                    <Box
                        p='2rem'
                        color='#1967d2'
                        fontFamily={'Poppins'}
                        mt='4'
                        bg='gray.100'
                        // rounded='lg'
                        shadow='md'
                        d='flex'
                        flexDirection={{ base: 'column', md: 'row' }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                    >

                        Do you think this project is lit🔥? Or you have a suggestion to improve this project😍? You can write to us at <a href='mailto:hamckerbaaz@gmail.com' target='_blank' rel='noopener noreferrer'>
                            {<EmailIcon />} hamckerbaaz@gmail.com</a>
                    </Box>
                </Slide>
            </Box>
        </Box>
    )
}

export default Main