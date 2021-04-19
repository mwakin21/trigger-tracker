import React from 'react';
import ReactStars from "react-rating-stars-component";
{/* import "../css/Form.css"; Gives module not found error*/}

const ReviewForm = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description] = [data.title, data.description];

    const ratingChanged = (newRating) => {console.log(newRating);};
    return (
      <div id="form">

        <h1> Write a Review </h1>

        <div class="left">
          <h2> Reviewing: </h2> {title}
          <h3> Description: </h3> {description}
        </div>

        <div><h3> Movie Review </h3></div>

        <div style={{ margin: "0% 0% 0% 70%" }}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={36}
              isHalf={true}
              char={"★"}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              activeColor='#ffd700'
            />
          </div>

          <div><h3> Photosensitivity Review </h3></div>

          <div style={{ margin: "0% 0% 0% 70%" }}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={36}
              isHalf={true}
              char={"★"}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              activeColor='#ffd700'
            />
          </div>

          <div><h3> Enter Comment </h3></div>
          <div>
            <textarea>
              Comment...
            </textarea>
          </div>

          <div>
          <button type="button" onclick="">Submit Review</button>
          </div>

        </div>
    )
};

export default ReviewForm;
