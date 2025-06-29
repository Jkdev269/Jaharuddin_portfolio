import { BlurImage } from "./BlurImage";

const Header = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14  w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className={`font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white ${
      isDarkMode ? "text-white" : "text-black"
    }`}>
          Jaharuddin
        </h1>

        <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
          Building
          <a
            className={
              `inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1 ${
                            isDarkMode
                              ? "bg-gray-800 text-gray-300 border-gray-700"
                              : "bg-gray-100 text-gray-700 border-gray-300"
                          }`}
            
            href="https://jtextfrontend.vercel.app/"
            target="__blank"
          >
            Jtext
          </a>
          ,
          <a
            className={
              `inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1 ${
                            isDarkMode
                              ? "bg-gray-800 text-gray-300 border-gray-700"
                              : "bg-gray-100 text-gray-700 border-gray-300"
                          }`
            }
            href="https://website-generator-wine.vercel.app/"
            target="__blank"
          >
            Website Generator
          </a>
          other
          <span
            className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200"
            style={{ cursor: "🤩" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {" "}
            cool things
           
          </span>
        </div>
        <p className={`text-zinc-600 dark:text-zinc-500 ${
      isDarkMode ? "text-gray-300" : "text-gray-700"
    }`}>
         A passionate{" "}
    <span className={isDarkMode ? "text-white" : "text-black"}>
      MERN Stack Developer
    </span>
    {" "}crafting full-stack web applications using MongoDB, Express.js,
    React.js, and Node.js.


    I'm a BCA graduate driven by a strong passion for building impactful digital solutions.

   
    Some of my projects include:
    {" "}
    <span className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
      Website Generator, JText Real-Time Chat, E-commerce Platform, and Feedback System.
    </span>
        </p>
      </div>

      <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <a
          href="https://twitter.com/mannupaaji"
          target="__blank"
          className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-white h-20 w-20"
        >
          <BlurImage
            objectFit="cover"
            // objectfit="cover"

            layout="fill"
            className="bg-gray-100 object-contain"
            src="https://jk-portfolio-lilac.vercel.app/assets/about_profile-BrPrNoRV.svg"
          />
        </a>
        <div className="z-0">
          <>
  {/* Top Line */}
  <div
    className={`absolute left-0 -right-12 top-0 h-px z-10
      ${isDarkMode ? "bg-white/20" : "bg-black/10"}
      [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]`}
  />
  
  {/* Left Line */}
  <div
    className={`absolute -top-8 bottom-0 left-12 w-px z-10
      ${isDarkMode ? "bg-white/1" : "bg-black/1"}
      [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]`}
  />

  {/* Bottom Line */}
  <div
    className={`absolute left-0 -right-12 bottom-14 h-px z-10
      ${isDarkMode ? "bg-white/1" : "bg-black/1"}
      [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]`}
  />

  {/* Right Line */}
  <div
    className={`absolute right-0 -top-2 -bottom-8 w-px z-10
      ${isDarkMode ? "bg-white/20" : "bg-black/10"}
      [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]`}
  />
</>

          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

