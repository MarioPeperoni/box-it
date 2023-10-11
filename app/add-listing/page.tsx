"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import { twMerge } from "tailwind-merge";

import Button from "../components/Button";
import PhotoGrid from "./components/PhotoGrid";
import Dropdown from "./components/Dropdown";
import CategoriesDropdown from "./components/CategoriesDropdown";

const AddListing = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    title: yup.string().min(10).max(50).required("Title is required"),
    description: yup.string().min(30).required("Description is required"),
    images: yup.array().min(1).required("At least one image is required"),
    price: yup.number().required("Price is required"),
    shippingPrice: yup.number().required("Shipping price is required"),
    condition: yup.string().required("Condition is required"),
    category: yup.string().required("Category is required"),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        images: [],
        price: "",
        shippingPrice: "",
        condition: "",
        category: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-6 bg-orange-100 p-16">
          <h1 className="text-3xl font-bold tracking-wide">
            Add new item listing
          </h1>
          <div className="flex flex-col gap-5 bg-white p-5">
            <h2 className="text-xl font-semibold">Basic information</h2>
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-light">
                Listing title*
              </label>
              <Field
                id="title"
                name="title"
                placeholder="ex. Brand new iPhone 11"
                className={twMerge(
                  "h-14 rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary lg:w-[60%]",
                  touched.title &&
                    errors.title &&
                    "border-red-500 focus:border-red-500",
                )}
                required
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-light">
                Category*
              </label>
              <CategoriesDropdown
                errors={errors.category}
                touched={touched.category}
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="bg-white p-5">
            <h2 className="text-xl font-semibold">Photos</h2>
            <div className="flex flex-col">
              <label className="pb-1 text-sm font-light">
                Add a photo to your listing
              </label>
              <PhotoGrid errors={errors.images} touched={touched.images} />
              <ErrorMessage
                name="photos"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="bg-white p-5">
            <h2 className="text-xl font-semibold">Description</h2>
            <div className="flex flex-col">
              <label htmlFor="description" className="sr-only">
                Description of your listing
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                required
                placeholder="Write a description of your listing"
                className={twMerge(
                  "h-64 rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary lg:w-[60%]",
                  touched.description &&
                    errors.description &&
                    "border-red-500 focus:border-red-500",
                )}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-white p-5">
            <h2 className="text-xl font-semibold">Price and condition</h2>
            <div id="condition-radio">
              <label htmlFor="condition" className="text-sm font-light">
                Item condition
              </label>
              <div>
                <Dropdown
                  items={["New", "Used", "Broken"]}
                  title="Select item condition"
                  id="condition"
                  errors={errors.condition}
                  touched={touched.condition}
                />
                <ErrorMessage
                  name="condition"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm font-light">
                Item price
              </label>
              <div className="flex gap-1">
                <Field
                  id="price"
                  name="price"
                  required
                  placeholder="Item price"
                  className={twMerge(
                    "h-14 w-full rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary lg:w-[20%]",
                    touched.price &&
                      errors.price &&
                      "border-red-500 focus:border-red-500",
                  )}
                />
                <span className="flex h-14 w-14 items-center justify-center rounded-md border-neutral-300 bg-gray-100 text-xl">
                  €
                </span>
              </div>
              <ErrorMessage
                name="price"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label htmlFor="shippingPrice" className="text-sm font-light">
                Shipping price
              </label>
              <div className="flex gap-1">
                <Field
                  id="shippingPrice"
                  name="shippingPrice"
                  required
                  placeholder="Shipping price"
                  className={twMerge(
                    "h-14 w-full rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary lg:w-[20%]",
                    touched.shippingPrice &&
                      errors.shippingPrice &&
                      "border-red-500 focus:border-red-500",
                  )}
                />
                <span className="flex h-14 w-14 items-center justify-center rounded-md border-neutral-300 bg-gray-100 text-xl">
                  €
                </span>
              </div>
              <ErrorMessage
                name="shippingPrice"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div className="hidden bg-white p-5">
            <h2 className="text-xl font-semibold">Detailed information</h2>
          </div>
          <div className="flex justify-end gap-8 bg-white p-5">
            <Button type={"button"}>Preview listing</Button>
            <Button type={"submit"} primary>
              Add your listing
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddListing;
