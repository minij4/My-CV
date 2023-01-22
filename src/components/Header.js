import React from 'react';
import ReactDOM from 'react-dom/client';
import {Animated} from "react-animated-css";


export default function Header() {
    const [navShow, setNavShow] = React.useState(false);

    function showNav() {
        setNavShow(prevNavShow => !prevNavShow);
    }

    const styles = {
        paddingBottom: navShow == true ? "" : "0"
    }

    const transition = {
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 10, tension: 10, friction: 10 }
    }

    return (
        <div>
            <h1 className="nav-title" onClick={showNav} style={styles}>Minija</h1>
                {navShow == true &&
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={navShow}>
                        <ul className="nav">
                            <li>about</li>
                            <li>education</li>
                            <li>experience</li>
                            <li>contact</li>
                        </ul>
                    </Animated>
                }
        </div>
        
    );
}
