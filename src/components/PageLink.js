import { Link } from "react-router-dom";

function PageLink({ page }) {
    return (
        <Link to={`${page.path}`}>
            <li>
                {page.kanji_title && page.ja_title && <>
                    <span className='kanji'>{page.kanji_title}</span>
                    <span className='ja'>({page.ja_title})</span>
                </>}

                {page.kanji_title && !page.ja_title && <span className='kanji'>{page.kanji_title}</span>}

                {page.ja_title && !page.kanji_title && <span className='kanji'>{page.ja_title}</span>}

                <span className='eng'>{page.eng_title}</span>
            </li>
        </Link>
    );
}

export default PageLink;