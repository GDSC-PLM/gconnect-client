import WhatGConnectDoes from "@/components/landing-page/what-g-connect-does-section";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="bg-gray-500 p-20 rounded-lg transition-all ease-in-out duration-200 hover:bg-green-500">
          Home
        </h1>
      </main>
      <WhatGConnectDoes />
    </>
  );
}
