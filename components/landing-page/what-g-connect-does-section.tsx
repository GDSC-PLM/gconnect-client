import Image from "next/image";
import { Container } from "../ui/container";

export default function WhatGConnectDoes() {
  return (
    <section className="text-neutral-600 w-full">
      <div className="bg-indigo-100">
        <Container>
          <div className="flex justify-center items-center text-center flex-col mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold pt-10 md:pt-20">
              What <span className="text-orange-400">G-Connect</span> Does?
            </h2>
            <p className="text-md lg:text-lg text-zinc-400">
              Find and connect with study buddies.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row ">
            <Image
              src="gconnect-home-preview.svg"
              alt="Home Preview"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[100%] lg:w-[50%] h-auto rounded-t-lg"
            />
            <div className="mb-6 basis-[40%] md:p-0 lg:p-10 flex flex-col justify-center items-start">
              <p className="text-lg w-full lg:w-72 text-left font-bold mb-4">
                Find a study buddy who is compatible with you
              </p>
              <p className="text-md text-left">
                G-Connect matches you with other students based on your courses,
                interests, and availability. This means that you&apos;re more
                likely to find a study buddy who is a good fit for you.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="mb-10">
        <Container>
          <div className="flex justify-center items-center flex-col lg:flex-row ">
            <Image
              src="gconnect-messages-preview.svg"
              alt="Messages Preview"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[100%] lg:w-[50%] h-auto rounded-b-lg shadow-md"
            />

            <div className="mt-6 basis-[40%] md:p-0 lg:p-10 flex flex-col justify-center items-start">
              <p className="text-lg w-full lg:w-72 text-left font-bold mb-4">
                Get help with your coursework
              </p>
              <p className="text-md text-left">
                If you&apos;re struggling with a particular course, your study
                buddy can help you to understand the material and practice
                answering questions.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
