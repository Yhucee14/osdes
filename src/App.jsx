import "./index.css";
import { useState, useEffect } from "react";
import logo from "./images/logo.png";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Carousel as Caro } from "react-responsive-carousel";
import { MdOutlineLocationOn } from "react-icons/md";
import { slides } from "./constants/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Countdown from "./components/Countdown";
import { Link } from "react-scroll";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set isMobile to true when screen width is less than a certain value (e.g., 640px).
      setIsMobile(window.innerWidth < 770);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex flex-col text-red ">
      <nav className=" w-full bg-black text-white text-lg py-4 sm:px-4 xx:px-1 z-10 shadow-md">
        <div>
          {isMobile ? (
            // Mobile view with menu icon
            <div className="flex items-center justify-between flex-row px-3">
              <CgMenuGridR
                className="w-8 h-8 text-yellow cursor-pointer hover:w-9 hover:h-9 hover:text-red absolute xx:top-6 sm:top-9 right-7"
                onClick={() => setIsDropdownOpen(true)}
              />{" "}
              <div className="flex justify-start sm:w-[200px] xx:w-[150px] ">
                <a
                  href="./"
                  target={"_blank"}
                  className="flex  text-yellow justify-start sm:justify-center "
                >
                  <img
                    src={logo}
                    alt="logo"
                    className=" xx:py-1 xx:px-2 sm:p-2 object-cover object-center "
                  />{" "}
                </a>
              </div>
            </div>
          ) : (
            // Desktop view with navigation links
            <div className="flex  justify-between">
              <div className="flex  justify-start w-[200px] ">
                <a
                  href="./"
                  target={"_blank"}
                  className="flex  text-yellow justify-start sm:justify-center "
                >
                  <img
                    src={logo}
                    alt="logo"
                    className=" xx:py-1 xx:px-2 sm:p-2 object-cover object-center "
                  />{" "}
                </a>
              </div>

              <div className="flex flex-row justify-between text-md items-center">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="px-3"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <button className="hover:text-yellow">About</button>
                </Link>

                <Link
                  to="schedule"
                  smooth={true}
                  duration={500}
                  className="px-3"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="px-3 md:px-3">
                    <button className=" hover:text-yellow ">Schedule</button>
                  </div>
                </Link>

                <Link
                  to="speakers"
                  smooth={true}
                  duration={500}
                  className="px-3"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="px-3 md:px-3">
                    <button className=" hover:text-yellow">Speakers</button>
                  </div>
                </Link>

                <Link
                  to="involved"
                  smooth={true}
                  duration={500}
                  className="px-3"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="px-1 md:px-1">
                    <button className=" hover:text-yellow">Get Involved</button>
                  </div>
                </Link>

                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  className="px-3"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="px-1 md:px-1  ">
                    <button className=" hover:text-yellow">Gallery</button>
                  </div>
                </Link>

                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-1"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="px-1 ">
                    <button className=" hover:text-yellow">Contact</button>
                  </div>
                </Link>
              </div>

              <div className="flex items-center flex-row ">
                <button className="flex justify-between flex-row transition duration-500 font-semibold py-2 px-2 rounded-md shadow-sm bg-yellow text-black border-2 border-red hover:bg-white hover:text-red">
                  <a href="" target={"_blank"} className="px-1">
                    Get Ticket
                  </a>
                </button>
              </div>
            </div>
          )}

          {isMobile && isDropdownOpen && (
            <div className="text-black  py-4">
              <AiFillCloseCircle
                className="w-10 h-10 text-yellow cursor-pointer hover:w-9 hover:h-9 absolute xx:top-5 sm:top-8 right-7 "
                onClick={() => setIsDropdownOpen(false)}
              />

              {/* Add your mobile navigation links here */}
              <div className="flex flex-col justify-between items-center bg-black text-white rounded-md   py-6">
                <a href="/About">
                  <div className="px-3 py-3">
                    <button className=" hover:text-yellow">About</button>
                  </div>
                </a>

                <a href="/Schedule">
                  <div className="px-3 py-3 md:px-3">
                    <button className=" hover:text-yellow ">Schedule</button>
                  </div>
                </a>

                <a href="/Speakers">
                  <div className="px-3 py-3 md:px-3">
                    <button className=" hover:text-yellow">Speakers</button>
                  </div>
                </a>

                <a href="/GetInvolved">
                  <div className="px-3 py-3 md:px-3">
                    <button className=" hover:text-yellow">Get Involved</button>
                  </div>
                </a>

                <a href="/Gallery">
                  <div className="px-3 py-3 md:px-3  ">
                    <button className=" hover:text-yellow">Gallery</button>
                  </div>
                </a>

                <a href="/Contact">
                  <div className="px-3 py-3 md:px-3  ">
                    <button className=" hover:text-yellow">Contact</button>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative xx:h-[500px] sm:h-[500px] flex flex-col items-center justify-center z-10">
        <Caro
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          emulateTouch={true}
          swipeable={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
        >
          {slides.map((s, index) => (
            <div key={index} className="carousel-slide">
              <div className="relative w-full sm:h-[500px] h-[500px]">
                <img
                  className="w-full h-full filter brightness-50 object-cover object-center"
                  src={s.img}
                  alt="Slide Image"
                />

                <div className="absolute inset-2 left-2 flex justify-center bg-gradient-to-b from-transparent to-[#2f1f6d4e] bg-opacity-20"></div>
                <div className="absolute inset-0  flex flex-col justify-center bg-gradient-to-b from-transparent to-[#050212f0] bg-opacity-40 transition-all duration-300 hover:bg-opacity-40 sm:py-32 mt-[-3rem] sm:px-6 px-2 ">
                  <h1 className="font-bold outline-white xx:text-2xl sm:text-4xl text-transparent z-10 py-2">
                    Oyo State
                  </h1>

                  <h1 className="font-semibold outline-white text-transparent xx:text-3xl sm:text-4xl md:text-5xl py-4">
                    Digital Economy Summit Ibadan
                  </h1>

                  <h1 className="font-bold text-xl py-2 text-white">
                    19th June, 2024
                  </h1>

                  <div className="flex sm:flex-row xx:flex-col items-center justify-center py-4 sm:py-5 sm:pt-10 ">
                    <MdOutlineLocationOn className="w-6 h-6 text-yellow font-bold" />

                    <h1 className="px-2 flex text-md sm:text-xl outline-yellow ">
                      Trenchard Hall, University of Ibadan, Ibadan
                    </h1>
                  </div>

                  <div>
                    <Countdown />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Caro>
      </div>

      <div
        id="about"
        className="text-white py-5 px-2 bg-black border-b-2 flex xx:flex-col md:flex-row"
      >
        <div className="md:w-[50%] flex flex-col">
          <h1 className="py-2 text-xl text-yellow font-bold flex text-center justify-center">
            About OSDES
          </h1>
          <p className="px-5 text-lg flex justify-center text-justify  ">
            The Oyo State Digital Economy Summit Ibadan is a launchpad designed
            to ignite innovation and empower students and tech enthusiasts in
            Oyo State to actively participate in the digital economy. This
            summit will be a vibrant space for students, aspiring tech founders,
            and established professionals to connect, learn, and propel
            themselves forward in the exciting digital world.
          </p>

          <div className="flex px-5 py-4 items-center flex-row">
            <button className="flex justify-between flex-row text-md py-2 px-1 font-semibold rounded-md shadow-sm bg-yellow text-black transition duration-500 hover:bg-white hover:text-red">
              <a href="./pages/moreAbout" target={"_blank"} className="px-1">
                Learn more...
              </a>
            </button>
          </div>
        </div>
        <div className=" md:w-[50%] p-32 rounded-md flex justify-center text-xl  text-center bg-gray-400">Video</div>
      </div>

      <div
        id="schedule"
        className="text-red bg-white text-2xl p-20 border-b-2  text-center"
      >
        Schedule
      </div>

      <div
        id="speakers"
        className="text-red text-2xl bg-white p-20 border-b-2 text-center"
      >
        speakers
      </div>

      <div
        id="involved"
        className="text-red text-2xl bg-white p-20 border-b-2 text-center"
      >
        get involved
      </div>

      <div
        id="gallery"
        className="text-red text-2xl bg-white p-20 border-b-2 text-center"
      >
        gallery
      </div>

      <div
        id="contact"
        className="text-red text-2xl bg-white p-20 border-b-2 text-center"
      >
        contact
      </div>

      <footer className="p-10 text-2xl bg-black text-yellow text-center">
        footer
      </footer>
    </div>
  );
};

export default App;
