export interface ColSizeDto {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

export class ColSize implements ColSizeDto {
  constructor(dto: ColSizeDto) {
    Object.assign(this, sizeDefaultValues(), dto);
  }
}

export function sizeDefaultValues() {
  return {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6
  };
}
