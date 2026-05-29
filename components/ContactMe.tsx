import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

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
    // 1. Changed h-screen to min-h-screen and added padding (pt-24 pb-10) 
    // This allows the page to scroll safely if the user's screen is very small.
    <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center pt-24 pb-10">      
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      {/* 2. Increased vertical layout spacing from space-y-2 to space-y-4 */}
      <div className="flex flex-col space-y-4 md:space-y-6 2xl:space-y-7 w-fit max-w-4xl">
        {/* 3. Scaled down the mobile text size from text-3xl to text-xl */}
        <h4 className="text-xl md:text-4xl lg:text-5xl font-semibold text-center">
          I've got what you need.{" "}
          <span className="decoration-[#0a2af7]/50 underline">
            Let's Talk.
          </span>
        </h4>

        {/* Info Blocks - Scaled down mobile text to prevent long email wrapping breaks */}
        <div className="space-y-2 md:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl break-all px-2">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0a2af7] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput h-24 md:h-32 resize-none"
          />
          
          <button
            type="submit"
            className="bg-[#0a2af7] py-3 md:py-4 px-10 rounded-lg text-black font-bold text-lg hover:bg-[#0a2af7]/80 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;