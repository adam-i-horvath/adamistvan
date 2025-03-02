import CookieConsent, { Cookies } from 'react-cookie-consent';

import React from 'react';

const CookieBanner = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        expires={365}
        enableDeclineButton
        flipButtons
        contentStyle={{ flex: '1 0 250px' }}
        style={{
          background: '#242526',
          borderTop: '1px solid #3a3b3c',
          color: '#e4e6eb',
          fontSize: '13px',
          textAlign: 'left',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        buttonStyle={{
          color: '#e4e6eb',
          background: '#1877f2',
          fontSize: '13px',
          margin: '5px 10px 5px 5px',
          borderRadius: '5px',
        }}
        buttonText="Elfogad"
        declineButtonText="Elutasít"
        declineButtonStyle={{
          color: '#e4e6eb',
          background: '#f02849',
          fontSize: '13px',
          margin: '5px 10px 5px 5px',
          borderRadius: '5px',
        }}
      >
        Ez a weboldal a felhasználói élmény javítása érdekében sütiket
        használhat.
        <br></br>
        <a style={{ color: '#e4e6eb' }} href="/cookie">
          Cookie szabályzat
        </a>
        <p>{Cookies}</p>
      </CookieConsent>
    </div>
  );
};

export default CookieBanner;
