export const projectStyles: Record<string, string> = {
  BugBuster: 'border-white border-8 text-white',
  Petsauro: 'border-green-800 border-8 bg-gray-100 text-green-800',
  Playground: 'border-gray-100 border-8 bg-gray-800 text-gray-100',
  Pokedex: 'border-white border-8 bg-red-700 text-white',
  FoodHunter: 'border-black border-8 bg-orange-500 text-black',
};

export type ProjectStyle = keyof typeof projectStyles;

export const defaultProjectStyle = 'border-gray-400 text-gray-400';
