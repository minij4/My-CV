export default function Section(props) {
    
    return (
        <div className="section">
            <h1 className="section-title">{props.title}</h1>
            <p className="section-description">{props.description}</p>
            <img className="section-img" src={props.img}/>
        </div>
    );
}
