import React from 'react';
import { Button, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Your Self-Improvement Journey
      </Typography>
      <Typography variant="h5" paragraph>
        Start cultivating virtues and track your progress with our self-improvement app.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default HeroSection;
