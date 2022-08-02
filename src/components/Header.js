import Navigation from "./Navigation";

function Header({ pages }) {
    return (
        <header>
            <h1>Learn Japanese! <span className='japanese-sans'>日本語</span></h1>
            <Navigation pages={pages} />
        </header>
    );
}

export default Header;