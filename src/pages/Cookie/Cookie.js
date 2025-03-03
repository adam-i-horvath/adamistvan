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
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          1. Cookie Tájékoztató
        </Typography>
        <Typography variant="body1" paragraph>
          2. Mi az a cookie? A cookie-k kis méretű, betűket és számokat,
          központozást és egyéb, technikai karaktereket tartalmazó fájlok,
          amelyek egyes weboldalak látogatásakor kerülnek tárolásra eszközén
          (számítógép, mobiltelefon, tablet, okos TV stb.). Ezek olyan, a
          weboldalak felhasználását segítő informatikai adatok, melyeket a
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
          3. Az oldalon használt cookie-k kategóriái
        </Typography>
        <Typography variant="body1" paragraph>
          3.1. Funkcionális és a weboldal működéséhez elengedhetetlenül
          szükséges cookie-k
        </Typography>
        <Typography variant="body1" paragraph>
          3.2. Statisztikai cookie-k
        </Typography>
        <Typography variant="body1" paragraph>
          3.2.1. Google Analytics
        </Typography>
        <Typography variant="body1" paragraph>
          3.3. Hirdetés célzó és marketing cookie-k
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Tárolt cookie-k
        </Typography>
        <List>
          {Object.entries(cookies).map(([key, value]) => (
            <ListItem key={key}>
              <ListItemText
                primary={<strong>{key}:</strong>}
                secondary={value}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h5" gutterBottom>
          5. Adatfeldolgozók
        </Typography>
        <Typography variant="body1" paragraph>
          Az adatfeldolgozók listáját az adatkezelési tájékoztató tartalmazza,
          amely elérhető az adatkezelő honlapján.
        </Typography>
        <Typography variant="h5" gutterBottom>
          6. Cookie-k kezelése
        </Typography>
        <Typography variant="body1" paragraph>
          Az oldalra látogatóknak lehetőségük van a honlap által alkalmazott
          cookie-k törlésére, tiltására, illetve beállítások módosítására.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Chrome"
              secondary="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=hu"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Chrome (Mobil)"
              secondary="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=hu"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Edge"
              secondary="https://support.microsoft.com/hu-hu/help/4027947/microsoft-edge-delete-cookies"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Firefox"
              secondary="https://support.mozilla.org/hu/kb/weboldalak-altal-elhelyezett-sutik-torlese-szamito"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Safari (asztali eszközök)"
              secondary="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Safari (mobil eszközök)"
              secondary="https://support.apple.com/hu-hu/HT201265"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Cookie;
