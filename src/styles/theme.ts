interface ICOLORS {
  BACKGROUND_900: string,
  BACKGROUND_800: string,
  BACKGROUND_700: string,

  WHITE: string,
  ORANGE: string,

  GRAY_100: string,
  GRAY_300: string,

  RED: string
}

export interface ITheme {
  COLORS: ICOLORS
}

export interface IPropsTheme {
  theme: ITheme
}

const theme: ITheme = {
    COLORS: {
      BACKGROUND_900: "#232129",
      BACKGROUND_800: "#312E38",
      BACKGROUND_700: "#3E3B47",
  
      WHITE: "#F4EDE8",
      ORANGE: "#FF9000",
  
      GRAY_100: "#999591",
      GRAY_300: "#666360",
  
      RED: "#FF002E"
    }
  }

export default theme