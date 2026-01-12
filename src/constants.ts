import { TranslationDictionary, Farm, DaySchedule } from './types';
import aardbeienImg from './assets/aardbeien.jpg';

const MOCK_SCHEDULE_1: DaySchedule[] = [
  { day: 'mon', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'tue', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'wed', isOpen: true, openTime: '08:00', closeTime: '12:00' },
  { day: 'thu', isOpen: true, openTime: '08:00', closeTime: '18:00' },
  { day: 'fri', isOpen: true, openTime: '08:00', closeTime: '20:00' },
  { day: 'sat', isOpen: true, openTime: '09:00', closeTime: '16:00' },
  { day: 'sun', isOpen: false, openTime: '00:00', closeTime: '00:00' },
];

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
  filter_fruit: { nl: "Fruit", fr: "Légumes", en: "Fruit", de: "Obst" },
  filter_vegetables: { nl: "Groenten", fr: "Légumes", en: "Vegetables", de: "Gemüse" },
  filter_dairy: { nl: "Zuivel", fr: "Laiterie", en: "Dairy", de: "Molkerei" },
  filter_meat: { nl: "Vlees", fr: "Viande", en: "Meat", de: "Fleisch" },
  filter_eggs: { nl: "Eieren", fr: "Œufs", en: "Eggs", de: "Eier" },
  filter_honey: { nl: "Honing", fr: "Miel", en: "Honey", de: "Honig" },
  filter_nuts: { nl: "Noten", fr: "Noix", en: "Nuts", de: "Nüsse" },
  filter_route: { nl: "Route", fr: "Itinéraire", en: "Route", de: "Route" },
  filter_open_now: { nl: "Nu Open", fr: "Ouvert", en: "Open Now", de: "Jetzt offen" },
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
  phone: { nl: "Telefoonnummer", fr: "Téléphone", en: "Phone Number", de: "Telefonnummer" },
  btn_register_farm: { nl: "+ Nieuwe Boerderij Registreren", fr: "+ Enregistrer une nouvelle ferme", en: "+ Register New Farm", de: "+ Neuen Bauernhof registrieren" },
  faq_costs_q: { nl: "Wat zijn de kosten?", fr: "Quels sont les coûts ?", en: "What are the costs?", de: "Was sind die Kosten?" },
  faq_costs_a: { nl: "Registratie is gratis. Een premium abonnement kost €10/maand of €100/jaar (Bespaar €20).", fr: "L'inscription est gratuite. L'abonnement premium coûte 10 €/mois ou 100 €/an.", en: "Registration is free. Premium subscription is €10/month or €100/year.", de: "Die Registrierung ist kostenlos. Das Premium-Abonnement kostet 10 €/Monat oder 100 €/Jahr." },
  faq_privacy_q: { nl: "Hoe zit het met mijn privacy?", fr: "Et ma vie privée ?", en: "What about my privacy?", de: "Was ist mit meiner Privatsphäre?" },
  faq_privacy_a: { nl: "Wij verkopen nooit uw data aan derden. Al uw gegevens worden beveiligd opgeslagen volgens de GDPR-richtlijnen.", fr: "Nous ne vendons jamais vos données. Conformité RGPD.", en: "We never sell your data. GDPR compliant.", de: "Wir verkaufen Ihre Daten niemals. DSGVO-konform." },
  faq_switch_q: { nl: "Kan ik tussen accounts wisselen?", fr: "Puis-je changer de compte ?", en: "Can I switch accounts?", de: "Kann ich das Konto wechseln?" },
  faq_switch_a: { nl: "Ja, u kunt via het menu eenvoudig schakelen tussen uw rol als boer en als ontdekker zonder opnieuw in te loggen.", fr: "Oui, basculez facilement via le menu.", en: "Yes, switch easily via the menu.", de: "Ja, wechseln Sie einfach über das Menü." },
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
  faq_3_q: { nl: "Hoe vers zijn de producten?", fr: "Quelle is la fraîcheur des produits ?", en: "How fresh are the products?", de: "Wie frisch sind die Produkte?" },
  faq_3_a: { nl: "Boeren bieden producten aan die vaak diezelfde dag nog geoogst zijn. Versheid en smaak staan centraal bij onze Belgische hoeves.", fr: "Les agriculteurs proposent des produits souvent récoltés le jour même. La fraîcheur et le goût sont au cœur de nos fermes belges.", en: "Farmers offer products often harvested the same day. Freshness and taste are key to our Belgian farms.", de: "Die Landwirte bieden Produkte an, die oft am selben Tag geerntet wurden. Frische und Geschmack stehen bei unseren belgischen Höfen im Mittelpunkt." },
  faq_4_q: { nl: "Hoe werkt de route?", fr: "Comment fait l'itinéraire ?", en: "How does the route work?", de: "Wie funktioniert die Route?" },
  faq_4_a: { nl: "Gebruik de route planner op de hoofdpagina. Wij tonen je alle boeren die direct op je weg liggen.", fr: "Utilisez le planificateur d'itinéraire sur la page principale. Nous vous montrons tous les agriculteurs sur votre chemin.", en: "Use the route planner on the main page. We show you all the farmers directly on your way.", de: "Nutzen Sie den Routenplaner auf der Hauptseite. Wir zeigen Ihnen alle Landwirte, die direkt op uw weg liggen." },
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
  login_required_favs: {
    nl: "Log in om je favorieten te bewaren.",
    fr: "Connectez-vous pour enregistrer vos favoris.",
    en: "Log in to save your favorites.",
    de: "Melden Sie sich an, um Ihre Favoriten zu speichern."
  },
  login_for_more: { nl: "Log in voor meer", fr: "Connectez-vous pour plus", en: "Login for more", de: "Anmelden voor meer" },
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
  fact_fresh_from_land: { nl: "Vers van het Land", fr: "Frais de la Terre", en: "Fresh from the Land", de: "Frisch vom Land" },
  fact_default_text: {
    nl: "{product} zijn heerlijk vers en vol smaak! Rechtstreeks van de boer naar jouw bord. Seizoensproducten smaken het best en zijn het gezondst.",
    fr: "{product} sont délicieusement frais et pleins de saveur ! Directement de la ferme à votre assiette. Les produits de saison ont le meilleur goût et sont les plus sains.",
    en: "{product} are deliciously fresh and full of flavor! Straight from the farm to your plate. Seasonal products taste best and are the healthiest.",
    de: "{product} sind köstlich frisch und voller Geschmack! Direkt vom Bauernhof auf Ihren Teller. Saisonale Produkte schmecken am besten und sind am gesündesten."
  },

  // Missing translations from audit
  no_farms_found: { nl: "Geen boerderijen gevonden", fr: "Aucune ferme trouvée", en: "No farms found", de: "Keine Bauernhöfe gefunden" },
  try_different_search: { nl: "Probeer een andere zoekopdracht of filter.", fr: "Essayez une autre recherche ou filtre.", en: "Try a different search or filter.", de: "Versuchen Sie eine andere Suche oder einen anderen Filter." },
  map_service_unavailable: { nl: "Kaart service momenteel niet beschikbaar", fr: "Service de carte momentanément indisponible", en: "Map service currently unavailable", de: "Kartendienst derzeit nicht verfügbar" },
  map_config_problem: { nl: "Er is een probleem met de Maps configuratie.", fr: "Il y a un problème avec la configuration Maps.", en: "There is a problem with the Maps configuration.", de: "Es gibt ein Problem mit der Maps-Konfiguration." },
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
    nl: "Prei is familie van ui en knoflook en zit vol vitamine K, foliumzuur en vezels. Het groene deel is ook eetbaar en gezond. Prei groeit goed in de winter en is een veelzijdige groente voor soepen en stoofpotten.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 Historisch: In Wales is prei een nationaal symbool; soldaten droegen het vroeger om zichzelf te herkennen in de strijd.",
    fr: "Le poireau est de la famille de l'oignon et de l'ail et est riche en vitamine K, acide folique et fibres. La partie verte est également comestible et saine. Le poireau pousse bien en hiver et est un légume polyvalent pour les soupes et les ragoûts.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 Historique : Au Pays de Galles, le poireau est un symbole national ; les soldats le portaient autrefois pour se reconnaître au combat.",
    en: "Leeks are part of the onion and garlic family and are full of vitamin K, folic acid and fiber. The green part is also edible and healthy. Leeks grow well in winter and are a versatile vegetable for soups and stews.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 Historical: In Wales, leeks are a national symbol; soldiers used to wear them to recognize each other in battle.",
    de: "Lauch gehört zur Familie der Zwiebeln und des Knoblauchs und ist voll von Vitamin K, Folsäure und Ballaststoffen. Der grüne Teil ist ebenfalls essbar und gesund. Lauch wächst gut im Winter und ist ein vielseitiges Gemüse für Suppen und Eintöpfe.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 Historisch: In Wales ist Lauch ein nationales Symbol; Soldaten trugen ihn früher, um sich im Kampf zu erkennen."
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
    nl: "Uien worden al meer dan 5000 jaar geteeld en waren in het oude Egypte zelfs betaalmiddel! Ze bevatten krachtige antioxidanten en hebben ontstekingsremmende eigenschappen. De scherpe stoffen die je laten huilen zijn eigenlijk een verdedigingsmechanisme van de plant.\n\n🧅 Tip: Snijd uien onder stromend water of met een natte mes om minder te huilen. De zwavel-verbindingen lossen op in water!",
    fr: "Les oignons sont cultivés depuis plus de 5000 ans et servaient même de monnaie d'échange dans l'Égypte ancienne ! Ils contiennent de puissants antioxydants et ont des propriétés anti-inflammatoires. Les substances piquantes qui font pleurer sont en fait un mécanisme de défense de la plante.\n\n🧅 Astuce : Coupez les oignons sous l'eau courante ou avec un couteau humide pour moins pleurer. Les composés soufrés se dissolvent dans l'eau !",
    en: "Onions have been cultivated for over 5000 years and were even used as currency in ancient Egypt! They contain powerful antioxidants and have anti-inflammatory properties. The sharp substances that make you cry are actually a defense mechanism of the plant.\n\n🧅 Tip: Cut onions under running water or with a wet knife to cry less. The sulfur compounds dissolve in water!",
    de: "Zwiebeln werden seit über 5000 Jahren angebaut und dienten im alten Ägypten sogar als Zahlungsmittel! Sie enthalten starke Antioxidantien und haben entzündungshemmende Eigenschaften. Die scharfen Stoffe, die zum Weinen bringen, sind eigentlich ein Abwehrmechanismus der Pflanze.\n\n🧅 Tipp: Schneiden Sie Zwiebeln unter fließendem Wasser oder mit einem nassen Messer, um weniger zu weinen. Die Schwefelverbindungen lösen sich in Wasser!"
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
    nl: "De zwaarste pompoen ooit gewogen woog meer dan 1200 kg! Pompoenen zijn familie van de komkommer en meloen. De oranje kleur komt door bètacaroteen, dezelfde stof als in wortelen. De zaden zijn zeer voedzaam en rijk aan zink.\n\n🎃 Leuk weetje: Pompoenen zijn voor 90% water en bevatten meer vezels dan boerenkool!",
    fr: "La citrouille la plus lourde jamais pesée faisait plus de 1200 kg ! Les citrouilles font partie de la famille du concombre et du melon. La couleur orange vient du bêta-carotène, la même substance que dans les carottes. Les graines sont très nutritives et riches en zinc.\n\n🎃 Fait amusant : Les citrouilles sont composées à 90% d'eau et contiennent plus de fibres que le chou frisé !",
    en: "The heaviest pumpkin ever weighed over 1200 kg! Pumpkins are related to cucumbers and melons. The orange color comes from beta-carotene, the same substance as in carrots. The seeds are very nutritious and rich in zinc.\n\n🎃 Fun fact: Pumpkins are 90% water and contain more fiber than kale!",
    de: "Der schwerste Kürbis, der je gewogen wurde, wog über 1200 kg! Kürbisse sind mit Gurken und Melonen verwandt. Die orange Farbe kommt von Beta-Carotin, dem gleichen Stoff wie in Karotten. Die Samen sind sehr nahrhaft und reich an Zink.\n\n🎃 Fun Fact: Kürbisse bestehen zu 90% aus Wasser und enthalten mehr Ballaststoffe als Grünkohl!"
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
    nl: "Een komkommer bestaat voor 95% uit water, waardoor het de perfecte dorstlesser is! De binnenkant van een komkommer kan tot 20 graden koeler zijn dan de buitentemperatuur. Vandaar de uitdrukking 'cool as a cucumber'!\n\n🥒 Beautytip: Leg plakjes komkommer op je ogen tegen wallen - de koelte en antioxidanten werken ontspannend!",
    fr: "Un concombre est composé à 95% d'eau, ce qui en fait le parfait désaltérant ! L'intérieur d'un concombre peut être jusqu'à 20 degrés plus frais que la température extérieure. D'où l'expression 'cool as a cucumber' !\n\n🥒 Conseil beauté : Posez des tranches de concombre sur vos yeux contre les cernes - la fraîcheur et les antioxydants ont un effet relaxant !",
    en: "A cucumber is 95% water, making it the perfect thirst quencher! The inside of a cucumber can be up to 20 degrees cooler than the outside temperature. Hence the expression 'cool as a cucumber'!\n\n🥒 Beauty tip: Place cucumber slices on your eyes against puffiness - the coolness and antioxidants have a relaxing effect!",
    de: "Eine Gurke besteht zu 95% aus Wasser, was sie zum perfekten Durstlöscher macht! Das Innere einer Gurke kann bis zu 20 Grad kühler sein als die Außentemperatur. Daher der Ausdruck 'cool wie eine Gurke'!\n\n🥒 Beauty-Tipp: Legen Sie Gurkenscheiben auf die Augen gegen geschwollene Lider - die Kühle und Antioxidantien wirken entspannend!"
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

};


