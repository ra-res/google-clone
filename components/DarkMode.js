import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";

function DarkMode() {
  var darkMode = false;
  function setDarkMode() {
    darkMode = true;
    console.log(darkMode);
  }
  useEffect(() => {
    Cookie.set("DarkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return {
    darkMode: darkMode,
    setDarkMode: setDarkMode,
  };
}

export default DarkMode;
