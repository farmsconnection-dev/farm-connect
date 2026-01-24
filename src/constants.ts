import { TranslationDictionary, Farm, DaySchedule } from './types';
import aardbeienImg from './assets/aardbeien.jpg';

export const MOCK_SCHEDULE_1: DaySchedule[] = [
  { day: 'mon', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'tue', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'wed', isOpen: true, openTime: '08:00', closeTime: '12:00' },
  { day: 'thu', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'fri', isOpen: true, openTime: '08:00', closeTime: '20:00' },
  { day: 'sat', isOpen: true, openTime: '09:00', closeTime: '16:00' },
  { day: 'sun', isOpen: false, openTime: '00:00', closeTime: '00:00' },
];
export const DEFAULT_SCHEDULE = MOCK_SCHEDULE_1;

const MOCK_SCHEDULE_2: DaySchedule[] = [
  { day: 'mon', isOpen: true, openTime: '09:00', closeTime: '17:00' },
  { day: 'tue', isOpen: true, openTime: '09:00', closeTime: '17:00' },
  { day: 'wed', isOpen: true, openTime: '09:00', closeTime: '17:00' },
  { day: 'thu', isOpen: true, openTime: '09:00', closeTime: '17:00' },
  { day: 'fri', isOpen: true, openTime: '09:00', closeTime: '17:00' },
  { day: 'sat', isOpen: false, openTime: '00:00', closeTime: '00:00' },
  { day: 'sun', isOpen: false, openTime: '00:00', closeTime: '00:00' },
];

