# AngQuest

## User stories

### user

- [ ] Som ejer af en skattejagt skal jeg kunne aktivere/starte en event fra min enhed, således andre kan deltage i skattejagten.
    > En almindelig 'get' forespørgsel fra klient til en 'app.get handler' på serveren.
    > Serveren kan på baggrund af denne forespørgsel tilgå databasen og ændre et felt i en specifik skattejagt.
    > ChangeStream fanger denne ændring og 'pusher' en besked tilbage til serveren. 
    > Alle opkoblede (connected) klienter bliver notificeret, at eventen er startet.

- [ ] Som en bruger skal jeg kunne vælge en skattejagt fra listen over alle oprettede skattejagter.
    > En bruger må kun kunne vælge en skattejagt fra listen, hvis den er aktiv.
    > En skattejagt kan blive aktiv imens en bruger kigger på listen af skattejagter (reaktionsdygtig)
    > En pop-up besked kan gøre brugeren opmærksom på, at en specifik skattejagt er blevet aktiv (reaktionsdygtig)
    
- [ ] Som bruger skal jeg kunne se skattejagtens udfordringer på et kort, således jeg kan gå hen og aktivere disse.
    > Når man er på en aktiv skattejagt skal kortet vise lokationerne skattejagtensudfordringer
    > Det skal være tydeligt for brugeren hvilken retning han eller hun skal gå.
    > afstanden mellem ens position og en udvalgt udfordring skal mindskes jo tættere på brugeren kommer.

- [ ] As a user I should be able to solve a challenge, so I can continue the exploration after more challenges.
    > Når brugeren er indenfor 10 meter afstand af udfordringen, skal udfordringen låses op.
    > Brugeren skal kunne løse udfordringen.
