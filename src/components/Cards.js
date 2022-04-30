import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import db from '../config/config'

const Cards = () => {
    const [people, setPeople] = useState([])
    const [places, setPlaces] = useState([])
    const [zoneList, setZoneList] = useState([])
    const [noOfZones, setNoOfZones] = useState(0)
    let [totalPeople, setTotalPeople] = useState(0)
    let [peopleWithoutMask, setPeopleWithoutMask] = useState(0)
    // let zones = 0
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
                for (let i in places) {
                    totalPeople = totalPeople + places[i].total
                    // console.log(totalPeople)
                }
                // console.log(totalPeople)
                setTotalPeople(totalPeople)

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
        getPeople()
    }, [])

    return (
        <Box
            w={{ base: '100%', md: '80%', lg: '60%' }}
            // h={'20rem'}
            m={'auto'}
            p={{ base: '6rem 0.2rem', md: '6rem 2rem' }}
            bg='gray.100'
            borderRadius={{ base: '4rem 4rem 0 0', md: '10rem 10rem 0 0' }}
        >
            <Heading as='h2' size='xl'
                textAlign={'center'}
                // textDecoration='underline'
                fontFamily={'Poppins'}
                m={'0 0 2rem 0'}
            >
                Highlights
            </Heading>
            {/* <Divider /> */}
            <Box
                d={'flex'}
                p={'1rem 1rem 0 1rem'}
                justifyContent={'space-between'}
                gap={'1rem'}
                flexDirection={{ base: 'column', md: 'row' }}
            // bg='gray.200'
            >
                <Box
                    w={{ base: '100%', md: '50%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    bg='gray.200'
                    p={'2rem'}
                    borderRadius={'1rem'}
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
                    w={{ base: '100%', md: '50%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    bg='gray.200'
                    p={'2rem'}
                    borderRadius={'1rem'}
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
                p={'1rem 1rem 0 1rem'}
                justifyContent={'space-between'}
                gap={'1rem'}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Box
                    w={{ base: '100%', md: '50%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    bg='gray.200'
                    p={'2rem'}
                    borderRadius={'1rem'}
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
                    w={{ base: '100%', md: '50%' }}
                    d={'flex'}
                    gap={'0.5rem'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'20rem'}
                    bg='gray.200'
                    p={'2rem'}
                    borderRadius={'1rem'}
                >
                    <Heading as='h3' size='lg'
                        fontFamily={'Poppins'}
                    >
                        Percentage of People without mask
                    </Heading>
                    <Heading as='h2' size='2xl'
                        fontFamily={'Poppins'}
                    >
                        {peopleWithoutMask / totalPeople * 100}%
                    </Heading>
                    <Text
                        fontFamily={'Poppins'}
                    >
                        Percentage of people identified by the model that are not wearing mask.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Cards