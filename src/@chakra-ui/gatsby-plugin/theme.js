import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { buttonVariants } from "./variants/button";

const breakpoints = createBreakpoints({
  xs: "375px",
  md: "768px",
  lg: "1440px",
});

const theme = {
  fonts: {
    heading: "NoirPro",
    body: "NoirPro",
  },
  textStyles: {
    mainHeader: {
      fontSize: "78px",
      lineHeight: "88px",
      letterSpacing: "2.9px",
    },
    subHeader: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "2.1px",
    },
    "subHeader-2": {
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "2.7px",
    },
    "subHeader-3": {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "2.7px",
    },
    defaultHeader: {
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "4.6px",
    },
    "paragraph-1": {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "normal",
    },
    title: {
      fontSize: { base: "36px", lg: "56px" },
      lineHeight: { base: "48px", lg: "64px" },
      letterSpacing: { base: "2.4px", lg: "5.6px" },
    },
    buttonLabel: {
      fontSize: "13px",
      lineHeight: "24px",
      letterSpacing: "1.2px",
      fontWeight: "300",
    },
    smallText: {
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  colors: {
    buttonBg: "#41085B",
    primaryText: "#ffffff",
    secondaryText: "#F2E8F8",
    tertiaryText: "#1D1C1D",
    ubiColor: "#3C876A",
    card1: "#F6F6F7",
    card1BorderColor: "#D8D8DF",
    cardTextTitle: "#343234",
    ubiMoreInfo: "#7BBCA1",
    ubiBoxBorderColor: "rgba(123, 188, 161, 0.4)",
    logoBg: "linear-gradient(0deg, #FFFFFF, #FFFFFF)",
    footerBg: "#F6F6F7",
    copyRightNote: "#A6A3A6",
  },
  breakpoints,
  components: {
    ...buttonVariants,
  },
};

export default extendTheme(theme);
