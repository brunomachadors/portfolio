export const projectStyles: Record<string, string> = {
  AdventurersGuild: 'border-[#D6B06A] border-8 bg-[#F6E7C8] text-[#2F190F]',
  DungeonTrack: 'border-[#7c2b34] border-8 bg-[#efe1c2] text-[#3a2a18]',
  Petsauro: 'border-green-800 border-8 bg-gray-100 text-green-800',
  Playground: 'border-gray-100 border-8 bg-gray-800 text-gray-100',
  FoodHunter: 'border-black border-8 bg-orange-500 text-black',
};

export type ProjectStyle = keyof typeof projectStyles;

export const defaultProjectStyle = 'border-gray-400 text-gray-400';
