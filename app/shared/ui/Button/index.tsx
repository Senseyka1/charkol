import clsx from 'clsx';
import {ButtonHTMLAttributes, ReactNode} from 'react';

import styles from './index.module.css';

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  GREEN_HOVER = 'greenHover',
  PURPLE_HOVER = 'purpleHover',
  ORANGE_HOVER = 'orangeHover',
  BROWN_HOVER = 'brownHover',
  YELLOW_HOVER = 'yellowHover',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme: ThemeButton;
  width?: string | number;
  fWeight?: number;
  height?: string | number;
  margin?: string | number;
  padding?: string | number;
  letSpacing?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  fz?: string | number;
  type?: 'submit' | 'reset' | 'button' | undefined;
  lineHeight?: string;
}

const Button = ({
  children,
  className,
  width,
  height,
  theme,
  fWeight,
  letSpacing,
  type,
  margin,
  padding,
  mt,
  mb,
  ml,
  mr,
  fz,
  lineHeight,
  ...otherProps
}: Props) => {
  // const mods = { [styles[theme]]: true };

  return (
    <button
      type={type ? type : 'button'}
      style={{
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        fontWeight: fWeight,
        fontSize: fz,
        letterSpacing: letSpacing,
        lineHeight: lineHeight,
      }}
      className={clsx(styles.button, styles[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
