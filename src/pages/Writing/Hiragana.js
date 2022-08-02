import { Link } from "react-router-dom";
import WritingChart from "../../components/WritingChart";
import { hiragana } from '../../assets/information/writing';

function Hiragana({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <Link to={`/${window.location.pathname.split('/')[1]}/katakana`}>Katakana</Link>
            <WritingChart alphabet={hiragana} />
        </>
    );
}

export default Hiragana;