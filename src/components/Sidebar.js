import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';
import { Dashboard, Store, Campaign, Schedule, Payment, Receipt, Settings } from '@mui/icons-material';

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const menuItems = [
        { text: 'Overview', icon: <Dashboard /> },
        { text: 'Products', icon: <Store /> },
        { text: 'Campaigns', icon: <Campaign /> },
        { text: 'Schedules', icon: <Schedule /> },
        { text: 'Payouts', icon: <Payment /> },
        { text: 'Statements', icon: <Receipt /> },
        { text: 'Settings', icon: <Settings /> },
    ];

    return (
        <Box
            sx={{
                width: 240,
                height: '100vh',
                backgroundColor: '#1a73e8',
                color: 'white',
                borderRadius: '20px 20px 20px 20px',
                padding: 2,
                marginTop: 2,
                marginLeft: 2.5,

            }}
        >
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
                Neuro.
            </Typography>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={index}
                        selected={selectedIndex === index}
                        onClick={() => handleListItemClick(index)}
                        sx={{
                            margin: '10px 0',
                            borderRadius: '10px',
                            backgroundColor: selectedIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'inherit',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiListItemText-primary': {
                                    fontWeight: 'bold',
                                },
                            },
                            '&.Mui-selected': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiListItemText-primary': {
                                    color: 'black',
                                    fontWeight: 'bold',
                                },
                                '& .MuiListItemIcon-root': {
                                    color: 'black',
                                },
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: selectedIndex === index ? 'white' : 'inherit' }}>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            sx={{
                                color: selectedIndex === index ? 'white' : 'inherit',
                                '&:hover': {
                                    color: 'white',
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
