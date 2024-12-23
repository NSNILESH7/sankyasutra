import React from "react";
import Header from "./Header";
import BlueBall from "./spline/blueBall";
import Bulb from "./spline/Bulb";
import SubjectGrid from "./allSubject";
import Robot from "./spline/robot";
import Footer from "./Footer";
import Functional from "./Functional";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Header />

      <main className=" container mx-auto px-4 pt-20 md:pt-32 ">
        <div className=" max-w-4xl mx-auto text-center space-y-16 mb-28 ">
          <div className=" space-y-4 ">
            <div className=" space-y-6 ">
              <p className=" text-neutral-400 ">solve your Math</p>
              <h1 className=" text-5xl md:text-7xl font-semibold tracking-tight text-white ">
                Introducing Sankyasutra
              </h1>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap w-full md:w-full lg:w-full ">
          <div className=" w-full md:w-full lg:w-1/2  ">
            <BlueBall />
          </div>
          <div className=" w-full md:w-full lg:w-1/2  text-white ">
            <h3 className=" py-5 px-8 ">
              Step into the future of mathematics with Sankhyasutra, an advanced
              AI-powered calculator designed to revolutionize how you solve
              equations. Whether you’re tackling basic arithmetic, complex
              algebra, or intricate calculus, Sankhyasutra auto-completes
              equations, provides step-by-step solutions, and simplifies
              problem-solving like never before.
            </h3>
            <h2 className=" py-5 px-8 font-bold ">
              {" "}
              With its intuitive interface, Sankhyasutra empowers you to:
            </h2>
            <h3 className=" px-8 ">
              <ul>
                <li>⚪ Get instant and accurate solutions.</li>
                <li>
                  {" "}
                  ⚪ Explore step-by-step explanations for better understanding.
                </li>
                <li>
                  {" "}
                  ⚪ Solve equations across diverse mathematical fields,
                  including trigonometry, calculus,more....
                </li>
                <li> ⚪ Refine inputs with error detection and correction.</li>
              </ul>
            </h3>
          </div>
        </div>
        <div className=" flex justify-center gap-16  my-16 ">
          <div className="">
            <a
              href="http://localhost:5000/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-[0px_0px_27px_-11px_#ffffff] hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SankyaSura by drawing✏️
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
                  Draw with Mouse or Pad the Equation and Get the Solution.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="http://localhost:8501/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-[0px_0px_27px_-11px_#ffffff] hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SankyaSura by handGesture👆
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
                  Detects and interprets hand gestures using OpenCV's
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-full lg:w-full ">
          <div className="w-full md:w-full lg:w-1/2  text-white">
            <h3 className="py-5 px-8">
              The "Hand Gesture-Based Equation Solver" is a cutting-edge feature
              that leverages OpenCV and computer vision to recognize hand
              gestures via a live camera feed and solve equations in real-time.
              Instead of traditional input methods, users can simply perform
              predefined hand gestures, which are interpreted into mathematical
              symbols or operations. The solution is then displayed instantly,
              making this a unique and interactive approach to solving
              equations.
            </h3>
            <h2 className="py-5 px-8 font-bold">
              {" "}
              Key Features:
            </h2>
            <h3 className=" px-8">
              <ul>
                <li>⚪ Real-Time Gesture Recognition.</li>
                <li>
                  {" "}
                  ⚪ Dynamic Equation Display.
                </li>
                <li>
                  {" "}
                  ⚪  Instant Solution Generation

                </li>
                <li> ⚪  Error Correction.</li>
              </ul>
            </h3>
          </div>
          <div className="w-full md:w-full lg:w-1/2  ">
            <Bulb />
          </div>
        </div>
        <Functional />
        <SubjectGrid />
        <div className="w-full flex  h-auto">
          <Robot />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
