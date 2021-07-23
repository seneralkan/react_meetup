import {useRef} from 'react'
import Card from '../ui/Card'
import styles from './NewMeetupForm.module.css'


function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    };     



    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>      
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Meetup Descriptipn</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>    
                </div>           
            </form>
        </Card>
    )
}

export default NewMeetupForm