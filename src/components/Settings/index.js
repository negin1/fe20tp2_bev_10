import React, {useState} from 'react';
import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Paper } from '@material-ui/core';
import { light } from '@material-ui/core/styles/createPalette';


const Settings = () => {
     
    return (
        
        <StyledPageIntro>
            <h2>Settings</h2>
            <p>Select a theme of your app.</p>
            
        </StyledPageIntro>
    )
}

export default Settings