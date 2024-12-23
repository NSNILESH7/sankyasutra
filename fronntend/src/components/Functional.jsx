import React from "react";

const Functional = () => {
  return (
    <div className="flex flex-wrap w-full md:w-full lg:w-full my-5 lg:my-20 mx-4">
      <div className="w-full md:w-full lg:w-1/2  text-white p-6">
        <h2 className="text-2xl"> 1. Handwritten Equation 👆</h2>
        <h3 className="py-5 px-8">
          The "Draw with Mouse or Pad the Equation and Get the Solution" feature
          revolutionizes the way users interact with mathematical problems by
          providing an intuitive, user-friendly interface for solving equations.
          Instead of typing equations into a conventional text box, users can
          simply draw them using a mouse, touchpad, or stylus on a graphical
          input canvas. This feature combines advanced technologies like
          computer vision, optical character recognition (OCR), 
        </h3>
        <h2 className="py-5 px-8 font-bold"> Key Features:</h2>
        <h3 className=" px-8">
          <ul>
            <li>⚪ Interactive Drawing Interface</li>
            <li> ⚪ Real-Time Equation Recognition</li>
            <li> ⚪ Wide Range of Equation Types</li>
            <li> ⚪ Instant Mathematical Solutions .</li>
          </ul>
        </h3>
      </div>
      <div className="w-full md:w-full lg:w-1/2  text-white p-6">
        <h2 className="text-2xl"> 2. HndGesture👆</h2>
        <h3 className="py-5 px-8">
          The "Hand Gesture-Based Equation Solver" is a cutting-edge feature
          that leverages OpenCV and computer vision to recognize hand gestures
          via a live camera feed and solve equations in real-time. Instead of
          traditional input methods, users can simply perform predefined hand
          gestures, which are interpreted into mathematical symbols or
          operations. The solution is then displayed instantly, making this a
          unique and interactive approach to solving equations.
        </h3>
        <h2 className="py-5 px-8 font-bold"> Key Features:</h2>
        <h3 className=" px-8">
          <ul>
            <li>⚪ Real-Time Gesture Recognition.</li>
            <li> ⚪ Dynamic Equation Display.</li>
            <li> ⚪ Instant Solution Generation</li>
            <li> ⚪ Error Correction.</li>
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default Functional;
