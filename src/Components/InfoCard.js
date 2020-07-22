import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Photo from '../Img/Photo.png'
class InfoCard extends Component {
    render() {
        return (
            <div className="container-lg">
                <div className="resume_info">
                    <div className="row resume_info_left">
                        <div className="col-md ">
                            <div className="resume_info_hello">
                                Hello! I am
                            </div>
                            <div className="resume_info_title">
                                Zotov Timofey
                            </div>
                            <div className="resume_info_job">
                                Backend .Net Core Developer
                            </div>
                            <div className="resume_info_lower">
                                Male, 21, born June 18, 1999 <br/>
                                Russia, Ryazan, ready to move, ready for business trips
                            </div>
                            <div className="resume_info_lower">
                                Highly qualified, passionate and professional ASP.NET developer with over 3 years of
                                experience in design, development, analysis and implementation of web applications and
                                dynamic websites, using ASP.NET Core with C#. Compiling expertise, testing, and documenting
                                application codes. Updating and modifying existing applications. Possess skills in deep analysis,
                                teamwork, self-organising, communication and time management.
                            </div>

                        </div>
                        <div className="col-md resume_info_right">
                            <img className="resume_info_photo" src={Photo}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;