import React, { useState, useEffect } from 'react';


import TrendingItem from './TrendingItem';

import './TrendingToday.css';

export default function TrendingToday() {

    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/getTrending", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(resData => setTrendingItems(resData))
    }, [])


    return <div className="trending-today-section">
        <span className="title">Trending Today !</span>
        <div className="items">
            {trendingItems.map(el => {
                    return (
                        <TrendingItem pid={el.pid} title={el.title} text={el.text} mediaURL={el.mediaURL} category={el.category} />
                    );
                })
            }
        </div>
    </div>
}