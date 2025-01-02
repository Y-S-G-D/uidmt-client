"use client";

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const links = [
  { href: "#", label: "Home" },
  { href: "#", label: "Courses" },
  { href: "#", label: "Resources" },
];

export default function NavLinks({ isMobile, onLinkClick }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`hover:text-pink-400 transition ${
            isMobile ? "block w-full text-lg py-2" : ""
          }`}
          onClick={() => onLinkClick?.()}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}