import React from 'react';
import { Link } from 'react-router-dom';
import './format.css';

const ReviewPage = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description, url, averageScore, pictureUrl,timestamps ] = [data.title, data.description, data.url, data.averageScore, data.pictureUrl,data.timestamps];
    return (
    <div class="container">

        <div class="left-col">
            <h2>{title}</h2>
            <h3>Movie Description: {description}</h3>
            <h2> Reported Trigring Timestamps </h2>
            {timestamps.map((time,key) => (
                <h3>{time.start.m}:{time.start.s} - {time.stop.m}:{time.stop.s}</h3>
            ))}
        </div>
        <div class="center-col">
            <h2>Photosensitivity Review:</h2>
            <h1> {averageScore}/5</h1>
            <Link to={url + "/form"}>
                    Make new review
            </Link>
        </div>
        <div class="right-col">
        <img src={pictureUrl} height="440" width="300"/>
        </div>
    </div>
    )



    
};

export default ReviewPage;