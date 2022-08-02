import { pages } from "../../assets/information/pages";
import PageLink from "../../components/PageLink";

function Locations({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className='page-li'>
                {pages.locations.pages.map(page => (
                    <PageLink page={page} key={page.path} />
                ))}
            </ul>
        </>
    );
}

export default Locations;