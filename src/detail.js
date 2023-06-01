import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const { data, setData} = state;
  console.log(id);
  useEffect(() => {
    if (id !== null) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  return (
    <section id="detail" className="bg-slate-900 pt-36 text-white">
      <h1 className="font-bold text-3xl items-center text-center">
        Detail Lowongan Pekerjaan
      </h1>
      <div className="mx-auto max-w-screen-xl w-full flex-wrap px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex justify-center">
        <div className="max-w-xl w-full px-2 pt-5">
          <img  className="m-auto" alt="Office" src={data !== null && data.company_image_url}></img>
        </div>
        <div className="mx-auto max-w-screen-xl w-full  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8  justify-center">
          <h3 className="text-center text-4xl font-medium text-gray-900 dark:text-white">
            {data !== null && data.company_name}
          </h3>
          <p className="mt-4 text-center text-xl text-gray-600 dark:text-gray-400">
            {data !== null && data.title}
          </p>
          <p className="mt-4 text-2sm/relaxed text-gray-600 dark:text-gray-400">
            <span className="font-bold text-white">Location: </span>
            {data !== null && data.company_city}
          </p>
          <p className="mt-2 text-2sm/relaxed text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white ">Job Type : </span>
            {data !== null && data.job_type}
          </p>
          <p className="mt-2 text-2sm/relaxed text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Tenure : </span>
            {data !== null && data.job_tenure}
          </p>
          <p className="mt-2 text-2sm/relaxed text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Salary : </span>
            {data !== null && data.salary_min} - {data !== null && data.salary_max}
          </p>
          <p className="mt-2 text-2sm/relaxed text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Description : </span>
            {data !== null && data.job_description}
          </p>
          <p className="mt-2 text-2sm/relaxed text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Requirement : </span>
            {data !== null && data.job_qualification}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
