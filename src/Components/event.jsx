

const Event = ({image, name, date, place}) => {
    return (
        <div className="event">
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{date}</p>
            <p>{place}</p>
        </div>
    );
}

export default Event;