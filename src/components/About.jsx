import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Abdelouahab Elhassnaoui, 26 years old, born in Tinghir, Morocco. 
        I have completed my studies at Youcode, specializing in web and mobile development.
         
        </p>

        <br />

        <p className="text-xl">
          I possess 3 years of experience in building and designing Full Stack applications using JavaScript.
          My current focus is on developing web applications using technologies such as React, Node.js, Express.js, Tailwind, Next.js, and React Native.
        </p>
      </div>
    </div>
  );
};

export default About;
