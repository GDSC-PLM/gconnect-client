import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../ui/container';

const FooterColumn: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className='flex flex-col max-sm:items-left pt-4 sm:pt-0 text-left'>
    <h1
      className={
        title === 'G-Connect' || title === 'About'
          ? 'font-semibold text-sm pb-3'
          : 'pb-3'
      }
    >
      {title}
    </h1>
    <div className='pt-6 flex-col flex gap-4 text-sm'>
      {items.map((item, index) => (
        <Link
          href='/'
          className='hover:text-neutral-400 transition-all ease-in-out duration-200'
          key={index}
        >
          {item}
        </Link>
      ))}
    </div>
  </div>
);

const LandingPageFooter: React.FC = () => {
  const columns = [
    { title: 'G-Connect', items: ['How it Works', 'About the Creators'] },
    { title: 'About', items: ['Terms & Conditions', 'Privacy Policy'] },
  ];

  return (
    <footer className='py-10 bg-indigo-50 h-fit w-full'>
      <Container className='flex flex-col gap-20 justify-between h-full'>
        <div className='w-full flex justify-between max-sm:flex-col'>
          <Link className='max-sm:justify-start' href='/' passHref>
            <Image
              src='/gconnect-logo.svg'
              alt='GConnect Logo'
              width={80}
              height={80}
              className='max-sm:w-15 max-sm:h-15 cursor-pointer'
            />
          </Link>
          <div className='flex gap-20 items-start flex-wrap pt-10 sm:pt-0'>
            {columns.map((column, index) => (
              <FooterColumn key={index} {...column} />
            ))}
          </div>
        </div>

        <h1 className='text-center w-full flex justify-center text-sm text-[#6B7280] max-sm:pr-0'>
          Copyright © 2023
        </h1>
      </Container>
    </footer>
  );
};

export default LandingPageFooter;
