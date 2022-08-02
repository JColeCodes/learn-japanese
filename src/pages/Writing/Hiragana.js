import { Link } from "react-router-dom";
import { hiragana } from '../../assets/information/writing';

function Hiragana({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <Link to={`/${window.location.pathname.split('/')[1]}/katakana`}>Katakana</Link>
            <div className='writing-chart'>
                {hiragana.map((char, i) => (
                    <ul key={i}>
                        {Object.keys(char).map((key, i) => {
                            return (
                            <li key={i}>
                                <span className='char'>{char[key]}</span>
                                <span className='key'>{key}</span>
                            </li>
                            );
                        })}
                    </ul>
                ))}
            </div>
        </>
    );
}

export default Hiragana;