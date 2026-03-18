import type { ReactElement, ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/index.css';

interface IProps {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  icons: {
    icon: '/favicons/favicon.svg',
  },
  title: 'Medior Page',
};

const RootLayout = ({
  children,
}: IProps): ReactElement => (
  <html lang="en">
    <body className="page-layout">
      {children}
    </body>
  </html>
);

export default RootLayout;
