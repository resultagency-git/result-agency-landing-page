type appearenceOptionsProps = {
  colorPrimaryHex: string;
  colorPrimaryRgb: string;
  name: string;
};

type appearenceThemeProps = {
  _id: number;
  name: string;
  bgPrimaryHex: string;
  bgPrimaryRgb: string;
  bgSecondaryHex: string;
  bgSecondaryRgb: string;
  colorTitlePrimaryHex: string;
  colorTitleSecondaryHex: string;
  borderColorHex: string;
  borderColorRgb: string;
  colorPrimaryHex: string;
  colorSecondaryHex: string;
};

export const appearenceOptions: appearenceOptionsProps[] = [
  {
    colorPrimaryHex: "#5e77f9",
    colorPrimaryRgb: "94, 119, 249",
    name: "Cornflower Blue",
  },
  {
    colorPrimaryHex: "#ff7f4f",
    colorPrimaryRgb: "255, 127, 79",
    name: "Coral",
  },
  {
    colorPrimaryHex: "#f2bc65",
    colorPrimaryRgb: "242, 188, 101",
    name: "Cream Can",
  },
  {
    colorPrimaryHex: "#8c55ff",
    colorPrimaryRgb: "140, 85, 255",
    name: "Heliotrope",
  },
  {
    colorPrimaryHex: "#5fc4f9",
    colorPrimaryRgb: "95, 196, 249",
    name: "Malibu",
  },
  {
    colorPrimaryHex: "#00c1d4",
    colorPrimaryRgb: "0, 193, 212",
    name: "Robin's Egg Blue",
  },
];

export const appearenceThemes: appearenceThemeProps[] = [
  {
    _id: 2,
    name: "Dark",
    bgPrimaryHex: "#1f212a",
    bgPrimaryRgb: "31, 33, 42",
    bgSecondaryHex: "#252731",
    bgSecondaryRgb: "37, 39, 49",
    colorTitlePrimaryHex: "#ffffff",
    colorTitleSecondaryHex: "#ffffff",
    borderColorHex: "#252731",
    borderColorRgb: "37, 39, 49",
    colorPrimaryHex: "#8691a4",
    colorSecondaryHex: "#727c8f",
  },
  {
    _id: 1,
    name: "Light",
    bgPrimaryHex: "white",
    bgPrimaryRgb: "blue",
    bgSecondaryHex: "#fafafa",
    bgSecondaryRgb: "250,250,250",
    colorTitlePrimaryHex: "#2e384d",
    colorTitleSecondaryHex: "yellow",
    borderColorHex: "#e5e5e6",
    borderColorRgb: "red",
    colorPrimaryHex: "#12c825",
    colorSecondaryHex: "#ec0ed9",
  },
];
