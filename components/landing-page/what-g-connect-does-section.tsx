import Image from "next/image";

export default function WhatGConnectDoes() {
    return (
        <div className="text-neutral-600">
            <div className="w-screen bg-indigo-100">
                <div className="flex justify-center items-center text-center flex-col">
                    <h2 className="text-6xl font-semibold mb-8 mt-20">
                        What <span className="text-orange-400">G-Connect</span> Does
                    </h2>
                    <p className="text-3xl text-23 mb-36">
                        Find and connect with study buddies.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-20">
                    <div className="">
                        <Image
                            src="gconnect-home-preview.svg"
                            alt="Home Preview"
                            width={951.51}
                            height={621.71}
                        />
                    </div>
                    <div className="w-[28%]">
                        <p className="text-4xl font-bold mb-9">
                            Find a study buddy who is compatible with you
                        </p>
                        <p className="text-2xl">
                            G-Connect matches you with other students based on your courses, interests, and availability. This means that you're more likely to find a study buddy who is a good fit for you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-20">
                <div className="">
                    <Image
                        src="gconnect-messages-preview.svg"
                        alt="Messages Preview"
                            width={951.51}
                            height={621.71}
                    />
                </div>
                <div className="w-96 w-[28%]">
                    <p className="text-4xl font-bold mb-9">
                        Get help with your coursework
                    </p>
                    <p className="text-2xl">
                        If you're struggling with a particular course, your study buddy can help you to understand the material and practice answering questions.
                    </p>
                </div>
            </div>
        </div>
    );
}
