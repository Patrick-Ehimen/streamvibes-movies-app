import { Button } from ".";

const Faq = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col md:ml-[100px] mx-[20px] mt-[100px]">
        <div className="flex flex-col">
          <div className="flex text-[28px] font-bold">
            Frequently Asked Questions
          </div>
          <p className="text-neutral-400 text-base font-normal">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>

        <div className="md:mx-[100px] ">
          <Button
            text="Ask a Question"
            image=""
            className="w-[150px] pl-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
