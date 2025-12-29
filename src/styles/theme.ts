import { appearenceThemes } from "./data";

export class ThemeStyle {
  static setTheme() {
    document.documentElement.style.setProperty("--active-color-hex", "#ff6500");
    document.documentElement.style.setProperty(
      "--active-color-rgb",
      "255,101,0"
    );

    const findTheme = appearenceThemes.find((theme) => {
      return theme._id === 2;
    });
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bg-primary-hex", // @ts-ignore
      findTheme.bgPrimaryHex
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bg-primary-rgb", // @ts-ignore
      findTheme.bgPrimaryRgb
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bg-secondary-hex", // @ts-ignore
      findTheme.bgSecondaryHex
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bg-secondary-rgb", // @ts-ignore
      findTheme.bgSecondaryRgb
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-color-title-primary", // @ts-ignore
      findTheme.colorTitlePrimaryHex
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-color-title-secondary", // @ts-ignore
      findTheme.colorTitleSecondaryHex
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bc-primary-hex", // @ts-ignore
      findTheme.borderColorHex
    );
    // @ts-ignore
    document.documentElement.style.setProperty(
      "--theme-bc-primary-rgb", // @ts-ignore
      findTheme.borderColorRgb
    );
  }
}
