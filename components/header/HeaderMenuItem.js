// import React from 'react';
import Link from 'next/link';

const HeaderMenuItem = props => {
  const { page } = props;

  return (
    <Link href={page.path}>
      <a>{page.contents}</a>
    </Link>
  );
}

export default HeaderMenuItem;