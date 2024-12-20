import React from "react";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2024 -{" "}
                <a href="https://github.com/Hieunc2910/Project_IT3180">
                  Nhóm 3 - IT3180 - 154019
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}