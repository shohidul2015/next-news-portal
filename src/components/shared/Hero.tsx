"use client";

import React from "react";
import { clsx } from "clsx";
import { Button } from "../ui/button";
import Image from "next/image";
//import hImage from "/public/assets/globe.svg";
//import { heroImage } from '@public/heroImage';
//<Image src={hImage} alt="Example" width={500} height={300} />

const Hero = () => {
  return (
    <div className="bg-slate-100">
      <div className="py-5 px-4 lg:px-8 flex md:flex-col-2 sm:flex-col-1 items-center gap-8">
        {/*Image here grid grid-cols-1 lg:grid-cls-2*/}
        <div className="w-2/4">
          {/* <Image
            src="/assets/heroImage.jpg"
            alt="Example"
            height={500}
            width={500}
            blurDataURL="data:..."
            placeholder="blur"
          /> */}
          <h1>Image will be here!</h1>
        </div>

        {/*Description here! */}
        <div className="w-2/4 space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-bold">
            Open AI is Growing Fast and Buring Throgh Piles of Money!!
          </h2>
          <p>
            Open AI id groung Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas, est adipisci. Soluta dolor voluptatum, id
            laudantium hic sunt assumenda sed quas fuga officiis sapiente
            commodi doloremque ...
          </p>
          <br />

          <p className="pb-2">
            It is true that Open AI is growing fat and Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officia esse facere recusandae.
            Molestias cupiditate laudantium, quasi at repudiandae ipsum dolores
            nam, eius animi ...
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
