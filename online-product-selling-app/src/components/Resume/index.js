import React, { Component } from 'react';
import './resume.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
export default class Resume extends Component {
    constructor(props){
        super(props);
        this.state={
            isDataLoaded: false
        }
    }
    componentDidMount(){
        this.setState({
            isDataLoaded: true
        })
    }

    changeProgressbarStyles(){
        
    }
    render() {
        if(!this.state.isDataLoaded){
            return (
                <div className="resumeContainer" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <h3 style={{color:"#fff"}}>Please Wait...</h3>
                    <CircularProgress color="secondary" />
                </div>
            )
        }
        else {
            return (
                <div className="resumeContainer">
                    <div className="resumeInner">
                        <section className="mySkillsSection">
                            <div className="skillHeadingCont">
                                <h1 className="mySkillsHeading">My Skills</h1>
                                <hr/>
                            </div>
                            <div className="skillDetails">
                                <div className="skills">
                                    <span>HTML5</span>
                                    <LinearProgress variant="buffer" value = {90} valueBuffer= {95} />
                                </div>
    
                                <div className="skills">
                                    <span>CSS3</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
    
                             
                                <div className="skills">
                                    <span>BOOTSTRAP4</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
    
                                <div className="skills">
                                    <span>JQUEY</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                            
                                <div className="skills">
                                    <span>D3JS</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>WEBPACK</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>JAVASCRIPT</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>FIREBASE</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>NODEJS</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>EXPRESSJS</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>GIT</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>JSON</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>REST API</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>PAYMENT GATEWAY INTEGRATION, SSL COMMERZ, PAYPAL ETC.</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
    
                                <div className="skills">
                                    <span>REACT JS</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>REACT NATIVE</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>MATERIAL UI</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                                <div className="skills">
                                    <span>SERVER SIDE PROGRAMMING</span>
                                    <LinearProgress variant="buffer" value={90} valueBuffer= {95} />
                                </div>
                            </div>
                        </section>
                    
                        <section className="workExperienceSection">
                            <div className="workExperienceHeader">
                                <h1>Work Experience</h1>
                                <hr/>
                            </div>
                            <div className="workDetailsCont">
                                <div className="workDetailsInner">
                                    <div className="workSummaryYear">
                                        <h6> November 2018 - Present </h6>
                                    </div>
                                    <div className="workDetails">
                                        <h5 className="workPosition">Full Stack Software Developer</h5>
                                        <h6 className="workCompany">Corona Engineering Ltd.</h6>
                                        <p className="workDescription">Currently working here as a fullstack developer. On early days i started with frontend development, but nowadays i am working with payment gateways, video streaming and other server side logics with Node js. Currently working with React Native.</p>
                                    </div>

                                </div>


                                <div className="workDetailsInner">
                                    <div className="workSummaryYear">
                                        <h6> July 2018 - October 2018</h6>
                                    </div>
                                    <div className="workDetails">
                                        <h5 className="workPosition">Frontend Developer</h5>
                                        <h6 className="workCompany">InfobizSoft</h6>
                                        <p className="workDescription">Started my career journey here as a frontend developer intern. Also worked here with PHP, MYSQL, BOOTSTRAP, JQUERY, WORDPRESS etc.</p>
                                    </div>

                                </div>
                                
                            </div>
                        </section>

                        {/* EducationalQualifications */}
                        <section className="educationExperienceSection">
                            <div className="educationExperienceHeader">
                                <h1>Educational Qualifications</h1>
                                <hr/>
                            </div>
                            <div className="educationDetailsCont">
                                <div className="educationDetailsInner">
                                    <div className="educationSummaryYear">
                                        <h6> SSC - 2011 </h6>
                                    </div>
                                    <div className="educationDetails">
                                        <h5 className="educationPosition">Sarishabari RDM Pilot High School</h5>
                                        <h6 className="educationCompany"> Science </h6>
                                        <p className="educationDescription">GPA-5.00 out of 5.00</p>
                                    </div>

                                </div>


                                <div className="educationDetailsInner">
                                    <div className="educationSummaryYear">
                                        <h6> HSC - 2013 </h6>
                                    </div>
                                    <div className="educationDetails">
                                        <h5 className="educationPosition"> Birshreshtha Noor Mohammad Public College </h5>
                                        <h6 className="educationCompany"> Science </h6>
                                        <p className="educationDescription">GPA-5.00 out of 5.00</p>
                                    </div>

                                </div>
                                
                                <div className="educationDetailsInner">
                                    <div className="educationSummaryYear">
                                        <h6> BSc - 2013 </h6>
                                    </div>
                                    <div className="educationDetails">
                                        <h5 className="educationPosition"> Ahsanullah University of Science & Technology </h5>
                                        <h6 className="educationCompany">Department of Computer Science & Engineering </h6>
                                        <p className="educationDescription"> CGPA-2.567 out of 4.00</p>
                                    </div>

                                </div>
                            </div>
                        </section>

                        
                    </div>
                </div>
            )

        }
    }
}
