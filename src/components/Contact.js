import React from "react";
import { ChatIcon } from "@heroicons/react/solid";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center">
        <ChatIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Schedule Call With ME!!
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Let's Catch Up!!
          </p>
        <div className="flex m-4 mx-auto justify-center">
          <button onClick={()=> window.open("https://koalendar.com/e/meet-with-nikhil-vallore/", "_blank")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded large" >Click Here To Schedule</button>
        </div>
      </div>
    </section>
  );
}
