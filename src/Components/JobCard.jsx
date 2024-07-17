import { FaArrowAltCircleLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function JobCard(prop) {
  return (
    <div className="max-w-sm border-2 shadow-md w-80 m-2">
      <div className="flex flex-col ">
        <div className="">
          <img className="w-full h-52" src={prop.img}/>
        </div>
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {prop.title}
          </h5>
          <p className="font-normal h-20 text-gray-500 dark:text-gray-400 line-clamp-3">
            {prop.info}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Rs.{prop.pay}
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
