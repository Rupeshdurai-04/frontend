import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box, Button } from '@mui/material';
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
                borderRadius: '20px',
                padding: 2,
                marginTop: 2,
                marginLeft: 2.5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
                    <Box 
                        component="svg" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 100 100" 
                        sx={{ width: 40, height: 40, marginRight: 1 }}
                    >
                        <polygon 
                            points="50,1 95,25 95,75 50,99 5,75 5,25" 
                            fill="#00FFFF" // Aqua blue color
                            transform="rotate(90 50 50)" // Rotate 90 degrees around the center (50, 50)
                        />
                    </Box>
                    <Typography variant="h5">
                        Neuro.
                    </Typography>
                </Box>
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
                                    backgroundColor: 'white',
                                    '& .MuiListItemText-primary': {
                                        fontWeight: 'bold',
                                        color: '#1a73e8',
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: '#1a73e8',
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
            <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <Typography variant="body1" sx={{ fontSize: '0.875rem', marginBottom: 1 }}>
                    Have any problem with your dashboard? Try to contact our customer support.
                </Typography>
                <Button 
                    variant="contained" 
                    sx={{ backgroundColor: '#00FFFF', color: '#000', borderRadius: '20px', '&:hover': { backgroundColor: '#00cccc' } }}
                >
                    Contact Us
                </Button>
            </Box>
        </Box>
    );
};

export default Sidebar;
