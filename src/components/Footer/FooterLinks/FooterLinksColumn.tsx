import Link from 'next/link';

interface FooterLinksProps {
  title: string;
  links: Array<{text:string, href:string}>;
}

export default function FooterLinksColumn({title, links}:FooterLinksProps) {
  return (
    <div className='footer_column'>
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map(link => (
          <Link href={link?.href ?? '/'}>
            {link?.text ?? 'Funcionalidade em Teste'}
          </Link>
        ))}
      </ul>
    </div>
  );
};
