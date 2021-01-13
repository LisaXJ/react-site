import { Fragment } from "react";

const AboutEducation = ({ isOpen }) => {
    return(
        <Fragment>
            <div className={'expanded-cyan' + (isOpen ? ' expanded-block' : '')}>
                { isOpen &&
                    <div className="main-text-container">
                    <b>Trinity College Dublin (Graduated: 2019)</b><br/>
                    <b>Degree:</b> Computer Science, Linguistics, and German<br/>
                    <b>Courses:</b> Computational Linguistics, Natural Language Processing, Machine Translation, Phonetics and Speech Analysis, Speech Synthesis, Algorithms and Data Structures, Relational Databases, Fuzzy Logic, Discrete Mathematics, Syntax, Semantics <br/>
                    <b>Final year project:</b> Lexicon based Chinese sentiment analysis.<br/><br/>
                    
                    <b>Heidelberg University (Erasmus 2017-18)</b><br/>
                    <b>Courses:</b> Python, German Linguistics, German Syntax, Machine Learning, Software Engineering<br/>
                    <b>Project: </b> The German Topological Field Model
                    </div>
                }
            </div>
        </Fragment>
    );
};

export default AboutEducation;
