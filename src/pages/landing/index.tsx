import React from 'react';

import curvedSeparator from '../../images/curved_separator.svg';

import Header from './components/header';
import SignUpNow from './components/sign_up_now';

import { SeparatorContainer } from './styles';

const LandingPage = () => {
    return (
        <div style={{ overflowX: 'hidden', width: '100vw' }}>
            <Header />
            <SignUpNow />
            <SeparatorContainer>
                <img src={curvedSeparator} />
            </SeparatorContainer>
        </div>
    );
}

export default LandingPage;
