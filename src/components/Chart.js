import { EditIcon } from '@chakra-ui/icons'
import { Box, Heading, layout, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import db from '../config/config'

const Chart = () => {
    const [places, setPlaces] = useState([])
    const [zoneList, setZoneList] = useState([])
    const [noOfZones, setNoOfZones] = useState(0)
    // const [totalPeople, setTotalPeople] = useState(0)
    const [totalPeopleArray, setTotalPeopleArray] = useState([])
    const [sumOfPeople, setSumOfPeople] = useState(0)
    // const [peopleWithoutMask, setPeopleWithoutMask] = useState(0)
    const [peopleWithoutMaskArray, setPeopleWithoutMaskArray] = useState([])
    const [sumOfPeopleWithoutMask, setSumOfPeopleWithoutMask] = useState(0)
    const [zonesArray, setZonesArray] = useState([])
    const [uniqueZonesArray, setUniqueZonesArray] = useState([])
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

                const zonesArray = []
                for (let i in places) {
                    zonesArray.push(places[i].zone)
                }
                const uniqueZonesArray = [...new Set(zonesArray)]
                // console.log(uniqueZonesArray)
                setUniqueZonesArray(uniqueZonesArray)
                setZonesArray(uniqueZonesArray)

                const totalPeopleArray = []
                for (let i in uniqueZonesArray) {
                    let sumOfPeople = 0
                    for (let j in places) {
                        if (uniqueZonesArray[i] === places[j].zone) {
                            sumOfPeople = sumOfPeople + places[j].total
                        }
                    }
                    totalPeopleArray.push(sumOfPeople)
                }
                // console.log(totalPeopleArray)
                setTotalPeopleArray(totalPeopleArray)

                const peopleWithoutMaskArray = []
                for (let i in uniqueZonesArray) {
                    let sumOfPeopleWithoutMask = 0
                    for (let j in places) {
                        if (uniqueZonesArray[i] === places[j].zone) {
                            sumOfPeopleWithoutMask = sumOfPeopleWithoutMask + places[j].mask
                        }
                    }
                    peopleWithoutMaskArray.push(sumOfPeopleWithoutMask)
                }
                // console.log(peopleWithoutMaskArray)
                setPeopleWithoutMaskArray(peopleWithoutMaskArray)

                // let totalPeople = 0
                // for (let i in places) {
                //     totalPeople = totalPeople + places[i].total
                //     // console.log(totalPeople)
                // }
                // // console.log(totalPeople)
                // setTotalPeople(totalPeople)
                // let peopleWithoutMask = 0
                // for (let i in places) {
                //     peopleWithoutMask = peopleWithoutMask + places[i].mask
                //     // console.log(peopleWithoutMask)
                // }
                // // console.log(peopleWithoutMask)
                // setPeopleWithoutMask(peopleWithoutMask)
            })
        }

        getPlaces()
    }, [])

    return (
        <Box
            w={{ base: '100%', md: '96%', lg: '80%' }}
            m={'auto'}
            bg='#1967d2'
            p={{ base: '0 1rem 4rem 1rem', md: '0 0 4rem 0' }}
        >
            <Heading as='h2' size='xl'
                textAlign={'center'}
                // textDecoration='underline'
                fontFamily={'Poppins'}
                color='#fff'
                m={'2rem 0'}
                p={'1rem 0'}
            >
                Graph
                <EditIcon
                    ml={'1rem'}
                    transition='all 0.3s ease-in-out'
                    _hover={{
                        transform: 'translateY(-0.5rem)',
                    }}
                />
            </Heading>
            <Box
                bg='white'
                p={{ base: '1rem', md: '2rem' }}
                borderRadius={{ base: '0.5rem', md: '2rem' }}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList
                        w={{ base: '100%', md: '80%', lg: '60%' }}
                        m={'auto'}
                    >
                        <Tab
                            w={'50%'}
                        >Bar Chart</Tab>
                        <Tab
                            w={'50%'}
                        >Line chart</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Bar
                                data={{
                                    labels: uniqueZonesArray,
                                    datasets: [{
                                        label: 'Total People',
                                        data: totalPeopleArray,
                                        backgroundColor: '#1967d2',
                                    }, {
                                        label: 'People Without Mask',
                                        data: peopleWithoutMaskArray,
                                        backgroundColor: '#ff6b6b',
                                    }]
                                }}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Line
                                data={{
                                    labels: uniqueZonesArray,
                                    datasets: [{
                                        label: 'Total People',
                                        data: totalPeopleArray,
                                        backgroundColor: '#1967d2',
                                    }, {
                                        label: 'People Without Mask',
                                        data: peopleWithoutMaskArray,
                                        backgroundColor: '#ff6b6b',
                                    }]
                                }}
                            // options={ }
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
}

export default Chart