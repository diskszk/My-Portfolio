// import React from 'react';
import Link from 'next/link';

const HeaderMenuItem = props => {
  const { content, path } = props;
  return (
    <li>
      <Link href={path}>
        <a>{content}</a>
      </Link>
    </li>
  );
}

export default HeaderMenuItem;