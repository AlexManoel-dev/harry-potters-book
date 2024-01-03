export interface ISpell {
  attributes: ISpellProperties;
  id: string;
  links: {
    self: string;
  };
  type: string;
}

interface ISpellProperties {
  category: string;
  creator: string;
  effect: string;
  hand: string;
  image: string;
  incantation: string;
  light: string;
  name: string;
  slug: string;
  wiki: string;
}
