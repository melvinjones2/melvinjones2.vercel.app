import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/pages/api/typings";
import { urlFor } from "@/sanity";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:melvindjones400@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#0a2af7]/50 underline">
            {" "}
            Let's Communicate.
          </span>
        </h4>

        <div>
          {/* Phone */}
          <div className="flex items-center space-x-5 space-y-2 justify-center">
            <PhoneIcon className="text-[#0a2af7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">
              {pageInfo?.phoneNumber}
            </p>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-5 space-y-2 justify-center">
            <EnvelopeIcon className="text-[#0a2af7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>
          {/* Map Pin */}
          <div className="flex items-center space-x-5 space-y-2 justify-center">
            <MapPinIcon className="text-[#0a2af7] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#0a2af7] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#0a2af7]/80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
