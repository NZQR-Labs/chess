import Link from "next/link";
import React from "react";  

type Props = {
  children?: React.ReactNode
};

const Navbar: React.FC<Props> = ({children}) => {

  const handleCloseDrawer = () => {
    const el = document.getElementById("my-drawer-3") as HTMLInputElement; 
    el.checked = false; 
    return; 
  };

  return (
    <div data-theme="luxury" className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2">Chess Puzzles</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><Link href="/"> Home </Link></li>
              <li><Link href="/puzzles"> Daily Puzzle </Link></li>
              <li><Link href="/subscriptions"> Subscriptions </Link></li>
              <li><Link href="/settings"> Settings </Link></li>
            </ul>
          </div>
        </div>
        {children}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100">
          <li><Link onClick={handleCloseDrawer} href="/"> Home </Link></li>
          <li><Link onClick={handleCloseDrawer} href="/puzzles"> My Puzzles </Link></li>
          <li><Link onClick={handleCloseDrawer} href="/subscriptions"> Subscriptions </Link></li>
          <li><Link onClick={handleCloseDrawer} href="/settings"> Settings </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;