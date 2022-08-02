import { useNavigate } from 'react-router-dom';

function NotFound({ title }) {
    const history = useNavigate();
    return(
        <section>
            <h3>{title}</h3>
            <div>
                <p>Uh oh! It looks like you stumbled upon a page that doesn't exist.{' '}
                <button onClick={() => history(-1)} className='link'>Go Back.</button></p>
            </div>
        </section>
    );
}

export default NotFound;