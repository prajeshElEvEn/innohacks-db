import { useEffect, useState } from 'react';
import './App.css';
import db from './config/config';
import { onValue, ref } from 'firebase/database'
import Navbar from './components/Navbar';

function App() {
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
    <div className="App">
      <Navbar />
      <div className="main">
        <div className='zone'>
          <div className='no-of-zones'>
            No. of Zones: {noOfZones}
          </div>
          <div className='total-people'>
            Total People: {totalPeople}
          </div>
          <div className='people-without-mask'>
            People without Mask: {peopleWithoutMask}
          </div>
          <div className='percentage-people'>
            Percentage of people without Mask: {peopleWithoutMask / totalPeople * 100}%
          </div>
          <div className='zone-list'>
            {
              places.map((place) => {
                return (
                  <div className='zone-item'>
                    mask: {place.mask}
                    <br />
                    social distancing: {place.socialD}
                    <br />
                    total: {place.total}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
