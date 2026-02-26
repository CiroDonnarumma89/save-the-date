# 💒 Sito Web di Invito Matrimoniale

Un elegante e moderno sito web per inviti matrimoniali, completamente personalizzabile.

## ✨ Caratteristiche

- **Design Elegante**: Layout raffinato con colori coordinati (rosso, oro, beige)
- **Sezione Hero**: Introduzione affascinante con animazioni
- **Dettagli Evento**: Informazioni su cerimonia, ricevimento e musica
- **Modulo RSVP**: Modulo interattivo per confermare la presenza
- **Galleria Foto**: Sezione per condividere momenti speciali
- **Informazioni Viaggio**: Dettagli su trasporti e alloggio
- **Responsive Design**: Perfetto su desktop, tablet e mobile
- **Animazioni Fluide**: Scroll fluido e effetti hover piacevoli

## 📁 Struttura del Progetto

```
.
├── index.html      # Pagina principale
├── styles.css      # Stili e design
├── script.js       # Interattività e funzionalità
└── README.md       # Questo file
```

## 🚀 Come Iniziare

1. **Aprire il file** `index.html` nel browser
2. **Personalizzare i dati**:
   - Modificare i nomi degli sposi
   - Aggiornare date e orari
   - Inserire indirizzi reali
   - Cambiare email e telefono di contatto

## 🎨 Personalizzazione

### Colori
Modifica le variabili CSS in `styles.css`:
```css
:root {
    --primary-color: #c41e3a;      /* Rosso (principale) */
    --secondary-color: #ffd700;    /* Oro (accenti) */
    --accent-color: #f5e6d3;       /* Beige (sfondo) */
}
```

### Contenuti
Aggiorna i seguenti elementi in `index.html`:
- **Nomi sposi**: Sezione `.names`
- **Data e ora**: Sezioni `.event-card`
- **Indirizzi**: Sezioni `.location`
- **Contatti**: Footer `.contact`

### Immagini
Sostituisci gli URL placeholder nel section gallery:
```html
<img src="https://via.placeholder.com/300x300?text=Inizio" alt="Il nostro inizio">
```
con i tuoi URL di immagini.

## 📱 Funzionalità

### Modulo RSVP
- Raccoglie nome, email, numero ospiti
- Gestisce esigenze dietetiche
- Consente messaggi personali
- Salva i dati in localStorage (per demo)
- Mostra messaggio di conferma

### Scroll Fluido
- Scorrimento automatico fluido tra sezioni
- Animazioni di elementi al raggiungimento

### Design Responsivo
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## 💾 RSVP Data Storage

I dati RSVP vengono salvati in localStorage. Per una soluzione produttiva:

1. **Collegare a un backend** (Node.js, Python, etc.)
2. **Usare un servizio** (Firebase, Airtable, etc.)
3. **Configurare email** di conferma automatica

Esempio di integrazione con API:
```javascript
fetch('/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## 📧 Configurare Email di Conferma

Per aggiungere email automatiche, usa un servizio come:
- **EmailJS**: Servizio email JavaScript
- **Formspree**: Form a email
- **Custom Backend**: Solution personalizzata

## 🎯 Sezioni Disponibili

1. **Hero**: Benvenuto elegante
2. **Dettagli**: Cerimonia, ricevimento, musica
3. **RSVP**: Modulo conferma
4. **Galleria**: Foto della coppia
5. **Viaggio**: Trasporti e alloggio
6. **Footer**: Contatti finali

## 📝 Personalizzazioni Consigliate

- [ ] Cambiare nomi sposi
- [ ] Aggiornare date evento
- [ ] Inserire indirizzi reali
- [ ] Aggiungere foto personali
- [ ] Configurare email RSVP
- [ ] Testare su mobile
- [ ] Personalizzare colori tema

## 🌐 Deploy Online

Carica il sito su:
- **GitHub Pages**: Gratis, statico
- **Netlify**: Semplice, gratis
- **Vercel**: Veloce, gratis
- **Hosting tradizionale**: Bluehost, SiteGround

## 📱 Condividere

Copia il link e condividi tramite:
- Email
- WhatsApp
- Social Media
- QR Code

## 🎉 Goditi il Tuo Matrimonio!

Questo template è pronto per l'uso immediato. Personalizza secondo i tuoi desideri e condividi con i tuoi ospiti.

Per supporto e aggiornamenti, consulta la documentazione HTML5 e CSS3 standard.

---

**Fatto con ❤️ per celebrare l'amore**
