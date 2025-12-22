
export enum GameType {
  PRIMITIVA = 'La Primitiva',
  BONOLOTO = 'Bonoloto',
  EUROMILLONES = 'Euromillones',
  EL_GORDO = 'El Gordo',
  LOTERIA_NACIONAL = 'Lotería Nacional',
  EURODREAMS = 'EuroDreams',
  NAVIDAD = 'Lotería de Navidad',
  NINO = 'Lotería del Niño'
}

export interface LotteryResult {
  id: string;
  game: GameType;
  date: string;
  numbers: number[];
  stars?: number[];
  reintegro?: number;
  complementary?: number;
  joker?: string;
  jackpot: string;
  isOfficial: boolean;
}

export interface CheckHistoryItem {
  id: string;
  date: string;
  game: GameType;
  numbers: number[];
  winAmount?: string;
  isWinner: boolean;
}
