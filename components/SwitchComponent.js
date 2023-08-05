import React, { useState } from 'react';
import { Switch } from 'react-native';

const CustomSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
  
    return (
    <Switch
        trackColor={{false: 'F2F2F2', true: '#71A4D9'}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor= 'F2F2F2'
        value={isEnabled}
        onValueChange={toggleSwitch}
    />
  );
};

export default CustomSwitch;

