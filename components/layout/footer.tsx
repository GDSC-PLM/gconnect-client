import Image from "next/image";
import Link from "next/link";

const FooterColumn: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="flex flex-col max-sm:items-center mx-auto pt-4">
    <h1
      className={
        title === "G-Connect" || title === "ABOUT"
          ? "font-bold text-sm pb-3"
          : "pb-3"
      }
    >
      {title}
    </h1>
    {items.map((item, index) => (
      <h1 key={index} className="pb-3">
        {item}
      </h1>
    ))}
  </div>
);

const LandingPageFooter: React.FC = () => {
  const columns = [
    { title: "G-Connect", items: ["How it Works", "About the Creators"] },
    { title: "ABOUT", items: ["Terms & Conditions", "Privacy Policy"] },
  ];

  return (
    <div className="pt-10 bg-indigo">
      <div className="w-3/4 mx-auto flex justify-around max-sm:flex-col">
        <Link className="max-sm:justify-center mx-auto" href="/" passHref>
          <Image
            src="/gconnect-logo.svg"
            alt="GConnect Logo"
            width={80}
            height={80}
            className="max-sm:w-15 max-sm:h-15 cursor-pointer"
          />
        </Link>
        {columns.map((column, index) => (
          <FooterColumn key={index} {...column} />
        ))}
      </div>
      <div className="w-3/4 h-10 pb-3 flex items-center mx-auto">
        <h1 className="text-center mx-auto pr-6 text-xs text-[#6B7280] max-sm:pr-0">
          Copyright © 2023
        </h1>
      </div>
    </div>
  );
};

export default LandingPageFooter;
