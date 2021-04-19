import React, {useState, setData} from 'react';
import {FaStar} from 'react-icons/fa';
import PostData from './data/data.json';


const Rating = () => {
    const [ rating, setRating] = useState("");
  
    return (
        
    <div>
        
        {PostData.map((postDetail, index) => {
            return(
                <div>
                <h1>{postDetail.Movie}</h1>
                <p>{postDetail.name}</p>
                </div>
            )
        })}
        {[...Array(7)].map((star, i) =>{
            const ratingValue = i + 1;
            return(
            <label>
                <input type="radio" name="rating" value={ratingValue}  onClick={()=>setRating(ratingValue)}/>
             <FaStar className="star" color={ratingValue <= ( rating) ? "#800080" : "grey"} size={70}
               />
            </label>
            );
        })}
           
    </div>
    );
};

export default Rating;