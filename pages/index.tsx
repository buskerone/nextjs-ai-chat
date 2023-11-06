import Image from 'next/image';
import { Inter } from 'next/font/google';
import { ProfileImage } from '@/assets';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const handleOnClickSend = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log('clicked');
  };

  return (
    <main
      className={`flex h-full min-h-screen bg-[#444654] ${inter.className}`}
    >
      <div className='flex h-full min-h-screen w-[260px] flex-col bg-gray-900 p-4'>
        <h1 className='mb-4 rounded border border-white p-4'>Tu marca aquí</h1>
        <div className='flex flex-1 flex-col gap-2'>
          <div className='rounded border border-dotted border-white p-2'>
            Historial 1
          </div>
          <div className='rounded border border-dotted border-white p-2'>
            Historial 2
          </div>
          <div className='rounded border border-dotted border-white p-2'>
            Historial 3
          </div>
          <div className='rounded border border-dotted border-white p-2'>
            Historial 4
          </div>
        </div>
        <div className='flex items-center justify-start gap-2 border-t border-white p-2'>
          <Image src={ProfileImage} alt='user' height='40' />
          <div className='align-center font-bold'>Carlos K.</div>
        </div>
      </div>
      <div className='relative w-full p-4'>
        <div className='absolute bottom-0 left-0 w-full md:w-[calc(100%-.5rem)]'>
          <form className='stretch relative mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
            <div className='w-full overflow-hidden'>
              <textarea className='flex h-16 w-full resize-none items-center justify-start rounded bg-[#1b1d22] py-[10px] pl-3 pr-10 focus:ring-0 focus-visible:ring-0' />
            </div>
            <button
              className='absolute right-4 top-4'
              onClick={handleOnClickSend}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
