import React from 'react';

const ReviewPage = (props) => {
    const [title, description] = [props.title, props.description];
    return (
        <div>
            {title}
            <div />
            {description}
        </div>
    )
};

export default ReviewPage;