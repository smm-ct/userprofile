/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
export const UserCard = ({userInfo}) => {
    const {image, firstName, lastName, university, id} = userInfo;
  return (
    <div className="card w-60 bg-base-100 shadow-xl m-2">
        <figure className="px-10 pt-10">
            <Link to={`/profileDetails/${id}`}>
                <img src={image} alt={firstName} className="rounded-xl" />
            </Link>
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{firstName} {lastName}</h2>
            <p>{university}</p>
            <div className="card-actions">
                <Link to={`/profileDetails/${id}`}>
                    <button className="btn btn-primary">More Details</button>
                </Link>
            </div>
        </div>
        </div>
  )
}