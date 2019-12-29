/**
 * Boolean to decide whether to pull from a live
 * server API or from local image/json assets.
 */
export const USE_LOCAL_DATA = true;

/**
 * Define app-wide breakpoints here.
 * Can be used in both styled-components & JSX.
 */
export const BREAKPOINTS = {
  xSmall:   410,
  Small:    640,
  Medium:   960,
  Large:    1200,
  Desktop:  1366,
  xLarge:   1600,
  xxLarge:  1800,
  xxxLarge: 2560
};

/**
 * Uses Name that Color tool to generate names.
 * @see http://chir.ag/projects/name-that-color/
 */
const COLOR_NAMES = {
  // Blacks
  Black:              '#000',
  CodGray:            '#1c1c1c',
  MineShaft:          '#333',

  // Whites
  White:              '#fff',
  WildSand:           '#f6f6f6',
  Alabaster:          '#f8f8f8',
  AlabasterV2:        '#fafafa',
  Gallery:            '#ebebeb',
  Mercury:            '#e2e2e2',
  
  // Grays
  Alto:               '#d8d8d8',
  Bombay:             '#adb2b7', // AA (4.55) on #3e454c
  Nobel:              '#b3b3b3',
  Boulder:            '#767676', // AA (4.54) on #fff
  Mako:               '#3e454c',
  OuterSpace:         '#353b41', // AA (4.53) on #fe7e66

  // Blues
  Bermuda:            '#76d5d8',
  SurfieGreen:        '#118286', // AA (4.54) on #fff
  Shark:              '#1b2127',

  // Oranges
  Salmon:             '#fe7e66',
  OutrageousOrange:   '#ff5f41', // AA Large (3.01) on #fff

  // Reds
  FuzzyWuzzyBrown:    '#c05451', // AA (4.54) on #fff
  Chestnut:           '#ba4643',
  ElSalva:            '#983a37', // AAA (7.01) on #fff
}

/**
 * Define app-wide colors here.
 * Can be used in both styled-components & JSX.
 * Note that `w` before a number stands for `weight`;
 * such as weight100 for light and weight900 for dark.
 */
export const COLORS = {
  Primary: {
    Base:   COLOR_NAMES.Bermuda,
    AA:     COLOR_NAMES.SurfieGreen, // AA (4.54) on Whites.Base
  },
  Secondary: {
    Base:   COLOR_NAMES.Salmon,
    AA:     COLOR_NAMES.OutrageousOrange, // AA Large (3.01) on Whites.Base
  },
  Whites: {
    Base:   COLOR_NAMES.White,
    w100:   COLOR_NAMES.WildSand,
    w200:   COLOR_NAMES.Alabaster,
    w300:   COLOR_NAMES.AlabasterV2,
    w400:   COLOR_NAMES.Gallery,
    w500:   COLOR_NAMES.Mercury,
  },
  Blacks: {
    Base:   COLOR_NAMES.Black,
    w900:   COLOR_NAMES.CodGray,
    w700:   COLOR_NAMES.MineShaft,
  },
  Grays: {
    w100:   COLOR_NAMES.Alto,
    w200:   COLOR_NAMES.Bombay, // AA (4.55) on Grays.Mako
    w300:   COLOR_NAMES.Nobel,
    w400:   COLOR_NAMES.Boulder, // AA (4.54) on Whites.Base
    w500:   COLOR_NAMES.Mako,
    w600:   COLOR_NAMES.OuterSpace, // AA (4.53) on Secondary.Base
  },
  Blues: {
    w900:   COLOR_NAMES.Shark
  },
  Reds: {
    w100:   COLOR_NAMES.FuzzyWuzzyBrown, // AA (4.54) on Whites.Base
    w200:   COLOR_NAMES.Chestnut,
    w300:   COLOR_NAMES.ElSalva, // AAA (7.01) on Whites.Base
  }
};

/**
 * Define app-wide fonts here.
 * Can be used in both styled-components & JSX.
 */
export const FONTS = {
  Sans: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', Arial, sans-serif",
  Serif: "'Merriweather', Georgia, 'Times New Roman', Times, serif;"
};

/**
 * Define app-wide styles here.
 * Can be used in both styled-components & JSX.
 */
export const STYLES = {
  Header: {
    NavbarHeight: 70
  },
  Footer: {
    NavbarHeight: 80,
    NextStepButtonHeight: 80 / 1.825
  }
};
