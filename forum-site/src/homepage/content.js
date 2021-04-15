import React from 'react';

import './content.css';
import TrendingToday from './TrendingToday';
import { Posts } from './Posts';
import { Button } from '../navbar/Button.js';

export function Content() {
    
    return <div className="content">

        <TrendingToday />
        <Button style={{position: 'fixed', bottom: '50px',right: '50px' }}>Create a post</Button>
        <Posts />
    </div>
}