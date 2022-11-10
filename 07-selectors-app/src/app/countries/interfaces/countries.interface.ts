export interface CountrySmall {
    name: Name;
    cca3: string;
    capital: string[];
    altSpellings: string[];
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface NativeName {
    hun?: NativeNameType;
    hrv?: NativeNameType;
    dan?: NativeNameType;
    fao?: NativeNameType;
    swe?: NativeNameType;
    spa?: NativeNameType;
    nld?: NativeNameType;
    deu?: NativeNameType;
    bos?: NativeNameType;
    srp?: NativeNameType;
    mkd?: NativeNameType;
    cnr?: NativeNameType;
    cat?: NativeNameType;
    ukr?: NativeNameType;
    fra?: NativeNameType;
    ltz?: NativeNameType;
    nno?: NativeNameType;
    nob?: NativeNameType;
    smi?: NativeNameType;
    ron?: NativeNameType;
    ita?: NativeNameType;
    eng?: NativeNameType;
    slv?: NativeNameType;
    mlt?: NativeNameType;
    fin?: NativeNameType;
    sqi?: NativeNameType;
    gle?: NativeNameType;
    lat?: NativeNameType;
    nrf?: NativeNameType;
    bul?: NativeNameType;
    pol?: NativeNameType;
    isl?: NativeNameType;
    bel?: NativeNameType;
    rus?: NativeNameType;
    lav?: NativeNameType;
    bar?: NativeNameType;
    est?: NativeNameType;
    nfr?: NativeNameType;
    gsw?: NativeNameType;
    roh?: NativeNameType;
    por?: NativeNameType;
    ell?: NativeNameType;
    tur?: NativeNameType;
    ces?: NativeNameType;
    slk?: NativeNameType;
    glv?: NativeNameType;
    lit?: NativeNameType;
    nor?: NativeNameType;
}

interface NativeNameType {
    official: string;
    common: string;
}
