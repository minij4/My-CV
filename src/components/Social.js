import Logo from "./Logo";
import socialLogosData from "../social-logos-data";

export default function Social(props) {

    const logos = socialLogosData.map(logo => {
        return <Logo
            {...logo}
        />
    })

    return (
        <div className="social">
            <div className="interest">
                <h1 className="interest-title">{props.title}</h1>
                <h2 className="interest-text">{props.text}</h2>
                <button className="interest-email">write me an email</button>
            </div>
            <p>OR</p>
            <div className="social-logos">
                {logos}
            </div>
        </div>
    );
}
