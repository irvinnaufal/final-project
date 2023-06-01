import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Lowongan = () => {
  const { state } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;
  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  return (
    <section id="lowongan" className="bg-slate-900 pt-36 text-white">
      <h1 className="font-bold text-3xl items-center text-center">
        Lowongan Pekerjaan
      </h1>
      <div className="mx-auto max-w-screen-xl w-full flex-wrap px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex justify-center">
        {data !== null &&
          data.map((res) => {
            return (
              <div className="max-w-xl w-1/2 px-2 pt-10">
                <Link to={`/detail/${res.id}`} key={res.id}> 
                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
                  <img
                    alt="Office"
                    src={res.company_image_url}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {res.title}
                      </h3>
                    </a>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                      {res.job_description}
                    </p>
                    <a
                      href="/detail/"
                      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                      Find out more
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
                </Link>
              </div>
            );
          })}
        {/* <div className="max-w-xl w-1/2 px-2 ">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        </div> */}
      </div>
    </section>
  );
};

export default Lowongan;
