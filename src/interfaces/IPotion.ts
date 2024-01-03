export interface IPotion {
  attributes: IPotionProperties;
  id: string;
  links: {
    self: string;
  };
  type: string;
}

interface IPotionProperties {
  characteristics: string;
  difficulty: string;
  effect: string;
  image: string;
  ingredients: string;
  inventors: string;
  manufacturers: string;
  name: string;
  side_effects: string;
  slug: string;
  time: string;
  wiki: string;
}
