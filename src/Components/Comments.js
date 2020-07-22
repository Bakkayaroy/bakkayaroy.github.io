import React, {Component} from 'react';
import './Comments.css';
import Doge from '../Img/Doge.jpg'
import Cat from '../Img/gosling.jpg'

class Comments extends Component {
    render() {
        return (
            <div className="cd-container comments" id="comments">
                <div className="comment-wrap">
                    <div className="photo">
                        <img  className="avatar" src={Cat} alt = "test" width="80px"/>
                    </div>
                    <div className="comment-block">
                        <p className="comment-text">Really proficient developer. Creates great ,
                            microservices and totally nails reverse engeneering.
                            And I say that totally not because he's my son.<br/>
                            Love u. <br/>
                            —Ryan.</p>
                        <div className="bottom-comment">
                            <div className="comment-date">June 25, 2020 @ 10:32 AM</div>
                        </div>
                    </div>
                </div>

                <div className="comment-wrap">
                    <div className="photo">
                        <img  className="avatar" src={Doge} alt = "test" width="80px" />
                    </div>
                    <div className="comment-block">
                        <p className="comment-text">Such smart dev, wow. Much skill.</p>
                        <div className="bottom-comment">
                            <div className="comment-date">June 24, 2020 @ 2:35 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;