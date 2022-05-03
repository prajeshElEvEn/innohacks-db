import { EditIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import db from '../config/config'

const Chart = () => {
    const [places, setPlaces] = useState([])
    const [zoneList, setZoneList] = useState([])
    const [noOfZones, setNoOfZones] = useState(0)
    const [totalPeople, setTotalPeople] = useState(0)
    const [peopleWithoutMask, setPeopleWithoutMask] = useState(0)
    const [zonesArray, setZonesArray] = useState([])
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
                console.log(uniqueZonesArray)
                setZonesArray(uniqueZonesArray)


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
            bg='white'
            p={{ base: '0 1rem 4rem 1rem', md: '0 3rem 4rem 3rem' }}
        >
            <Heading as='h2' size='xl'
                textAlign={'center'}
                // textDecoration='underline'
                fontFamily={'Poppins'}
                m={'0 0 2rem 0'}
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
                bg='gray.100'
                p={'2rem'}
                borderRadius={'2rem'}
            >
                {/* <Bar
                // data={ }
                // options={ }
                /> */}
            </Box>
        </Box>
    )
}

export default Chart