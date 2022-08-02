import { pages } from "../assets/information/pages";
import PageLink from "../components/PageLink";

function Main() {
    return (
        <>
            <p>
                Welcome! This little spot on the internet is to help me learn Japanese, and do some coding in the process!
            </p>
                {Object.keys(pages).map(sect => (
                <div key={sect} className='main-links'>
                    <h3>{pages[sect].title}</h3>
                    <ul className='page-li' key={sect}>
                        {pages[sect].pages.map(page => (
                            <PageLink page={page} key={page.path} />
                        ))}
                    </ul>
                </div>
                ))}
        </>
    );
}

export default Main;