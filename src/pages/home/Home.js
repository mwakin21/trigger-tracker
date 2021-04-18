import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const data = props.data;
    return (
        <div>
            Home page
            {data.map((movie, key) => (
                <div>
                    <div>
                        <strong>
                            Title: {movie.title}
                        </strong>
                    </div>
                    <img src={movie.pictureUrl} alt={"movie poster for " + movie.title}
                        width={360}
                    />
                        <div>
                            <Link to={movie.url}>
                                Link
                            </Link>
                        </div>
                    <div>
                        Description: {movie.description}
                    </div>
                    <div>
                        Length: {movie.length.h}h, {movie.length.m}m
                    </div>
                    <div>
                        Average Score: {movie.averageScore}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Home;