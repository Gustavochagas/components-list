import { ButtonProps, ButtonVariants } from "./types";

import { ButtonVariant } from "./constants";

const CSS_BY_VARIANT: Record<ButtonVariants, string> = {
  primary:
    "bg-red-100 hover:bg-red-200 focus:ring focus:ring-red-200 text-black",
  secondary:
    "bg-white-100 hover:bg-white-200 focus:ring focus:ring-white-200 text-black",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.primary,
}) => {
  const additionalCss = CSS_BY_VARIANT[variant];

  return (
    <button role="button" className={`flex rounded-md px-4 py-3 text-m ${additionalCss}`}>
      {children}
    </button>
  );
};
