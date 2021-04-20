import React, { useState } from 'react';
import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';

const Settings = () => {

    return (

        <StyledPageIntro>
            <h2>Settings</h2>
            <p>Select a theme of your app.</p>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Settings