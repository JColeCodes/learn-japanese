import { Link } from "react-router-dom";

import { pages } from "../../assets/information/pages";

function Writing({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className='page-li'>
                {pages.writing.pages.map(page => (
                    <Link to={`${page.path}`} key={page.path}>
                        <li>
                            <span className='kanji'>{page.kanji_title}</span>
                            <span className='ja'>({page.ja_title})</span>
                            <span className='eng'>{page.eng_title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}

export default Writing;