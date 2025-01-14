import React from "react";
import Back from "../common/Back";
import img from "../images/pricing.jpg";

export default function Contact() {
  return (
    <div>
      <section className="contact">
        <Back
          name={"Contact Us"}
          title={"Get Helps & Friendly Support"}
          cover={img}
        />
        <div className="mt-[60px]">
          <div className="container mx-auto px-4">
            <form className="p-8 rounded-md shadow-lg bg-white max-w-[600px] mx-auto">
              <h4 className="text-xl font-semibold pt-2 pb-3 text-gray-500 text-center">
                Fill The Form
              </h4>
              <div className="flex flex-col md:flex-row justify-between gap-3">
                <input
                  className="border rounded-md py-3 px-4 w-full"
                  type="text"
                  placeholder="Name"
                  name=""
                  id=""
                />
                <input
                  className="border rounded-md py-3 px-4 w-full"
                  type="text"
                  placeholder="Email"
                  name=""
                  id=""
                />
              </div>
              <input
                className="border rounded-md py-3 px-4 w-full mt-4"
                type="text"
                placeholder="Subject"
                name=""
                id=""
              />
              <textarea
                className="border rounded-md py-3 px-4 w-full mt-4"
                name=""
                id=""
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <button className="bg-green-500 rounded-full py-4 px-7 mt-6 text-white w-full hover:bg-green-600">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
