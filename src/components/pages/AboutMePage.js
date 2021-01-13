import { useState } from "react";
import AboutExperience from "../content/AboutExperience";

const { default: AboutEducation } = require("../content/AboutEducation")

const AboutMePage = () => {
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    return(
        <div className="container container-overlay">
            <div className="heading-box">
                <div className={'cyan-vertical-block '}>
                    <div className="heading-div" onClick={() => setIsEducationOpen(!isEducationOpen) }>Education</div>
                </div>
                <AboutEducation isOpen={isEducationOpen} />

                <div className={'light-orange-block ' + (isExperienceOpen ? 'lo-expanded' : '')}>
                    <div className="heading-div" onClick={() => setIsExperienceOpen(!isExperienceOpen) }>Experience</div>
                </div>
                <AboutExperience isOpen={isExperienceOpen} />
            </div>
        </div>
    );
};

export default AboutMePage;