import React from 'react';

const ReviewForm = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description] = [data.title, data.description];
    return (
        <div>
            {title}
            <div />
            {description}
        </div>
    )
};

export default ReviewForm;