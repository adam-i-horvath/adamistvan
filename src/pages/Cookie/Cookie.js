import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';

const Cookie = () => {
  const [cookies, setCookies] = useState({});

  useEffect(() => {
    setCookies(Cookies.get()); // Összes süti objektumként
  }, []);

  return (
    <Box>
      <Paper
        sx={{
          padding: 3,
          backgroundColor: 'transparent',
          color: 'var(--text-color)',
          boxShadow: 'none',
        }}
      >
        <Typography variant="h4" gutterBottom>
          <h1>Cookie tájékoztató</h1>
        </Typography>
        <Typography variant="body1" paragraph>
          <h2>1. Mi az a cookie? </h2>A cookie-k kis méretű, betűket és
          számokat, központozást és egyéb, technikai karaktereket tartalmazó
          fájlok, amelyek egyes weboldalak látogatásakor kerülnek tárolásra
          eszközén (számítógép, mobiltelefon, tablet, okos TV stb.). Ezek olyan,
          a weboldalak felhasználását segítő informatikai adatok, melyeket a
          webszerver küld a felhasználó böngészőjének, a felhasználó eszközén
          tárolódnak, és a böngésző visszaküldi a szervernek minden alkalommal,
          amikor a webszerverről adatot kér. Nem tartalmaznak futtatható
          állományokat, vírusokat, kémprogramokat és nem férnek hozzá a
          felhasználó merevlemezének adataihoz sem.
        </Typography>
        <Typography variant="body1" paragraph>
          A cookie-k általában a következőket tartalmazzák: a látogatott oldal
          domain nevét (vagyis a böngészőbe beírt elérési címet), a cookie
          tárolási időtartamát és a tárolt információ(ka)t. A cookie többek
          között a felhasználó eszközének és böngészőjének felismerését teszi
          lehetővé, így a látogató igényeihez igazított tartalom megjelenését,
          illetve az alapvető böngészési funkciókat, – pl. összefüggő
          munkamenetek biztosítása – segítik elő. A felhasználó anonimitása
          mellett látogatottsági statisztikák elkészítését is támogatják.
        </Typography>
        <Typography variant="body1" paragraph>
          A cookie-kban nem tárolunk személyes azonosításra alkalmas adatokat,
          de a felhasználói élmény növelése érdekében használunk olyan,
          titkosított információkat, amelyek azokból származnak. Például
          segítenek nekünk a hibák beazonosításában és megoldásában, vagy abban,
          hogy meg tudjuk határozni azon érdekes, kapcsolódó termékek körét,
          amelyekre szeretnénk felhívni figyelmét a honlapunk böngészése során.
        </Typography>
        <Typography variant="body1" paragraph>
          Amennyiben a későbbiekben mégis valamilyen űrlap kitöltésével –
          kifejezett hozzájárulásával – kapcsolatba lép velünk egy olyan
          weboldalunkon, ahol cookie-kat használunk, előfordulhat, hogy ezen
          cookie-k segítségével megismerjük az űrlap kitöltését követően tett
          weboldallátogatásainak adatait. Ez a felhasználói élmény növelése
          érdekében történik.
        </Typography>
        <Typography variant="body1" paragraph>
          Abban az esetben, ha elfogadta a cookie tájékoztatót a weboldalainkon,
          a tájékoztató mindaddig nem jelenik meg újra, ameddig a böngésző
          beállítási lehetőségeiben nem törli a cookie-kat (ehhez nyújt
          segítséget a 6. pont).
        </Typography>
        <Typography variant="body1" paragraph>
          Ha egy közösségi oldalon megosztja a www.nadudvarert.hu valamely
          tartalmát – például Facebook, Youtube, Instagram –, akkor Ön további
          cookie-kat is kaphat ezektől a weboldalaktól. Ezeknek a cookie-knak
          nem a www.nadudvarert.hu oldal a kezelője, ezért azt javasoljuk, hogy
          a velük és kezelésükkel kapcsolatos további információkért látogasson
          el a harmadik fél honlapjára.
        </Typography>
        <Typography variant="h5" gutterBottom>
          <h2>2. Az oldalon használt cookie-k kategóriái</h2>
        </Typography>
        <Typography variant="body1" paragraph>
          2.1. Funkcionális és a weboldal működéséhez elengedhetetlenül
          szükséges cookie-k
        </Typography>
        <Typography variant="body1" paragraph>
          2.2. Statisztikai cookie-k
        </Typography>
        <Typography variant="body1" paragraph>
          2.2.1. Google Analytics
        </Typography>
        <Typography variant="body1" paragraph>
          2.3. Hirdetés célzó és marketing cookie-k
        </Typography>

        <Typography variant="h5" gutterBottom>
          <h2>3. Tárolt cookie-k</h2>
        </Typography>
        <List>
          {Object.entries(cookies).map(([key, value]) => (
            <ListItem key={key}>
              <ListItemText primary={<strong>{key}:</strong>} />
              <p>{value}</p>
            </ListItem>
          ))}
        </List>

        <Typography variant="h5" gutterBottom>
          <h2>4. Adatfeldolgozók</h2>
        </Typography>
        <Typography variant="body1" paragraph>
          Az adatfeldolgozók listáját az adatkezelési tájékoztató tartalmazza,
          amely elérhető az adatkezelő honlapján.
        </Typography>
        <Typography variant="h5" gutterBottom>
          <h2>5. Cookie-k kezelése</h2>
        </Typography>
        <Typography variant="body1" paragraph>
          Az oldalra látogatóknak lehetőségük van a honlap által alkalmazott
          cookie-k törlésére, tiltására, illetve beállítások módosítására.
        </Typography>
        <h3>
          <a
            href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=hu"
            target="_blank"
            rel="noreferrer"
          >
            Chrome
          </a>
        </h3>

        <h3>
          <a
            href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=hu"
            target="_blank"
            rel="noreferrer"
          >
            Chrome (Mobil)
          </a>
        </h3>

        <h3>
          <a
            href="https://support.microsoft.com/hu-hu/help/4027947/microsoft-edge-delete-cookies"
            target="_blank"
            rel="noreferrer"
          >
            Edge
          </a>
        </h3>

        <h3>
          <a
            href="https://support.mozilla.org/hu/kb/weboldalak-altal-elhelyezett-sutik-torlese-szamito"
            target="_blank"
            rel="noreferrer"
          >
            Firefox
          </a>
        </h3>

        <h3>
          <a
            href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer"
          >
            Safari (asztali eszközök)
          </a>
        </h3>

        <h3>
          <a
            href="https://support.apple.com/hu-hu/HT201265"
            target="_blank"
            rel="noreferrer"
          >
            Safari (mobil eszközök)
          </a>
        </h3>
      </Paper>
    </Box>
  );
};

export default Cookie;
