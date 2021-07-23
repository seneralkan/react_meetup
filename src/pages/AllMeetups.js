import {useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {

  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://react-meetup-effdd-default-rtdb.firebaseio.com/meetups.json"
    )
    .then(response => {
    return response.json();
  })
  .then((data) => {

    //Firebase uzerinden veri object olarak geliyor fakat
    //tum propslar array duzeninde calistigi icin veriyi donusturmek 
    //gerekmektedir.

    const items = [];

    for (const key in data){
      const item = {
        id: key,
        ...data[key]
      };

      items.push(item);
    }


     setisLoading(false);
     setloadedMeetups(items);
  });
  }, []);



  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList items ={loadedMeetups} />
        </div>
    )
}

export default AllMeetups;
