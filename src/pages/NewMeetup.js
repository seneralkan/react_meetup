import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useHistory} from 'react-router-dom'

function NewMeetup() {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch("https://react-meetup-effdd-default-rtdb.firebaseio.com/meetups.json",
        {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            // navigating to the home page
            history.replace('/')
        })
    } 

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup
