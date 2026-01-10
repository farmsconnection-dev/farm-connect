import { TranslationDictionary, Farm, DaySchedule } from './types';

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
  { month: 'Januari', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes'] },
  { month: 'Februari', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes'] },
  { month: 'Maart', items: ['Appels', 'Prei', 'Wortelen', 'Uien', 'Witloof'] },
  { month: 'April', items: ['Aardbeien', 'Prei', 'Broccoli', 'Wortelen', 'Spinazie', 'Asperges'] },
  { month: 'Mei', items: ['Aardbeien', 'Prei', 'Broccoli', 'Wortelen', 'Spinazie', 'Asperges'] },
  { month: 'Juni', items: ['Aardbeien', 'Kersen', 'Tomaten', 'Komkommer', 'Asperges', 'Bloemkool'] },
  { month: 'Juli', items: ['Aardbeien', 'Kersen', 'Tomaten', 'Komkommer'] },
  { month: 'Augustus', items: ['Appels', 'Peren', 'Tomaten', 'Komkommer'] },
  { month: 'September', items: ['Appels', 'Peren', 'Pompoen', 'Uien'] },
  { month: 'Oktober', items: ['Appels', 'Peren', 'Pompoen', 'Uien', 'Prei', 'Witloof'] },
  { month: 'November', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Prei', 'Witloof', 'Spruitjes'] },
  { month: 'December', items: ['Appels', 'Aardappelen', 'Wortelen', 'Uien', 'Witloof', 'Spruitjes'] },
];

export const MONTHS = [
  'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
  'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
];

export const FALLBACK_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&q=80";

export const PRODUCT_FACTS: Record<string, string> = {
  "wortelen": "Wortelen waren vroeger paars; de oranje kleur is een Nederlands eerbetoon uit de 17e eeuw.",
  "aardappelen": "België is de grootste exporteur van diepgevroren frietjes ter wereld. We eten gemiddeld 80kg aardappelen per persoon!",
  "appels": "België heeft 100+ rassen. De Jonagold is een kruising tussen de Golden Delicious en Jonathan.",
  "aardbeien": "De aardbei is eigenlijk geen bes, maar een 'schijnvrucht'. De pitjes aan de buitenkant zijn de echte vruchtjes!",
  "uien": "Uien worden al meer dan 5000 jaar geteeld. In het oude Egypte werden ze zelfs als betaalmiddel gebruikt.",
  "witloof": "Ontdekt in 1830 in een Brusselse kelder. Het moet in het pikkedonker groeien, anders wordt het bitter.",
  "spruitjes": "Onze nationale trots! Ze heten wereldwijd 'Brussels Sprouts' vanwege de historische teelt rond Brussel.",
  "prei": "Als je prei laat bloeien, krijgt hij prachtige grote paarse bloembollen die erg geliefd zijn bij bijen.",
  "peren": "De Conférence peer is de populairste peer in België en werd al in 1885 tentoongesteld in Londen.",
  "asperges": "Het witte goud! Ze kunnen bij warm weer tot wel 10 centimeter per dag groeien.",
  "spinazie": "Spinazie bevat veel ijzer, maar Popeye dankte zijn kracht eigenlijk aan een rekenfout in een oud voedingsrapport!",
  "kersen": "Echte Belgische kersen herken je aan hun dieprode kleur en stevige beet.",
  "broccoli": "Broccoli bevat meer vitamine C dan een sinaasappel! Het is een echte superfood van bij ons.",
  "tomaten": "Tomaten zijn botanisch gezien fruit. Er bestaan wereldwijd meer dan 10.000 verschillende soorten!",
  "komkommer": "Een komkommer bestaat voor 95% uit water, waardoor het de perfecte dorstlesser is op een warme dag.",
  "bloemkool": "De witte kleur van bloemkool komt doordat de bladeren de kool beschermen tegen zonlicht, anders zou hij geel worden.",
  "pompoen": "De zwaarste pompoen ooit gewogen woog meer dan 1000kg! Ze zijn familie van de komkommer en meloen.",
  "default": "Vers van het land smaakt altijd beter! Door lokaal te kopen steun je niet alleen de boer, maar geniet je ook van meer vitaminen en smaak."
};


export const SMART_IMAGE_MAP: Record<string, string> = {
  "appels": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400",
  "peren": "/products/peren.jpg",
  "wortelen": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400",
  "kaas": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400",
  "melk": "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400",
  "eieren": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400",
  "aardappelen": "/products/aardappelen.jpg",
  "aardbeien": "/src/assets/aardbeien.jpg",
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
  "sla": "https://images.unsplash.com/photo-1622206151226-18ca2c958a2f?auto=format&fit=crop&q=80&w=400",
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
  "knolselder": "https://images.unsplash.com/photo-1593258693034-78ee0e10c6b0?auto=format&fit=crop&q=80&w=400",
  "pastinaak": "https://images.unsplash.com/photo-1640726335912-5f6b8e40c01e?auto=format&fit=crop&q=80&w=400"
};