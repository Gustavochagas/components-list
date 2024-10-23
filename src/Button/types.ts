import { ButtonVariant } from "./constants";

export type ButtonVariants = keyof typeof ButtonVariant;

export type ButtonProps = {
  /**
   * Children for the component
   */
  children: React.ReactNode;

  /**
   * Button style variant
   */
  variant?: ButtonVariants;
};