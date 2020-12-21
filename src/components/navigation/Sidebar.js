import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Sidebar = () => {
    return(
        <div className='effect varrius'>
            <div className='buttons'>
                <a href="https://www.linkedin.com/in/lisa-jin-xu" target="_blank" rel="noreferrer" className='in' title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true">
                    <LinkedInIcon className="icon-styles" />
                </i></a>
                <a href="https://github.com/LisaXJ" target="_blank" rel="noreferrer" className='in' title="Github"><i className="fa fa-github" aria-hidden="true">
                    <GitHubIcon className="icon-styles" />
                </i></a>
                <a href="mailto:xuji@tcd.ie" target="_blank" rel="noreferrer" className='in' title="Email"><i className="fa fa-github" aria-hidden="true">
                    <MailOutlineIcon className="icon-styles" />
                </i></a>
            </div>
        </div>
    );
};

export default Sidebar;