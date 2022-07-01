import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  isExternal: boolean;
  link: string;
}

export const SmartLink: React.FC<Props> = ({ children, isExternal, link }) => {
  return (
    <>
      {isExternal ? (
        <a href={link} target='_blank' rel='noreferrer'>
          {children}
        </a>
      ) : (
        <Link href={link}>
          <a>{children}</a>
        </Link>
      )}
    </>
  );
};
