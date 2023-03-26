import { useState } from 'react';

function Home({ events }) {
    const [filterValues, setFilterValues] = useState({
        date: '',
        time: '',
        activityType: '',
    });

    return (
        <div className="home">
            <h1>All Events</h1>
            <div className="filters">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={filterValues.date} />
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={filterValues.time} />

                <label htmlFor="activityType">Activity Type:</label>
                <select id="activityType" name="activityType" value={filterValues.activityType} >
                    <option value="">--Please choose an option--</option>
                    <option value="EscapeGame">Escape Game</option>
                    <option value="BattleCode">Battle Code</option>
                    <option value="VideoGame">Video Game</option>
                </select>
            </div>
        </div>
    );
}

export default Home;