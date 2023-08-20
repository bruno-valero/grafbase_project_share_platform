import Image from 'next/image';


export default function FooterOverview() {
  return (
    <div className='flex items-start flex-col'>
      <Image src='/logo-purple.svg' width={115} height={38} alt='Flexível' />
      <p className="text-start text-sm font-normal mt-5 max-w-xs">
        Flexível é uma comunidade para criadores compartilhar, crescer e conseguir oportunidades de negócio
      </p>
    </div>
  );
};
