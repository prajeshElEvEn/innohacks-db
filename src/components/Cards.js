import { UpDownIcon } from '@chakra-ui/icons'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import db from '../config/config'

const Cards = () => {
    const [people, setPeople] = useState([])
    const [places, setPlaces] = useState([])
    const [zoneList, setZoneList] = useState([])
    const [noOfZones, setNoOfZones] = useState(0)
    const [totalPeople, setTotalPeople] = useState(0)
    const [peopleWithoutMask, setPeopleWithoutMask] = useState(0)

    const peopleRef = ref(db, 'covizone-9c238-default-rtdb/name')
    const placesRef = ref(db, 'placeA')
    useEffect(() => {
        const getPlaces = async () => {
            await onValue(placesRef, (snapshot) => {
                // console.log(snapshot.val())
                const zones = snapshot.val()
                // console.log(zones)
                const zoneList = []
                for (let id in zones) {
                    zoneList.push(zones[id].data)
                }
                setNoOfZones(zoneList.length)
                // console.log(zoneList.length)
                // console.log(zoneList)
                setZoneList(zoneList)
                const places = []
                // const zone = []
                for (let i in zoneList) {
                    for (let j in zoneList[i]) {
                        // console.log(zoneList[i][j])
                        places.push(zoneList[i][j])
                    }
                }
                // console.log(places)
                setPlaces(places)
                let totalPeople = 0
                for (let i in places) {
                    totalPeople = totalPeople + places[i].total
                    // console.log(totalPeople)
                }
                // console.log(totalPeople)
                setTotalPeople(totalPeople)
                let peopleWithoutMask = 0
                for (let i in places) {
                    peopleWithoutMask = peopleWithoutMask + places[i].mask
                    // console.log(peopleWithoutMask)
                }
                // console.log(peopleWithoutMask)
                setPeopleWithoutMask(peopleWithoutMask)
            })
        }

        const getPeople = async () => {
            await onValue(peopleRef, (snapshot) => {
                const data = snapshot.val()
                // console.log(data)
                setPeople(data)
            })
        }

        getPlaces()
        calcPercentage()
        getPeople()
    }, [])

    const calcPercentage = () => {
        const percentage = (peopleWithoutMask / totalPeople) * 100
        return percentage.toFixed(2)
    }

    return (
        <Box
            w={{ base: '100%', md: '96%', lg: '80%' }}
            // h={'20rem'}
            m={'auto'}
            p={{ base: '6rem 0.2rem', md: '6rem 2rem' }}
            bg='white'
            borderRadius={{ base: '2rem 2rem 0 0', md: '4rem 4rem 0 0' }}
        >
            <Heading as='h2' size='xl'
                textAlign={'center'}
                // textDecoration='underline'
                fontFamily={'Poppins'}
                m={'0 0 2rem 0'}
            >
                Zonal Statistics
                <UpDownIcon
                    ml={'1rem'}
                    transition='all 0.3s ease-in-out'
                    _hover={{
                        transform: 'translateY(-0.5rem)',
                    }}
                />
            </Heading>
            {/* <Divider /> */}
            <Box
                d={'flex'}
                p={{ base: '3rem 1rem 0 1rem', md: '3rem 2rem 0 2rem' }}
                justifyContent={'space-between'}
                gap={'3rem'}
                flexDirection={{ base: 'column', md: 'row' }}
            // bg='gray.200'
            >
                <Box
                    w={{ base: '100%', md: '48%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    p={'2rem'}
                    bg='white'
                    border='1px solid #e0e0e0'
                    borderTop='5px solid hsl(34, 97%, 64%)'
                    borderRadius={'1rem'}
                    boxShadow={'0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                        transform: 'scale(1.02)'
                    }}
                >
                    <Heading as='h3' size='lg'
                        fontFamily={'Poppins'}
                    >
                        People
                    </Heading>
                    <Heading as='h2' size='2xl'
                        fontFamily={'Poppins'}
                    >
                        {totalPeople}
                    </Heading>
                    <Text
                        fontFamily={'Poppins'}
                    >
                        The number represents the total number of individuals scanned by the algorithm.
                    </Text>
                </Box>
                <Box
                    w={{ base: '100%', md: '48%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    // bg='gray.200'
                    bg='white'
                    border='1px solid #e0e0e0'
                    borderTop='5px solid hsl(180, 62%, 55%)'
                    p={'2rem'}
                    borderRadius={'1rem'}
                    boxShadow={'0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                        transform: 'scale(1.02)'
                    }}
                >
                    <Heading as='h3' size='lg'
                        fontFamily={'Poppins'}
                    >
                        Zones
                    </Heading>
                    <Heading as='h2' size='2xl'
                        fontFamily={'Poppins'}
                    >
                        {noOfZones}
                    </Heading>
                    <Text
                        fontFamily={'Poppins'}
                    >
                        This tell us about the number of zones the algorithm is collecting data from.
                    </Text>
                </Box>
            </Box>
            <Box
                d={'flex'}
                // bg='gray.200'
                p={{ base: '3rem 1rem 0 1rem', md: '3rem 2rem 0 2rem' }}
                justifyContent={'space-between'}
                gap={'3rem'}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Box
                    w={{ base: '100%', md: '48%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    // bg='gray.200'
                    bg='white'
                    border='1px solid #e0e0e0'
                    borderTop='5px solid hsl(212, 86%, 64%)'
                    p={'2rem'}
                    borderRadius={'1rem'}
                    boxShadow={'0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                        // bg: 'hsl(212, 86%, 64%)',
                        transform: 'scale(1.02)'
                    }}
                >
                    <Heading as='h3' size='lg'
                        fontFamily={'Poppins'}
                    >
                        People without Mask
                    </Heading>
                    <Heading as='h2' size='2xl'
                        fontFamily={'Poppins'}
                    >
                        {peopleWithoutMask}
                    </Heading>
                    <Text
                        fontFamily={'Poppins'}
                    >
                        Number of people identified by the model that are not wearing mask.
                    </Text>
                </Box>
                <Box
                    w={{ base: '100%', md: '48%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    // bg='gray.200'
                    bg='white'
                    border='1px solid #e0e0e0'
                    borderTop='5px solid hsl(0, 78%, 62%)'
                    p={'2rem'}
                    borderRadius={'1rem'}
                    boxShadow={'0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                        // bg: 'hsl(0, 78%, 62%)',
                        transform: 'scale(1.02)'
                    }}
                >
                    <Heading as='h3' size='lg'
                        fontFamily={'Poppins'}
                    >
                        Percentage of People without Mask
                    </Heading>
                    <Heading as='h2' size='2xl'
                        fontFamily={'Poppins'}
                    >
                        {calcPercentage()}%
                    </Heading>
                    <Text
                        fontFamily={'Poppins'}
                    >
                        Percentage of people identified by the model that are not wearing mask.
                    </Text>
                </Box>
            </Box>
        </Box >
    )
}

export default Cards