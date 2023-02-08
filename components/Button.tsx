import React from 'react';
import styles from '@/styles/Button.module.css';
import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo
}: any) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href={linkTo} className={styles['btn-mobile']}>
      <button
        className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};