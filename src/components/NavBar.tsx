"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Anchor = {
  label: string;
  path: string;
};

const NavBar = () => {
  const pathname = usePathname();

  const pages: Anchor[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Contatti",
      path: "/contatti",
    },
    {
      label: "QG",
      path: "/contatti/qg",
    },
    {
      label: "Articoli",
      path: "/articoli",
    },
  ];

  return (
    <div className="bg-slate-400 p-4">
      <div className="flex gap-2 xl:container mx-auto">
        {pages.map((p) => (
          <Link
            key={p.path}
            href={p.path}
            className={clsx("text-white font-bold", {
              underline: p.path == pathname,
              "text-black": p.path == pathname,
            })}
          >
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
