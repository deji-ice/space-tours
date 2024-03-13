import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-home-tablet flex flex-col md:bg-cover px-5 md:px-20 justify-center h-screen
     bg-black text-white pt-20 items-center bg-no-repeat gap-20"
    >
      <div className="flex px-2  flex-col items-center gap-4 md:gap-2">
        <p className="barlow-condensed-regular tracking-widest text-base md:text-xl  text-[#D0D6F9]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h2 className="bellefair-regular text-[80px] md:text-[150px]">SPACE</h2>
        <p className="text-center barlow-regular md:w-[79%]  leading-7 text-[#D0D6F9] text-base md:text-lg ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="text-[20px] md:text-[32px] bellefair-regular h-20 w-20 rounded-full bg-white 
      flex items-center justify-center text-black tracking-widest p-20 md:p-32 "
      >
        EXPLORE
      </div>
    </div>
  );
};

export default Home;
