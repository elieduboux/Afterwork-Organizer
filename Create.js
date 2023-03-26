import { useState } from 'react';
import './Create.css';

function Create()
{
    const [formValues, setFormValues] = useState({
        title: '',location: '', date: '',time: '', duration: '',maxParticipants: '',activityType: ''});
    const [events, setEvents] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
    };

    return (
        <div className="new-event">
            <h1>New Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange} />
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={formValues.location} onChange={handleInputChange} />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formValues.date} onChange={handleInputChange} />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={formValues.time} onChange={handleInputChange} />

                <label htmlFor="duration">Duration (min):</label>
                <input type="number" id="duration" name="duration" value={formValues.duration} onChange={handleInputChange} />

                <label htmlFor="maxParticipants">Max Participants:</label>
                <input type="number" id="maxParticipants" name="maxParticipants" value={formValues.maxParticipants} onChange={handleInputChange} />

                <label htmlFor="activityType">Activity Type:</label>
                <select id="activityType" name="activityType" value={formValues.activityType} onChange={handleInputChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="EscapeGame">Escape Game</option>
                    <option value="BattleCode">Battle Code</option>
                    <option value="VideoGame">Video Game</option>
                </select>

                <button type="submit">Create Event</button>
            </form>
        </div >
    );
}

export default Create;