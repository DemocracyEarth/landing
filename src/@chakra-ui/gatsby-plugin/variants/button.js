export const buttonVariants = {
  Button: {
    baseStyle: {
      _focus: {
        shadow: "none",
      },
      _hover: {
        textDecoration: "none",
      },
    },
    variants: {
      primary: {
        bg: "buttonBg",
        color: "primaryText",
        padding: "12px 24px",
        textStyle: "buttonLabel",
        borderRadius: "8px",
        fontWeight: "300",
      },
    },
  },
};
