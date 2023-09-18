import React from "react";
import { Link } from "react-scroll/modules";
import { NavIcon } from "./svg/AboutIcon";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Contact",
    page: "contact",
  },
  {
    label: "Access",
    page: "access",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

function BottomNav() {
  return (
    <div className="w-full h-screen md:hidden">
      {/* <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile--> */}
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow dark:bg-stone-900"
      >
        <div id="tabs" className="flex justify-between">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.page}
                offset={-100}
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
              >
                <div className="flex justify-center">{NavIcon(item.page)}</div>
                <span className="tab tab-home block text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default BottomNav;
