import React from 'react';
import styles from './styles.css';
import { Button } from 'antd';

export default function SearchHeader() {
    return <header>
        <div className={styles.main_panel}>
            <span className={styles.panel_title}>netflixroulette</span>
            <span>FIND YOUR MOVIE</span>
            <input type="text"/>
            <div>
                <span>SEARCH BY</span>
                <input type="button"/>
                <Button>Default</Button>
            </div>
        </div>
        <div className={styles.additional_panel}></div>
    </header>;
}
