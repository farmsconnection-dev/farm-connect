// Product name translations
export const PRODUCT_TRANSLATIONS: Record<string, { nl: string; fr: string; en: string; de: string }> = {
    'Appels': { nl: 'Appels', fr: 'Pommes', en: 'Apples', de: 'Äpfel' },
    'Aardappelen': { nl: 'Aardappelen', fr: 'Pommes de terre', en: 'Potatoes', de: 'Kartoffeln' },
    'Wortelen': { nl: 'Wortelen', fr: 'Carottes', en: 'Carrots', de: 'Karotten' },
    'Tomaten': { nl: 'Tomaten', fr: 'Tomates', en: 'Tomatoes', de: 'Tomaten' },
    'Uien': { nl: 'Uien', fr: 'Oignons', en: 'Onions', de: 'Zwiebeln' },
    'Prei': { nl: 'Prei', fr: 'Poireaux', en: 'Leeks', de: 'Lauch' },
    'Peren': { nl: 'Peren', fr: 'Poires', en: 'Pears', de: 'Birnen' },
    'Spruitjes': { nl: 'Spruitjes', fr: 'Choux de Bruxelles', en: 'Brussels Sprouts', de: 'Rosenkohl' },
    'Asperges': { nl: 'Asperges', fr: 'Asperges', en: 'Asparagus', de: 'Spargel' },
    'Witloof': { nl: 'Witloof', fr: 'Endives', en: 'Belgian Endive', de: 'Chicorée' },
    'Broccoli': { nl: 'Broccoli', fr: 'Brocoli', en: 'Broccoli', de: 'Brokkoli' },
    'Pompoen': { nl: 'Pompoen', fr: 'Citrouille', en: 'Pumpkin', de: 'Kürbis' },
    'Aardbeien': { nl: 'Aardbeien', fr: 'Fraises', en: 'Strawberries', de: 'Erdbeeren' },
    'Sla': { nl: 'Sla', fr: 'Laitue', en: 'Lettuce', de: 'Salat' },
    'Kersen': { nl: 'Kersen', fr: 'Cerises', en: 'Cherries', de: 'Kirschen' },
    'Pruimen': { nl: 'Pruimen', fr: 'Prunes', en: 'Plums', de: 'Pflaumen' },
    'Frambozen': { nl: 'Frambozen', fr: 'Framboises', en: 'Raspberries', de: 'Himbeeren' },
    'Blauwe bessen': { nl: 'Blauwe bessen', fr: 'Myrtilles', en: 'Blueberries', de: 'Blaubeeren' },
    'Courgette': { nl: 'Courgette', fr: 'Courgette', en: 'Zucchini', de: 'Zucchini' },
    'Komkommer': { nl: 'Komkommer', fr: 'Concombre', en: 'Cucumber', de: 'Gurke' },
    'Paprika': { nl: 'Paprika', fr: 'Poivron', en: 'Bell Pepper', de: 'Paprika' },
    'Radijs': { nl: 'Radijs', fr: 'Radis', en: 'Radish', de: 'Radieschen' },
    'Spinazie': { nl: 'Spinazie', fr: 'Épinards', en: 'Spinach', de: 'Spinat' },
    'Boerenkool': { nl: 'Boerenkool', fr: 'Chou frisé', en: 'Kale', de: 'Grünkohl' },
    'Rode kool': { nl: 'Rode kool', fr: 'Chou rouge', en: 'Red Cabbage', de: 'Rotkohl' },
    'Witte kool': { nl: 'Witte kool', fr: 'Chou blanc', en: 'White Cabbage', de: 'Weißkohl' },
    'Bloemkool': { nl: 'Bloemkool', fr: 'Chou-fleur', en: 'Cauliflower', de: 'Blumenkohl' },
    'Knolselder': { nl: 'Knolselder', fr: 'Céleri-rave', en: 'Celeriac', de: 'Knollensellerie' },
    'Pastinaak': { nl: 'Pastinaak', fr: 'Panais', en: 'Parsnip', de: 'Pastinake' },
    'Raapjes': { nl: 'Raapjes', fr: 'Navets', en: 'Turnips', de: 'Rüben' },
    'Knoflook': { nl: 'Knoflook', fr: 'Ail', en: 'Garlic', de: 'Knoblauch' },
    'Sjalotten': { nl: 'Sjalotten', fr: 'Échalotes', en: 'Shallots', de: 'Schalotten' }
};

// Month translations
export const MONTH_TRANSLATIONS: Record<string, { nl: string; fr: string; en: string; de: string }> = {
    'Januari': { nl: 'Januari', fr: 'Janvier', en: 'January', de: 'Januar' },
    'Februari': { nl: 'Februari', fr: 'Février', en: 'February', de: 'Februar' },
    'Maart': { nl: 'Maart', fr: 'Mars', en: 'March', de: 'März' },
    'April': { nl: 'April', fr: 'Avril', en: 'April', de: 'April' },
    'Mei': { nl: 'Mei', fr: 'Mai', en: 'May', de: 'Mai' },
    'Juni': { nl: 'Juni', fr: 'Juin', en: 'June', de: 'Juni' },
    'Juli': { nl: 'Juli', fr: 'Juillet', en: 'July', de: 'Juli' },
    'Augustus': { nl: 'Augustus', fr: 'Août', en: 'August', de: 'August' },
    'September': { nl: 'September', fr: 'Septembre', en: 'September', de: 'September' },
    'Oktober': { nl: 'Oktober', fr: 'Octobre', en: 'October', de: 'Oktober' },
    'November': { nl: 'November', fr: 'Novembre', en: 'November', de: 'November' },
    'December': { nl: 'December', fr: 'Décembre', en: 'December', de: 'Dezember' }
};

// Helper function to translate product names
export const translateProduct = (productName: string, lang: 'nl' | 'fr' | 'en' | 'de'): string => {
    return PRODUCT_TRANSLATIONS[productName]?.[lang] || productName;
};

// Helper function to translate month names
export const translateMonth = (monthName: string, lang: 'nl' | 'fr' | 'en' | 'de'): string => {
    return MONTH_TRANSLATIONS[monthName]?.[lang] || monthName;
};
