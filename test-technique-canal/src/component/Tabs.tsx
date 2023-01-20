import React, { useState } from 'react';
import Movies from "./Movies";

const TabsCustom = (props) => {

    const [currentTab, setCurrentTab] = useState('1');

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container tab-container'>
            <div className='tabs'>
                {props.tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {props.tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                        <div>
                            <Movies typeOfMovie = {tab.type}/>
                        </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default TabsCustom;