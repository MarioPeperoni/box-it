"use client";

import { Formik, Form, Field } from "formik";

import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBox = () => {
  const handleSubmit = (values: any) => {
    console.log(values.searchQuery);
  };
  return (
    <Formik initialValues={{ searchQuery: "" }} onSubmit={handleSubmit}>
      <Form>
        <div className="bg-orange-100 p-10">
          <div className=" flex w-full items-center justify-center gap-2 px-10">
            <div className="flex h-16 max-w-2xl flex-1 items-center rounded-full bg-white p-5 shadow-sm">
              <HiMagnifyingGlass size={24} />
              <Field
                type="search"
                name="searchQuery"
                placeholder="Search for items"
                className="w-full p-3 text-lg font-light focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="flex h-16 items-center justify-center gap-2 rounded-full border-l-[1px] bg-white p-5 shadow-sm transition hover:bg-orange-300"
            >
              <span className="font-semibold">Search</span>
              <HiMagnifyingGlass size={24} />
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBox;
