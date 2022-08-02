import { Link } from "react-router-dom";
import { katakana } from '../../assets/information/writing';

function Katakana({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <Link to={`/${window.location.pathname.split('/')[1]}/hiragana`}>Hiragana</Link>
            <div className='writing-chart'>
                {katakana.map((char, i) => (
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

export default Katakana;