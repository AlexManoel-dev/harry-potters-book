export interface ICharacter {
  attributes: ICharacterProperties;
  id: string;
  links: {
    self: string;
  };
  type: string;
}

interface ICharacterProperties {
  alias_names: any[];
  animagus: string;
  blood_status: string;
  boggart:	string;
  born: string;
  died: string;
  eye_color: string;
  family_member: any[];
  gender: string;
  hair_color: string;
  height: string;
  house: string;
  image: string;
  jobs: any[];
  name: string;
  nationality: string;
  patronus: string;
  romances: any[];
  skin_color: string;
  slug: string;
  species: string;
  titles: any[];
  wand: any[];
  weight: string;
  wiki: string;
}
