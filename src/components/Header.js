import Navigation from "./Navigation";
import fujisan from '../assets/images/icons/fujisan.png';

function Header({ pages }) {
    return (
        <header>
            <h1>
                <img src={fujisan} alt='Mount Fuji' />
                Learn Japanese!
                <span className='japanese-sans'>日本語</span>
            </h1>
            <Navigation pages={pages} />
        </header>
    );
}

export default Header;