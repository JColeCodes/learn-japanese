import { Link } from "react-router-dom";
import { pages } from "../assets/information/pages";

function Main() {
    return (
        <>
            <p>
                Welcome! This little spot on the internet is to help me learn Japanese, and do some coding in the process!
            </p>
                {Object.keys(pages).map(sect => (
                <div key={sect} className='main-links'>
                    <h3>{sect}</h3>
                    <ul className='page-li' key={sect}>
                        {pages[sect].map(page => (
                            <Link to={`${page.path}`} key={page.path}>
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
                        ))}
                    </ul>
                </div>
                ))}
        </>
    );
}

export default Main;