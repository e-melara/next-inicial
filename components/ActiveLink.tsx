import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
  href: string;
  text: string;
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  )
}
