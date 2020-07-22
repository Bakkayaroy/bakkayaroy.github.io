import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
    render() {
        return (
            <section id="cd-timeline" className="cd-container">
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">

                    </div>
                    <div className="cd-timeline-content">
                        <h2>LLC "INANOMO TECHNOLOGIES"</h2>
                        <div className="timeline-content-info">
                              <span className="timeline-content-info-title">
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                Back-End Developer
                              </span>
                            <span className="timeline-content-info-date">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            Jule 2019 - June 2020
                            </span>
                        </div>
                        <p>Implemented a system for collecting and displaying the candlestick chart using the popular cryptocurrency exchange APIs

                            Finished the cryptocurrency exchange user notification system with the integration with popular messengers allowing communication with technical support directly from these messengers.

                            Developed a system that monitors the market and commits purchases amazon ec2 spot instance when available. Zabbix support included.

                            Developed a dashboard for Gitlab that managed tasks, pipelines and jobs.</p>
                        <ul className="content-skills">
                            <li>Entity Framework</li>
                            <li>Postgres</li>
                            <li>Dapper</li>
                            <li>CQRS</li>
                            <li>MVC</li>
                            <li>XUnit</li>
                            <li>Rest Api</li>
                            <li>Integration Testing</li>
                            <li>TDD</li>
                            <li>AWS</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">

                    </div>
                    <div className="cd-timeline-content">
                        <h2>LLC "IT-Sphere"</h2>
                        <div className="timeline-content-info">
                              <span className="timeline-content-info-title">
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                Back-End Developer / DevOps
                              </span>
                            <span className="timeline-content-info-date">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            March 2018 - June 2018
                            </span>
                        </div>
                        <p>
                            Was involved in the development of a web service using gps navigation. Implemented
                            UniversalRobot control interfaces based on the Unity engine.
                            Gained extensive experience in DevOps and robotics.</p>
                        <ul className="content-skills">
                            <li>SQL</li>
                            <li>ASP.NET MVC</li>
                            <li>Postgres</li>
                            <li>Docker</li>
                            <li>Hyper-v</li>
                            <li>MVC</li>
                            <li>UniversalRobot</li>
                            <li>Unity</li>
                            <li>Integration Testing</li>
                        </ul>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">

                    </div>
                    <div className="cd-timeline-content">
                        <h2>Freelance</h2>
                        <div className="timeline-content-info">
                              <span className="timeline-content-info-title">
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                Back-End Developer / Unity
                              </span>
                            <span className="timeline-content-info-date">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            July 2016 - March 2018
                            </span>
                        </div>
                        <p>
                            Mostly there were orders based on Unity develpment. Fixing bugs, ads inmplementation,
                            optimizing games, wroting backend for games on Asp.net core. I took variety of orders
                            from a basic 3d modeling to a full development cycle for a microservice</p>
                        <ul className="content-skills">
                            <li>Entity Framework</li>
                            <li>Postgres</li>
                            <li>Unity</li>
                            <li>CQRS</li>
                            <li>MVC</li>
                            <li>XUnit</li>
                            <li>Rest Api</li>
                            <li>Integration Testing</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default Experience;