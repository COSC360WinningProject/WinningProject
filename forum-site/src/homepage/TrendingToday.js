import React from 'react';

import './TrendingToday.css';

export default function TrendingToday() {
    return <div className="trending-today-section">
        <span className="title">Trending Today !</span>
        <div className="items">

            <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)` }}>
                <div className="context">
                    <span className="title">Trending 1</span>
                    <br />
                    <span className="description">Description 1</span>
                    <div className="subreddit">

                        <span>r/trending1</span>
                    </div>
                </div>
            </div>

            <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)` }}>
                <div className="context">
                    <span className="title">Trending 1</span>
                    <br />
                    <span className="description">Description 1</span>
                    <div className="subreddit">

                        <span>r/trending1</span>
                    </div>
                </div>
            </div>

            <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)` }}>
                <div className="context">
                    <span className="title">Trending 1</span>
                    <br />
                    <span className="description">Description 1</span>
                    <div className="subreddit">

                        <span>r/trending1</span>
                    </div>
                </div>
            </div>

            <div className="trending-item hoverable" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)` }}>
                <div className="context">
                    <span className="title">Trending 1</span>
                    <br />
                    <span className="description">Description 1</span>
                    <div className="subreddit">

                        <span>r/trending1</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
}