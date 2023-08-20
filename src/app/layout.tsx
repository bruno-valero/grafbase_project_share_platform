import Footer from '@/components/Footer/index';
import Navbar from '@/components/Navbar/index';
import { footerLinks } from '@/constants/index';
import './globals.css';

export const metadata = {
  title: 'Flexível',
  description: 'Apresente e descubra projetos memoráveis de desenvolvedores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar.Root>
          <Navbar.Logo />
          <Navbar.Links />
          <Navbar.User />
        </Navbar.Root>
        <main>
          {children}
        </main>
        <Footer.Root Bottom={<Footer.Bottom />}>
          <Footer.Overview />
          <Footer.Links.Root>
            <Footer.Links.Column title={footerLinks[0].title} links={footerLinks[0].links} />
            
            <Footer.Links.Root sameColumn>
              <Footer.Links.Column title={footerLinks[1].title} links={footerLinks[1].links} />
              <Footer.Links.Column title={footerLinks[2].title} links={footerLinks[2].links} />
            </Footer.Links.Root>

            <Footer.Links.Column title={footerLinks[3].title} links={footerLinks[3].links} />
            
            <Footer.Links.Root sameColumn>
              <Footer.Links.Column title={footerLinks[4].title} links={footerLinks[4].links} />
              <Footer.Links.Column title={footerLinks[5].title} links={footerLinks[5].links} />              
            </Footer.Links.Root>

            <Footer.Links.Column title={footerLinks[6].title} links={footerLinks[6].links} />
          </Footer.Links.Root>
        </Footer.Root>
      </body>
    </html>
  )
}
