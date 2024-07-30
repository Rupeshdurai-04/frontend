import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Card = ({ title, value, change, changeType, sparklineData }) => {
    return (
        <div className="card" style={{ flex: 1, padding: '10', borderRadius: '20px', background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '0 10px' }}>
            <h3>{title}</h3>
            <p>{value}</p>
            <Sparklines data={sparklineData} width={100} height={10}>
                <SparklinesLine color={changeType === 'positive' ? 'green' : 'red'} />
            </Sparklines>
            <p style={{ color: changeType === 'positive' ? 'green' : 'red' }}>{change}</p>
        </div>
    );
};

export default Card;
