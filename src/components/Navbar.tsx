import { useRouter } from "next/navigation";

const Navbar = ({ exitAnimation }: Readonly<{ exitAnimation: Function }>) => {
  const router = useRouter();

  const handleRouteChange = async (url: string) => {
    await exitAnimation();
    router.push(url);
  };

  return (
    <nav className="flex justify-between p-5">
      <h1
        onClick={() => handleRouteChange("/")}
        className="cursor-pointer text-xs uppercase md:text-sm"
      >
        Ryel Banfield
      </h1>

      <div className="flex gap-5">
        <p
          onClick={() => handleRouteChange("/work")}
          className="cursor-pointer text-xs uppercase md:text-sm"
        >
          Work
        </p>

        <p
          onClick={() => handleRouteChange("mailto:wile.airline-0q@icloud.com")}
          className="cursor-pointer text-xs uppercase md:text-sm"
        >
          Contact
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
