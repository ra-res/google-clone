import Image from "next/image";
import Avatar from "../components/Avatar";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";
import VoiceInput from "./VoiceInput";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  useEffect(() => {
    searchInputRef.current.value = router.query.term;
  }, [router.query.term]);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
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
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-xl max-w-3xl items-center'>
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
          <VoiceInput classAttr='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          // TODO: margin-left: auto not working on search page
          classAttr='ml-auto'
          url='https://images.unsplash.com/photo-1623265041640-8973a7afe898?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
        />
      </div>
      {/* Header Options Component */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
