export default function Section(props) {
    return (
        <div className="section" id={props.link}>
            <div className="section-text">
                <h1 className="section-title">{props.title}</h1>
                <p className="section-description">{props.description}</p>
            </div>
            <img className="section-img" src={props.img}/>
        </div>
    );
}