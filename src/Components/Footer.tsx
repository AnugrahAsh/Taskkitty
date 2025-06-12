
const Footer = () => {
  return (
    <footer className="bg-black text-white m-0 mt-20 p-0">
      {/* Upper section with links */}
      <div className="flex flex-col gap-20 p-20 text-3xl font-black">
        <div className="flex gap-20">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT</a>
          <a href="#">FAQ</a>
          <a href="#">HELP</a>
        </div>
        <div className="flex gap-20 text-2xl">
          <a href="#">INSTAGRAM</a>
          <a href="#">TWITTER / X</a>
        </div>
        <div className="text-2xl flex justify-end">
          NOW GO GET SOME WORK DONE . . . . .
        </div>
      </div>

      {/* Bottom logo with no spacing */}
      <div className="relative z-40 w-full bg-black text-center m-0 p-0 leading-none overflow-hidden">
        <h1 className="text-[320px] font-black p-0 m-0 leading-56 ">
          TASKKITTY
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
