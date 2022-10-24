import React from "react";
import { BriefcaseIcon, LibraryIcon } from "@heroicons/react/solid";
import { workExp } from "../data";

export default function WorkExperience() {
  return (
    <section id="workExp">
      <div className="container px-5 py-10 mx-auto text-center">
        <BriefcaseIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <div className="flex flex-col m-4">
          {workExp.map((workExp) => (
              <div class="max-w-sm w-full max-w-full lg:flex text-left">
              <img class="h-48 lg:h-auto w-48 ml-2 bg-white mb-2" src={workExp.image} alt="Avatar of Company" />
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 text-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mb-4">
                      <div class="mb-8">
                          <div class="font-bold text-xl mb-1">{workExp.company}</div>
                          <p class="text-sm text-white-10 flex items-center mb-3">
                              {workExp.role}
                          </p>
                          <p class="text-base">{workExp.description}</p>
                      </div>
                      <div class="flex items-center">
                          <div class="text-sm">
                              <p class="leading-none">Start Date</p>
                              <p className="text-white-50">{workExp.start}</p>
                          </div>
                          { workExp.end.length?  
                          <div class="text-sm ml-5">
                              <p class="leading-none">End Date</p>
                              <p className="text-white-50">{workExp.end}</p>
                          </div> : null
                        }
                      </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
