import React from 'react';

import './content.css';
import TrendingToday from './TrendingToday';
import { PostsContainer } from '../PostsContainer.js';
import Posts from './Posts';

export function Content() {
    return <div className="content">

        <TrendingToday />
        <Posts />
    </div>
}