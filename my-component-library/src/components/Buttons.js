import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({props}) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  secondaryButtonWarning: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  tertiaryButtonWarning: ({props}) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  error: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover {
      background-color: ${props.theme.status.errorColorHover};
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  PrimaryButtonError: ({props}) => `
    background: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.errorColor};
    color: ${props.theme.status.errorColor};
  `,
  tertiaryButtonError: ({props}) => `
    background: none;
    color: ${props.theme.status.errorColor};
  `,
  success: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover {
      background-color: ${props.theme.status.successColorHover};
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  PrimaryButtonSuccess: ({props}) => `
    background: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.successColor};
    color: ${props.theme.status.successColor};
  `,
  tertiaryButtonSuccess: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background 0.2s linear, color 0.2s linear;

  &:hover {
    background: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    ouline: 3px solid ${props => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background: ${props => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    border-color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;
