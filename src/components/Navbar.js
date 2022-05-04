import { Box, Button, ButtonGroup, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ExternalLinkIcon, RepeatIcon, AddIcon, EditIcon, HamburgerIcon, ChevronDownIcon, AtSignIcon } from '@chakra-ui/icons'
import React from 'react'

const Navbar = () => {
    return (
        <Box
            p={2}
            m={'auto'}
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            w={{ base: '100%', md: '96%', lg: '80%' }}
        // bg="gray.100"
        >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                // colorScheme='white'
                // variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<ExternalLinkIcon />}>
                        View Live Feed
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />}>
                        Know More
                    </MenuItem>
                </MenuList>
            </Menu>
            {/* <ButtonGroup gap='2'> */}
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Team
                </MenuButton>
                <MenuList>
                    <MenuItem
                        fontFamily={'Poppins'}
                        fontSize={'sm'}
                    >
                        <a href='https://github.com/Ayushsingh07' target='_blank' rel='noopener noreferrer'>
                            @Ayush
                        </a>
                    </MenuItem>
                    <MenuItem
                        fontFamily={'Poppins'}
                        fontSize={'sm'}
                    >
                        {/* <AtSignIcon /> */}
                        <a href='https://github.com/prajeshElEvEn' target='_blank' rel='noopener noreferrer'>
                            @Prajesh
                        </a>
                    </MenuItem>
                    <MenuItem
                        fontFamily={'Poppins'}
                        fontSize={'sm'}
                    >
                        <a href='https://github.com/divyansh-nishad' target='_blank' rel='noopener noreferrer'>
                            @Divyansh
                        </a>
                    </MenuItem>
                    <MenuItem
                        fontFamily={'Poppins'}
                        fontSize={'sm'}
                    >
                        <a href='https://github.com/shivamshi' target='_blank' rel='noopener noreferrer'>
                            @Shivam
                        </a>
                    </MenuItem>
                </MenuList>
            </Menu>
            {/* <Button colorScheme='blue'>Sign Up</Button>
                <Button colorScheme='blue'>Log in</Button>
            </ButtonGroup> */}
        </Box>
    )
}

export default Navbar