export const INITIAL_FARMS: Farm[] = [
  {
    id: '0',
    name: "Zuivelhoeve De Potterie",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800"
    ],
    lat: 51.1897,
    lng: 3.2156,
    address: "Legeweg 327, 8200 Brugge (Sint-Andries)",
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
    name: "Hoeve 't Groene Veld",
    image: "https://picsum.photos/id/195/800/600",
    images: [
      "https://picsum.photos/id/195/800/600",
      "https://picsum.photos/id/292/800/600",
      "https://picsum.photos/id/486/800/600"
    ],
    lat: 50.8503,
    lng: 4.3517,
    address: "Kerkstraat 12, 1700 Dilbeek",
    phone: "0470 12 34 56",
    schedule: MOCK_SCHEDULE_1,
    joinedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    followerCount: 142,
    products: [
      { id: 'p1', name: 'Aardappelen', available: true, category: 'vegetables', image: '/products/aardappelen.jpg', price: '2.50', unit: 'kg' },
      { id: 'p2', name: 'Eieren', available: true, category: 'eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400', price: '3.00', unit: 'doos (6)' },
      { id: 'p4', name: 'Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: 'l' },
      { id: 'p5', name: 'Prei', available: true, category: 'vegetables', image: '/products/prei.jpg', price: '1.20', unit: 'bussel' },
      { id: 'p6', name: 'Broccoli', available: true, category: 'vegetables', image: '/products/broccoli.png', price: '1.80', unit: 'stuk' },
      { id: 'p11', name: 'Wortelen', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400', price: '1.50', unit: 'bussel' },
      { id: 'p12', name: 'Uien', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400', price: '1.00', unit: 'kg' },
      { id: 'p13', name: 'Pompoen', available: true, category: 'vegetables', image: '/products/pompoen.png', price: '3.00', unit: 'stuk' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString()
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
      { id: 'p9', name: 'Kipfilet', available: true, category: 'meat', image: '/products/kipfilet.jpg', price: '12.00', unit: 'kg' },
      { id: 'p10', name: 'Aardbeien', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=400', price: '4.50', unit: '500g' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    name: 'Biohoeve De Groene Akker',
    address: 'Akkerweg 88, 2800 Mechelen',
    lat: 51.0259,
    lng: 4.4777,
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
    name: 'Zuivelhof De Melkweg',
    address: 'Melkstraat 15, 9000 Gent',
    lat: 51.0543,
    lng: 3.7174,
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
    name: 'Kippenhof Eggcellent',
    address: 'Kippenweg 22, 2800 Mechelen',
    lat: 51.0259,
    lng: 4.4777,
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
    followerCount: 189
  },
  {
    id: '6',
    name: 'Vleeshof De Smaakmaker',
    address: 'Vleesstraat 8, 3000 Leuven',
    lat: 50.8798,
    lng: 4.7005,
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
    name: 'Fruithof Zoete Oogst',
    address: 'Fruitlaan 33, 3500 Hasselt',
    lat: 50.9307,
    lng: 5.3378,
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
      { id: 'p72', name: 'Peren', available: true, category: 'fruit', image: '/products/peren.jpg', price: '3.00', unit: '/kg' },
      { id: 'p73', name: 'Aardbeien', available: true, category: 'fruit', image: '/src/assets/aardbeien.jpg', price: '5.00', unit: '/kg' },
      { id: 'p74', name: 'Frambozen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400', price: '7.00', unit: '/kg' },
      { id: 'p75', name: 'Kersen', available: true, category: 'fruit', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400', price: '6.50', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 421
  },
  {
    id: '8',
    name: 'Groentehof Vers & Gezond',
    address: 'Groenteweg 44, 8000 Brugge',
    lat: 51.2093,
    lng: 3.2247,
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
      { id: 'p85', name: 'Broccoli', available: true, category: 'vegetables', image: '/products/broccoli.png', price: '2.50', unit: '/st.' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 156
  },
  {
    id: '9',
    name: 'Bio Boerderij De Natuurhoeve',
    address: 'Natuurpad 12, 2000 Antwerpen',
    lat: 51.2194,
    lng: 4.4025,
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
      { id: 'p92', name: 'Bio Aardappelen', available: true, category: 'vegetables', image: '/products/aardappelen.jpg', price: '2.20', unit: '/kg' },
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
      { id: 'p103', name: 'Aardbeien', available: true, category: 'fruit', image: '/src/assets/aardbeien.jpg', price: '4.80', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 198
  },
  {
    id: '11',
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
      { id: 'p111', name: 'Goudse Kaas', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400', price: '9.50', unit: '/kg' },
      { id: 'p112', name: 'Brie', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&q=80&w=400', price: '12.00', unit: '/kg' },
      { id: 'p113', name: 'Verse Melk', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', price: '1.30', unit: '/liter' },
      { id: 'p114', name: 'Room', available: true, category: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400', price: '3.50', unit: '/liter' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 334
  },
  {
    id: '12',
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
      { id: 'p121', name: 'Pompoenen', available: true, category: 'vegetables', image: '/products/pompoen.png', price: '3.00', unit: '/st.' },
      { id: 'p122', name: 'Courgettes', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1561856618-cce7c59c3d89?auto=format&fit=crop&q=80&w=400', price: '2.20', unit: '/kg' },
      { id: 'p123', name: 'Uien', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400', price: '1.80', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 167
  },
  {
    id: '13',
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
      { id: 'p135', name: 'Kippenvlees', available: true, category: 'meat', image: '/products/kipfilet.jpg', price: '11.00', unit: '/kg' }
    ],
    paymentMethods: ['cash', 'payconiq'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 512
  },
  {
    id: '14',
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
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
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
      { id: 'p183', name: 'Aardappelen', available: true, category: 'vegetables', image: '/products/aardappelen.jpg', price: '2.20', unit: '/kg' }
    ],
    paymentMethods: ['cash'],
    lastStockUpdate: new Date().toISOString(),
    followerCount: 421
  },
  {
    id: '19',
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
    id: '20',
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
    id: '21',
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
    id: '22',
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
    id: '23',
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
  "spruitjes": "💡 Onze nationale trots! Ze heten wereldwijd 'Brussels Sprouts' vanwege de historische teelt rondom Brussel sinds de 13e eeuw.\n\n🥦 Spruitjes bevatten meer vitamine C dan sinaasappels! Eén plant kan wel 50-100 spruitjes produceren. Moderne rassen zijn veel minder bitter dan vroeger.",

  // Wortelen
  "wortelen": "💡 Wortelen waren oorspronkelijk paars of wit! De oranje kleur is een eerbetoon aan Willem van Oranje, gekweekt door Nederlandse telers in de 17e eeuw als eerbetoon aan het Huis van Oranje.\n\n🥕 Fun fact: Het eten van te veel wortelen kan je huid tijdelijk oranje kleuren - dit heet 'carotenemie'!",

  // Appels
  "appels": "💡 België heeft meer dan 100 appelrassen! De Jonagold is koning, maar de Belgica is de lokale ster. De Jonagold werd ontwikkeld in New York maar groeide uit tot de populairste Belgische appel.\n\n🍎 Een appelboom kan wel 400 appels per seizoen produceren en tot 100 jaar oud worden!",

  // Aardappelen
  "aardappelen": "💡 België is de wereldkampioen in de export van diepvriesfrietjes! We eten gemiddeld 80kg aardappelen per persoon per jaar.\n\n🥔 Aardappelen hebben hun oorsprong in Zuid-Amerika. In de 18e eeuw hielp de aardappel hongersnood bestrijden in Europa en werd hij een basisvoedsel voor miljoenen mensen.",

  // Aardbeien
  "aardbeien": "💡 De aardbei is de enige vrucht met de zaadjes aan de buitenkant - gemiddeld 200 per bes! Technisch gezien is de aardbei geen bes maar een 'schijnvrucht'.\n\n🍓 De moderne tuinaardbei ontstond in Frankrijk in de 18e eeuw. Een aardbei bevat meer vitamine C dan een sinaasappel!",

  // Prei
  "prei": "💡 Als je prei laat doorgroeien, krijgt hij prachtige grote paarse bloembollen die erg geliefd zijn bij bijen! Het groene deel is ook eetbaar en gezond.\n\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 In Wales is prei een nationaal symbool; soldaten droegen het vroeger om zichzelf te herkennen in de strijd.",

  // Extra producten
  "peren": "💡 De Conférence peer, vandaag de populairste in België, werd ontwikkeld in 1885 en won een prijs op een conferentie in Londen - vandaar de naam!\n\n🍐 Peren rijpen van binnenuit, dus wanneer de buitenkant zacht is, is de kern vaak al te rijp. Bewaar peren apart van appels!",

  "spinazie": "💡 De mythe dat spinazie super veel ijzer bevat komt van een rekenfout! Een onderzoeker plaatste ooit een decimaal verkeerd. Toch blijft het een superfood vol vitaminen.\n\n💪 Tip: Eet spinazie met iets zuurs (zoals citroen) om het ijzer beter op te nemen!",

  "pompoen": "💡 De zwaarste pompoen ooit gewogen woog meer dan 1200 kg! Pompoenen zijn familie van de komkommer en meloen.\n\n🎃 De zaden zijn zeer voedzaam en rijk aan zink. Pompoenen zijn voor 90% water en bevatten meer vezels dan boerenkool!",

  // Belgische Klassiekers
  "grondwitloof": "💡 Grondwitloof is het 'witte goud' dat in de volle grond groeit, in tegenstelling tot het witloof dat in bakken wordt gekweekt. Het heeft een stevigere structuur en intenser bittere smaak.\n\n🥬 In de Belgische keuken wordt grondwitloof graag gekaramelliseerd in boter met een vleugje bruine suiker - pure comfort food!",

  "schorseneren": "💡 Schorseneren worden ook wel 'keukenmeidenverdriet' genoemd. Waarom? Bij het schillen komt er een plakkerig melksap vrij dat bijna niet van je handen af te krijgen is!\n\n🍳 Tip: Schil ze onder water of met handschoenen. In België worden ze klassiek geserveerd in een romige witte saus.",

  "pastinaak": "💡 Pastinaak was de 'aardappel van de middeleeuwen'! Voordat de aardappel uit Amerika kwam, was dit de basis van vele Europese gerechten. Het heeft een zoete, nootachtige smaak.\n\n🥕 Pastinaak wordt zoeter na de eerste vorst - de kou zet het zetmeel om in suiker. Perfect voor een herfstige puree!",

  "rammenas": "💡 Rammenas (zwarte radijs) werd vroeger gebruikt als natuurlijke hoestsiroop! Je snijdt de kop eraf, holt hem uit, vult met honing en laat een nacht staan. De siroop die eruit komt werkt verzachtend.\n\n🍯 In de Belgische volksgeneeskunde is dit nog steeds een populair huismiddeltje bij verkoudheid.",

  "warmoes": "💡 Warmoes, ook bekend als snijbiet, is een kleurrijke krachtpatser uit de Belgische groentetuin. De felgekleurde stelen (rood, geel, oranje) zijn niet alleen mooi maar ook eetbaar!\n\n🌈 In de Middeleeuwen was warmoes zo populair dat 'warmoesland' de naam was voor moestuinen. Vandaar ook de Warmoesstraat in veel steden!",

  "knolselderij": "💡 Knolselderij is de basis van élke goede Belgische soep en bouillon! Deze lelijke knol met zijn ruw uiterlijk verbergt een zachte, nootachtige smaak die diepte geeft aan stoofpotten.\n\n🍲 Klassiek Belgisch: knolselderijpuree met een klontje boter en nootmuskaat. Hemels naast een konijnenbout!",

  // Honing & Bijenproducten
  "honing": "💡 Wist je dat honing de enige voedingsbron is die nooit bederft? Er is honing gevonden in Egyptische graven van duizenden jaren oud die nog steeds eetbaar was!\n\n🐝 Belgische imkers produceren lindehoning, koolzaadhoning, heidehoning en bloemenhoning. Elke soort heeft een unieke smaak afhankelijk van waar de bijen foerageren.",

  "honingraat": "💡 Honingraat is de puurste vorm van honing - rechtstreeks uit de bijenkorf! De wasstructuur bevat propolis en stuifmeel, waardoor het als een natuurlijke superfood wordt beschouwd.\n\n🍯 Bij lokale imkers kun je vaak honingraat en stuifmeelkorrels kopen. Perfect op toast of in een kaasplankje!",

  // Bessen
  "frambozen": "💡 Frambozen zijn technisch gezien geen bessen maar 'samengestelde vruchten' - elke bolletje is een apart vruchtje! Ze zijn extreem teer en moeten binnen 2 dagen gegeten worden.\n\n🫐 Belgische boeren verkopen frambozen vaak in kleine bakjes via hun automaat of stalletje. Vers geplukt smaken ze het best!",

  "bramen": "💡 Bramen groeien wild in heel België langs bosranden en heggen. In de herfst kun je ze gratis plukken! Let op: na 1 oktober zouden ze volgens de folklore niet meer mogen geplukt worden.\n\n🍇 Bramenjam is een Belgische klassieker. Combineer bramen met appels voor een heerlijke crumble!",

  "blauwbessen": "💡 Blauwbessen zijn ware superfoods vol antioxidanten! De blauwe kleur komt van anthocyanen, die je hersenen en ogen beschermen.\n\n💙 In België worden blauwbessen vooral geteeld in de Kempen. Ze zijn perfect om te bevriezen - ze verliezen nauwelijks voedingswaarde!",

  // Extra bladgroenten
  "veldsla": "💡 Veldsla, ook wel 'mâche' of 'nüssli' genoemd, is een typische wintergroente die zelfs onder de sneeuw kan groeien! Het heeft een zachte, nootachtige smaak.\n\n🥗 In België wordt veldsla traditioneel gegeten met warme spekjes en een eitje - de warmte laat de blaadjes licht slinken.",

  "eikenbladsla": "💡 Eikenbladsla dankt zijn naam aan de vorm van de bladeren die lijken op eikenbladeren. Het is knapperiger dan kropsla en heeft een mildere smaak.\n\n🥬 Deze slasoort is populair in gemengde salades en houdt langer vers dan gewone kropsla.",

  // Sjalotten
  "sjalotten": "💡 Sjalotten zijn de verfijnde neefjes van de ui! Ze hebben een mildere, zoetere smaak en worden vaak gebruikt in de Franse en Belgische keuken.\n\n🧅 De echte Vlaamse stoofvlees bevat sjalotten in plaats van uien voor een subtielere smaak. Ze karamelliseren prachtig!",

  "default": "🌱 Vers van het land smaakt altijd beter! Door lokaal te kopen steun je niet alleen de boer, maar geniet je ook van meer vitaminen en smaak. Ontdek de seizoensgebonden productdiversiteit van België!"
};


export const SMART_IMAGE_MAP: Record<string, string> = {
  "appels": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400",
  "peren": "/products/peren.jpg",
  "wortelen": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400",
  "kaas": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400",
  "melk": "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400",
  "eieren": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400",
  "aardappelen": "/products/aardappelen.jpg",
  "aardbeien": aardbeienImg,
  "kersen": "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=400",
  "tomaten": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
  "komkommer": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=400",
  "prei": "/products/prei.jpg",
  "broccoli": "/products/broccoli.png",
  "pompoen": "/products/pompoen.png",
  "uien": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400",
  "witloof": "/products/witloof.png",
  "spruitjes": "/products/spruitjes.jpg",
  "asperges": "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400",
  "spinazie": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400",
  "bloemkool": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=400",
  "druiven": "https://images.unsplash.com/photo-1537640538965-1756e9a43a29?auto=format&fit=crop&q=80&w=400",
  "bessen": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400",
  "frambozen": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400",
  "kool": "https://images.unsplash.com/photo-1550951334-118836ec904f?auto=format&fit=crop&q=80&w=400",

  "bonen": "https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&q=80&w=400",
  "rundvlees": "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=400",
  "kip": "/products/kipfilet.jpg",
  "kipfilet": "/products/kipfilet.jpg",
  "varkensvlees": "https://images.unsplash.com/photo-1602086389696-ae4a4816e1c0?auto=format&fit=crop&q=80&w=400",
  "sjalot": "https://images.unsplash.com/photo-1589621773682-939de0082645?auto=format&fit=crop&q=80&w=400",
  "courgette": "https://images.unsplash.com/photo-1561856618-cce7c59c3d89?auto=format&fit=crop&q=80&w=400",
  "paprika": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=400",
  "aubergine": "https://images.unsplash.com/photo-1606059522822-63b4ec2d28f0?auto=format&fit=crop&q=80&w=400",
  "radijs": "https://images.unsplash.com/photo-1598030688666-f93e4d78f986?auto=format&fit=crop&q=80&w=400",
  "bieten": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400",
  "rode biet": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400",
  "knolselder": "https://images.unsplash.com/photo-1629739566373-d5d4d38864d7?auto=format&fit=crop&q=80&w=400",
  "pastinaak": "https://images.unsplash.com/photo-1596452292671-5509a25b290d?auto=format&fit=crop&q=80&w=400",
  "gehakt": "https://images.unsplash.com/photo-1594968132386-896db5efbb88?auto=format&fit=crop&q=80&w=400",
  "honing": "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400",
  "honingraat": "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=400",
  "yoghurt": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400",
  "boter": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400",
  "sla": "https://images.unsplash.com/photo-1556801712-95c065f49673?auto=format&fit=crop&q=80&w=400",
  "salade": "https://images.unsplash.com/photo-1556801712-95c065f49673?auto=format&fit=crop&q=80&w=400",
  "veldsla": "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&q=80&w=400",
  "eikenbladsla": "https://images.unsplash.com/photo-1622206151226-18ca2c958a2f?auto=format&fit=crop&q=80&w=400",
  "grondwitloof": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=400",
  "schorseneren": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400",
  "rammenas": "https://images.unsplash.com/photo-1592394533824-9436d7d25d42?auto=format&fit=crop&q=80&w=400",
  "warmoes": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
  "snijbiet": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
  "knolselderij": "https://images.unsplash.com/photo-1629739566373-d5d4d38864d7?auto=format&fit=crop&q=80&w=400",
  "bramen": "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400",
  "blauwbessen": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=400"
};