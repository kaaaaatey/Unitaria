// Where each house sits on the great compass (degrees clockwise from north).
export const houseAngle = { Polaris: 0, Aurora: 90, Lyra: 180, Orion: 270 } as const;
export type House = keyof typeof houseAngle;
