import React, {useState} from 'react';

const Tabs = (props) => {
    const {tabs} = props;
    const [selectedTab, setSelectedTab] = useState(0);

    const handleOnClick = (e, value) => {
        setSelectedTab(value);
    }

    return (
        <div>
                {tabs.map( (tab, i) => {
            return(
                <div 
                    onClick={ (e) => handleOnClick(e, i) }
                    style={{
                        padding: '10px',
                        display: 'inline-block'
                    }}
                >
                    <button key={i}>
                        {tab.tabName}
                    </button>
                </div>
                )
            })
        }
            <div 
                
            >
                <p>{tabs[selectedTab].tabText}</p>
            </div>
    </div>
    );
}

export default Tabs;
