import { Link } from "react-router-dom";

const Event = ({id, image, title, date, place}) => {
    return (
        <div className="event">
            
            <img src={image} alt="" />
            <p>{title}</p>
            
            <p>{place}</p>
            <Link
                to={`/eventDetails/${id}`}
                key={id}
            >
                <p>{id}</p>
            </Link>

            
                {date}
            
        </div>
    );
}

export default Event;