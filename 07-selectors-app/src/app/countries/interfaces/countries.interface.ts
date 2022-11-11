export interface CountrySmall {
    name: Name;
    cca3: string;
    capital: string[];
    altSpellings: string[];
}

interface Name {
    common: string;
    official: string;
}

export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: Flags;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
  }
  
interface PostalCode {
    format: string;
    regex: string;
}

interface CapitalInfo {
    latlng: number[];
}

interface Flags {
    png: string;
    svg: string;
}

interface Car {
    signs: string[];
    side: string;
}

interface Gini {
    '2019': number;
}

interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

interface Demonyms {
    eng: Eng;
    fra: Eng;
}

interface Eng {
    f: string;
    m: string;
}

interface Translations {
    ara: Aym;
    bre: Aym;
    ces: Aym;
    cym: Aym;
    deu: Aym;
    est: Aym;
    fin: Aym;
    fra: Aym;
    hrv: Aym;
    hun: Aym;
    ita: Aym;
    jpn: Aym;
    kor: Aym;
    nld: Aym;
    per: Aym;
    pol: Aym;
    por: Aym;
    rus: Aym;
    slk: Aym;
    spa: Aym;
    swe: Aym;
    tur: Aym;
    urd: Aym;
    zho: Aym;
}

interface Languages {
    aym: string;
    que: string;
    spa: string;
}

interface Idd {
    root: string;
    suffixes: string[];
}

interface Currencies {
    PEN: PEN;
}

interface PEN {
    name: string;
    symbol: string;
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface NativeName {
    aym: Aym;
    que: Aym;
    spa: Aym;
}

interface Aym {
    official: string;
    common: string;
}
