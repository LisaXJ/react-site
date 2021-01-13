import { Fragment } from "react";

const AboutExperience = ({ isOpen }) => {
    return(
        <Fragment>
            <div className={'light-orange-expanded' + (isOpen ? ' expanded-block' : '')}>
                { isOpen &&
                    <div>
                    2019
                    </div>
                }
            </div>
        </Fragment>
    );
};

export default AboutExperience;
