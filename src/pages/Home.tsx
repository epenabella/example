import HeroImg from '../assets/images/hero.webp';
// import { useState } from "react";

// const getUsers = async function () {
//   const res = await fetch("http://localhost:5175/api/user-profiles");
//   return await res.json();
// };

const Home = () => {
  // const [users, setUsers] = useState<any[]>();
  return (
    <>
<>
  {/* Hero */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20">
    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-start">
      <div>
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
          Hire <span className="text-volvo-blue-light">Rick Penabella</span> today
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
          8+ years of Full-Stack Development namely React & C#
        </p>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-600">
          Most recently on the SMA Dev Ops team but have picked up Nodejs, express with SSR, and TypeORM
        </p>


        {/* Buttons */}
        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-volvo-blue-light hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue-light focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Get started
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </a>

        </div>
        {/* End Buttons */}
        {/* Review */}

      </div>
      {/* End Col */}
      <div className="relative ml-4">
        <img
          className="w-full rounded-md"
          src={HeroImg}
          alt="Rick's Family"
        />
        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
        {/* End SVG*/}
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Hero */}
</>
<>
        {/* Testimonials */}
        <div className="overflow-hidden">
    <div className="relative max-w-[85rem] py-20 px-3 sm:px-6 lg:py-24 mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-volvo-blue">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                " With Preline, we're able to easily track our performance in
                full detail. It's become an essential tool for us to grow and
                engage with our audience. "
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-volvo-blue-light">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow ml-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Josh Tyson
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Product Manager | Capsule
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-volvo-blue">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                " In September, I will be using this theme for 2 years. I went
                through multiple updates and changes and I'm very glad to see
                the consistency and effort made by the team. "
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-volvo-blue-light">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow ml-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Luisa
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Senior Director of Operations | Fitbit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-volvo-blue">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
                " Refreshing and Thought provoking design and it changes my view
                about how I design the websites. Great typography, modern clean
                white design, nice tones of the color. "
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-volvo-blue-light">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow ml-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Alisa Williams
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Entrepreneur | Happy customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Grid */}
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Accuracy rate
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            99.95%
          </p>
          <p className="mt-1 text-gray-400">in fulfilling orders</p>
        </div>
        {/* End Stats */}
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Startup businesses
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            2,000+
          </p>
          <p className="mt-1 text-gray-400">partner with Preline</p>
        </div>
        {/* End Stats */}
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Happy customer
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            85%
          </p>
          <p className="mt-1 text-gray-400">this year alone</p>
        </div>
        {/* End Stats */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Testimonials */}
</>

    </>
  );
};

export default Home;
