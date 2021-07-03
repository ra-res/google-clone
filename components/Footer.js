import { GlobeIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Footer({ DarkMode }) {
  const locationRef = useRef(false);
  const [location, setLocation] = useState("Japan");
  const getGeoInfo = async () => {
    await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        setLocation(response?.data?.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getGeoInfo();

  return (
    <footer
      className={`grid w-full divide-y-[1px] ${
        DarkMode ? "bg-black divide-gray-800" : "bg-gray-100 divide-gray-300"
      } text-sm text-gray-500`}>
      <div className='px-8 py-3'>
        <p>{location}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3'>
        <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 '>
          <GlobeIcon className='h-5 mr-1 text-green-700' />
          Carbon neutral since 2007
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className='flex justify-center space-x-8 md:ml-auto'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
