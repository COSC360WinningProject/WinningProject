import React from 'react';
import { Link } from "react-router-dom";

import './TrendingToday.css';

export default function TrendingItem(props) {

    return( 
            <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${props.mediaURL ? "http://localhost:9000/" + props.mediaURL : "http://localhost:9000/images/users/blank-profile.png"})` }}>
                <Link to={"PostContent/" + props.pid}tabindex="0">
                <div className="context">
                    <span className="title">{props.title}</span>
                    <br />
                    <span className="description">{props.text}</span>
                    <div className="subreddit">
                        <span>{props.category}</span>
                    </div>
                </div>
                </Link>
            </div>
        
        )

}