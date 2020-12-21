
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav-container'>
            <div className='nav-text'><Link to='/home'>About Me</Link></div>
            <div className='nav-text'><Link to='/main'>Web Development</Link></div>
            <div className='nav-text'>Java</div>
            <div className='nav-text'>Natural Language Processing</div>
        </div>
    );
};

export default Navigation;