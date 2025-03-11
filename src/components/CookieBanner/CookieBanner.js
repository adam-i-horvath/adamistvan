import CookieConsent, { Cookies } from 'react-cookie-consent';
import React from 'react';
import t from '../../utils/t';

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
          zIndex: '10000',
        }}
        buttonStyle={{
          color: '#e4e6eb',
          background: '#1877f2',
          fontSize: '13px',
          margin: '5px 10px 5px 5px',
          borderRadius: '5px',
        }}
        buttonText={t('accept')}
        declineButtonText={t('decline')}
        declineButtonStyle={{
          color: '#e4e6eb',
          background: '#f02849',
          fontSize: '13px',
          margin: '5px 10px 5px 5px',
          borderRadius: '5px',
        }}
      >
        <div className="cookie__container">
          <div className="cookie__text"> {t('cookieText')}</div>
          <div
            className="cookie__links"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <br></br>
            <a
              style={{
                color: '#e4e6eb',
                marginRight: '5px',
                textDecoration: 'underline',
              }}
              href="/adatkezelesi-tajekoztato.pdf"
            >
              {t('privacyPolicy')}
            </a>
            <a
              style={{ color: '#e4e6eb', textDecoration: 'underline' }}
              href="/cookie"
            >
              {t('cookiePolicy')}
            </a>
          </div>
          <p>{Cookies}</p>
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookieBanner;
