import React from "react"; //eslint-disable-line

function Header() {
  return (
    <>
      <h1 className="self-center text-7xl text-emerald-900 max-md:max-w-full max-md:text-4xl">
        EmpowerHer Kit
      </h1>
      <div className="flex shrink-0 self-center max-w-full h-5 bg-green-300 rounded-3xl w-[1826px]" />
      <nav className="flex gap-5 justify-between self-end mt-3.5 mr-20 max-w-full text-xl text-emerald-900 w-[301px] max-md:mr-2.5">
        <a href="#home" className="whitespace-nowrap">Home</a>
        <a href="#toolkit" className="whitespace-nowrap">Toolkit</a>
        <a href="#about">About Us</a>
      </nav>
    </>
  );
}

export default Header;