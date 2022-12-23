import React from 'react'
import './index.css'
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const theme = {
    name: 'auth',
    tokens: {
      colors: {
        background: {
          primary: { value: 'coral' }
        }
      }
    }
  }


function Header({ signOut, user }) {
    return (
        <ThemeProvider theme={theme}>
        <div className='header-content'>
            <div className='left'>
                <h1>{user.username}</h1>
            </div>
            <div className='right'>
                <button onClick={signOut}>Sign Out</button>
            </div>
        </div>
        </ThemeProvider>
    );
  }
  export default withAuthenticator(Header,theme);
