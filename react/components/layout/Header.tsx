import Image from 'next/image';

import Logo from '@/assets/images/synaptiq-logo.png';

export default function Header() {
  return (
    <header className="bg-white w-full shadow-md h-[80px] flex w-full relative">
      <nav className="container mx-auto px-6 py-3 grow flex">
        <div className="flex justify-between items-center grow">
          <a href="https://www.synaptiq.ai/" target="_blank" className="text-2xl font-bold text-gray-800">
            <Image priority
              src={Logo}
              width={340}
              height={56}
              alt="Synaptiq"
            /></a>
          <h1 className="text-sm md:text-lg lg:text-xl font-light ml-4">Job Portal</h1>
        </div>
      </nav>
    </header>
  )
}
