import React from 'react';
import ReactStars from "react-rating-stars-component";
{/* import "../css/Form.css"; Gives module not found error*/}

const ReviewForm = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description] = [data.title, data.description];

    const ratingChanged = (newRating) => {console.log(newRating);};

    const leftside =
    {
      float: "left",
      width: "40%",
      height: "600px",
      color: "white",
      backgroundColor: "#1e90ff",
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center",
      display: "inline-block"
    };
    const rightside =
    {
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center",
      display: "inline-block"
    };
    const timestamp =
    {
      width: "100%"
    };
    const comment =
    {
      width: "100%"
    };
    return (
      <div>

        <h1> Write a Review </h1>

        <div style={leftside}>
          <h2> Reviewing: </h2>
            <h3> {title} </h3>
          <h2> Description: </h2>
            <p style={{fontSize: "14px", padding: "0px 30px 0px 30px"}}> {description} </p>
        </div>

        <div style={rightside}>

          <div><h3> Movie Review </h3></div>

          <div style={{display: "inline-block"}}>
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

            <div style={{display: "inline-block"}}>
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

            <div><h3> Enter Timestamps </h3></div>
            <div>
              <textarea rows="1" cols="50" style={timestamp}>
                Example: [1:30]
              </textarea>
            </div>

            <div><h3> Enter Comment </h3></div>
            <div>
              <textarea rows="10" cols="50" style={comment}>
                Comment...
              </textarea>
            </div>

            <div>
            <button type="button" onclick="">Submit Review</button>
            </div>

          </div>
        </div>
    )
};

export default ReviewForm;
