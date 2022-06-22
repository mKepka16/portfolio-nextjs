import React from 'react';
import styles from '/styles/dummy/Footer.module.scss';

interface Props {
  footer_text: string;
}

export const Footer: React.FC<Props> = ({ footer_text }) => {
  return <footer></footer>;
};
