import LinkButton from "./LinkButton";

const TopForm = () => {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col items-left gap-2">
          <p className="text-[20px] text-[#1199FA] font-sans font-[500]">
            Name:
          </p>
          <input
            type="text"
            className="w-full rounded-[5px] bg-white text-[14px] p-[10px] text-[#1b1b1b]"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col items-left gap-2">
          <p className="text-[20px] text-[#1199FA] font-sans font-[500]">
            Disires:
          </p>
          <input
            type="text"
            className="w-full  rounded-[5px] bg-white text-[14px] p-[10px] text-[#1b1b1b] "
            placeholder="Disires"
          />
        </div>
        <div className="flex flex-col items-left gap-2">
          <p className="text-[20px] text-[#1199FA] font-sans font-[500]">
            Email:
          </p>
          <input
            type="text"
            className="w-full rounded-[5px] bg-white text-[14px] p-[10px] text-[#1b1b1b] "
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col items-left gap-2">
          <p className="text-[20px] text-[#1199FA] font-sans font-[500]">
            Phone:
          </p>
          <input
            type="text"
            className="w-full  rounded-[5px] bg-white text-[14px] p-[10px] text-[#1b1b1b] "
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-left gap-2 pt-[10px] pb-[30px]">
        <p className="text-[20px] text-[#1199FA] font-sans font-[500]">
          Message:
        </p>
        <textarea
          name="message"
          className="w-full min-h-[200px]  p-[10px] text-[14px] text-[#1b1b1b] rounded-[5px] bg-white"
          placeholder="Enter your message here..."
          id=""
        ></textarea>
      </div>
      <button
        className="w-[200px] sm:w-[230px] h-[50px] flex items-center justify-center justify-self-center self-center rounded-[50px] bg-gradient-to-r from-green-500 to-indigo-400 hover:from-indigo-400 hover:to-green-500 hover:text-[#03093D] cursor-pointer transition ease-in-out delay-50 text-[24px] font-[700] font-sans mt-[30px] mb-[10px] "
        type="submit"
      >
        Send
      </button>
    </div>
  );
};

export default TopForm;
