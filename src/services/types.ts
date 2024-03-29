

export interface ICharacter {
    birth: string,
    death: string,
    gender: string,
    hair: string,
    height: string,
    name: string,
    race: string,
    realm: string,
    spouse: string,
    wikiUrl: string,
    _id: string
};

export interface ICharacterSmall {
    name: string,
    race: string,
    wikiUrl: string,
    _id: string
};

export interface IResponseCharacter {
    docs: ICharacter[]
    pages: string
    page: string
    limit: string
    total: string
};

export interface IOption {
    value: number
    name: string
};