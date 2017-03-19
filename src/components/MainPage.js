import React from 'react';
import View from './View';
import InfringementsView from './InfringementsView';

const MainPage = ({title}) => {
    return (
        <div className="container">
            <div className="page-title">{title}</div>
            <View>
                <InfringementsView />
            </View>
        </div>
    )
};

export default MainPage;