export const DICTIONARY: TranslationDictionary = {
  slogan: {
    nl: "Van veld tot vork",
    fr: "Du champ à l'assiette",
    en: "From field to fork",
    de: "Vom Feld zur Gabel"
  },
  btn_discoverer: {
    nl: "Ik ben een Ontdekker",
    fr: "Je suis un Explorateur",
    en: "I am a Discoverer",
    de: "Ich bin ein Entdecker"
  },
  btn_farmer: {
    nl: "Ik ben een Boer",
    fr: "Je suis un Agriculteur",
    en: "I am a Farmer",
    de: "Ich bin een Bauer"
  },
  menu_discover: { nl: "Ontdekken", fr: "Découvrir", en: "Discover", de: "Entdecken" },
  menu_calendar: { nl: "Seizoenskalender", fr: "Calendrier de saison", en: "Seasonal Calendar", de: "Saisonkalender" },
  menu_favorites: {
    nl: "Favorieten",
    fr: "Favoris",
    en: "Favorites",
    de: "Favoriten"
  },
  menu_about: { nl: "Over Farm Connect", fr: "À propos de nous", en: "About Farm Connect", de: "Über Farm Connect" },
  menu_support: {
    nl: "Hulp nodig?",
    fr: "Besoin d'aide ?",
    en: "Need help?",
    de: "Hilfe benötigt?"
  },
  menu_inventory: { nl: "Voorraadbeheer", fr: "Gestion de Stock", en: "Inventory Management", de: "Bestandsverwaltung" },
  mission_title: {
    nl: "Onze Missie",
    fr: "Notre Mission",
    en: "Our Mission",
    de: "Unsere Mission"
  },
  mission_text: {
    nl: "Farm Connect verbindt de Belgische consument rechtstreeks met de boer voor een eerlijke prijs en de hoogste versheid.",
    fr: "Farm Connect connecte le consommateur belge directement avec l'agriculteur pour un prix juste et une fraîcheur maximale.",
    en: "Farm Connect connects the Belgian consumer directly with the farmer for a fair price and maximum freshness.",
    de: "Farm Connect verbindet den belgischen Verbraucher direkt mit dem Landwirt für einen fairen Preis und höchste Frische."
  },
  search_placeholder: {
    nl: "Zoek product, boer of stad...",
    fr: "Chercher produit, ferme ou ville...",
    en: "Search product, farm or city...",
    de: "Suche Produkt, Hof oder Stadt..."
  },
  login: { nl: "Inloggen", fr: "Connexion", en: "Login", de: "Anmelden" },
  logout: { nl: "Afmelden", fr: "Se déconnecter", en: "Log out", de: "Abmelden" },
  guest_mode: { nl: "Ga door als Gast", fr: "Continuer en invité", en: "Continue as guest", de: "Als Gast fortfahren" },
  login_google: { nl: "Log in met Google", fr: "Se connecter avec Google", en: "Login with Google", de: "Mit Google anmelden" },
  create_account: { nl: "Maak een account aan", fr: "Créer un compte", en: "Create an account", de: "Konto erstellen" },
  auth_gate_text: {
    nl: "Sla je favoriete boerderijen op en ontvang meldingen van verse oogst door in te loggen.",
    fr: "Enregistrez vos fermes préférées et recevez des notifications de récoltes fraîches en vous connectant.",
    en: "Save your favorite farms and receive notifications of fresh harvests by logging in.",
    de: "Speichern Sie Ihre Lieblingsbauernhöfe und erhalten Sie Benachrichtigungen über frische Ernten, indem Sie sich anmelden."
  },
  cancel: { nl: "Annuleren", fr: "Annuler", en: "Cancel", de: "Abbrechen" },
  open_now: { nl: "Nu Open", fr: "Ouvert", en: "Open Now", de: "Jetzt offen" },
  closed: { nl: "Gesloten", fr: "Fermé", en: "Closed", de: "Geschlossen" },
  opens_at: { nl: "Opent om", fr: "Ouvre à", en: "Opens at", de: "Öffnet um" },
  open_until: { nl: "Open tot", fr: "Ouvert jusqu'à", en: "Open until", de: "Offen tot" },
  view_list: { nl: "Lijst", fr: "Liste", en: "List", de: "Liste" },
  view_map: { nl: "Kaart", fr: "Carte", en: "Map", de: "Karte" },
  filter_all: { nl: "Alles", fr: "Tout", en: "All", de: "Alles" },
  filter_new: { nl: "Nieuw", fr: "Nouveau", en: "New", de: "Neu" },
  filter_nearby: { nl: "Dichtbij", fr: "Proche", en: "Nearby", de: "In der Nähe" },
  filter_fruit: { nl: "Fruit", fr: "Fruits", en: "Fruit", de: "Obst" },
  filter_vegetables: { nl: "Groenten", fr: "Légumes", en: "Vegetables", de: "Gemüse" },
  filter_dairy: { nl: "Zuivel", fr: "Produits laitiers", en: "Dairy", de: "Molkerei" },
  filter_meat: { nl: "Vlees", fr: "Viande", en: "Meat", de: "Fleisch" },
  filter_eggs: { nl: "Eieren", fr: "Œufs", en: "Eggs", de: "Eier" },
  filter_honey: { nl: "Honing", fr: "Miel", en: "Honey", de: "Honig" },
  filter_nuts: { nl: "Noten", fr: "Noix", en: "Nuts", de: "Nüsse" },
  filter_route: { nl: "Route", fr: "Itinéraire", en: "Route", de: "Route" },
  filter_open_now: { nl: "Nu Open", fr: "Ouvert", en: "Open Now", de: "Jetzt offen" },
  filter_vending_machines: { nl: "24/7 Automaten", fr: "Distributeurs 24/7", en: "24/7 Vending", de: "24/7 Automaten" },
  fast_filters: { nl: "Snel-filters", fr: "Filtres rapides", en: "Fast Filters", de: "Schnellfilter" },
  start_route: { nl: "Start Route", fr: "Démarrer", en: "Start Route", de: "Route starten" },
  btn_route: { nl: "Route", fr: "Itinéraire", en: "Route", de: "Route" },
  products: { nl: "Producten", fr: "Produits", en: "Products", de: "Produkte" },
  my_farm: { nl: "Mijn Boerderij", fr: "Ma Ferme", en: "My Farm", de: "Mein Bauernhof" },
  add_product: { nl: "Product Toevoegen", fr: "Ajouter un product", en: "Add Product", de: "Produkt hinzufügen" },
  product_name: { nl: "Productnaam", fr: "Nom", en: "Product Name", de: "Produktname" },
  price: { nl: "Prijs", fr: "Prix", en: "Price", de: "Preis" },
  unit: { nl: "Eenheid", fr: "Unité", en: "Unit", de: "Eenheid" },
  upload_photo_label: { nl: "Productfoto", fr: "Photo du produit", en: "Product Photo", de: "Produktfoto" },
  upload_photo_btn: { nl: "Kies bestand", fr: "Choisir un fichier", en: "Choose File", de: "Datei wählen" },
  stats_performance: { nl: "Jouw Prestaties", fr: "Vos Performances", en: "Your Performance", de: "Ihre Leistung" },
  stats_favorited: { nl: "In favorieten", fr: "En favoris", en: "In favorites", de: "In Favoriten" },
  stats_views: { nl: "Aantal weergaven", fr: "Vues du profil", en: "Number of views", de: "Profilaufrufe" },
  stat_clicks: { nl: "Product-kliks", fr: "Clics produits", en: "Product clicks", de: "Produkt-Klicks" },
  stat_followers: { nl: "Aantal mensen dat jou volgt", fr: "Nombre de followers", en: "Number of followers", de: "Anzahl der Follower" },
  stat_motivation_empty: { nl: "Nog geen volgers? Deel je code met je buren!", fr: "Pas de followers ? Partagez votre code !", en: "No followers yet? Share your code!", de: "Noch keine Follower? Teilen Sie Ihren Code!" },
  stat_motivation_active: { nl: "Jouw lokale community groeit!", fr: "Votre communauté grandit !", en: "Your local community is growing!", de: "Ihre lokale Gemeinschaft wächst!" },
  support_ask: { nl: "Vraag stellen", fr: "Poser une question", en: "Ask a question", de: "Frage stellen" },
  support_email: { nl: "Stuur ons een e-mail", fr: "Envoyez-nous un e-mail", en: "Send us an email", de: "Schicken Sie uns eine E-Mail" },
  support_guide_title: { nl: "Boeren-handleiding", fr: "Guide de l'agriculteur", en: "Farmer manual", de: "Bauern-Handbuch" },
  support_guide_desc: { nl: "Hoe verhoog ik mijn verkoop?", fr: "Comment augmenter mes ventes ?", en: "How do I increase my sales?", de: "Wie steigere ich meinen Umsatz?" },
  support_version: { nl: "Versie 1.9.0 • Made in Belgium", fr: "Version 1.9.0 • Made in Belgium", en: "Version 1.9.0 • Made in Belgium", de: "Version 1.9.0 • Made in Belgium" },
  day_mon: { nl: "Maandag", fr: "Lundi", en: "Monday", de: "Montag" },
  day_tue: { nl: "Dinsdag", fr: "Mardi", en: "Tuesday", de: "Dienstag" },
  day_wed: { nl: "Woensdag", fr: "Mercredi", en: "Wednesday", de: "Mittwoch" },
  day_thu: { nl: "Donderdag", fr: "Jeudi", en: "Thursday", de: "Donnerstag" },
  day_fri: { nl: "Vrijdag", fr: "Vendredi", en: "Friday", de: "Freitag" },
  day_sat: { nl: "Zaterdag", fr: "Samedi", en: "Saturday", de: "Samstag" },
  day_sun: { nl: "Zondag", fr: "Dimanche", en: "Sunday", de: "Sonntag" },
  day_maa: { nl: "Maandag", fr: "Lundi", en: "Monday", de: "Montag" },
  day_din: { nl: "Dinsdag", fr: "Mardi", en: "Tuesday", de: "Dienstag" },
  day_woe: { nl: "Woensdag", fr: "Mercredi", en: "Wednesday", de: "Mittwoch" },
  day_don: { nl: "Donderdag", fr: "Jeudi", en: "Thursday", de: "Donnerstag" },
  day_vri: { nl: "Vrijdag", fr: "Vendredi", en: "Friday", de: "Freitag" },
  day_zat: { nl: "Zaterdag", fr: "Samedi", en: "Saturday", de: "Samstag" },
  day_zon: { nl: "Zondag", fr: "Dimanche", en: "Sunday", de: "Sonntag" },
  phone: { nl: "Telefoonnummer", fr: "Téléphone", en: "Phone Number", de: "Telefonnummer" },
  btn_register_farm: { nl: "+ Nieuwe Boerderij Registreren", fr: "+ Enregistrer une nouvelle ferme", en: "+ Register New Farm", de: "+ Neuen Bauernhof registrieren" },
  faq_costs_q: { nl: "Wat zijn de kosten?", fr: "Quels sont les coûts ?", en: "What are the costs?", de: "Was sind die Kosten?" },
  faq_costs_a: { nl: "Registratie is gratis. Een premium abonnement kost €10/maand of €100/jaar. Hierbij is 1 boerderij en 1 automaat inbegrepen.", fr: "L'inscription est gratuite. Abonnement premium: 10 €/mois ou 100 €/an (1 ferme + 1 distributeur inclus).", en: "Registration is free. Premium subscription: €10/month or €100/year (1 farm + 1 machine included).", de: "Die Registrierung ist kostenlos. Premium-Abonnement: 10 €/Monat oder 100 €/Jahr (1 Hof + 1 Automat inklusive)." },
  faq_privacy_q: { nl: "Hoe zit het met mijn privacy?", fr: "Et ma vie privée ?", en: "What about my privacy?", de: "Was ist mit meiner Privatsphäre?" },
  faq_privacy_a: { nl: "Wij verkopen nooit uw data aan derden. Al uw gegevens worden beveiligd opgeslagen volgens de GDPR-richtlijnen.", fr: "Nous ne vendons jamais vos données. Conformité RGPD.", en: "We never sell your data. GDPR compliant.", de: "Wir verkaufen Ihre Daten niemals. DSGVO-konform." },
  faq_switch_q: { nl: "Kan ik tussen accounts wisselen?", fr: "Puis-je changer de compte ?", en: "Can I switch accounts?", de: "Kann ich das Konto wechseln?" },
  faq_switch_a: { nl: "Ja, u kunt via het menu eenvoudig schakelen tussen uw rol als boer en als ontdekker zonder opnieuw in te loggen.", fr: "Oui, basculez facilement via le menu.", en: "Yes, switch easily via the menu.", de: "Ja, wechseln Sie einfach über das Menü." },
  did_you_know: { nl: "Wist je dat?", fr: "Le saviez-vous ?", en: "Did you know?", de: "Wussten Sie schon?" },
  fact_fresh_from_land: { nl: "Vers van het land", fr: "Frais du champ", en: "Fresh from the field", de: "Frisch vom Feld" },
  fact_default_text: { nl: "Ontdek de passie achter {product} van onze lokale boeren.", fr: "Découvrez la passion derrière {product} de nos agriculteurs locaux.", en: "Discover the passion behind {product} from our local farmers.", de: "Entdecken Sie die Leidenschaft hinter {product} von unseren lokalen Bauern." },
  welcome_discoverer: { nl: "Welkom, Ontdekker!", fr: "Bienvenue, Explorateur !", en: "Welcome, Discoverer!", de: "Willkommen, Entdecker!" },
  referral_title: { nl: "Nodig een collega-boer uit", fr: "Invitez un collègue", en: "Invite a colleague", de: "Laden Sie einen Kollegen ein" },
  referral_desc: { nl: "Nodig een collega uit voor een jaarabonnement en ontvang €20 direct cash op je rekening.", fr: "Invitez un collègue pour un abonnement annuel et recevez 20 € cash directement sur votre compte.", en: "Invite a colleague for an annual subscription and receive €20 direct cash on your account.", de: "Laden Sie einen Kollegen zu einem Jahresabonnement ein und erhalten Sie 20 € Bargeld direkt auf Ihr Konto." },
  referral_conditions: { nl: "Bonus geldig als de collega een jaarabonnement neemt.", fr: "Bonus valable si le collègue prend un abonnement annuel.", en: "Bonus valid if the colleague takes an annual subscription.", de: "Bonus gültig, wenn der Kollege ein Jahresabonnement abschließt." },
  referral_btn: { nl: "Deel uitnodiging", fr: "Partager", en: "Share invitation", de: "Einladung teilen" },
  referral_wa_msg: { nl: "Maak ook je boerderij zichtbaar op Farm Connect! Gebruik mijn code:", fr: "Rendez votre ferme visible sur Farm Connect ! Utilisez mon code :", en: "Make your farm visible on Farm Connect too! Use my code:", de: "Machen Sie Ihren Bauernhof ook auf Farm Connect sichtbar! Benutzen Sie meinen Code:" },
  referral_modal_title: { nl: "Jouw Unieke Code", fr: "Votre Code Unique", en: "Your Unique Code", de: "Ihr Einzigartiger Code" },
  referral_copy: { nl: "Kopieer Link", fr: "Copier le lien", en: "Copy Link", de: "Link Kopieren" },
  referral_share: { nl: "Deel via WhatsApp", fr: "Partager via WhatsApp", en: "Share via WhatsApp", de: "Teilen über WhatsApp" },
  faq_title: { nl: "Veelgestelde vragen", fr: "FAQ", en: "FAQ", de: "FAQ" },
  faq_1_q: { nl: "Hoe werken de betalingen?", fr: "Comment fonctionnent les paiements ?", en: "How do payments work?", de: "Wie funktionieren die Zahlungen?" },
  faq_1_a: { nl: "Betalen gebeurt rechtstreeks bij de boer via hun eigen systemen (Payconiq/Cash). Farm Connect faciliteert enkel de digitale verbinding.", fr: "Le paiement s'effectue directement chez l'agriculteur via ses propres systèmes (Payconiq/Cash). Farm Connect facilite uniquement la connexion numérique.", en: "Payments are made directly to the farmer via their own systems (Payconiq/Cash). Farm Connect only facilitates the connection.", de: "Zahlungen erfolgen direkt beim Landwirt über dessen eigene Systeme (Payconiq/Bar). Farm Connect erleichtert lediglich die digitale Verbindung." },
  feedback_title: { nl: "Feedback", fr: "Feedback", en: "Feedback", de: "Feedback" },
  feedback_subtitle: { nl: "Deel je ervaring met ons", fr: "Partagez votre expérience", en: "Share your experience", de: "Teilen Sie Ihre Erfahrung" },
  feedback_placeholder: { nl: "Wat vind je van Farm Connect? Suggesties, bugs, of complimenten zijn welkom!", fr: "Que pensez-vous de Farm Connect ? Vos suggestions, bugs ou compliments sont les bienvenus !", en: "What do you think of Farm Connect? Suggestions, bugs, or compliments are welcome!", de: "Was halten Sie von Farm Connect? Anregungen, Fehler oder Komplimente sind willkommen!" },
  feedback_success_title: { nl: "Bedankt!", fr: "Merci !", en: "Thank you!", de: "Vielen Dank!" },
  feedback_success_text: { nl: "Je feedback is verstuurd", fr: "Votre feedback a été envoyé", en: "Your feedback has been sent", de: "Ihr Feedback wurde gesendet" },
  sending: { nl: "Versturen...", fr: "Envoi...", en: "Sending...", de: "Senden..." },
  send: { nl: "Verstuur", fr: "Envoyer", en: "Send", de: "Senden" },
  faq_3_q: { nl: "Hoe vers zijn de producten?", fr: "Quelle is la fraîcheur des produits ?", en: "How fresh are the products?", de: "Wie frisch sind die Produkte?" },
  faq_3_a: { nl: "Boeren bieden producten aan die vaak diezelfde dag nog geoogst zijn. Versheid en smaak staan centraal bij onze Belgische hoeves.", fr: "Les agriculteurs proposent des produits souvent récoltés le jour même. La fraîcheur et le goût sont au cœur de nos fermes belges.", en: "Farmers offer products often harvested the same day. Freshness and taste are key to our Belgian farms.", de: "Die Landwirte bieden Produkte an, die oft am selben Tag geerntet wurden. Frische und Geschmack stehen bei unseren belgischen Höfen im Mittelpunkt." },
  faq_4_q: { nl: "Hoe werkt de route?", fr: "Comment fait l'itinéraire ?", en: "How does the route work?", de: "Wie funktioniert die Route?" },
  faq_4_a: { nl: "Gebruik de route planner op de hoofdpagina. Wij tonen je alle boeren die direct op je weg liggen.", fr: "Utilisez le planificateur d'itinéraire sur la page principale. Nous vous montrons tous les agriculteurs sur votre chemin.", en: "Use the route planner on the main page. We show you all the farmers directly on your way.", de: "Nutzen Sie den Routenplaner auf der Hauptseite. Wir zeigen Ihnen alle Landwirte, die direkt op uw weg liggen." },
  faq_order_q: { nl: "Kan ik online bestellen?", fr: "Puis-je commander en ligne ?", en: "Can I order online?", de: "Kann ich online bestellen?" },
  faq_order_a: { nl: "Nee, Farm Connect brengt je tot bij de boer. Je koopt en betaalt rechtstreeks in de hoevewinkel of automaat.", fr: "Non, Farm Connect vous amène à la ferme. Vous achetez et payez directement à la boutique ou au distributeur.", en: "No, Farm Connect brings you to the farmer. You buy and pay directly at the farm shop or vending machine.", de: "Nein, Farm Connect bringt Sie zum Bauern. Sie kaufen und bezahlen direkt im Hofladen oder am Automaten." },
  faq_stock_q: {
    nl: "Is de voorraad altijd actueel?",
    fr: "Le stock est-il toujours à jour ?",
    en: "Is the stock always up to date?",
    de: "Ist der Vorrat immer aktuell?"
  },
  faq_stock_a: {
    nl: "Ja, de boer werkt de voorraad live bij in de app. Wanneer een product tijdelijk is uitverkocht, wordt dit gemarkeerd als Op=Op zodat je niet voor niets rijdt.",
    fr: "Oui, l'agriculteur met à jour le stock en direct dans l'application. Lorsqu'un product est temporairement en rupture de stock, il est marqué comme épuisé voor que vous ne vous déplaciez pas pour rien.",
    en: "Yes, the farmer updates the stock live in the app. When a product is temporarily sold out, it is marked as sold out so you don't drive for nothing.",
    de: "Ja, der Landwirt aktualisiert den Bestand live in de App. Wenn een Product vorübergehend uitverkocht is, wordt dit gemarkeerd als uitverkocht, zodat u niet umsonst fährt."
  },
  faq_referral_q: {
    nl: "Hoe werkt de €20 referral bonus?",
    fr: "Comment fonctionne le bonus de 20 € ?",
    en: "How does the €20 referral bonus work?",
    de: "Wie funktioniert der 20 € Empfehlungsbonus?"
  },
  faq_referral_a: {
    nl: "Als jij een jaarabonnement hebt en een collega uitnodigt die ook een jaarabonnement neemt, storten wij €20 cash op jouw rekening.",
    fr: "Si vous avez un abonnement annuel et invitez un collègue qui prend aussi un abonnement annuel, nous versons 20 € en espèces sur votre compte.",
    en: "If you have an annual subscription and invite a colleague who also takes an annual subscription, we deposit €20 cash into your account.",
    de: "Wenn Sie ein Jahresabonnement haben und einen Kollegen einladen, der ebenfalls ein Jahresabonnement abschließt, zahlen wir 20 € bar auf Ihr Konto."
  },
  faq_annual_q: {
    nl: "Wat zijn de voordelen van een jaarabonnement?",
    fr: "Quels sont les avantages d'un abonnement annuel ?",
    en: "What are the benefits of an annual subscription?",
    de: "Was sind die Vorteile eines Jahresabonnements?"
  },
  faq_annual_a: {
    nl: "Je betaalt slechts €100 ipv €120 (Bespaar €20), je krijgt voorrang in de zoekresultaten en je kunt onbeperkt verdienen met het referral-systeem.",
    fr: "Vous ne payez que 100 € au lieu de 120 € (Économisez 20 €), vous obtenez la priorité dans les résultats et vous pouvez gagner de manière illimitée avec le système de parrainage.",
    en: "You pay only €100 instead of €120 (Save €20), get priority in search results, and can earn unlimitedly with the referral system.",
    de: "Sie zahlen nur 100 € statt 120 € (Sparen Sie 20 €), erhalten Priorität in den Suchergebnissen und können unbegrenzt mit dem Empfehlungssystem verdienen."
  },
  faq_payments_q: {
    nl: "Hoe rekenen klanten af?",
    fr: "Comment les clients paient-ils ?",
    en: "How do customers pay?",
    de: "Wie bezahlen die Kunden?"
  },
  faq_payments_a: {
    nl: "Klanten betalen rechtstreeks aan jou via Payconiq of cash. Wij houden geen commissie in op je verkoop.",
    fr: "Les clients paient directement chez vous via Payconiq ou en espèces. Nous ne prenons aucune commission sur vos ventes.",
    en: "Customers pay you directly via Payconiq or cash. We do not take any commission on your sales.",
    de: "Die Kunden bezahlen Sie direkt über Payconiq oder bar. Wir erheben keine Provision auf Ihre Verkäufe."
  },
  faq_extra_machine_q: { nl: "Hoe voeg ik extra automaten toe?", fr: "Comment ajouter des distributeurs ?", en: "How to add extra machines?", de: "Wie füge ich Automaten hinzu?" },
  faq_extra_machine_a: { nl: "De eerste automaat is inbegrepen bij je abonnement. Pas vanaf de 3e verkooplocatie (extra automaat) betaal je €3/maand (of €2 via jaarplan).", fr: "Le premier distributeur est inclus. Payez à partir du 3ème point de vente.", en: "The first machine is included. Pay from the 3rd sales point.", de: "Der erste Automat ist inbegriffen. Zahlen Sie ab dem 3. Verkaufsstandort." },
  faq_verification_q: { nl: "Hoe werkt de verificatie?", fr: "Comment fonctionne la vérification ?", en: "How does verification work?", de: "Wie funktioniert die Verifikation?" },
  faq_verification_a: { nl: "Wij controleren elke boerderij handmatig op echtheid en lokale productie. Alleen échte producenten krijgen toegang tot het platform.", fr: "Nous vérifions chaque ferme manuellement. Seuls les vrais producteurs ont accès.", en: "We verify every farm manually. Only real producers get access.", de: "Wir überprüfen jeden Hof manuell. Nur echte Produzenten erhalten Zugang." },
  faq_pwa_q: {
    nl: "Hoe installeer ik deze Web App?",
    fr: "Comment installer cette Web App ?",
    en: "How do I install this Web App?",
    de: "Wie installiere ik deze Web App?"
  },
  faq_pwa_a: {
    nl: "Op iPhone: Tik op het 'Deel'-icoon onderaan in Safari en kies 'Zet op beginscherm'. Op Android: Tik op de drie puntjes rechtsboven in Chrome en kies 'App installeren'.",
    fr: "Sur iPhone : Appuyez sur l'icône 'Partager' dans Safari et choisissez 'Sur l'écran d'accueil'. Sur Android : Appuyez sur de drie punten dans Chrome et choisissez 'Installer l'application'.",
    en: "On iPhone: Tap the 'Share' icon in Safari and choose 'Add to Home Screen'. On Android: Tap the three dots in Chrome and choose 'Install App'.",
    de: "Auf dem iPhone: Tippen Sie in Safari auf das 'Teilen'-Symbol und wählen Sie 'Zum Home-Bildschirm'. Auf Android: Tippen Sie in Chrome auf die drie Punkte und wählen Sie 'App installeren'."
  },
  faq_farmer_pwa_q: {
    nl: "Hoe download ik de app op mijn telefoon?",
    fr: "Comment télécharger l'application ?",
    en: "How do I download the app?",
    de: "Wie lade ik die App herunter?"
  },
  faq_farmer_pwa_a: {
    nl: "Je hoeft niets uit de App Store te downloaden. Open farmconnect.be in Safari (iPhone) of Chrome (Android) en kies 'Zet op beginscherm' of 'App installeren'. Zo heb je altijd direct toegang tot je dashboard.",
    fr: "Rien à télécharger sur l'App Store. Ouvrez farmconnect.be en Safari ou Chrome et choisissez 'Sur l'écran d'accueil' of 'Installer l'application'.",
    en: "No need to download from the App Store. Open farmconnect.be in Safari or Chrome and choose 'Add to Home Screen' or 'Install App'.",
    de: "Kein Download aus dem App Store erforderlich. Öffnen Sie farmconnect.be in Safari oder Chrome und wählen Sie 'Zum Home-Bildschirm' oder 'App installieren'."
  },
  login_required_favs: {
    nl: "Log in om je favorieten te bewaren.",
    fr: "Connectez-vous pour enregistrer vos favoris.",
    en: "Log in to save your favorites.",
    de: "Melden Sie sich an, um Ihre Favoriten zu speichern."
  },
  login_for_more: { nl: "Log in voor meer", fr: "Connectez-vous pour plus", en: "Login for more", de: "Anmelden voor meer" },
  welcome_back: { nl: "Welkom terug", fr: "Bon retour", en: "Welcome back", de: "Willkommen zurück" },
  farmer_dashboard_invite_earn: { nl: "Nodig uit & Verdien €20", fr: "Invite & Gagne 20 €", en: "Invite & Earn €20", de: "Einladen & 20 € verdienen" },
  farmer_dashboard_initiative_text: {
    nl: "Bedankt dat je deel uitmaakt van dit initiatief. Samen maken we een vuist voor eerlijke prijzen en kortere ketens.",
    fr: "Merci de faire partie de cette initiative. Ensemble, nous luttons pour des prix équitables et des circuits courts.",
    en: "Thank you for being part of this initiative. Together we stand for fair prices and shorter chains.",
    de: "Danke, dass Sie Teil dieser Initiative sind. Gemeinsam setzen wir uns für faire Preise und kürzere Ketten ein."
  },
  verification_pending_banner: { nl: "Verificatie In Behandeling", fr: "Vérification en cours", en: "Verification Pending", de: "Verifizierung läuft" },
  verification_pending_desc: {
    nl: "Je profiel is nog niet publiek zichtbaar. We verifiëren je gegevens binnen 24 uur. In de tussentijd kun je alvast je profiel en producten volledig invullen.",
    fr: "Votre profil n'est pas encore visible. Nous vérifions vos données dans les 24h. En attendant, complétez votre profil.",
    en: "Your profile is not yet publicly visible. We verify your details within 24 hours. In the meantime, you can complete your profile.",
    de: "Ihr Profil ist noch nicht öffentlich sichtbar. Wir prüfen Ihre Daten innerhalb von 24h. In der Zwischenzeit können Sie Ihr Profil vervollständigen."
  },
  verified_farm: { nl: "Geverifieerde Boerderij", fr: "Ferme Vérifiée", en: "Verified Farm", de: "Verifizierter Bauernhof" },
  verified_farm_desc: {
    nl: "Je profiel is geverifieerd en volledig zichtbaar voor consumenten! Je bent goed bezig.",
    fr: "Votre profil est vérifié et visible ! Bon travail.",
    en: "Your profile is verified and fully visible to consumers! You're doing great.",
    de: "Ihr Profil ist verifiziert und für Verbraucher sichtbar! Sie machen das großartig."
  },
  share_farm_title: { nl: "Deel je Boerderij", fr: "Partagez votre ferme", en: "Share your Farm", de: "Teilen Sie Ihren Bauernhof" },
  share_farm_desc: {
    nl: "Laat de wereld weten waar ze verse, eerlijke producten kunnen vinden. Zonder de boer geen eten! 🌾",
    fr: "Faites savoir au monde où trouver des produits frais. Sans agriculteur, pas de nourriture ! 🌾",
    en: "Let the world know where to find fresh, honest products. No farmer, no food! 🌾",
    de: "Lassen Sie die Welt wissen, wo sie frische Produkte finden kann. Ohne Bauer kein Essen! 🌾"
  },
  share_farm_preview: { nl: "PREVIEW VAN JE BERICHT:", fr: "APERÇU DE VOTRE MESSAGE :", en: "PREVIEW OF YOUR MESSAGE:", de: "VORSCHAU IHRER NACHRICHT:" },
  share_farm_msg: {
    nl: "Ontdek je boerderij! Verse producten, eerlijke prijzen, rechtstreeks van de boer. Zonder de boer geen eten! 🚜🥬",
    fr: "Découvrez votre ferme ! Produits frais, prix justes, direct du producteur. Sans agriculteur, pas de nourriture ! 🚜🥬",
    en: "Discover your farm! Fresh products, fair prices, direct from the farmer. No farmer, no food! 🚜🥬",
    de: "Entdecken Sie Ihren Bauernhof! Frische Produkte, faire Preise, direkt vom Bauern. Ohne Bauer kein Essen! 🚜🥬"
  },
  copy_link: { nl: "KOPIEER LINK", fr: "COPIER LE LIEN", en: "COPY LINK", de: "LINK KOPIEREN" },
  share_on_facebook: { nl: "DEEL OP FACEBOOK", fr: "PARTAGER SUR FACEBOOK", en: "SHARE ON FACEBOOK", de: "AUF FACEBOOK TEILEN" },
  status_update_title: { nl: "Status Update", fr: "Mise à jour du statut", en: "Status Update", de: "Status-Update" },
  status_update_desc: {
    nl: "Deel een tijdelijke actie of boodschap met je klanten. Deze verschijnt prominent op je boerderijkaart.",
    fr: "Partagez une action ou un message temporaire avec vos clients.",
    en: "Share a temporary action or message with your customers. This appears prominently on your farm map.",
    de: "Teilen Sie eine temporäre Aktion oder Nachricht mit Ihren Kunden."
  },
  status_update_label: { nl: "BOODSCHAP", fr: "MESSAGE", en: "MESSAGE", de: "NACHRICHT" },
  status_update_placeholder: { nl: "Bijv: Verse aardbeien nu beschikbaar! 🍓", fr: "Ex: Fraises fraîches disponibles ! 🍓", en: "E.g.: Fresh strawberries now available! 🍓", de: "Z.B.: Frische Erdbeeren jetzt verfügbar! 🍓" },
  status_update_valid_label: { nl: "GELDIG VOOR", fr: "VALABLE POUR", en: "VALID FOR", de: "GÜLTIG FÜR" },
  status_update_publish: { nl: "PUBLICEER", fr: "PUBLIER", en: "PUBLISH", de: "VERÖFFENTLICHEN" },
  status_update_days: { nl: "dag", fr: "jour", en: "day", de: "Tag" },
  status_update_days_plural: { nl: "dagen", fr: "jours", en: "days", de: "Tage" },
  active_status: { nl: "Actieve Status", fr: "Statut Actif", en: "Active Status", de: "Aktiver Status" },
  expires_on: { nl: "Vervalt op:", fr: "Expire le :", en: "Expires on:", de: "Läuft ab am:" },
  no_farm_registered: { nl: "Je hebt nog geen boerderij geregistreerd", fr: "Aucune ferme enregistrée", en: "No farm registered yet", de: "Noch kein Bauernhof registriert" },
  no_farm_desc: {
    nl: "Zet jezelf vandaag nog op de kaart en laat de buurt zien waar hun eten vandaan komt!",
    fr: "Mettez votre ferme sur la carte aujourd'hui !",
    en: "Put yourself on the map today and show the neighborhood where their food comes from!",
    de: "Setzen Sie sich noch heute auf die Karte!"
  },
  register_now: { nl: "Registreer Nu", fr: "Inscrivez-vous", en: "Register Now", de: "Jetzt registrieren" },
  // New Functional Translations
  in_stock: { nl: "In Voorraad", fr: "En Stock", en: "In Stock", de: "Auf Lager" },
  sold_out: { nl: "Op = Op", fr: "Épuisé", en: "Sold Out", de: "Ausverkauft" },
  temp_sold_out: { nl: "Tijdelijk uitverkocht", fr: "Temporairement épuisé", en: "Temporarily sold out", de: "Vorübergehend ausverkauft" },
  bring_bag: { nl: "Vergeet je tas niet mee te nemen!", fr: "N'oubliez pas votre sac !", en: "Don't forget to bring your bag!", de: "Vergessen Sie Ihre Tasche nicht!" },
  popular_products: { nl: "Populaire Producten", fr: "Produits Populaires", en: "Popular Products", de: "Beliebte Produkte" },
  clicks_week: { nl: "kliks deze week", fr: "clics cette semaine", en: "clicks this week", de: "Klicks diese Woche" },
  update_profile: { nl: "Profiel bijwerken", fr: "Mettre à jour le profil", en: "Update profile", de: "Profil aktualisieren" },
  edit_hours: { nl: "Uren aanpassen", fr: "Modifier les horaires", en: "Edit hours", de: "Öffnungszeiten bearbeiten" },
  save: { nl: "Opslaan", fr: "Enregistrer", en: "Save", de: "Speichern" },
  add_farm_title: { nl: "Nieuwe Boerderij", fr: "Nouvelle Ferme", en: "New Farm", de: "Neuer Bauernhof" },
  farm_name: { nl: "Naam Boerderij", fr: "Nom de la Ferme", en: "Farm Name", de: "Name des Bauernhofs" },
  address_label: { nl: "Adres", fr: "Adresse", en: "Address", de: "Adresse" },
  register_farm_title: { nl: "Registreer je Boerderij", fr: "Enregistrez votre ferme", en: "Register your Farm", de: "Registrieren Sie Ihren Bauernhof" },
  register_farm_subtitle: { nl: "Start met verkopen op Farm Connect", fr: "Commencez à vendre sur Farm Connect", en: "Start selling on Farm Connect", de: "Verkaufen Sie auf Farm Connect" },
  farm_name_placeholder: { nl: "Hoe heet je boerderij?", fr: "Comment s'appelle votre ferme ?", en: "What is your farm named?", de: "Wie heißt Ihr Bauernhof?" },
  email_label: { nl: "E-mailadres", fr: "Adresse e-mail", en: "Email Address", de: "E-Mail-Adresse" },
  email_placeholder: { nl: "bijv. jandeboer@hoeve.be", fr: "ex. jean@ferme.be", en: "e.g. john@farm.com", de: "z.B. hans@bauernhof.de" },
  address_placeholder: { nl: "Begin met typen voor suggesties...", fr: "Commencez à taper...", en: "Start typing for suggestions...", de: "Beginnen Sie zu tippen..." },
  address_hint: { nl: "📍 Selecteer je adres uit de suggesties voor nauwkeurige locatie", fr: "📍 Sélectionnez votre adresse dans les suggestions", en: "📍 Select your address from suggestions for accurate location", de: "📍 Wählen Sie Ihre Adresse aus den Vorschlägen" },
  phone_label: { nl: "Telefoonnummer (voor verificatie)", fr: "Numéro de téléphone (pour vérification)", en: "Phone Number (for verification)", de: "Telefonnummer (zur Verifizierung)" },
  phone_placeholder: { nl: "Op welk nummer kunnen we je bereiken?", fr: "À quel numéro pouvons-nous vous joindre ?", en: "At what number can we reach you?", de: "Onder welcher Nummer sind Sie erreichbar?" },
  vending_machine_title: { nl: "Ik heb een automaat (24/7)", fr: "J'ai un distributeur (24/7)", en: "I have a vending machine (24/7)", de: "Ich habe einen Automaten (24/7)" },
  vending_machine_subtitle: { nl: "Klanten kunnen ook buiten openingsuren kopen", fr: "Les clients peuvent acheter hors horaires", en: "Customers can buy outside opening hours", de: "Kunden können außerhalb der Öffnungszeiten einkaufen" },
  vending_machine_location_q: { nl: "Waar staat de automaat?", fr: "Où se trouve le distributeur ?", en: "Where is the machine located?", de: "Wo befindet sich der Automat?" },
  vending_machine_at_farm: { nl: "Op het hoeve-adres", fr: "À l'adresse de la ferme", en: "At the farm address", de: "An der Hofadresse" },
  vending_machine_other_location: { nl: "Op een andere locatie", fr: "À un autre endroit", en: "At another location", de: "An einem anderen Ort" },
  vending_machine_other_placeholder: { nl: "Bijv. Langs de N60 of Kerkplein 5", fr: "Ex. Le long de la N60", en: "e.g. Along the highway or Main Square 5", de: "z.B. An der Hauptstraße" },
  submit_registration: { nl: "Registratie Versturen", fr: "Envoyer l'inscription", en: "Submit Registration", de: "Registrierung absenden" },
  cancel_logout: { nl: "Annuleren en uitloggen", fr: "Annuler et se déconnecter", en: "Cancel and logout", de: "Abbrechen und abmelden" },
  verification_title: { nl: "Aanvraag In Behandeling", fr: "Demande en cours", en: "Verification Pending", de: "Verifizierung läuft" },
  verification_desc: { nl: "Bedankt voor je registratie! Om de kwaliteit van Farm Connect te waarborgen, controleren wij handmatig of je daadwerkelijk een boerderij bent.", fr: "Merci pour votre inscription ! Nous vérifions manuellement chaque ferme.", en: "Thank you for registering! To ensure quality, we manually verify every farm profile.", de: "Vielen Dank für Ihre Registrierung! Um die Qualität zu sichern, verifizieren wir jeden Bauernhof manuell." },
  verification_next_steps: { nl: "Wat gebeurt er nu?", fr: "Quels sont les prochaines étapes ?", en: "What happens next?", de: "Was passiert als Nächstes?" },
  verification_step_1: { nl: "We controleren je bedrijfsgegevens", fr: "Nous vérifions vos données", en: "We verify your business details", de: "Wir prüfen Ihre Betriebsdaten" },
  verification_step_2: { nl: "We bellen je eventueel op voor verificatie", fr: "Nous pourrions vous appeler", en: "We might give you a call", de: "Wir rufen Sie eventuell an" },
  verification_step_3: { nl: "Binnen 24u krijg je toegang tot je dashboard", fr: "Accès au tableau de bord sous 24h", en: "Access to your dashboard within 24h", de: "Zugriff auf Ihr Dashboard innerhalb von 24 Stunden" },
  verification_logout: { nl: "Uitloggen en later terugkomen", fr: "Se déconnecter et revenir plus tard", en: "Logout and return later", de: "Abmelden und später wiederkommen" },
  // Harvest Advice Tips
  tip_1: {
    nl: "Zet je populairste product op ooghoogte in je hoevewinkel voor meer verkoop.",
    fr: "Placez votre produit le plus populaire à hauteur des yeux pour booster les ventes.",
    en: "Place your most popular product at eye level in your farm shop for more sales.",
    de: "Platzieren Sie Ihr beliebtestes Produkt im Hofladen auf Augenhöhe für mehr Umsatz."
  },
  tip_2: {
    nl: "Deel een foto van de zonsopgang op je veld om klanten emotioneel te binden.",
    fr: "Partagez une photo du lever du soleil sur votre champ pour créer un lien met vos clients.",
    en: "Share a photo of the sunrise on your field to build an emotional connection with customers.",
    de: "Teilen Sie ein Foto vom Sonnenaufgang auf Ihrem Feld, um eine emotionale Bindung zu den Kunden aufzubauen."
  },
  tip_3: {
    nl: "Geef bij elke bestelling boven €25 een gratis receptenkaart voor seizoensgroenten.",
    fr: "Offrez une fiche recette gratuite pour les légumes de saison pour toute commande de plus de 25 €.",
    en: "Provide a free seasonal vegetable recipe card for every order over €25.",
    de: "Geben Sie zu jeder Bestellung über 25 € eine kostenlose Rezeptkarte für Saisongemüse dazu."
  },
  tip_4: {
    nl: "Maak een 'Actiepakket': Combineer soepgroenten in één mandje voor een vaste prijs. Klanten houden van gemak!",
    fr: "Créez un 'Pack Promo' : Combinez des légumes à soupe dans un seul panier à prix fixe. Les clients adorent la simplicité !",
    en: "Create a 'Promo Pack': Combine soup vegetables in one basket for a fixed price. Customers love convenience!",
    de: "Erstellen Sie ein 'Aktionspaket': Kombinieren Sie Suppengemüse in einem Korb zum Festpreis. Kunden lieben Komfort!"
  },
  tip_5: {
    nl: "Deel een 'Achter de schermen' foto: Toon hoe je de aardappelen wast of de eieren raapt. Dit bouwt vertrouwen op.",
    fr: "Partagez une photo 'Coulisses' : Montrez comment vous lavez les pommes de terre ou ramassez les œufs. Cela renforce la confiance.",
    en: "Share a 'Behind the scenes' photo: Show how you wash the potatoes or gather the eggs. This builds trust.",
    de: "Teilen Sie ein 'Hinter den Kulissen'-Foto: Zeigen Sie, wie Sie die Kartoffeln waschen oder die Eier sammeln. Das schafft Vertrauen!"
  },
  tip_6: {
    nl: "Vroege vogel actie: Geef een kleine attentie aan klanten die voor 9u 's ochtends langskomen bij de automaat.",
    fr: "Action lève-tôt : Offrez une petite attention aux clients qui passent avant 9h du matin au distributeur.",
    en: "Early bird action: Give a small gift to customers who stop by the vending machine before 9 AM.",
    de: "Frühaufsteher-Aktion: Geben Sie Kunden, die vor 9 Uhr morgens am Automaten vorbeikommen, eine kleine Aufmerksamkeit."
  },
  tip_7: {
    nl: "Werk je openingsuren bij voor de feestdagen. Klanten plannen hun feestmenu's nu!",
    fr: "Mettez à jour vos horaires pour les fêtes. Les clients planifient leurs menus festifs maintenant !",
    en: "Update your opening hours for the holidays. Customers are planning their festive menus now!",
    de: "Aktualisieren Sie Ihre Öffnungszeiten für die Feiertage. Kunden planen jetzt ihre Festmenüs!"
  },
  about_trade_title: { nl: "Eerlijke Handel", fr: "Commerce Équitable", en: "Fair Trade", de: "Fairer Handel" },
  about_trade_desc: { nl: "Bij Farm Connect gaat 100% van de verkoopprijs rechtstreeks naar de boer.", fr: "Chez Farm Connect, 100% du prix de vente va directement à l'agriculteur.", en: "At Farm Connect, 100% of the sale price goes directly to the farmer.", de: "Bei Farm Connect gehen 100% des Verkaufspreises direkt an den Landwirt." },
  about_chain_title: { nl: "Korte Keten", fr: "Circuit Court", en: "Short Chain", de: "Kurze Kette" },
  about_chain_desc: { nl: "Minder transport, minder verpakking, en een smaak die je in de supermarkt niet vindt.", fr: "Moins de transport, moins d'emballage, et een goût que vous ne trouvez pas au supermarché.", en: "Less transport, less packaging, and a taste you won't find in the supermarket.", de: "Weniger Transport, weniger Verpackung und ein Geschmack, den man im Supermarkt nicht findet." },
  about_banner_title: { nl: "Samen bouwen wij aan een lokale toekomst.", fr: "Ensemble, construisons un avenir local.", en: "Together we build a local future.", de: "Gemeinsam bauen wir eine lokale Zukunft auf." },
  about_banner_text: { nl: "Bedankt dat je deel uitmaakt van Farm Connect. Elk product dat je hier koopt, is een stem voor een duurzame landbouw.", fr: "Merci de faire partie de Farm Connect. Elk product dat u hier koopt, is een stem voor een duurzame landbouw.", en: "Thank you for being part of Farm Connect. Every product you buy is a vote for sustainable agriculture.", de: "Danke, dass Sie Teil von Farm Connect sind. Jedes Produkt, das Sie kaufen, ist eine Stimme für eine nachhaltige Landwirtschaft." },
  about_banner_btn: { nl: "Begin met Ontdekken", fr: "Commencer l'exploration", en: "Start Discovering", de: "Entdecken starten" },
  farmer_welcome: { nl: "Welkom terug, Jan!", fr: "Bon retour, Jan !", en: "Welcome back, Jan!", de: "Willkommen zurück, Jan!" },
  farmer_subtitle: { nl: "Beheer je hoeve op Farm Connect.", fr: "Gérez votre ferme sur Farm Connect.", en: "Manage your farm on Farm Connect.", de: "Verwalten Sie Ihren Bauernhof auf Farm Connect." },
  smart_tips: { nl: "Slimme Tips", fr: "Conseils Intelligents", en: "Smart Tips", de: "Intelligente Tipps" },
  dashboard_live: { nl: "Dashboard Live", fr: "Tableau de bord actif", en: "Dashboard Live", de: "Dashboard Live" },
  stat_views: { nl: "Profielweergaven", fr: "Vues du profil", en: "Profile views", de: "Profilansichten" },
  // Additional translations
  tagline: { nl: "Rechtstreeks van de bron", fr: "Directement de la source", en: "Straight from the source", de: "Direkt von der Quelle" },
  new_badge: { nl: "NIEUW", fr: "NOUVEAU", en: "NEW", de: "NEU" },
  dashboard_overview: { nl: "Dashboard Overzicht", fr: "Aperçu du Tableau de Bord", en: "Dashboard Overview", de: "Dashboard-Übersicht" },
  stat_favorites: { nl: "Favorieten", fr: "Favoris", en: "Favorites", de: "Favoriten" },
  favorites_empty_title: {
    nl: "Nog geen favorieten",
    fr: "Pas encore de favoris",
    en: "No favorites yet",
    de: "Noch keine Favoriten"
  },
  favorites_empty_desc: {
    nl: "Markeer boerderijen als favoriet door op het hartje te klikken, zo vind je ze hier snel terug.",
    fr: "Marquez les fermes comme favorites en cliquant sur le cœur, vous les retrouverez rapidement ici.",
    en: "Mark farms as favorite by clicking the heart, so you can quickly find them here.",
    de: "Markieren Sie Bauernhöfe als Favorit, indem Sie auf das Herz klicken, damit Sie sie hier schnell wiederfinden."
  },
  favorites_add_btn: {
    nl: "Ontdek boerderijen",
    fr: "Découvrir les fermes",
    en: "Discover farms",
    de: "Bauernhöfe entdecken"
  },
  stat_growth: { nl: "Groei", fr: "Croissance", en: "Growth", de: "Wachstum" },
  total_growth: { nl: "Totale Groei", fr: "Croissance Totale", en: "Total Growth", de: "Gesamtes Wachstum" },
  this_week: { nl: "Deze week", fr: "Cette semaine", en: "This week", de: "Diese Woche" },
  last_7_days: { nl: "Laatste 7 dagen", fr: "7 derniers jours", en: "Last 7 days", de: "Letzte 7 Tage" },
  compared_last_month: { nl: "Vergeleken met vorige maand", fr: "Par rapport au mois dernier", en: "Compared to last month", de: "Im Vergleich zum Vormonat" },
  monthly: { nl: "Maandelijks", fr: "Mensuel", en: "Monthly", de: "Monatlich" },
  routes: { nl: "Routes", fr: "Itinéraires", en: "Routes", de: "Routen" },
  visitors: { nl: "Bezoekers", fr: "Visiteurs", en: "Visitors", de: "Besucher" },
  avg_time: { nl: "Gem. Tijd", fr: "Temps Moy.", en: "Avg. Time", de: "Durchschn. Zeit" },
  conversion: { nl: "Conversie", fr: "Conversion", en: "Conversion", de: "Konversion" },
  referral_balance: { nl: "Referral Saldo", fr: "Solde de Parrainage", en: "Referral Balance", de: "Empfehlungsguthaben" },
  per_referral: { nl: "per referral", fr: "par parrainage", en: "per referral", de: "pro Empfehlung" },
  share: { nl: "Deel", fr: "Partager", en: "Share", de: "Teilen" },
  edit_profile: { nl: "Wijzig Profiel", fr: "Modifier le Profil", en: "Edit Profile", de: "Profil Bearbeiten" },
  opening_hours: { nl: "Openingsuren", fr: "Heures d'ouverture", en: "Opening Hours", de: "Öffnungszeiten" },
  now_from_land: { nl: "Nu van het land", fr: "De la terre maintenant", en: "Now from the land", de: "Jetzt vom Land" },
  fresh_harvest: { nl: "Verse oogst uit Belgische grond", fr: "Récolte fraîche de la terre belge", en: "Fresh harvest from Belgian soil", de: "Frische Ernte vom belgischen Boden" },

  // Months
  month_january: { nl: "Januari", fr: "Janvier", en: "January", de: "Januar" },
  month_february: { nl: "Februari", fr: "Février", en: "February", de: "Februar" },
  month_march: { nl: "Maart", fr: "Mars", en: "March", de: "März" },
  month_april: { nl: "April", fr: "Avril", en: "April", de: "April" },
  month_may: { nl: "Mei", fr: "Mai", en: "May", de: "Mai" },
  month_june: { nl: "Juni", fr: "Juin", en: "June", de: "Juni" },
  month_july: { nl: "Juli", fr: "Juillet", en: "July", de: "Juli" },
  month_august: { nl: "Augustus", fr: "Août", en: "August", de: "August" },
  month_september: { nl: "September", fr: "Septembre", en: "September", de: "September" },
  month_october: { nl: "Oktober", fr: "Octobre", en: "October", de: "Oktober" },
  month_november: { nl: "November", fr: "Novembre", en: "November", de: "November" },
  month_december: { nl: "December", fr: "Décembre", en: "December", de: "Dezember" },

  // Common seasonal products
  product_appels: { nl: "Appels", fr: "Pommes", en: "Apples", de: "Äpfel" },
  product_aardappelen: { nl: "Aardappelen", fr: "Pommes de terre", en: "Potatoes", de: "Kartoffeln" },
  product_wortelen: { nl: "Wortelen", fr: "Carottes", en: "Carrots", de: "Karotten" },
  product_uien: { nl: "Uien", fr: "Oignons", en: "Onions", de: "Zwiebeln" },
  product_witloof: { nl: "Witloof", fr: "Endives", en: "Endives", de: "Chicorée" },
  product_spruitjes: { nl: "Spruitjes", fr: "Choux de Bruxelles", en: "Brussels Sprouts", de: "Rosenkohl" },
  product_prei: { nl: "Prei", fr: "Poireaux", en: "Leeks", de: "Lauch" },
  product_aardbeien: { nl: "Aardbeien", fr: "Fraises", en: "Strawberries", de: "Erdbeeren" },
  product_broccoli: { nl: "Broccoli", fr: "Brocoli", en: "Broccoli", de: "Brokkoli" },
  product_spinazie: { nl: "Spinazie", fr: "Épinards", en: "Spinach", de: "Spinat" },
  product_asperges: { nl: "Asperges", fr: "Asperges", en: "Asparagus", de: "Spargel" },
  product_kersen: { nl: "Kersen", fr: "Cerises", en: "Cherries", de: "Kirschen" },
  product_tomaten: { nl: "Tomaten", fr: "Tomates", en: "Tomatoes", de: "Tomaten" },
  product_komkommer: { nl: "Komkommer", fr: "Concombre", en: "Cucumber", de: "Gurke" },
  product_bloemkool: { nl: "Bloemkool", fr: "Chou-fleur", en: "Cauliflower", de: "Blumenkohl" },
  product_peren: { nl: "Peren", fr: "Poires", en: "Pears", de: "Birnen" },
  product_pompoen: { nl: "Pompoen", fr: "Citrouille", en: "Pumpkin", de: "Kürbis" },

  // Product facts fallback
  fact_did_you_know: { nl: "Wist je dat?", fr: "Le saviez-vous ?", en: "Did you know?", de: "Wussten Sie schon?" },
  fact_fresh_from_land_fallback: { nl: "Vers van het land", fr: "Frais du champ", en: "Fresh from the field", de: "Frisch vom Feld" },
  fact_default_text_fallback: { nl: "Ontdek de passie achter {product} van onze lokale boeren.", fr: "Découvrez la passion derrière {product} de nos agriculteurs locaux.", en: "Discover the passion behind {product} from our local farmers.", de: "Entdecken Sie die Leidenschaft hinter {product} von unseren lokalen Bauern." },

  // Missing translations from audit
  no_farms_found: { nl: "Geen boerderijen gevonden", fr: "Aucune ferme trouvée", en: "No farms found", de: "Keine Bauernhöfe gefunden" },
  try_different_search: { nl: "Probeer een andere zoekopdracht of filter.", fr: "Essayez une autre recherche ou filtre.", en: "Try a different search or filter.", de: "Versuchen Sie eine andere Suche oder einen anderen Filter." },
  map_service_unavailable: { nl: "Kaart service momenteel niet beschikbaar", fr: "Service de carte momentanément indisponible", en: "Map service currently unavailable", de: "Kartendienst derzeit nicht verfügbar" },
  map_config_problem: { nl: "Er is een probleem met de Maps configuratie.", fr: "Il y a un problème avec la configuration Maps.", en: "There is a problem with the Maps configuration.", de: "Es gibt ein Problem mit der Maps-Konfiguration." },

  vending_title: { nl: "Mijn Automaten", fr: "Mes Distributeurs", en: "My Vending Machines", de: "Meine Automaten" },
  vending_subtitle: { nl: "Beheer je 24/7 Verkoop", fr: "Gérez vos ventes 24/7", en: "Manage your 24/7 Sales", de: "Verwalten Sie Ihre 24/7-Verkäufe" },
  vending_settings: { nl: "Instellingen", fr: "Paramètres", en: "Settings", de: "Einstellungen" },
  vending_location_label: { nl: "Locatie Automaat", fr: "Emplacement Distributeur", en: "Vending Location", de: "Standort Automat" },
  vending_location_placeholder: { nl: "Adres automaat (indien anders dan hoeve)", fr: "Adresse distributeur (si différente)", en: "Vending address (if different)", de: "Adresse Automat (wenn abweichend)" },
  vending_location_hint: { nl: "Laat leeg als de automaat op de hoeve staat.", fr: "Laissez vide si le distributeur est à la ferme.", en: "Leave empty if vending machine is at farm.", de: "Leer lassen, wenn Automat am Hof steht." },
  vending_products_title: { nl: "Producten in Automaat", fr: "Produits en Distributeur", en: "Vending Machine Products", de: "Produkte im Automat" },
  vending_products_text: { nl: "Selecteer welke producten beschikbaar zijn in de automaat.", fr: "Sélectionnez les produits disponibles.", en: "Select products available in machine.", de: "Wählen Sie verfügbare Produkte aus." },
  vending_no_products: { nl: "Geen producten gevonden in voorraad.", fr: "Aucun produit trouvé en stock.", en: "No products found in stock.", de: "Keine Produkte auf Lager gefunden." },
  vending_saved: { nl: "Automaat instellingen opgeslagen", fr: "Paramètres distributeur enregistrés", en: "Vending settings saved", de: "Automateneinstellungen gespeichert" },
  view_list_view: { nl: "Bekijk Lijst Weergave", fr: "Voir la Vue Liste", en: "View List View", de: "Listenansicht anzeigen" },
  map_loading: { nl: "Kaart aan het laden...", fr: "Chargement de la carte...", en: "Loading map...", de: "Karte wird geladen..." },
  manage_inventory_live: { nl: "Beheer uw aanbod live op de kaart", fr: "Gérez votre offre en direct op de kaart", en: "Manage your inventory live on the map", de: "Verwalten Sie Ihr Angebot live auf der Karte" },
  current_stock: { nl: "Huidige Voorraad", fr: "Stock Actuel", en: "Current Stock", de: "Aktueller Bestand" },
  no_products_found: { nl: "Geen producten gevonden", fr: "Aucun produit trouvé", en: "No products found", de: "Keine Produkte gefunden" },
  balance: { nl: "Saldo", fr: "Solde", en: "Balance", de: "Guthaben" },
  address: { nl: "Adres", fr: "Adresse", en: "Address", de: "Adresse" },
  distance: { nl: "Afstand", fr: "Distance", en: "Distance", de: "Entfernung" },
  current_balance: { nl: "Huidig Saldo", fr: "Solde Actuel", en: "Current Balance", de: "Aktuelles Guthaben" },
  premium_platform: { nl: "Premium Belgisch Boerderij Platform", fr: "Plateforme Agricole Belge Premium", en: "Premium Belgian Farm Direct Platform", de: "Premium Belgische Bauernhof-Plattform" },

  // About Page
  about_since: { nl: "Sinds 2026", fr: "Depuis 2026", en: "Since 2026", de: "Seit 2026" },
  about_scroll: { nl: "Scrol om te ontdekken", fr: "Défiler pour découvrir", en: "Scroll to discover", de: "Scrollen zum Entdecken" },
  about_story_title: { nl: "Waarom ik Farm Connect startte", fr: "Pourquoi j'ai lancé Farm Connect", en: "Why I started Farm Connect", de: "Warum ich Farm Connect gestartet habe" },
  about_story_quote: { nl: "\"De regels zijn absurd. De quota's verstikkend. En de prijzen oneerlijk.\"", fr: "\"Les règles sont absurdes. Les quotas étouffants. Et les prix injustes.\"", en: "\"The rules are absurd. The quotas are stifling. And the prices are unfair.\"", de: "\"Die Regeln sind absurd. Die Quoten sind erstickend. Und die Preise sind ungerecht.\"" },
  about_story_text_1: { nl: "Ik zag van dichtbij hoe de industrie de touwtjes in handen heeft. Zij bepalen de prijs, niet de kwaliteit. Boeren worden gedwongen om groter te worden of te stoppen. De menselijke maat is weg.", fr: "J'ai vu de près comment l'industrie tire les ficelles. Ils décident du prix, pas de la qualité. Les agriculteurs sont obligés de s'agrandir ou d'arrêter. La dimension humaine a disparu.", en: "I saw firsthand how the industry pulls the strings. They decide the price, not the quality. Farmers are forced to scale up or quit. The human scale is gone.", de: "Ich habe aus nächster Nähe gesehen, wie die Industrie die Fäden in der Hand hält. Sie bestimmen den Preis, nicht die Qualität. Die Landwirte sind gezwungen, größer zu werden oder aufzuhören. Das menschliche Maß ist weg." },
  about_story_text_2: { nl: "Ik startte Farm Connect met één simpele missie: De macht teruggeven aan de boer. Door consumenten rechtstreeks te verbinden met de bron, snijden we de industrie eruit. Zo krijgt de boer weer wat hij verdient: respect én een eerlijke prijs.", fr: "J'ai lancé Farm Connect avec une mission simple : redonner le pouvoir aux agriculteurs. En connectant directement les consommateurs à la source, nous éliminons l'industrie. Ainsi, l'agriculteur reçoit ce qu'il mérite : du respect et un prix juste.", en: "I started Farm Connect with one simple mission: Giving the power back to the farmer. By connecting consumers directly to the source, we cut out the industry. This way, the farmer receives what they deserve: respect and a fair price.", de: "Ich habe Farm Connect mit einer einfachen Mission gestartet: Den Landwirten die Macht zurückzugeben. Indem wir die Verbraucher direkt mit der Quelle verbinden, schalten wir die Industrie aus. So bekommt der Landwirt wieder, was er verdient: Respekt und einen fairen Preis." },
  about_foundation_text: { nl: "Door zijn kennis, passie en harde werk hebben wij elke dag vers eten op tafel. Wij geloven in direct respect voor de maker: een eerbetoon aan het fundament van onze voedselketen.", fr: "Grâce à son savoir-faire, sa passion et son travail acharné, nous avons de la nourriture fraîche sur la table tous les jours. Nous croyons au respect direct pour le producteur : un hommage au fondement de notre chaîne alimentaire.", en: "Through their knowledge, passion, and hard work, we have fresh food on our table every day. We believe in direct respect for the maker: a tribute to the foundation of our food chain.", de: "Durch ihr Wissen, ihre Leidenschaft und ihre harte Arbeit haben wir jeden Tag frisches Essen auf dem Tisch. Wir glauben an den direkten Respekt für den Erzeuger: eine Hommage an das Fundament unserer Nahrungskette." },
  about_fair_price_text: { nl: "Wij garanderen dat de boer een eerlijke prijs krijgt voor zijn harde werk. Geen onnodige tussenschakels, maar directe waarde voor de maker.", fr: "Nous garantissons que l'agriculteur reçoit un prix juste pour son travail acharné. Pas d'intermédiaires inutiles, mais une valeur directe pour le producteur.", en: "We guarantee that the farmer receives a fair price for their hard work. No unnecessary intermediaries, but direct value for the maker.", de: "Wir garantieren, dass der Landwirt einen fairen Preis für seine harte Arbeit erhält. Keine unnötigen Zwischenhändler, sondern direkter Wert für den Erzeuger." },
  about_closing_quote: { nl: "\"Wij zetten de boer terug in het hart van onze gemeenschap.\"", fr: "\"Nous remettons l'agriculteur au cœur de notre communauté.\"", en: "\"We put the farmer back at the heart of our community.\"", de: "\"Wir stellen den Landwirt wieder in den Mittelpunkt unserer Gemeinschaft.\"" },

  // Re-added for About Page icons/headers
  fair_price: { nl: "Eerlijke Prijs", fr: "Prix Équitable", en: "Fair Price", de: "Fairer Preis" },
  no_farmer_no_food: { nl: "Zonder de boer, geen eten", fr: "Sans le fermier, pas de nourriture", en: "No farmer, no food", de: "Ohne Bauern kein Essen" },

  // Product facts - Aardappelen
  fact_aardappelen_title: {
    nl: "Aardappelen - Redder van Europa",
    fr: "Pommes de terre - Sauveur de l'Europe",
    en: "Potatoes - Savior of Europe",
    de: "Kartoffeln - Retter Europas"
  },
  fact_aardappelen: {
    nl: "Aardappelen hebben hun oorsprong in Zuid-Amerika en zijn rijk aan vitamine C, kalium en vezels. Er zijn superveel variëteiten en manieren om ze te bereiden. België is wereldberoemd om zijn frieten, gemaakt van de beste aardappelrassen zoals Bintje. Een aardappelplant kan wel 20 knollen produceren!\n\n🥔 Historisch: In de 18e eeuw hielp de aardappel hongersnood bestrijden in Europa en werd hij een basisvoedsel voor miljoenen mensen.",
    fr: "Les pommes de terre sont originaires d'Amérique du Sud et sont riches en vitamine C, potassium et fibres. Il existe de nombreuses variétés et façons de les préparer. La Belgique est mondialement célèbre pour ses frites, faites avec les meilleures variétés comme la Bintje. Un plant de pomme de terre peut produire jusqu'à 20 tubercules !\n\n🥔 Historique : Au 18e siècle, la pomme de terre a aidé à combattre la famine en Europe et est devenue un aliment de base pour des millions de personnes.",
    en: "Potatoes originated in South America and are rich in vitamin C, potassium and fiber. There are many varieties and ways to prepare them. Belgium is world-famous for its fries, made from the best potato varieties like Bintje. A potato plant can produce up to 20 tubers!\n\n🥔 Historical: In the 18th century, the potato helped fight famine in Europe and became a staple food for millions of people.",
    de: "Kartoffeln stammen aus Südamerika und sind reich an Vitamin C, Kalium und Ballaststoffen. Es gibt viele Sorten und Zubereitungsarten. Belgien ist weltberühmt für seine Pommes frites, die aus den besten Kartoffelsorten wie Bintje hergestellt werden. Eine Kartoffelpflanze kann bis zu 20 Knollen produzieren!\n\n🥔 Historisch: Im 18. Jahrhundert half die Kartoffel, Hungersnöte in Europa zu bekämpfen und wurde zu einem Grundnahrungsmittel für Millionen von Menschen."
  },

  // Product facts - Prei
  fact_prei_title: {
    nl: "Prei - Winterse Kracht",
    fr: "Poireaux - Force Hivernale",
    en: "Leeks - Winter Strength",
    de: "Lauch - Winterkraft"
  },
  fact_prei: {
    nl: "België is absolute wereldtop in prei, vooral in West-Vlaanderen! Onze boeren telen ze bijna het hele jaar door. In de middeleeuwse kloostertuinen van onze gewesten was 'poreye' al een basisgroente voor soep.",
    fr: "La Belgique est un leader mondial du poireau, surtout en Flandre occidentale ! Nos agriculteurs les cultivent toute l'année. Dans les jardins monastiques médiévaux, le 'poreye' était déjà un légume de base.",
    en: "Belgium is a world leader in leeks, especially in West Flanders! Our farmers grow them almost year-round. In medieval monastery gardens in our regions, 'poreye' was already a staple vegetable.",
    de: "Belgien ist Weltspitze beim Lauch, besonders in Westflandern! Unsere Bauern bauen ihn fast das ganze Jahr über an. In den mittelalterlichen Klostergärten unserer Regionen war 'Poreye' bereits ein Grundnahrungsmittel."
  },

  // Landing page translations
  tagline_caps: {
    nl: "RECHTSTREEKS VAN DE BRON",
    fr: "DIRECTEMENT DE LA SOURCE",
    en: "STRAIGHT FROM THE SOURCE",
    de: "DIREKT VON DER QUELLE"
  },
  landing_intro: {
    nl: "Vind de lekkerste verse producten, rechtstreeks van de boer.",
    fr: "Trouvez les produits les plus frais, directement du fermier.",
    en: "Find the freshest products, straight from the farmer.",
    de: "Finden Sie die frischesten Produkte, direkt vom Bauern."
  },

  // Product facts - Appels
  fact_appels_title: {
    nl: "Appels - Belgische Trots",
    fr: "Pommes - Fierté Belge",
    en: "Apples - Belgian Pride",
    de: "Äpfel - Belgischer Stolz"
  },
  fact_appels: {
    nl: "België telt meer dan 100 appelrassen! De Jonagold, een kruising tussen Golden Delicious en Jonathan, werd ontwikkeld in New York maar groeide uit tot de populairste Belgische appel. Appels bevatten pectine, wat helpt bij de spijsvertering.\n\n🍎 Wist je dat? Een appelboom kan wel 400 appels per seizoen produceren en tot 100 jaar oud worden!",
    fr: "La Belgique compte plus de 100 variétés de pommes ! La Jonagold, un croisement entre Golden Delicious et Jonathan, a été développée à New York mais est devenue la pomme la plus populaire en Belgique. Les pommes contiennent de la pectine, qui aide à la digestion.\n\n🍎 Le saviez-vous ? Un pommier peut produire jusqu'à 400 pommes par saison et vivre jusqu'à 100 ans !",
    en: "Belgium has over 100 apple varieties! The Jonagold, a cross between Golden Delicious and Jonathan, was developed in New York but became the most popular Belgian apple. Apples contain pectin, which aids digestion.\n\n🍎 Did you know? An apple tree can produce up to 400 apples per season and live up to 100 years!",
    de: "Belgien hat über 100 Apfelsorten! Der Jonagold, eine Kreuzung zwischen Golden Delicious und Jonathan, wurde in New York entwickelt, ist aber zum beliebtesten belgischen Apfel geworden. Äpfel enthalten Pektin, das die Verdauung fördert.\n\n🍎 Wussten Sie? Ein Apfelbaum kann bis zu 400 Äpfel pro Saison produzieren und bis zu 100 Jahre alt werden!"
  },

  // Product facts - Wortelen
  fact_wortelen_title: {
    nl: "Wortelen - Oranje Wonder",
    fr: "Carottes - Merveille Orange",
    en: "Carrots - Orange Wonder",
    de: "Karotten - Oranges Wunder"
  },
  fact_wortelen: {
    nl: "Wortelen waren oorspronkelijk paars of wit! De oranje kleur is een eerbetoon aan Willem van Oranje uit de 17e eeuw door Nederlandse telers. Wortelen zijn super rijk aan bètacaroteen, wat je lichaam omzet in vitamine A. Goed voor je ogen!\n\n🥕 Fun fact: Het eten van te veel wortelen kan je huid tijdelijk oranje kleuren - dit heet 'carotenemie'!",
    fr: "Les carottes étaient à l'origine violettes ou blanches ! La couleur orange est un hommage à Guillaume d'Orange au 17e siècle par les cultivateurs néerlandais. Les carottes sont très riches en bêta-carotène, que votre corps transforme en vitamine A. Bon pour vos yeux !\n\n🥕 Fait amusant : Manger trop de carottes peut temporairement colorer votre peau en orange - cela s'appelle la 'caroténémie' !",
    en: "Carrots were originally purple or white! The orange color is a tribute to William of Orange from the 17th century by Dutch growers. Carrots are super rich in beta-carotene, which your body converts to vitamin A. Good for your eyes!\n\n🥕 Fun fact: Eating too many carrots can temporarily turn your skin orange - this is called 'carotenemie'!",
    de: "Karotten waren ursprünglich lila oder weiß! Die orange Farbe ist eine Hommage an Wilhelm von Oranien aus dem 17. Jahrhundert durch niederländische Züchter. Karotten sind sehr reich an Beta-Carotin, das Ihr Körper in Vitamin A umwandelt. Gut für Ihre Augen!\n\n🥕 Fun Fact: Zu viele Karotten zu essen kann Ihre Haut vorübergehend orange färben - das nennt man 'Karotinämie'!"
  },

  // Product facts - Aardbeien
  fact_aardbeien_title: {
    nl: "Aardbeien - Belgische Zomerklassiker",
    fr: "Fraises - Classique d'Été Belge",
    en: "Strawberries - Belgian Summer Classic",
    de: "Erdbeeren - Belgischer Sommerklassiker"
  },
  fact_aardbeien: {
    nl: "De aardbei is technisch gezien geen bes maar een 'schijnvrucht' - de echte vruchten zijn de kleine pitjes aan de buitenkant! Belgische aardbeien zijn wereldberoemd om hun intense smaak. Een aardbei bevat meer vitamine C dan een sinaasappel!\n\n🍓 Historisch: De moderne tuinaardbei ontstond in Frankrijk in de 18e eeuw door kruising van Amerikaanse en Chileense soorten.",
    fr: "La fraise n'est techniquement pas une baie mais un 'faux fruit' - les vrais fruits sont les petites graines à l'extérieur ! Les fraises belges sont mondialement célèbres pour leur goût intense. Une fraise contient plus de vitamine C qu'une orange !\n\n🍓 Historique : La fraise de jardin moderne est née en France au 18e siècle par croisement d'espèces américaines et chiliennes.",
    en: "The strawberry is technically not a berry but an 'accessory fruit' - the real fruits are the tiny seeds on the outside! Belgian strawberries are world-famous for their intense flavor. A strawberry contains more vitamin C than an orange!\n\n🍓 Historical: The modern garden strawberry originated in France in the 18th century through crossing American and Chilean species.",
    de: "Die Erdbeere ist technisch gesehen keine Beere, sondern eine 'Scheinfrucht' - die echten Früchte sind die kleinen Samen an der Außenseite! Belgische Erdbeeren sind weltberühmt für ihren intensiven Geschmack. Eine Erdbeere enthält mehr Vitamin C als eine Orange!\n\n🍓 Historisch: Die moderne Gartenerdbeere entstand im 18. Jahrhundert in Frankreich durch Kreuzung amerikanischer und chilenischer Arten."
  },

  // Product facts - Uien
  fact_uien_title: {
    nl: "Uien - Keukenessentieel",
    fr: "Oignons - Essentiel de Cuisine",
    en: "Onions - Kitchen Essential",
    de: "Zwiebeln - Küchenessentiell"
  },
  fact_uien: {
    nl: "Uien worden al meer dan 5000 jaar geteeld. Ze bevatten krachtige antioxidanten. \n\n🧅 Historisch: De inwoners van Aalst dragen de geuzennaam 'Ajuinen'. Dit komt omdat de streek rond Aalst in de 19e eeuw het centrum was van de uienteelt in Vlaanderen.",
    fr: "Les oignons sont cultivés depuis plus de 5000 ans. Ils contiennent de puissants antioxydants. \n\n🧅 Historique : Les habitants d'Alost sont surnommés 'Oignons' (Ajuinen). La région était le centre de la culture de l'oignon en Flandre au 19ème siècle.",
    en: "Onions have been cultivated for over 5000 years. They contain powerful antioxidants. \n\n🧅 Historical: The inhabitants of Aalst are nicknamed 'Onions' (Ajuinen). This is because the region around Aalst was the center of onion cultivation in Flanders in the 19th century.",
    de: "Zwiebeln werden seit über 5000 Jahren angebaut. Sie enthalten starke Antioxidantien. \n\n🧅 Historisch: Die Einwohner von Aalst tragen den Spitznamen 'Zwiebeln' (Ajuinen). Die Region um Aalst war im 19. Jahrhundert das Zentrum des Zwiebelanbaus in Flandern."
  },

  // Product facts - Witloof
  fact_witloof_title: {
    nl: "Witloof - Belgisch Wit Goud",
    fr: "Endives - Or Blanc Belge",
    en: "Belgian Endive - Belgian White Gold",
    de: "Chicorée - Belgisches Weißgold"
  },
  fact_witloof: {
    nl: "Witloof is een 100% Belgische uitvinding! Het werd per ongeluk ontdekt in 1830 in een kelder in Brussel. Het moet in volledige duisternis groeien, anders wordt het groen en bitter. België is 's werelds grootste producent!\n\n🥬 Culinair: De bittere smaakstoffen stimuleren de spijsvertering. Probeer het eens gegrild met honing en gorgonzola!",
    fr: "L'endive est une invention 100% belge ! Elle a été découverte par accident en 1830 dans une cave à Bruxelles. Elle doit pousser dans l'obscurité totale, sinon elle devient verte et amère. La Belgique est le plus grand producteur mondial !\n\n🥬 Culinaire : Les substances amères stimulent la digestion. Essayez-la grillée avec du miel et du gorgonzola !",
    en: "Belgian endive is a 100% Belgian invention! It was accidentally discovered in 1830 in a cellar in Brussels. It must grow in complete darkness, otherwise it turns green and bitter. Belgium is the world's largest producer!\n\n🥬 Culinary: The bitter substances stimulate digestion. Try it grilled with honey and gorgonzola!",
    de: "Chicorée ist eine 100% belgische Erfindung! Er wurde 1830 zufällig in einem Keller in Brüssel entdeckt. Er muss in völliger Dunkelheit wachsen, sonst wird er grün und bitter. Belgien ist der weltweit größte Produzent!\n\n🥬 Kulinarisch: Die Bitterstoffe regen die Verdauung an. Probieren Sie ihn gegrillt mit Honig und Gorgonzola!"
  },

  // Product facts - Spruitjes
  fact_spruitjes_title: {
    nl: "Spruitjes - Brussels Sprouts",
    fr: "Choux de Bruxelles - Fierté Nationale",
    en: "Brussels Sprouts - Belgian Pride",
    de: "Rosenkohl - Belgischer Stolz"
  },
  fact_spruitjes: {
    nl: "Onze nationale trots! Spruitjes heten wereldwijd 'Brussels Sprouts' vanwege de historische teelt rondom Brussel sinds de 13e eeuw. Ze zijn bomvol vitamine C en K. Een plant kan wel 50-100 spruitjes produceren!\n\n🥦 Tip: Moderne rassen zijn veel minder bitter dan vroeger. Probeer ze eens geroosterd met spekjes en een druppel siroop!",
    fr: "Notre fierté nationale ! Les choux de Bruxelles sont appelés 'Brussels Sprouts' dans le monde entier en raison de la culture historique autour de Bruxelles depuis le 13e siècle. Ils sont pleins de vitamines C et K. Une plante peut produire 50 à 100 choux !\n\n🥦 Astuce : Les variétés modernes sont beaucoup moins amères qu'avant. Essayez-les rôtis avec des lardons et un filet de sirop !",
    en: "Our national pride! Brussels sprouts are called 'Brussels Sprouts' worldwide due to the historic cultivation around Brussels since the 13th century. They're packed with vitamins C and K. One plant can produce 50-100 sprouts!\n\n🥦 Tip: Modern varieties are much less bitter than before. Try them roasted with bacon and a drizzle of syrup!",
    de: "Unser Nationalstolz! Rosenkohl wird weltweit 'Brussels Sprouts' genannt, wegen des historischen Anbaus rund um Brüssel seit dem 13. Jahrhundert. Sie sind voller Vitamine C und K. Eine Pflanze kann 50-100 Röschen produzieren!\n\n🥦 Tipp: Moderne Sorten sind viel weniger bitter als früher. Probieren Sie sie geröstet mit Speck und einem Schuss Sirup!"
  },

  // Product facts - Kersen
  fact_kersen_title: {
    nl: "Kersen - Limburgs Rood Goud",
    fr: "Cerises - Or Rouge du Limbourg",
    en: "Cherries - Limburg Red Gold",
    de: "Kirschen - Limburger Rotes Gold"
  },
  fact_kersen: {
    nl: "Belgische kersen uit de streek rond Sint-Truiden zijn wereldberoemd! De Limburgse Haspengouw is het grootste fruitproducerende gebied in de Benelux. Kersen bevatten melatonine, wat kan helpen bij slaapproblemen.\n\n🍒 Historisch: Romeinse soldaten brachten kersenbomen naar België. De naam 'kers' komt van de Turkse stad Giresun (vroeger Cerasus).",
    fr: "Les cerises belges de la région de Saint-Trond sont mondialement célèbres ! La Hesbaye limbourgeoise est la plus grande région productrice de fruits du Benelux. Les cerises contiennent de la mélatonine, qui peut aider en cas de problèmes de sommeil.\n\n🍒 Historique : Les soldats romains ont apporté les cerisiers en Belgique. Le nom 'cerise' vient de la ville turque de Giresun (anciennement Cerasus).",
    en: "Belgian cherries from the Sint-Truiden region are world-famous! The Limburg Haspengouw is the largest fruit-producing area in the Benelux. Cherries contain melatonin, which can help with sleep problems.\n\n🍒 Historical: Roman soldiers brought cherry trees to Belgium. The name 'cherry' comes from the Turkish city of Giresun (formerly Cerasus).",
    de: "Belgische Kirschen aus der Region Sint-Truiden sind weltberühmt! Das Limburger Haspengouw ist das größte Obstanbaugebiet in den Benelux-Ländern. Kirschen enthalten Melatonin, das bei Schlafproblemen helfen kann.\n\n🍒 Historisch: Römische Soldaten brachten Kirschbäume nach Belgien. Der Name 'Kirsche' stammt aus der türkischen Stadt Giresun (früher Cerasus)."
  },

  // Product facts - Tomaten  
  fact_tomaten_title: {
    nl: "Tomaten - Rode Vitaminebon",
    fr: "Tomates - Bombe de Vitamines Rouge",
    en: "Tomatoes - Red Vitamin Bomb",
    de: "Tomaten - Rote Vitaminbombe"
  },
  fact_tomaten: {
    nl: "Tomaten zijn botanisch gezien fruit, geen groente! Er bestaan meer dan 10.000 soorten wereldwijd. De rode kleur komt van lycopeen, een krachtige antioxidant die beter opneembaar is als tomaten gekookt zijn.\n\n🍅 Wist je dat? Tomaten werden in Europa lang gezien als giftig omdat ze familie zijn van de nachtschade. Pas rond 1850 werden ze populair als voedsel!",
    fr: "Les tomates sont botaniquement un fruit, pas un légume ! Il existe plus de 10 000 variétés dans le monde. La couleur rouge vient du lycopène, un puissant antioxydant qui est mieux absorbé lorsque les tomates sont cuites.\n\n🍅 Le saviez-vous ? Les tomates ont longtemps été considérées comme toxiques en Europe car elles font partie de la famille des solanacées. Ce n'est que vers 1850 qu'elles sont devenues populaires comme aliment !",
    en: "Tomatoes are botanically a fruit, not a vegetable! There are over 10,000 varieties worldwide. The red color comes from lycopene, a powerful antioxidant that is better absorbed when tomatoes are cooked.\n\n🍅 Did you know? Tomatoes were long considered poisonous in Europe because they are related to nightshade. It wasn't until around 1850 that they became popular as food!",
    de: "Tomaten sind botanisch gesehen Obst, kein Gemüse! Es gibt weltweit über 10.000 Sorten. Die rote Farbe kommt von Lycopin, einem starken Antioxidans, das besser aufgenommen wird, wenn Tomaten gekocht sind.\n\n🍅 Wussten Sie? Tomaten galten in Europa lange als giftig, weil sie mit dem Nachtschatten verwandt sind. Erst um 1850 wurden sie als Nahrungsmittel populär!"
  },

  // Product facts - Pompoen
  fact_pompoen_title: {
    nl: "Pompoen - Herfstmagie",
    fr: "Citrouille - Magie d'Automne",
    en: "Pumpkin - Autumn Magic",
    de: "Kürbis - Herbstmagie"
  },
  fact_pompoen: {
    nl: "De zwaarste pompoen ooit gewogen woog meer dan 1200 kg! \n\n🎃 Belgische Traditie: In Kasterlee vindt jaarlijks de Pompoenregatta plaats, waarbij deelnemers in uitgeholde reuzenpompoenen over het water varen!",
    fr: "La citrouille la plus lourde jamais pesée faisait plus de 1200 kg ! \n\n🎃 Tradition Belge : À Kasterlee, la régate de citrouilles a lieu chaque année, où les participants naviguent sur l'eau dans des citrouilles géantes évidées !",
    en: "The heaviest pumpkin ever weighed over 1200 kg! \n\n🎃 Belgian Tradition: In Kasterlee, the Pumpkin Regatta takes place annually, where participants sail over water in hollowed-out giant pumpkins!",
    de: "Der schwerste Kürbis, der je gewogen wurde, wog über 1200 kg! \n\n🎃 Belgische Tradition: In Kasterlee findet jährlich die Kürbisregatta statt, bei der Teilnehmer in ausgehöhlten Riesenkürbissen über das Wasser fahren!"
  },

  // Product facts - Asperges
  fact_asperges_title: {
    nl: "Asperges - Het Witte Goud",
    fr: "Asperges - L'Or Blanc",
    en: "Asparagus - The White Gold",
    de: "Spargel - Das Weiße Gold"
  },
  fact_asperges: {
    nl: "Asperges kunnen bij warm weer tot 10 cm per dag groeien! Ze zijn een van de eerste groentesoorten in het voorjaar en zijn rijk aan foliumzuur en vitamine K. Witte asperges groeien onder de grond in duisternis, groene in het zonlicht.\n\n🌱 Culinair: De aspergeteelt in België concentreert zich rond de Kempen. Het seizoen duurt van half april tot 24 juni (Sint-Jan).",
    fr: "Les asperges peuvent pousser jusqu'à 10 cm par jour par temps chaud ! Elles sont l'un des premiers légumes du printemps et sont riches en acide folique et en vitamine K. Les asperges blanches poussent sous terre dans l'obscurité, les vertes à la lumière du soleil.\n\n🌱 Culinaire : La culture des asperges en Belgique se concentre autour de la Campine. La saison dure de mi-avril au 24 juin (Saint-Jean).",
    en: "Asparagus can grow up to 10 cm per day in warm weather! They are one of the first vegetables in spring and are rich in folic acid and vitamin K. White asparagus grows underground in darkness, green ones in sunlight.\n\n🌱 Culinary: Asparagus cultivation in Belgium is concentrated around the Kempen region. The season lasts from mid-April to June 24 (St. John's Day).",
    de: "Spargel kann bei warmem Wetter bis zu 10 cm pro Tag wachsen! Er gehört zu den ersten Gemüsesorten im Frühling und ist reich an Folsäure und Vitamin K. Weißer Spargel wächst unter der Erde im Dunkeln, grüner im Sonnenlicht.\n\n🌱 Kulinarisch: Der Spargelanbau in Belgien konzentriert sich auf die Region Kempen. Die Saison dauert von Mitte April bis zum 24. Juni (Johannistag)."
  },

  // Product facts - Spinazie
  fact_spinazie_title: {
    nl: "Spinazie - Popeyes Kracht",
    fr: "Épinards - Force de Popeye",
    en: "Spinach - Popeye's Power",
    de: "Spinat - Popeyes Kraft"
  },
  fact_spinazie: {
    nl: "Spinazie bevat veel ijzer, maar de mythe van Popeye is gebaseerd op een rekenfout! Een onderzoeker plaatste ooit een decimaal verkeerd, waardoor spinazie 10x meer ijzer leek te bevatten. Toch blijft het een superfood vol vitaminen en mineralen.\n\n💪 Tip: Eet spinazie met iets zuurs (zoals citroen) om het ijzer beter op te nemen!",
    fr: "Les épinards contiennent beaucoup de fer, mais le mythe de Popeye est basé sur une erreur de calcul ! Un chercheur a un jour mal placé une décimale, faisant croire que les épinards contenaient 10 fois plus de fer. Pourtant, ça reste un super-aliment plein de vitamines et minéraux.\n\n💪 Astuce : Mangez des épinards avec quelque chose d'acide (comme du citron) pour mieux absorber le fer !",
    en: "Spinach contains lots of iron, but the Popeye myth is based on a calculation error! A researcher once misplaced a decimal, making spinach seem to contain 10x more iron. Still, it remains a superfood full of vitamins and minerals.\n\n💪 Tip: Eat spinach with something acidic (like lemon) to better absorb the iron!",
    de: "Spinat enthält viel Eisen, aber der Popeye-Mythos basiert auf einem Rechenfehler! Ein Forscher hat einmal ein Komma falsch gesetzt, wodurch Spinat 10x mehr Eisen zu enthalten schien. Dennoch bleibt es ein Superfood voller Vitamine und Mineralstoffe.\n\n💪 Tipp: Essen Sie Spinat mit etwas Saurem (wie Zitrone), um das Eisen besser aufzunehmen!"
  },

  // Product facts - Broccoli
  fact_broccoli_title: {
    nl: "Broccoli - Groene Superfood",
    fr: "Brocoli - Superaliment Vert",
    en: "Broccoli - Green Superfood",
    de: "Brokkoli - Grünes Superfood"
  },
  fact_broccoli: {
    nl: "Broccoli bevat meer vitamine C dan een sinaasappel! Het is familie van de bloemkool en kool. De naam komt van het Italiaanse 'broccolo' wat 'kleine arm' of 'tak' betekent. Broccoli bevat sulforafaan, een stof die mogelijk beschermt tegen kanker.\n\n🥦 Kooktip: Stoom broccoli kort (3-4 minuten) om de voedingsstoffen te behouden. Overkoken vernietigt de vitaminen!",
    fr: "Le brocoli contient plus de vitamine C qu'une orange ! Il fait partie de la famille du chou-fleur et du chou. Le nom vient de l'italien 'broccolo' qui signifie 'petit bras' ou 'branche'. Le brocoli contient du sulforaphane, une substance qui pourrait protéger contre le cancer.\n\n🥦 Conseil de cuisson : Faites cuire le brocoli à la vapeur brièvement (3-4 minutes) pour conserver les nutriments. Trop cuire détruit les vitamines !",
    en: "Broccoli contains more vitamin C than an orange! It's related to cauliflower and cabbage. The name comes from the Italian 'broccolo' meaning 'little arm' or 'branch'. Broccoli contains sulforaphane, a substance that may protect against cancer.\n\n🥦 Cooking tip: Steam broccoli briefly (3-4 minutes) to preserve nutrients. Overcooking destroys the vitamins!",
    de: "Brokkoli enthält mehr Vitamin C als eine Orange! Er ist mit Blumenkohl und Kohl verwandt. Der Name kommt vom italienischen 'broccolo', was 'kleiner Arm' oder 'Zweig' bedeutet. Brokkoli enthält Sulforaphan, eine Substanz, die möglicherweise vor Krebs schützt.\n\n🥦 Kochtipp: Dämpfen Sie Brokkoli kurz (3-4 Minuten), um die Nährstoffe zu erhalten. Überkochen zerstört die Vitamine!"
  },

  // Product facts - Komkommer
  fact_komkommer_title: {
    nl: "Komkommer - Coole Verfrissing",
    fr: "Concombre - Rafraîchissement Cool",
    en: "Cucumber - Cool Refreshment",
    de: "Gurke - Kühle Erfrischung"
  },
  fact_komkommer: {
    nl: "Keizer Tiberius van Rome was zo dol op komkommers dat hij ze elke dag at! Zijn tuiniers bouwden de allereerste verplaatsbare serres op wielen. Komkommer is plantkundig gezien familie van de meloen!\n\n🥒 Wist je dat? Komkommers bestaan voor 95% uit water en zijn de perfecte dorstlesser.",
    fr: "L'empereur Tibère de Rome aimait tellement les concombres qu'il en mangeait tous les jours ! Ses jardiniers ont construit les premières serres mobiles. Le concombre est cousin du melon !\n\n🥒 Le saviez-vous ? Les concombres sont composés à 95 % d'eau.",
    en: "Emperor Tiberius of Rome loved cucumbers so much he ate them every day! His gardeners built the first portable greenhouses. Botanically, cucumber is related to melon!\n\n🥒 Did you know? Cucumbers are 95% water.",
    de: "Kaiser Tiberius von Rom liebte Gurken so sehr, dass er sie jeden Tag aß! Seine Gärtner bauten die ersten tragbaren Gewächshäuser. Botanisch ist die Gurke mit der Melone verwandt!\n\n🥒 Wussten Sie? Gurken bestehen zu 95% aus Wasser."
  },

  // Product facts - Bloemkool
  fact_bloemkool_title: {
    nl: "Bloemkool - Witte Wolkjes",
    fr: "Chou-fleur - Nuages Blancs",
    en: "Cauliflower - White Clouds",
    de: "Blumenkohl - Weiße Wölkchen"
  },
  fact_bloemkool: {
    nl: "De witte kleur van bloemkool komt doordat de bladeren de kool beschermen tegen zonlicht. Blootgesteld aan de zon zou hij geel worden! Er bestaan ook oranje, groene en paarse variëteiten. Bloemkool is laag in calorieën maar rijk aan vezels.\n\n🥗 Culinair: Bloemkool is de basis van de populaire 'bloemkoolrijst' en 'bloemkoolpizza' - gezonde alternatieven!",
    fr: "La couleur blanche du chou-fleur vient du fait que les feuilles protègent le chou de la lumière du soleil. Exposé au soleil, il deviendrait jaune ! Il existe aussi des variétés orange, vertes et violettes. Le chou-fleur est faible en calories mais riche en fibres.\n\n🥗 Culinaire : Le chou-fleur est la base du populaire 'riz de chou-fleur' et de la 'pizza au chou-fleur' - des alternatives saines !",
    en: "The white color of cauliflower comes from the leaves protecting the cabbage from sunlight. Exposed to the sun, it would turn yellow! There are also orange, green and purple varieties. Cauliflower is low in calories but rich in fiber.\n\n🥗 Culinary: Cauliflower is the base of the popular 'cauliflower rice' and 'cauliflower pizza' - healthy alternatives!",
    de: "Die weiße Farbe des Blumenkohls kommt daher, dass die Blätter den Kohl vor Sonnenlicht schützen. Der Sonne ausgesetzt würde er gelb werden! Es gibt auch orange, grüne und lila Sorten. Blumenkohl ist kalorienarm aber ballaststoffreich.\n\n🥗 Kulinarisch: Blumenkohl ist die Basis des beliebten 'Blumenkohlreis' und der 'Blumenkohlpizza' - gesunde Alternativen!"
  },

  // Product facts - Peren
  fact_peren_title: {
    nl: "Peren - Belgische Bescheidenheid",
    fr: "Poires - Modestie Belge",
    en: "Pears - Belgian Modesty",
    de: "Birnen - Belgische Bescheidenheit"
  },
  fact_peren: {
    nl: "De Conférence peer, vandaag de populairste in België, werd ontwikkeld in 1885 en won een prijs op een conferentie in Londen - vandaar de naam! Peren rijpen van binnenuit, dus wanneer de buitenkant zacht is, is de kern vaak al te rijp.\n\n🍐 Tip: Bewaar peren apart van appels - appels geven ethyleengas af waardoor peren sneller rijpen!",
    fr: "La poire Conférence, aujourd'hui la plus populaire en Belgique, a été développée en 1885 et a remporté un prix lors d'une conférence à Londres - d'où son nom ! Les poires mûrissent de l'intérieur, donc quand l'extérieur est mou, le cœur est souvent déjà trop mûr.\n\n🍐 Astuce : Conservez les poires séparément des pommes - les pommes émettent de l'éthylène qui fait mûrir les poires plus vite !",
    en: "The Conference pear, today the most popular in Belgium, was developed in 1885 and won a prize at a conference in London - hence the name! Pears ripen from the inside out, so when the outside is soft, the core is often already overripe.\n\n🍐 Tip: Store pears separately from apples - apples release ethylene gas which causes pears to ripen faster!",
    de: "Die Conference-Birne, heute die beliebteste in Belgien, wurde 1885 entwickelt und gewann einen Preis auf einer Konferenz in London - daher der Name! Birnen reifen von innen nach außen, wenn also die Außenseite weich ist, ist der Kern oft schon überreif.\n\n🍐 Tipp: Bewahren Sie Birnen getrennt von Äpfeln auf - Äpfel geben Ethylengas ab, das Birnen schneller reifen lässt!"
  },

  // Product facts - Eieren
  fact_eieren_title: {
    nl: "Eieren - Vers van de pers",
    fr: "Œufs - Frais pondus",
    en: "Eggs - Freshly laid",
    de: "Eier - Frisch gelegt"
  },
  fact_eieren: {
    nl: "De kleur van de eierschaal hangt af van het ras, niet de voeding! Kippen met rode oorlellen leggen bruine eieren, witte oorlellen witte. In de winkel zijn eieren vaak weken oud, bij de boer soms nog warm! \n\n🥚 Weetje: Een kip heeft ongeveer 24-26 uur nodig om één ei te maken.",
    fr: "La couleur de la coquille dépend de la race ! Les poules aux lobes rouges pondent des œufs bruns, les blancs des œufs blancs. Le saviez-vous : Une poule met environ 24-26 heures pour faire un œuf.",
    en: "Shell color depends on the breed! Red-lobed chickens lay brown eggs, white-lobed lay white. Fact: A chicken takes about 24-26 hours to produce one egg.",
    de: "Die Schalenfarbe hängt von der Rasse ab! Hühner mit roten Ohrläppchen legen braune Eier, weiße Ohrläppchen weiße. Fakt: Ein Huhn braucht etwa 24-26 Stunden für ein Ei."
  },

  // Product facts - Courgette
  fact_courgette_title: {
    nl: "Courgette - Groene Groeier",
    fr: "Courgette - Géant Vert",
    en: "Zucchini - Green Grower",
    de: "Zucchini - Grüner Riese"
  },
  fact_courgette: {
    nl: "Courgettes groeien razendsnel! In de zomer kan een vrucht wel 2-3 cm per dag groeien. De bloemen (courgettefleurs) zijn ook eetbaar en een delicatesse. Courgette bevat weinig calorieën maar veel vitaminen.",
    fr: "Les courgettes poussent très vite ! En été, un fruit peut grandir de 2-3 cm par jour. Les fleurs sont aussi comestibles et sont un délice.",
    en: "Zucchinis grow very fast! In summer, a fruit can grow 2-3 cm per day. The flowers are also edible and a delicacy.",
    de: "Zucchinis wachsen sehr schnell! Im Sommer kann eine Frucht 2-3 cm pro Tag wachsen. Die Blüten sind ebenfalls essbar und eine Delikatesse."
  },

  // Product facts - Rode Biet
  fact_rode_biet_title: {
    nl: "Rode Biet - Power Knol",
    fr: "Betterave - Racine Puissante",
    en: "Beetroot - Power Root",
    de: "Rote Bete - Kraftwurzel"
  },
  fact_rode_biet: {
    nl: "Rode bieten bevatten betanine, wat ze hun dieprode kleur geeft. Dit is zo krachtig dat het ook als natuurlijke kleurstof (E162) wordt gebruikt! Bieten zijn geweldig voor je uithoudingsvermogen dankzij de nitraten.",
    fr: "Les betteraves contiennent de la bétanine, qui leur donne leur couleur rouge intense. C'est un colorant naturel (E162) ! Les betteraves sont excellentes pour l'endurance.",
    en: "Beetroots contain betanin, giving them their deep red color. It is used as a natural dye (E162)! Beets are great for endurance thanks to nitrates.",
    de: "Rote Bete enthält Betanin, das ihr die tiefrote Farbe verleiht. Es wird als natürlicher Farbstoff (E162) verwendet! Beete sind gut für die Ausdauer."
  },

  // Extra Tips
  tip_8: {
    nl: "Introduceer een stempelkaart: 10x kopen = gratis product. Klanten komen terug!",
    fr: "Introduisez une carte de fidélité : 10 achats = produit gratuit. Les clients reviennent !",
    en: "Introduce a loyalty card: 10 buys = free product. Customers return!",
    de: "Führen Sie eine Stempelkarte ein: 10x kaufen = kostenloses Produkt. Kunden kommen zurück!"
  },
  tip_9: {
    nl: "Organiseer een 'Proef de Oogst' weekend. Proeven doet kopen!",
    fr: "Organisez un week-end 'Goûtez la Récolte'. Goûter c'est acheter !",
    en: "Organize a 'Taste the Harvest' weekend. Tasting leads to buying!",
    de: "Organisieren Sie ein 'Probieren Sie die Ernte'-Wochenende. Probieren führt zum Kauf!"
  },
  tip_10: {
    nl: "Zet bordjes met 'Wist-je-datjes' (zoals deze!) bij je producten. Kennis verhoogt de waardering.",
    fr: "Placez des panneaux 'Le saviez-vous' près de vos produits. La connaissance augmente l'appréciation.",
    en: "Place 'Did you know' signs by your products. Knowledge increases appreciation.",
    de: "Platzieren Sie 'Wussten Sie schon'-Schilder bei Ihren Produkten. Wissen steigert die Wertschätzung."
  },

  referral_share_promo: {
    nl: "Maak mijn boerderij zichtbaar",
    fr: "Promouvoir ma ferme",
    en: "Promote my farm",
    de: "Meinen Hof bewerben"
  },

};


