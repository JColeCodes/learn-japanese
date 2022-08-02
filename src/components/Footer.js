import { useNavigate } from 'react-router-dom';

function Footer() {
    const history = useNavigate();
    return (
        <footer>
            <div className="foot-info">
                <ul>
                    <li><a href='https://colecodes.com'>ColeCodes.com</a> &copy; {new Date().getFullYear()}</li>
                    <li>
                        <button onClick={() => history(-1)}>
                            <i className="fa-solid fa-angles-left"></i> Previous Page
                        </button>
                    </li>
                    <li>
                        <button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                            <i className="fa-solid fa-arrow-up"></i> Top of Page
                        </button>
                    </li>
                </ul>
            </div>
      </footer>
    );
}

export default Footer;