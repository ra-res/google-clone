import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  return (
    <header>
      <Image
        src={
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
        height={40}
        width={120}
        className='cursor-pointer'
        onClick={() => {
          router.push("/");
        }}
      />
      <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-xl max-w-3xl items-center'>
        <input
          ref={searchInputRef}
          input='text'
          className='flex-grow w-full focus:outline-none'
        />
        <XIcon
          className='h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125'
          onClick={() => {
            searchInputRef.current.value = "";
          }}
        />
        <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300' />
        <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
      </form>
    </header>
  );
}

export default Header;
