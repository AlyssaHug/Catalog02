function Card(props) {
    return (
        <div className='card'>
            <img
                className='cardImg'
                src={props.src}></img>
            <h3 className='cardName'>{props.text}</h3>
            <h3 className='learn'>
                <a
                    href={props.href}
                    target='_blank'>
                    Learn More
                </a>
            </h3>
        </div>
    );
}
export default Card;
