import { NavLink } from 'react-router-dom';

function Navigation({ pages }) {
    const navPages = pages.filter(page => page.title !== 'Not Found');
    return (
        <nav>
            <ul>
                {navPages.map(({ title, path }) => (
                    <li key={path}>
                        <NavLink to={path}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;