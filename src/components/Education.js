import React from "react";
import { OfficeBuildingIcon, LibraryIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <OfficeBuildingIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education
        </h1>
        <div className="flex m-4">
          {education.map((education) => (
              <div className="flex flex-row bg-gray-800 bg-opacity-40 p-8 rounded w-full">
                <div className="flex flex-col">
                  <LibraryIcon className="block w-8 text-gray-500 mb-4" />
                  <img
                    className="object-cover object-center rounded"
                    style={{ "width": "40%" }}
                    alt="Education Institue Logo"
                    src={education.image}
                    // src="./coding.svg"
                  />
                </div>
                <div class="flex flex-col text-sm justify-center text-left">
                    <p class="flex items-center  text-gray-500  mt-4">
                        <span class="font-semibold mr-2 text-xs uppercase">College:</span>
                        <span>{education.college}</span>
                    </p>
                    <p class="flex items-center  text-gray-500 mt-4">
                        <span class="font-semibold mr-2 text-xs uppercase">Course:</span>
                        <span>{education.title}</span>
                    </p>
                    <p class="flex items-center  text-gray-500 mt-4">
                        <span class="font-semibold mr-2 text-xs uppercase">Degree:</span>
                        <span>{education.subTitle}</span>
                    </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
