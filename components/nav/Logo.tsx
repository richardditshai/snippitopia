'use client'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function Logo() {
  const codeString = `let logo = "Snippitopia";`;
  return (
    <Link href={'/'}>
      <SyntaxHighlighter language="jsx" style={atomDark} className='text-sm overflow-x-auto'>
        {codeString}
      </SyntaxHighlighter>
    </Link>
  );
};