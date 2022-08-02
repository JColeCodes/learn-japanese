import { Link } from "react-router-dom";
import WritingChart from "../../components/WritingChart";
import { katakana } from '../../assets/information/writing';

function Katakana({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <Link to={`/${window.location.pathname.split('/')[1]}/hiragana`}>Hiragana</Link>
            <WritingChart alphabet={katakana} />
        </>
    );
}

export default Katakana;