export const INITIAL_FARMS: Farm[] = [
  {
    id: '0',
    name: "Ferme de la Potterie",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800"
    ],
    lat: 50.3542,
    lng: 5.4554,
    address: "Route de Durbuy 5, 6940 Durbuy",
    phone: "050 38 02 02",
    schedule: MOCK_SCHEDULE_1,
    joinedDate: new Date().toISOString(),
    followerCount: 287,
    products: [
      { id: 'p0', name: 'Hoeve-ijs De Potterie', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400', price: '0.00', unit: 'demo' },
      { id: 'p01', name: 'Verse Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: 'liter' },
      { id: 'p02', name: 'Boerenyoghurt', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: 'pot' },
      { id: 'p03', name: 'Boerenkaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: 'stuk' },
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    statusUpdate: {
      message: 'Verse aardbeien nu beschikbaar! 🍓',
      expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days from now
    }
  },
  {
    id: '1',
    name: "Ferme des Champs Verts",
    image: "https://picsum.photos/id/195/800/600",
    images: [
      "https://picsum.photos/id/195/800/600",
      "https://picsum.photos/id/292/800/600",
      "https://picsum.photos/id/486/800/600"
    ],
    lat: 50.4674,
    lng: 4.8720,
    address: "Chemin de la Citadelle 10, 5000 Namur",
    phone: "0470 12 34 56",
    schedule: MOCK_SCHEDULE_1,
    joinedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    followerCount: 142,
    products: [
      { id: 'p1', name: 'Aardappelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad673?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: 'kg' },
      { id: 'p2', name: 'Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400', price: '3.00', unit: 'doos (6)' },
      { id: 'p4', name: 'Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: 'l' },
      { id: 'p5', name: 'Prei', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1506364020200-3f1d277f0383?auto=format&fit=crop&q=80&w=400', price: '1.20', unit: 'bussel' },
      { id: 'p6', name: 'Broccoli', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bbe?auto=format&fit=crop&q=80&w=400', price: '1.80', unit: 'stuk' },
      { id: 'p11', name: 'Wortelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: 'bussel' },
      { id: 'p12', name: 'Uien', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400', price: '1.00', unit: 'kg' },
      { id: 'p13', name: 'Pompoen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1506806732259-39c2d4ad68b9?auto=format&fit=crop&q=80&w=400', price: '3.00', unit: 'stuk' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true
  },
  {
    id: '2',
    name: "Ferme du Soleil",
    image: "https://picsum.photos/id/437/800/600",
    lat: 50.6326,
    lng: 5.5797,
    address: "Route de Bastogne 45, 4000 Liège",
    phone: "0480 98 76 54",
    schedule: MOCK_SCHEDULE_2,
    joinedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    followerCount: 28,
    products: [
      {
        id: 'p3',
        name: 'Appels',
        available: true,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80',
        price: '2.00',
        unit: 'kg',
        images: [
          'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
          'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a',
          'https://images.unsplash.com/photo-1610339315348-131757b32252'
        ]
      },
      { id: 'p7', name: 'Kersen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400', price: '6.00', unit: 'kg' },
      { id: 'p8', name: 'Rundvlees', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400', price: '15.00', unit: 'kg' },
      { id: 'p9', name: 'Kipfilet', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: 'kg' },
      { id: 'p10', name: 'Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '500g' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    name: 'Ferme Bio Champs Verts',
    address: 'Grand Place 50, 7000 Mons',
    lat: 50.4542,
    lng: 3.9567,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-02-10',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p3a', name: 'Bio Tomaten', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1546470427-227e2f11f6c4?auto=format&fit=crop&q=80&w=400', price: '3.20', unit: '/kg' },
      { id: 'p3b', name: 'Bio Komkommer', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=400', price: '1.80', unit: '/stuk' },
      { id: 'p3c', name: 'Bio Sla', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/krop' },
      { id: 'p3d', name: 'Bio Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/doos' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 198
  },
  {
    id: '4',
    name: 'Laiterie de la Voie Lactée',
    address: "Rue de l'Abbaye 1, 6530 Thuin",
    lat: 50.3396,
    lng: 4.2873,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-03-15',
    schedule: [
      { day: 'maandag', isOpen: false, openTime: '', closeTime: '' },
      { day: 'dinsdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '08:00', closeTime: '17:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'p41', name: 'Verse Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.20', unit: '/liter' },
      { id: 'p42', name: 'Boerenyoghurt', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/st.' },
      { id: 'p43', name: 'Boerenkaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400', price: '8.00', unit: '/kg' },
      { id: 'p44', name: 'Boter', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/st.' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 245
  },
  {
    id: '5',
    name: 'Poulailler Eggcellent',
    address: 'Place MacAuliffe 2, 6600 Bastogne',
    lat: 50.0035,
    lng: 5.7184,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-05-20',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'dinsdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'woensdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'donderdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'vrijdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '07:00', closeTime: '18:00' },
      { day: 'zondag', isOpen: true, openTime: '08:00', closeTime: '14:00' }
    ],
    products: [
      { id: 'p51', name: 'Verse Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/doos' },
      { id: 'p52', name: 'Bio Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/doos' },
      { id: 'p53', name: 'Kippensoep', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400', price: '6.00', unit: '/liter' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 189
  },
  {
    id: '6',
    name: 'Boucherie du Goût',
    address: 'Rue de Diekirch 20, 6700 Arlon',
    lat: 49.6800,
    lng: 5.8100,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-02-10',
    schedule: [
      { day: 'maandag', isOpen: false, openTime: '', closeTime: '' },
      { day: 'dinsdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '09:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '08:00', closeTime: '17:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'p61', name: 'Rundersteak', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400', price: '18.00', unit: '/kg' },
      { id: 'p62', name: 'Varkenshaas', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1602086389696-ae4a4816e1c0?auto=format&fit=crop&q=80&w=400', price: '14.00', unit: '/kg' },
      { id: 'p63', name: 'Gehakt', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400', price: '10.00', unit: '/kg' },
      { id: 'p64', name: 'Worst', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=400', price: '8.00', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 312
  },
  {
    id: '7',
    name: 'Verger Douce Récolte',
    address: 'Avenue Reine Astrid 15, 4900 Spa',
    lat: 50.4925,
    lng: 5.8643,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-06-01',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'dinsdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '07:00', closeTime: '17:00' },
      { day: 'zondag', isOpen: true, openTime: '09:00', closeTime: '14:00' }
    ],
    products: [
      { id: 'p71', name: 'Appels', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/kg' },
      { id: 'p72', name: 'Peren', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1514756331096-242f390ef2a5?auto=format&fit=crop&q=80&w=400', price: '3.00', unit: '/kg' },
      { id: 'p73', name: 'Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '5.00', unit: '/kg' },
      { id: 'p74', name: 'Frambozen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400', price: '7.00', unit: '/kg' },
      { id: 'p75', name: 'Kersen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 421
  },
  {
    id: '8',
    name: 'Potager Frais & Sain',
    address: 'Rue de Behogne 5, 5580 Rochefort',
    lat: 50.1612,
    lng: 5.2238,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-04-12',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'dinsdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'woensdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'donderdag', isOpen: true, openTime: '07:00', closeTime: '19:00' },
      { day: 'vrijdag', isOpen: true, openTime: '07:00', closeTime: '20:00' },
      { day: 'zaterdag', isOpen: true, openTime: '07:00', closeTime: '18:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'p81', name: 'Tomaten', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/kg' },
      { id: 'p82', name: 'Komkommers', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: '/st.' },
      { id: 'p83', name: 'Paprika', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=400', price: '2.00', unit: '/st.' },
      { id: 'p84', name: 'Sla', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c958a2f?auto=format&fit=crop&q=80&w=400', price: '1.20', unit: '/st.' },
      { id: 'p85', name: 'Broccoli', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bbe?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/st.' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 156
  },
  {
    id: '9',
    name: 'Ferme Bio Nature',
    address: 'Place Albert 1er 8, 4960 Malmedy',
    lat: 50.4265,
    lng: 6.0278,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-01-05',
    schedule: [
      { day: 'maandag', isOpen: false, openTime: '', closeTime: '' },
      { day: 'dinsdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'zaterdag', isOpen: true, openTime: '08:00', closeTime: '16:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'p91', name: 'Bio Wortelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400', price: '2.80', unit: '/kg' },
      { id: 'p92', name: 'Bio Aardappelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad673?auto=format&fit=crop&q=80&w=400', price: '2.20', unit: '/kg' },
      { id: 'p93', name: 'Bio Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=400', price: '5.00', unit: '/doos' },
      { id: 'p94', name: 'Bio Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.80', unit: '/liter' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 278
  },
  {
    id: '10',
    name: 'Aspergehof Witte Goud',
    address: 'Aspergestraat 7, 3800 Sint-Truiden',
    lat: 50.8167,
    lng: 5.1867,
    image: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-03-25',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'dinsdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '08:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '07:00', closeTime: '17:00' },
      { day: 'zondag', isOpen: true, openTime: '09:00', closeTime: '15:00' }
    ],
    products: [
      { id: 'p101', name: 'Witte Asperges', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p102', name: 'Groene Asperges', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400', price: '8.00', unit: '/kg' },
      { id: 'p103', name: 'Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '4.80', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 198
  },
  {
    id: '11',
    name: "Aardbeienautomaat 'De Brink'",
    address: 'Brinkstraat 12, 3840 Borgloon',
    lat: 50.8025,
    lng: 5.3456,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=800',
    joinedDate: new Date().toISOString(),
    schedule: MOCK_SCHEDULE_1, // Schedule is ignored if heeft_automaat is true in filter logic
    products: [
      { id: 'p111', name: 'Verse Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '5.00', unit: '/500g' },
      { id: 'p112', name: 'Aardbeienjam', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/pot' }
    ],
    paymentMethods: ['payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 84
  },
  {
    id: '12',
    name: 'Kaasboerderij De Gouden Koe',
    address: 'Kaasweg 18, 9200 Dendermonde',
    lat: 51.0282,
    lng: 4.1017,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-02-28',
    schedule: [
      { day: 'maandag', isOpen: false, openTime: '', closeTime: '' },
      { day: 'dinsdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'woensdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'donderdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'vrijdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'zaterdag', isOpen: true, openTime: '09:00', closeTime: '16:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'p121', name: 'Goudse Kaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400', price: '9.50', unit: '/kg' },
      { id: 'p122', name: 'Brie', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p123', name: 'Verse Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.30', unit: '/liter' },
      { id: 'p124', name: 'Room', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/liter' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 334
  },
  {
    id: '13',
    name: "Melktap 'De Versheid'",
    address: 'Veldstraat 42, 9000 Gent',
    lat: 51.0500,
    lng: 3.7303,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800',
    joinedDate: new Date().toISOString(),
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p131', name: 'Verse Melk (Tap)', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.00', unit: '/liter' },
      { id: 'p132', name: 'Glazen Fles', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400', price: '2.00', unit: '/st.' }
    ],
    paymentMethods: ['payconiq'],
    lastStockUpdate: new Date().toISOString(),
    heeft_automaat: true,
    followerCount: 125
  },
  {
    id: '14',
    name: 'Pompoenboerderij Herfstgoud',
    address: 'Pompoenlaan 25, 2300 Turnhout',
    lat: 51.3227,
    lng: 4.9447,
    image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-08-10',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '10:00', closeTime: '18:00' },
      { day: 'dinsdag', isOpen: true, openTime: '10:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '10:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '10:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '10:00', closeTime: '19:00' },
      { day: 'zaterdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'zondag', isOpen: true, openTime: '10:00', closeTime: '17:00' }
    ],
    products: [
      { id: 'p121', name: 'Pompoenen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1506806732259-39c2d4ad68b9?auto=format&fit=crop&q=80&w=400', price: '3.00', unit: '/st.' },
      { id: 'p122', name: 'Courgettes', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1561856618-cce7c59c3d89?auto=format&fit=crop&q=80&w=400', price: '2.20', unit: '/kg' },
      { id: 'p123', name: 'Uien', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400', price: '1.80', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 167
  },
  {
    id: '15',
    name: 'Gemengde Hoeve De Vier Seizoenen',
    address: 'Seizoenweg 50, 1500 Halle',
    lat: 50.7344,
    lng: 4.2357,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-01-20',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'dinsdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'woensdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'donderdag', isOpen: true, openTime: '08:00', closeTime: '19:00' },
      { day: 'vrijdag', isOpen: true, openTime: '08:00', closeTime: '20:00' },
      { day: 'zaterdag', isOpen: true, openTime: '07:00', closeTime: '18:00' },
      { day: 'zondag', isOpen: true, openTime: '08:00', closeTime: '16:00' }
    ],
    products: [
      { id: 'p131', name: 'Seizoensgroenten', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/kg' },
      { id: 'p132', name: 'Appels', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400', price: '2.30', unit: '/kg' },
      { id: 'p133', name: 'Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400', price: '3.80', unit: '/doos' },
      { id: 'p134', name: 'Verse Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.40', unit: '/liter' },
      { id: 'p135', name: 'Kippenvlees', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400', price: '11.00', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 512
  },
  {
    id: '16',
    name: 'Fruithoeve Het Appelparadijs',
    address: 'Boomgaardlaan 42, 3300 Tienen',
    lat: 50.8073,
    lng: 4.9386,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-03-15',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p141', name: 'Jonagold Appels', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400', price: '2.80', unit: '/kg' },
      { id: 'p142', name: 'Peren', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=400', price: '3.20', unit: '/kg' },
      { id: 'p143', name: 'Appelsap', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/liter' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 234
  },
  {
    id: '17',
    name: 'Varkensboerderij De Roze Weide',
    address: 'Varkensstraat 7, 3700 Tongeren',
    lat: 50.7808,
    lng: 5.4647,
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-01-28',
    schedule: MOCK_SCHEDULE_2,
    products: [
      { id: 'p151', name: 'Varkensvlees', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&q=80&w=400', price: '9.50', unit: '/kg' },
      { id: 'p152', name: 'Spek', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p153', name: 'Worst', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1607623488235-e2e5e1c0c8b3?auto=format&fit=crop&q=80&w=400', price: '8.50', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 156
  },
  {
    id: '18',
    name: 'Honingboerderij De Gouden Bij',
    address: 'Bijenweg 12, 2400 Mol',
    lat: 51.1917,
    lng: 5.1167,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-04-05',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p161', name: 'Bloemenhoning', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?auto=format&fit=crop&q=80&w=400', price: '8.50', unit: '/pot' },
      { id: 'p162', name: 'Boshoning', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=400', price: '9.50', unit: '/pot' },
      { id: 'p163', name: 'Bijenwas Kaarsen', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1602874801006-c2b2d4d0c6e7?auto=format&fit=crop&q=80&w=400', price: '6.00', unit: '/stuk' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 289
  },
  {
    id: '19',
    name: 'Geitenboerderij De Witte Geit',
    address: 'Geitenpad 33, 3800 Sint-Truiden',
    lat: 50.8167,
    lng: 5.1833,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-02-20',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p171', name: 'Geitenkaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/stuk' },
      { id: 'p172', name: 'Geitenmelk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '2.80', unit: '/liter' },
      { id: 'p173', name: 'Geitenyoghurt', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/pot' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 178
  },
  {
    id: '20',
    name: 'Aspergehoeve De Witte Goud',
    address: 'Aspergenlaan 55, 3500 Hasselt',
    lat: 50.9307,
    lng: 5.3378,
    image: 'https://images.unsplash.com/photo-1529566652340-2b3e0fca2d66?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-03-01',
    schedule: MOCK_SCHEDULE_2,
    products: [
      { id: 'p181', name: 'Witte Asperges', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1529566652340-2b3e0fca2d66?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p182', name: 'Groene Asperges', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=400', price: '8.50', unit: '/kg' },
      { id: 'p183', name: 'Aardappelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad673?auto=format&fit=crop&q=80&w=400', price: '2.20', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 421
  },
  {
    id: '21',
    name: 'Schapenboerderij Het Wollige Veld',
    address: 'Schapenweg 19, 8900 Ieper',
    lat: 50.8513,
    lng: 2.8858,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-01-15',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p191', name: 'Lamsvlees', available: true, category: 'meat', image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400', price: '16.00', unit: '/kg' },
      { id: 'p192', name: 'Schapenkaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400', price: '7.50', unit: '/stuk' },
      { id: 'p193', name: 'Wol', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400', price: '15.00', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 267
  },
  {
    id: '22',
    name: 'Notenboomgaard De Hazelnoot',
    address: 'Notenlaan 77, 1500 Halle',
    lat: 50.7344,
    lng: 4.2357,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-04-12',
    schedule: MOCK_SCHEDULE_2,
    products: [
      { id: 'p201', name: 'Hazelnoten', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p202', name: 'Walnoten', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400', price: '14.00', unit: '/kg' },
      { id: 'p203', name: 'Notenpasta', available: true, category: 'other', image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400', price: '8.50', unit: '/pot' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 145
  },
  {
    id: '23',
    name: 'Kruidenhoeve De Groene Apotheek',
    address: 'Kruidenstraat 24, 9200 Dendermonde',
    lat: 51.0292,
    lng: 4.1011,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-03-22',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p211', name: 'Verse Basilicum', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/pot' },
      { id: 'p212', name: 'Verse Peterselie', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1629978445377-8c92c6d7c6f0?auto=format&fit=crop&q=80&w=400', price: '2.00', unit: '/bos' },
      { id: 'p213', name: 'Kruidenmix', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400', price: '5.50', unit: '/set' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 312
  },
  {
    id: '24',
    name: 'Paddenstoelenkwekerij De Champignon',
    address: 'Paddenstoelweg 8, 2300 Turnhout',
    lat: 51.3227,
    lng: 4.9447,
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-02-14',
    schedule: MOCK_SCHEDULE_1,
    products: [
      { id: 'p221', name: 'Champignons', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '/kg' },
      { id: 'p222', name: 'Shiitake', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1565854195-a5bf3e5e0a55?auto=format&fit=crop&q=80&w=400', price: '8.00', unit: '/kg' },
      { id: 'p223', name: 'Oesterzwammen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1599889959407-c9c7e4e2e3d9?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 203
  },
  {
    id: '25',
    name: 'Bessenplantage De Rode Vrucht',
    address: 'Bessenweg 66, 3600 Genk',
    lat: 50.9658,
    lng: 5.5009,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-04-18',
    schedule: MOCK_SCHEDULE_2,
    products: [
      { id: 'p231', name: 'Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '5.50', unit: '/bakje' },
      { id: 'p232', name: 'Frambozen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/bakje' },
      { id: 'p233', name: 'Blauwe Bessen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400', price: '7.00', unit: '/bakje' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 387
  },
  {
    id: 'honey-nuts-1',
    name: "Imkerij 't Gouden Honingraat",
    address: 'Honingstraat 25, 3300 Tienen',
    lat: 50.8077,
    lng: 4.9384,
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-05-10',
    schedule: [
      { day: 'maandag', isOpen: false, openTime: '', closeTime: '' },
      { day: 'dinsdag', isOpen: true, openTime: '14:00', closeTime: '18:00' },
      { day: 'woensdag', isOpen: true, openTime: '14:00', closeTime: '18:00' },
      { day: 'donderdag', isOpen: true, openTime: '14:00', closeTime: '18:00' },
      { day: 'vrijdag', isOpen: true, openTime: '14:00', closeTime: '18:00' },
      { day: 'zaterdag', isOpen: true, openTime: '10:00', closeTime: '16:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'h1', name: 'Acacia Honing', available: true, category: 'honey', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400', price: '8.50', unit: '/pot 500g' },
      { id: 'h2', name: 'Bloesemhoning', available: true, category: 'honey', image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400', price: '7.50', unit: '/pot 500g' },
      { id: 'h3', name: 'Honingraat', available: true, category: 'honey', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/stuk' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 92
  },
  {
    id: 'nuts-1',
    name: 'Notenboomgaard De Kraker',
    address: 'Notenweg 8, 3500 Hasselt',
    lat: 50.9307,
    lng: 5.3325,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800',
    joinedDate: '2024-06-15',
    schedule: [
      { day: 'maandag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'dinsdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'woensdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'donderdag', isOpen: true, openTime: '09:00', closeTime: '17:00' },
      { day: 'vrijdag', isOpen: true, openTime: '09:00', closeTime: '18:00' },
      { day: 'zaterdag', isOpen: true, openTime: '09:00', closeTime: '16:00' },
      { day: 'zondag', isOpen: false, openTime: '', closeTime: '' }
    ],
    products: [
      { id: 'n1', name: 'Verse Walnoten', available: true, category: 'nuts', image: 'https://images.unsplash.com/photo-1596627670783-f8a846152a1d?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/kg' },
      { id: 'n2', name: 'Hazelnoten', available: true, category: 'nuts', image: 'https://images.unsplash.com/photo-1509356391480-2a29da758223?auto=format&fit=crop&q=80&w=400', price: '7.50', unit: '/kg' },
      { id: 'n3', name: 'Amandelen', available: true, category: 'nuts', image: 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&q=80&w=400', price: '9.00', unit: '/kg' },
      { id: 'h4', name: 'Honing', available: true, category: 'honey', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400', price: '8.00', unit: '/pot 500g' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 67
  }
];

export const SEASONAL_DATA = [
  { month: 'Januari', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes', 'Prei', 'Veldsla', 'Honing'] },
  { month: 'Februari', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes', 'Prei', 'Veldsla', 'Honing'] },
  { month: 'Maart', items: ['Appels', 'Prei', 'Wortelen', 'Uien', 'Witloof', 'Sla', 'Veldsla', 'Honing'] },
  { month: 'April', items: ['Aardbeien', 'Prei', 'Broccoli', 'Wortelen', 'Spinazie', 'Asperges', 'Sla', 'Honing'] },
  { month: 'Mei', items: ['Aardbeien', 'Prei', 'Broccoli', 'Wortelen', 'Spinazie', 'Asperges', 'Sla', 'Komkommer', 'Honing'] },
  { month: 'Juni', items: ['Aardbeien', 'Kersen', 'Tomaten', 'Komkommer', 'Asperges', 'Bloemkool', 'Sla', 'Paprika', 'Frambozen', 'Honing'] },
  { month: 'Juli', items: ['Aardbeien', 'Kersen', 'Tomaten', 'Komkommer', 'Paprika', 'Sla', 'Bloemkool', 'Frambozen', 'Blauwbessen', 'Honing'] },
  { month: 'Augustus', items: ['Appels', 'Peren', 'Tomaten', 'Komkommer', 'Paprika', 'Sla', 'Broccoli', 'Frambozen', 'Bramen', 'Blauwbessen', 'Honing'] },
  { month: 'September', items: ['Appels', 'Peren', 'Pompoen', 'Uien', 'Paprika', 'Tomaten', 'Sla', 'Warmoes', 'Bramen', 'Honing'] },
  { month: 'Oktober', items: ['Appels', 'Peren', 'Pompoen', 'Uien', 'Prei', 'Witloof', 'Spruitjes', 'Pastinaak', 'Knolselderij', 'Schorseneren', 'Honing'] },
  { month: 'November', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Prei', 'Witloof', 'Spruitjes', 'Pastinaak', 'Knolselderij', 'Schorseneren', 'Rammenas', 'Veldsla', 'Honing'] },
  { month: 'December', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes', 'Prei', 'Grondwitloof', 'Pastinaak', 'Knolselderij', 'Veldsla', 'Honing'] },
];

export const MONTHS = [
  'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
  'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
];

export const FALLBACK_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&q=80";

export const PRODUCT_FACTS: Record<string, string> = {
  // Bladgroenten
  "sla": "💡 Wist je dat sla familie is van de zonnebloem? In de tijd van de Egyptenaren werd sla niet gegeten voor de blaadjes, maar voor de olie in de zaden. Het werd zelfs gezien als een symbool van vruchtbaarheid.\n\n🥗 Er zijn meer dan 1000 slasoorten, van knapperige ijsbergsla tot romige botersla. Sla bevat veel water (95%) en is daardoor verfrissend én kaloriearm!",

  // Paprika & Pepers
  "paprika": "💡 Een paprika is eigenlijk een gerijpte vrucht! Een groene paprika is gewoon een onrijpe versie; als je hem langer aan de plant laat hangen, wordt hij geel, oranje en uiteindelijk rood.\n\n🌶️ Hoe rijper de paprika, hoe zoeter en rijker aan vitamine C! Een rode paprika bevat wel 3x meer vitamine C dan een groene.",

  // Tomaten
  "tomaten": "💡 De eerste tomaten die in Europa aankwamen waren geel! Daarom noemen de Italianen ze nog steeds 'Pomodoro', wat letterlijk 'Gouden Appel' betekent.\n\n🍅 Pas later werden de rode varianten populair. Er bestaan wereldwijd meer dan 10.000 verschillende soorten tomaten - van kerstomaten tot grote vleestomaten!",

  // Komkommer
  "komkommer": "💡 Een komkommer bestaat voor 95% uit water! In de oudheid gebruikten reizigers komkommers als een soort 'eetbare veldfles' om gehydrateerd te blijven tijdens lange tochten.\n\n🥒 Vandaar ook de uitdrukking 'cool as a cucumber' - de binnenkant van een komkommer kan tot 20 graden koeler zijn dan de buitentemperatuur!",

  // Bloemkool
  "bloemkool": "💡 De bladeren rondom de bloemkool zijn er niet voor niets: ze beschermen de witte roosjes tegen zonlicht. Zonder die bladeren zou de bloemkool door de zon geel of bruin verkleuren!\n\n🥬 Er bestaan ook paarse, oranje en groene bloemkoolsoorten. De basis van de populaire 'bloemkoolrijst' is dezelfde bloemkool, geraspt!",

  // Asperges
  "asperges": "💡 Asperges kunnen onder de juiste omstandigheden wel 10 tot 15 centimeter per dag groeien! In het oogstseizoen moeten boeren soms twee keer per dag hetzelfde veld oogsten.\n\n🌱 Het aspergeseizoen in België duurt van half april tot 24 juni (Sint-Jan). Witte asperges groeien onder de grond in duisternis, groene in het zonlicht.",

  // Broccoli
  "broccoli": "💡 Wist je dat je de stam van de broccoli ook kunt eten? Het is zelfs het zoetste gedeelte! Schil de harde buitenkant eraf en snijd de kern in blokjes voor in de soep of wok.\n\n🥦 Broccoli bevat meer vitamine C dan een sinaasappel en is rijk aan sulforafaan, een stof die mogelijk beschermt tegen bepaalde ziekten.",

  // Uien
  "uien": "💡 Uien zijn een van de oudste groenten ter wereld en werden door de oude Egyptenaren aanbeden! De ringen binnenin de ui stonden voor het eeuwige leven en werden zelfs meegegeven in de graven van farao's.\n\n🧅 Tip: Snijd uien onder stromend water of met een nat mes om minder te huilen - de zwavelverbindingen lossen op in water!",

  // Kersen
  "kersen": "💡 Kersen horen bij de rozenfamilie! Een kersenboom heeft gemiddeld 7.000 kersen nodig voor één liter kersensap. Het is dus echt een luxeproduct van de boomgaard!\n\n🍒 Belgische kersen uit de streek rond Sint-Truiden zijn wereldberoemd. Kersen bevatten melatonine, wat kan helpen bij slaapproblemen.",

  // Witloof
  "witloof": "💡 Witloof is het 'Witte Goud' uit Brussel! Het werd per toeval ontdekt in 1830 in een donkere kelder. Een boer had cichoreiwortel vergeten en ontdekte later de witte spruiten.\n\n🥬 Het moet in volledige duisternis groeien, anders wordt het groen en bitter. België is 's werelds grootste producent van witloof!",

  // Spruitjes
  "spruitjes": "💡 Onze nationale trots! Ze heten wereldwijd 'Brussels Sprouts' vanwege de historische teelt rondom Brussel sinds de 13e eeuw. In 1821 werd de naam 'Chou de Bruxelles' officieel vastgelegd in de markten van Sint-Gillis.\n\n🥦 Spruitjes bevatten meer vitamine C dan sinaasappels! Eén plant kan wel 50-100 spruitjes produceren.",

  // Wortelen
  "wortelen": "💡 Wortelen waren oorspronkelijk paars of wit! De oranje kleur is een eerbetoon aan Willem van Oranje, gekweekt door Nederlandse telers in de 17e eeuw. Het is daarmee de eerste 'politieke groente' ter wereld.\n\n🥕 Fun fact: Het eten van te veel wortelen kan je huid tijdelijk oranje kleuren - dit heet 'carotenemie'!",

  // Appels
  "appels": "💡 België heeft meer dan 100 appelrassen! De Jonagold is koning, maar de 'Pomme de Reinette' is een van de oudste rassen, vroeger geliefd aan het Franse hof. \n\n🍎 Een appelboom kan wel 400 appels per seizoen produceren en tot 100 jaar oud worden! In de Noorse mythologie gaven appels de goden eeuwige jeugd.",

  // Aardappelen
  "aardappelen": "💡 België is de wereldkampioen in de export van diepvriesfrietjes! We eten gemiddeld 80kg aardappelen per persoon per jaar.\n\n🥔 Wist je dat Marie Antoinette aardappelbloesems in haar haar droeg om de groente populair te maken bij het Franse volk? Het werkte!",

  // Aardbeien
  "aardbeien": "💡 De aardbei is de enige vrucht met de zaadjes aan de buitenkant - gemiddeld 200 per bes! In de Middeleeuwen werden aardbeien geserveerd op belangrijke staatsbanketten als symbool voor vrede en welvaart.\n\n🍓 De moderne tuinaardbei ontstond in Frankrijk in de 18e eeuw. Een aardbei bevat meer vitamine C dan een sinaasappel!",

  // Prei
  "prei": "💡 Als je prei laat doorgroeien, krijgt hij prachtige grote paarse bloembollen die erg geliefd zijn bij bijen! Keizer Nero at elke dag prei-soep omdat hij geloofde dat het zijn zangstem verbeterde.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 In Wales is prei een nationaal symbool; soldaten droegen het vroeger om zichzelf te herkennen in de strijd.",

  // Extra producten
  "peren": "💡 De Conférence peer, vandaag de populairste in België, werd ontwikkeld in 1885 en won een prijs op een conferentie in Londen - vandaar de naam!\n\n🍐 Peren rijpen van binnenuit. Homerus noemde peren in de Odyssee een 'geschenk van de goden'.",

  "spinazie": "💡 De mythe dat spinazie super veel ijzer bevat komt van een rekenfout! Een onderzoeker plaatste ooit een decimaal verkeerd. Toch was het Catherine de' Medici die spinazie populair maakte in Frankrijk, vandaar de term 'à la Florentine'.\n\n💪 Tip: Eet spinazie met iets zuurs (zoals citroen) om het ijzer beter op te nemen!",

  "pompoen": "💡 De zwaarste pompoen ooit gewogen woog meer dan 1200 kg! Pompoenen werden al 7000 jaar geleden verbouwd in Mexico, lang voor de uitvinding van het wiel.\n\n🎃 De zaden zijn zeer voedzaam en rijk aan zink. Pompoenen zijn voor 90% water en bevatten meer vezels dan boerenkool!",

  // Belgische Klassiekers
  "grondwitloof": "💡 Grondwitloof is het 'witte goud' dat in de volle grond groeit. Het werd per toeval ontdekt tijdens de Belgische Revolutie van 1830 toen boer Jan Lammers zijn cichoreiwortels verborg in een kelder met aarde.\n\n🥬 In de Belgische keuken wordt grondwitloof graag gekaramelliseerd in boter met een vleugje bruine suiker - pure comfort food!",

  "schorseneren": "💡 Schorseneren worden ook wel 'keukenmeidenverdriet' genoemd vanwege het plakkerige melksap bij het schillen. Maar wist je dat ze in de 16e eeuw als medicijn werden gebruikt tegen slangenbeten? Vandaar de naam 'Adderkruid'.\n\n🍳 Tip: Schil ze onder water of met handschoenen. In België worden ze klassiek geserveerd in een romige witte saus.",

  "pastinaak": "💡 Pastinaak was de 'aardappel van de middeleeuwen'! Keizer Tiberius liet ze speciaal uit Germanië importeren omdat ze daar zoeter smaakten door de kou.\n\n🥕 Pastinaak wordt zoeter na de eerste vorst - de kou zet het zetmeel om in suiker. Perfect voor een herfstige puree!",

  "rammenas": "💡 Rammenas werd door de bouwers van de piramides in Egypte gegeten voor kracht en uithoudingsvermogen, samen met uien en knoflook!\n\n🍯 In de Belgische volksgeneeskunde is dit nog steeds een populair huismiddeltje bij verkoudheid (uitgehold met honing).",

  "warmoes": "💡 Warmoes, ook bekend als snijbiet, is een kleurrijke krachtpatser. Aristoteles schreef er al over in de 4e eeuw voor Christus!\n\n🌈 In de Middeleeuwen was warmoes zo populair dat 'warmoesland' de naam was voor moestuinen. Vandaar ook de Warmoesstraat in veel steden!",

  "knolselderij": "💡 Knolselderij is de basis van élke goede Belgische soep. In de Odyssee wordt selderij al genoemd als een plant die groeide op het eiland van de nimf Calypso.\n\n🍲 Klassiek Belgisch: knolselderijpuree met een klontje boter en nootmuskaat. Hemels naast een konijnenbout!",

  // Honing & Bijenproducten
  "honing": "💡 Wist je dat honing de enige voedingsbron is die nooit bederft? Alexander de Grote werd naar verluidt balsemd in honing om zijn lichaam te bewaren.\n\n🐝 Belgische imkers produceren lindehoning, koolzaadhoning, heidehoning en bloemenhoning.",

  "honingraat": "💡 Honingraat is de puurste vorm van honing. De zeshoekige vorm van de raat is wiskundig de meest efficiënte manier om ruimte te benutten - bijen zijn geniale architecten!\n\n🍯 Bij lokale imkers kun je vaak honingraat en stuifmeelkorrels kopen.",

  // Bessen
  "frambozen": "💡 Frambozen zijn technisch gezien geen bessen maar 'samengestelde vruchten'. Volgens de legende waren frambozen oorspronkelijk wit, maar kleurden ze rood toen de nimf Ida zich prikte aan de doorns terwijl ze bessen plukte voor de jonge Jupiter.\n\n🫐 Belgische boeren verkopen frambozen vaak in kleine bakjes via hun automaat of stalletje.",

  "bramen": "💡 Bramen groeien wild in heel België. In de Britse folklore mag je na 11 oktober geen bramen meer plukken omdat de duivel er dan op gespuugd zou hebben (eigenlijk worden ze dan gewoon muf door de vorst).\n\n🍇 Bramenjam is een Belgische klassieker. Combineer bramen met appels voor een heerlijke crumble!",

  "blauwbessen": "💡 Blauwbessen zijn ware superfoods vol antioxidanten! De blauwe kleur komt van anthocyanen, die je hersenen en ogen beschermen.\n\n💙 In België worden blauwbessen vooral geteeld in de Kempen. Ze zijn perfect om te bevriezen - ze verliezen nauwelijks voedingswaarde!",

  // Extra bladgroenten
  "veldsla": "💡 Veldsla, ook wel 'mâche' of 'nüssli' genoemd, is een typische wintergroente die zelfs onder de sneeuw kan groeien! Het heeft een zachte, nootachtige smaak.\n\n🥗 In België wordt veldsla traditioneel gegeten met warme spekjes en een eitje - de warmte laat de blaadjes licht slinken.",

  "eikenbladsla": "💡 Eikenbladsla dankt zijn naam aan de vorm van de bladeren die lijken op eikenbladeren. Het is knapperiger dan kropsla en heeft een mildere smaak.\n\n🥬 Deze slasoort is populair in gemengde salades en houdt langer vers dan gewone kropsla.",

  // Sjalotten
  "sjalotten": "💡 Sjalotten zijn de verfijnde neefjes van de ui! Ze hebben een mildere, zoetere smaak en worden vaak gebruikt in de Franse en Belgische keuken.\n\n🧅 De echte Vlaamse stoofvlees bevat sjalotten in plaats van uien voor een subtielere smaak. Ze karamelliseren prachtig!",

  "default": "🌱 Vers van het land smaakt altijd beter! Door lokaal te kopen steun je niet alleen de boer, maar geniet je ook van meer vitaminen en smaak. Ontdek de seizoensgebonden productdiversiteit van België!"
};


// Product Images
import aardbeien from './assets/aardbeien.jpg';
import potatoes from './assets/product-potatoes.png';
import leek from './assets/product-leek.png';
import pears from './assets/product-pears.png';
import pumpkin from './assets/product-pumpkin.png';
import parsnip from './assets/product-parsnip.png';
import celeriac from './assets/product-celeriac.png';
import broccoli from './assets/product-broccoli.png';
import carrots from './assets/product-carrots.png';
import tomatoes from './assets/product-tomatoes.png';
import salsify from './assets/product-salsify.png';
import blackRadish from './assets/product-black-radish.png';
import chicory from './assets/product-chicory.png';
import blackberries from './assets/product-blackberries.png';

export const SMART_IMAGE_MAP: Record<string, string> = {
  "appels": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400",
  "peren": pears,
  "wortelen": carrots,
  "kaas": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400",
  "melk": "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400",
  "eieren": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400",
  "aardappelen": potatoes,
  "aardbeien": aardbeien, // Local asset
  "kersen": "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400",
  "tomaten": tomatoes,
  "komkommer": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=400",
  "prei": leek,
  "broccoli": broccoli,
  "pompoen": pumpkin,
  "uien": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400",
  "witloof": "/images/witloof.png",
  "spruitjes": "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?auto=format&fit=crop&q=80&w=400",
  "asperges": "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400",
  "spinazie": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400",
  "bloemkool": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=400",
  "druiven": "https://images.unsplash.com/photo-1537640538965-1756e9a43a29?auto=format&fit=crop&q=80&w=400",
  "bessen": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400",
  "frambozen": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400",
  "kool": "https://images.unsplash.com/photo-1550951334-118836ec904f?auto=format&fit=crop&q=80&w=400",

  "bonen": "https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&q=80&w=400",
  "rundvlees": "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400",
  "kip": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400",
  "kipfilet": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400",
  "varkensvlees": "https://images.unsplash.com/photo-1602086389696-ae4a4816e1c0?auto=format&fit=crop&q=80&w=400",
  "sjalot": "https://images.unsplash.com/photo-1589621773682-939de0082645?auto=format&fit=crop&q=80&w=400",
  "courgette": "https://images.unsplash.com/photo-1561856618-cce7c59c3d89?auto=format&fit=crop&q=80&w=400",
  "paprika": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=400",
  "aubergine": "https://images.unsplash.com/photo-1606059522822-63b4ec2d28f0?auto=format&fit=crop&q=80&w=400",
  "radijs": "https://images.unsplash.com/photo-1598030688666-f93e4d78f986?auto=format&fit=crop&q=80&w=400",
  "bieten": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400",
  "rode biet": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400",
  "knolselder": celeriac,
  "pastinaak": parsnip,
  "gehakt": "https://images.unsplash.com/photo-1594968132386-896db5efbb88?auto=format&fit=crop&q=80&w=400",
  "honing": "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400",
  "honingraat": "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400",
  "yoghurt": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400",
  "boter": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400",
  "sla": "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?auto=format&fit=crop&q=80&w=400",
  "salade": "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?auto=format&fit=crop&q=80&w=400",
  "veldsla": "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&q=80&w=400",
  "eikenbladsla": "https://images.unsplash.com/photo-1622206151226-18ca2c958a2f?auto=format&fit=crop&q=80&w=400",
  "grondwitloof": chicory,
  "schorseneren": salsify,
  "rammenas": blackRadish,
  "warmoes": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
  "snijbiet": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
  "knolselderij": celeriac,
  "bramen": blackberries,
  "blauwbessen": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400",

  // Synonyms - map alternative names to same images
  "wortels": carrots, // synonym for wortelen
  "wortel": carrots,
  "ui": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400", // synonym for uien
  "aardappel": potatoes, // synonym for aardappelen
  "appel": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400", // synonym for appels
  "peer": pears, // synonym for peren
  "tomaat": tomatoes, // synonym for tomaten
  "aardbei": aardbeien, // synonym for aardbeien
  "kers": "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400", // synonym for kersen
  "spruit": "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?auto=format&fit=crop&q=80&w=400", // synonym for spruitjes
  "spruitje": "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?auto=format&fit=crop&q=80&w=400",
  "asperge": "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400", // synonym for asperges
  "biet": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", // synonym for bieten
  "framboos": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400", // synonym for frambozen
  "bes": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400", // synonym for bessen
  "druif": "https://images.unsplash.com/photo-1537640538965-1756e9a43a29?auto=format&fit=crop&q=80&w=400", // synonym for druiven
  "boon": "https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&q=80&w=400", // synonym for bonen
  "braam": blackberries // synonym for bramen
};