import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";
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

      <div className="flex flex-col relative space-y-2 md:space-y-6 2xl:space-y-7">
        <h4 className="mt-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          I've got what you need.{" "}
          <span className="decoration-[#0a2af7]/50 underline">
            {" "}
            Let's Talk.
          </span>
        </h4>

        {/* Phone */}
        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">{pageInfo?.email}</p>
          </div>
          {/* Map Pin */}
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
            />{" "}
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
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
            className="contactInput h-30 md:h-25"
          />
          <button
            type="submit"
            className="bg-[#0a2af7] py-3 md:py-5 px-10 rounded-lg text-black font-bold text-lg hover:bg-[#0a2af7]/80 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
