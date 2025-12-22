
import { GameType, LotteryResult } from './types';

export const LATEST_RESULTS: LotteryResult[] = [
  {
    id: '1',
    game: GameType.EUROMILLONES,
    date: 'Viernes, 24 de Mayo 2024',
    numbers: [5, 12, 23, 44, 48],
    stars: [8, 9],
    jackpot: '130.000.000 €',
    isOfficial: true
  },
  {
    id: '2',
    game: GameType.PRIMITIVA,
    date: 'Jueves, 23 de Mayo 2024',
    numbers: [2, 14, 21, 33, 45, 49],
    reintegro: 4,
    joker: '12456',
    jackpot: '5,4 M€',
    isOfficial: true
  },
  {
    id: '3',
    game: GameType.BONOLOTO,
    date: 'Miércoles, 22 de Mayo 2024',
    numbers: [3, 14, 22, 35, 41, 48],
    complementary: 7,
    reintegro: 2,
    jackpot: '400 mil €',
    isOfficial: true
  },
  {
    id: '4',
    game: GameType.EL_GORDO,
    date: 'Domingo, 19 de Mayo 2024',
    numbers: [9, 18, 27, 36, 45],
    reintegro: 2,
    jackpot: '8 M€',
    isOfficial: true
  }
];

export const UPCOMING_DRAWS = [
  { game: GameType.PRIMITIVA, jackpot: '5,4 M€', day: 'Jueves', color: 'bg-primary' },
  { game: GameType.BONOLOTO, jackpot: '400 mil €', day: 'Diario', color: 'bg-yellow-400' },
  { game: GameType.EL_GORDO, jackpot: '8 M€', day: 'Domingo', color: 'bg-red-500' },
  { game: GameType.EURODREAMS, jackpot: '20.000€/mes', day: 'Lunes', color: 'bg-blue-500' },
];
