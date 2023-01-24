import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nikhil Vallore.
            <br className="hidden lg:inline-block" />
            <p className="font-small sm:text-2xl">Software Engineer with passion and experience to build web and mobile applications using out-of-the-box creativity.</p>
          </h1>
          <p className="mb-8 leading-relaxed">
            As a Full stack developer, I am passionate about using the latest tools and technology to solve real-world problems and I strongly believe in the power of mentorship. My mentees appreciate my clear and concise teaching style, and ability to explain complex concepts in an easy-to-understand way. I have mentored several aspiring software developers to master the skills they need to succeed in the tech industry and also students to clear interviews and write research papers. I am also a strong believer in Web3(It will seriously blow your mind 🤯) And have a good knowledge of building DApp on Ethereum Blockchain.
          </p>
          <div className="flex justify-center">
            <a
              href="https://topmate.io/vallore_nikhil"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Book a 1:1
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Nikhil Skills Banner"
            src="./portfolio_banner.png"
            // src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
