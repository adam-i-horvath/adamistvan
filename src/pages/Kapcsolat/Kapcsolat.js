import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import './Kapcsolat.css';
import { Alert, Snackbar, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReCAPTCHA from 'react-google-recaptcha';

function Kapcsolat() {
  const { theme } = useContext(ThemeContext);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setAlert({
        open: true,
        message: 'Kérlek, igazold, hogy nem vagy robot!',
        severity: 'warning',
      });
      return;
    }

    const response = await fetch('https://adamistvan.hu/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setAlert({
        open: true,
        message: 'Üzenet elküldve!',
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      await fetch('https://adamistvan.hu/send-confirmation-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });
    } else {
      setAlert({
        open: true,
        message: 'Hiba történt az üzenet küldésekor.',
        severity: 'error',
      });
    }

    recaptchaRef.current.reset();
    setCaptchaValue(null);
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <div className={`kapcsolat ${theme}`}>
      <div className="left-column">
        <h1>Kapcsolat</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          vestibulum erat. Proin euismod, nisl eget consectetur sagittis, nisl
          nunc consectetur nisi, euismod consectetur nisl nunc euismod nisi.
        </p>
        <h2>Elérhetőségek</h2>
        <div className="social-media">
          <div>
            <FacebookIcon /> Facebook
          </div>
          <div>
            <TwitterIcon /> Twitter
          </div>
          <div>
            <LinkedInIcon /> LinkedIn
          </div>
        </div>
      </div>
      <div className="right-column">
        <h2>Írj üzenetet</h2>
        <p>
          Kérem, töltse ki az alábbi kapcsolatfelvételi űrlapot, hogy
          kapcsolatba lépjen velem.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Add meg a neved..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Add meg az email címed..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Üzenet..."
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="recaptcha-container">
            <div className="captcha">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA}
                onChange={handleCaptchaChange}
                theme={theme}
              />
            </div>
          </div>
          <div className="button-group">
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              className="send-button"
            >
              Küldés
            </Button>
          </div>
        </form>
      </div>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Kapcsolat;
