import React from 'react';
import Card from './Card';
import Chart from './Chart';
import TopProducts from './TopProducts';
import dashboardImage from '../assets/referal.png';
const Dashboard = () => {
    const productData = [5, 10, 5, 20, 8, 15];
    const earningData = [5, 20, 15, 25, 20, 5];

    return (
        <div className="dashboard" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>

                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <img src={dashboardImage} alt="Dashboard" style={{ width: '100%', height: '250px', borderRadius: '10px' }} />
                </div>
                <div className="cards" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Card title="Total Product" value="1,134 items" change="+10% this week" changeType="positive" sparklineData={productData} />
                    <Card title="Total Earning" value="$4,231" change="-22% this week" changeType="negative" sparklineData={earningData} />
                </div>
                <div className="chart-section">
                    <Chart />
                </div>
                <div className="balance" style={{ marginTop: '0px', padding: '20px', borderRadius: '20px', background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <div>
                        <header className='balancetitle'>Balances</header>
                        <div className='price' style={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <p style={{ margin: 0, fontWeight: 800 }}>$534</p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '40px',
                                height: '50px',
                                bottom: '20px',
                                borderLeft: '2px solid #ccc',
                                margin: '0 20px',

                            }}></div>
                            <p style={{ margin: 0, fontWeight: 800 }}>$700</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <button className='btn-2'>Withdraw Money</button>
                    </div>
                </div>
            </div>
            <TopProducts style={{ width: '200px', height: '50px' }} />
        </div>
    );
};

export default Dashboard;
