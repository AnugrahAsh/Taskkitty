import laptop from '../assets/laptopnew.png'
import hero from '../assets/heronew.png'
import everything from '../assets/everything.png'
import Cog from '../assets/cog.png'
import LeftPaw from '../assets/second6.png'
import RightPaw from '../assets/second5.png'
import Smile from '../assets/smile.png'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'

const Landing = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-400 mb-100 hero">
        <img src={hero} alt="" className="w-full h-full object-cover" />

        <nav>
          <div className="absolute top-0 left-0 right-0 flex items-center p-4 bg-opacity-50 mx-8 mt-8 backdrop-blur-md">
            {/* Centered nav links */}
            <div className="flex-1 flex justify-center">
              <ul className="flex space-x-20 ">
                <li>
                  <a
                    href="#features"
                    className="text-black  bg-amber-100 py-1 px-2 pl-3 rounded-lg"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-black  bg-amber-100 py-1 px-2 pl-3 rounded-lg"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-black  bg-amber-100 py-1 px-2 pl-3 rounded-lg"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-black  bg-amber-100 py-1 px-2 pl-3 rounded-lg"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right-aligned button */}
            <div className="ml-auto">
              <button
                id="signup"
                className="bg-red-500 text-white px-3 py-1 rounded "
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        <div className="absolute -translate-y-310 z-10 ml-20">
          <h1 className="text-black text-[100px] leading-30">
            Welcome To
            <span className="block text-blue-500 mb-10 text-[80px]">
              Taskkitty
            </span>
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="description flex gap-40 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black text-4xl -translate-y-80 ml-30 w-100">
            What is Taskkitty?{" "}
          </h1>
          <img src={laptop} alt="" className="h-75 ml-50 -translate-y-80" />
          <button className="text-white bg-red-500 px-10 py-2 ml-30 -translate-y-70 rounded-lg">
            Get started
          </button>
        </div>
        <div>
          <h2 className="text-black -translate-y-40 text-2xl px-20 leading-12">
            It is a <span className="text-blue-500">Project Management </span>{" "}
            website where cats do all of the work for you While you eat 5star
            and do nothing Well Technically not do nothing you still have to use
            this website but whatever ....{" "}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-end-safe justify-end-safe -translate-y-60 gap-10">
        <h1 className="mr-20 text-lg">We have a cat for nearly everything</h1>
        <img src={everything} alt="" className="mx-auto" />
      </div>
      <h1 className="ml-30 -translate-y-50 text-xl">
        <span>We are sorry</span> we can't cure your self worth issues
      </h1>
      <h1 className="flex justify-start ml-30 text-2xl -translate-y-20 gap-1">
        Create projects on the go with the help of <span>Taskkitty</span>
      </h1>
  
      {/* How to use Taskkitty */}
      <div className='flex flex-col'>

      <div className='flex flex-col mt-10 items-end-safe justify-end-safe'>
        <h1 className='flex justify-end mr-30 text-4xl'>How To use Taskkitty?</h1>
        <img src={Cog} className='pr-20 h-40' alt="" />
      </div>
      </div>

      <div className='flex items-center ml-20'>
        <img src={LeftPaw} className='h-40 w-40' alt="" />
        <p className='text-2xl'>Give a <span> brief description </span>of your project you want to build </p>
      </div>
      <div className='flex flex-row-reverse mr-20 items-center ml-20'>
        <img src={RightPaw} className='h-40 w-40' alt="" />
        <p className='text-2xl'>Create agents you need for your work , <span>choose from many </span> </p>
      </div>
      <div className='flex items-center ml-20'>
        <img src={LeftPaw} className='h-40 w-40' alt="" />
        <p className='text-2xl'>Use the agents <span> however</span> you like, could be coding , UI/UX, marketing <br />
            or maybe content writing. <span> Integrate the responses</span> and boom you <br />
            have your project  </p>
      </div>

      <div className='flex flex-row-reverse mr-20 items-center ml-20'>
        <img src={RightPaw} className='h-40 w-40' alt="" />
        <p className='text-2xl'> <span>It’s so easy, even cats can use it.</span> If you can’t consider A psychiatrist </p>
        <img src={Smile} alt="" />
      </div>

      <ContactUs />

      {/* Last section */}
      <div className='mt-30 ml-30'>
        <h1 className='text-3xl'>
        <span>Dude!</span> <br />
          What Else do you want from a Landing page?
          <br />Go try it out
        </h1>
        <button className='bg-[crimson] mt-6 text-white px-10 pt-1 pb-2 text-2xl rounded-md'>Try It</button>
      </div>

      <Footer />  
    </>
  );
}

export default Landing
