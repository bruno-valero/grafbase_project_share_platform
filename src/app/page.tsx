import { ReactNode } from 'react';

interface HomeProps {
  children?: ReactNode
}

export default async function Home({ children }:HomeProps) {
  return (
    <section className='flex-start flex-col paddings m-16'>      
      <h1>Categorias</h1>
      <h1>Posts</h1>
      <h1>CarregarMais</h1>
    </section>
  );
};
