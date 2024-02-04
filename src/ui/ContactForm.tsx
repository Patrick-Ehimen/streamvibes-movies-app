import { useState } from "react";
import { ContactImg } from "../assets";
import { form } from "../constants";
import { Button } from ".";

const ContactForm = () => {
  // Initialize state for each form field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform form validation and submission logic here
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="md:ml-[100px] ml-[20px] mt-[100px] md:mt-[200px] flex flex-col lg:flex-row ">
      <div className="flex flex-col">
        <div className="font-manrope font-bold text-[38px]">
          Welcome to our Support page!
        </div>
        <div className="font-regular text-[16px] text-neutral-400 m-2">
          We're here to help you with any problems you may be{" "}
          <br className="hidden md:flex" /> having with our product.
        </div>
        <div>
          <img src={ContactImg} alt="img" className="pr-[10px]" />
        </div>
      </div>

      <div className="border lg:ml-[100px] md:mr-[80px] rounded-lg border-[#262626] bg-[#141414] mr-[20px] my-[50px] md:my-[50px] lg:my-[0px]">
        <form
          onSubmit={handleSubmit}
          className="md:grid grid-cols-2 py-[50px] px-[20px]"
        >
          {form.map((field) => {
            switch (field.title) {
              case "First Name":
                return (
                  <div className="flex flex-col pr-[50px] text-[#E4E4E7] mb-[30px]">
                    <div className="pb-[10px]">{field.title}</div>
                    <input
                      key={field.id}
                      type="text"
                      placeholder={field.title}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-[#1a1a1a9a] input-placeholder p-[10px] w-[300px] md:w-[200px] border rounded-lg border-[#262626] pt-[5px]"
                    />
                  </div>
                );
              case "Last Name":
                return (
                  <div className="flex flex-col text-[#E4E4E7] mb-[30px]">
                    <div className="pb-[10px]">{field.title}</div>
                    <input
                      key={field.id}
                      type="text"
                      placeholder={field.title}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-[#1a1a1a9a] input-placeholder p-[10px] w-[300px] md:w-[200px] border rounded-lg border-[#262626] pl-[5px] pt-[5px]"
                    />
                  </div>
                );
              case "Email":
                return (
                  <div className="flex flex-col  p-[] text-[#E4E4E7] mb-[30px]">
                    <div className="pb-[10px]">{field.title}</div>
                    <input
                      key={field.id}
                      type="email"
                      placeholder={field.title}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#1a1a1a9a] input-placeholder p-[10px] w-[300px] md:w-[200px] border rounded-lg border-[#262626] pt-[5px]"
                    />
                  </div>
                );
              case "Phone Number":
                return (
                  <div className="flex flex-col text-[#E4E4E7] mb-[30px]">
                    <div className="pb-[10px]">{field.title}</div>
                    <input
                      key={field.id}
                      type="tel"
                      placeholder={field.title}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-[#1a1a1a9a] input-placeholder p-[10px] w-[300px] md:w-[200px] border rounded-lg border-[#262626] pt-[5px]"
                    />
                  </div>
                );
              case "Message":
                return (
                  <div className="flex flex-col">
                    <div className="pb-[10px]">{field.title}</div>
                    <textarea
                      key={field.id}
                      placeholder={field.title}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-[#1a1a1a9a] input-placeholder p-[10px] w-[300px] h-[150px] md:w-[500px] md1:w-[550px] lg:w-[400px] xl:w-[500px] border rounded-lg border-[#262626] pt-[5px]"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </form>

        <div className="flex flex-col">
          <div className="ml-[20px]">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="border border-[#262626] bg-[#141414]"
            />
            <label htmlFor="agree" className="text-[#999] px-2">
              I agree with the terms of use and privacy poliy.
            </label>
          </div>

          <Button
            text="Submit"
            image=""
            className="w-fit ml-[20px] pl-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
