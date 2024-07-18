import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHandSparkles } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Button } from "flowbite-react";
import SlidShow from "../Components/SlidShow";
import { useTheme } from "../Components/ThemeContext";

export default function Home() {
  const [time, setTime] = useState(new Date().getHours());
  const [greeting, setGreeting] = useState("Good Morning");
  const {theme, toggleTheme } = useTheme();

  const getGreeting = (time) => {
    if (time >= 12 && time < 16) {
      return "Good Afternoon";
    } else if (time >= 16) {
      return "Good Evening";
    } else {
      return "Good Morning";
    }
  };

  useEffect(() => {
    console.log(time);
    setGreeting(getGreeting(time));
  }, [time]);

  return (
    <div>
      <div className="md:min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-6xl">
          <div className="flex flex-col gap-6 p-6 md:p-28 bg-slate-500 text-white rounded-lg w-full md:w-3/5">
            <h1 className="text-3xl font-bold lg:text-6xl">{greeting}</h1>
            <p className="text-gray-200 text-xs sm:text-sm">
              Here you'll find a variety of jobs where you can accept to
              complete and get rewarded.
            </p>
            <Link
              to="/jobs"
              className="text-sm sm:text-sm text-teal-300 font-bold hover:underline"
            >
              View all listed jobs
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
          {theme === "light" ? <img
              src="https://www.21kschool.com/lk/wp-content/uploads/sites/24/2022/09/How-Online-Education-is-Better-Than-Classroom-Education.jpg"
              alt="homepageImg"
            /> : <img
            src="https://img.freepik.com/free-vector/cartoon-working-day-scene-illustration_52683-62609.jpg?t=st=1721326374~exp=1721329974~hmac=55d1cd3f07a53a275153e2a7e5e87c08a68ca84ca91a8c7576f246d5591b80a3&w=740"
            alt="homepageImg"
          />}
            
          </div>
        </div>
      </div>
      <div className="bg-stone-200 w-full p-10 dark:bg-violet-950">
        <h1 className="text-3xl font-bold">
          Safe and secure hiring for Micro Jobs
        </h1>
        <h2 className="text-xl font-sans font-thin">Online & Physical</h2>
        <div className="flex md:flex-row flex-col gap-5 mt-5">
          <div className="flex flex-row gap-8 items-center">
            <div className="text-lime-600 text-3xl">
              <FaStar />
            </div>
            <div className="md:max-w-60 min-w-44">
              <h2 className="font-semibold text-lg ">Develop Skills</h2>
              <p className="font-sans text-slate-500">
                Develop skills by helping your soroundings
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <div className="text-lime-600 text-3xl">
              <HiOutlineRocketLaunch />
            </div>
            <div className="md:max-w-60 min-w-44">
              <h2 className="font-semibold text-lg ">Protected payments</h2>
              <p className="font-sans text-slate-500">
                Hassle-free billing so you can focus on work that matters
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <div className="text-lime-600 text-3xl">
              <FaHandSparkles />
            </div>
            <div className="md:max-w-60 min-w-44">
              <h2 className="font-semibold text-lg ">Find quick assistance</h2>
              <p className="font-sans text-slate-500">
                Find people who can start right away and handle your job
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 justify-center mx-auto md:w-2/3  p-8">
        <Button outline size="xl" gradientDuoTone="purpleToBlue">
          FInd the job fits for you
        </Button>
        <Button outline size="xl" gradientDuoTone="cyanToBlue">
          Find someone to your Job
        </Button>
      </div>
      <div>
        <SlidShow />
      </div>
    </div>
  );
}
