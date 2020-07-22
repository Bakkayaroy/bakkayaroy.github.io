import React, {Component} from 'react';
import './Skills.css'
import './Experience.css'

class Skills extends Component {
    render() {
        return (
            <div className='cd-container'>
                <div className='content-skills skill'>
                    <li>ASP.NET Core</li>
                    <li>C#</li>
                    <li>Entity Framework</li>
                    <li>Dapper</li>
                    <li>CQRS</li>
                    <li>XUnit</li>
                    <li>Integration Testing</li>
                    <li>SQL</li>
                    <li>Postgres</li>
                    <li>MVC</li>
                    <li>RabbitMQ</li>
                    <li>Redis</li>
                    <li>Docker</li>
                    <li>Unity</li>
                    <li>MongoDB</li>
                    <li>REST API</li>
                    <li>OAuth</li>
                    <li>Unix</li>
                    <li>Test-Driven Development</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </div>
            </div>

        );
    }
}

export default Skills;