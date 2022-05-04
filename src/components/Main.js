import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, color, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slide, Tag, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const tl = useRef()
    const headingBox = useRef()
    const contentBox = useRef()
    const logoImage = useRef()

    useEffect(() => {
        tl.current = gsap.timeline(
            {
                defaults: {
                    duration: 0.6,
                }
            }
        )
            .fromTo
            (
                headingBox.current,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                },
            )
            .fromTo(
                contentBox.current,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            )
            .fromTo(
                logoImage.current,
                {
                    y: 0
                },
                {
                    y: -10,
                    repeat: -1,
                    yoyo: true,
                }
            )
    }, [])


    return (
        <Box className='main'
            w={{ base: '100%', md: '96%', lg: '80%' }}
            // bg='gray.100'
            m={{ base: '4rem auto', md: '8rem auto' }}
            p={2}

        >
            <Box
                ref={headingBox}
            >
                <Heading
                    as='h2'
                    size='4xl'
                    textAlign={'center'}
                    fontFamily='Poppins'
                    m={'1rem 0'}
                    // color='white'
                    bgClip='text'
                    bgGradient='linear(to-br, #ffae00, #f12711)'
                >
                    &lt;CoviZone&gt;
                </Heading>
                <Text fontSize='3xl'
                    textAlign={'center'}
                    fontFamily='Poppins'
                    color='#4a93f8'
                    m={'1rem auto'}
                    fontWeight='500'
                    w={{ base: '100%', md: '60%' }}
                    bg='gray.100'
                    w='fit-content'
                    p={'0.6rem 1rem'}
                    // borderRadius='5px'
                    rounded='full'
                >
                    by
                </Text>
                <Box
                    d='flex'
                    justifyContent='center'
                    alignItems='center'
                    transform={{ base: 'translateY(-1rem)', md: 'translateY(-2rem)' }}
                    flexDirection={{ base: 'column', md: 'row' }}
                // bg={'gray.500'}
                >
                    <Image
                        ref={logoImage}
                        // m={'1rem auto'}
                        borderRadius='full'
                        // border={'1px solid white'}
                        boxSize='150px'
                        src='https://i.ibb.co/tBvR4Yv/logo.png'
                        alt='HamckerBazz'
                    // bg={'gray.100'}
                    />
                    <Heading as='h4' size='xl'
                        // textAlign={'center'}
                        fontFamily='Poppins'
                        color='white'
                    // bg={'gray.100'}
                    >
                        HamckerBazz
                    </Heading>
                </Box>
            </Box>
            <Box
                ref={contentBox}
                w={{ base: '100%', md: '60%' }}
                m={'auto'}
                // bg='gray.500'
                p={{ base: '1rem', md: '2rem' }}
                borderRadius={{ base: '0.5rem', md: '2rem' }}
                // backdropFilter='blur(16px) saturate(180%)'
                backdropBlur={'blur(24px) saturate(180%)'}
                bg='rgba(17, 25, 40, 0.75)'
                border='1px solid rgba(255, 255, 255, 0.125)'
            >
                <Text fontSize='lg'
                    textAlign={'center'}
                    fontFamily='Poppins'
                    color='white'
                    m={'1rem auto'}
                // w={{ base: '100%', md: '60%' }}
                >
                    This project makes extensive use of Machine Learning to detect the people wandering without mask in order to spread awareness about the ongoing pandemic crisis. The project is in development and your suggestions to improve this project are always welcome.
                </Text>
                <Box
                    d='flex'
                    justifyContent='center'
                    p={'1rem'}
                >
                    <Button onClick={onOpen}
                        fontFamily='Poppins'
                        fontWeight={'600'}
                        fontSize={'1.5rem'}
                        borderRadius='0.5rem'
                        color={'white'}
                        // bgClip='text'
                        bgGradient='linear(to-br, #ffae00, #f12711)'
                        p={'1.8rem 2.5rem'}
                        // rightIcon={<ChevronRightIcon />}
                        _active={{
                            transform: 'scale(0.95)'
                        }}
                        _hover={{
                            transform: 'translateY(-0.5rem)',
                        }}
                    >
                        Quote Us
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}
                        m={'auto'}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader
                                fontFamily='Poppins'
                            >Quote Us</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody
                                fontFamily={'Poppins'}
                            >
                                Do you think this project is lit🔥? Or do you any suggestions to improve this model😍? Write to us at
                                &nbsp;
                                <Link color='blue.500' href='mailto:nqu7069@gmail.com'>
                                    nqu7069@gmail.com
                                </Link>
                                .
                            </ModalBody>
                            <ModalFooter>
                                <Link color='blue.500' href='mailto:nqu7069@gmail.com'>
                                    <Button variant='ghost'
                                        color={'blue.500'}
                                        fontFamily='Poppins'
                                        fontWeight={'400'}
                                    >Write e-Mail</Button>
                                </Link>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </Box >
    )
}

export default Main