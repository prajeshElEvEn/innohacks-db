import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ExternalLinkIcon, RepeatIcon, AddIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    p={4}
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default Navbar