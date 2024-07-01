import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentItemValue } from "@/store/features/user";
import { appendMessage } from "@/store/features/utils";

const SignUpForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const dispatch = useAppDispatch();

  const currentItem = useAppSelector((state) => state.user.item.form);
  const errors = useAppSelector((state) => state.user.item.errors);

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
  };

  return (
    <form onSubmit={handlesubmit} className="w-full flex flex-col">
      <h3 className="text-[16px] text-[#111] font-sans font-bold pb-[10px]">
        Name:
      </h3>
      <input
        type="text"
				value={currentItem.name}
				onChange={e => dispatch(setCurrentItemValue({ name: e.target.value }))}
        className="w-full rounded-[5px] p-[10px] bg-[#c5c5c5] border-[#d1a2a2] text-[#111] mb-[20px]"
        placeholder="Name"
      />
      <h3 className="text-[16px] text-[#111] font-sans font-bold pb-[10px]">
        Email:
      </h3>
      <input
        type="text"
				value={currentItem.email}
				onChange={e=>{dispatch(setCurrentItemValue({email: e.target.value}))}}
        className="w-full rounded-[5px] p-[10px] bg-[#c5c5c5] border-[#d1a2a2] text-[#111] mb-[20px]"
        placeholder="Email"
      />
      <h3 className="text-[16px] text-[#111] font-sans font-bold pb-[10px]">
        Phone Number:
      </h3>
      <input
        type="text"
				value={currentItem.phone}
				onChange={e=>{dispatch(setCurrentItemValue({phone: e.target.value}))}}
        className="w-full rounded-[5px] p-[10px] bg-[#c5c5c5] border-[#d1a2a2] text-[#111] mb-[20px]"
        placeholder="Phone number"
      />
      <h3 className="text-[16px] text-[#111] font-sans font-bold pb-[10px]">
        Password:
      </h3>
      <input
        type="password"
				value={currentItem.password}
				onChange={e=>{dispatch(setCurrentItemValue({password: e.target.value}))}}
        className="w-full rounded-[5px] p-[10px] bg-[#c5c5c5] border-[#d1a2a2] text-[#111]"
        placeholder="Password"
      />
      <h3 className="text-[16px] text-[#111] font-sans font-bold pb-[10px]">
        Password Confirm:
      </h3>
      <input
        type="password"
				value={currentItem.confirm_password}
				onChange={e=>{dispatch(setCurrentItemValue({confirm_password: e.target.value}))}}
        className="w-full rounded-[5px] p-[10px] bg-[#c5c5c5] border-[#d1a2a2] text-[#111]"
        placeholder="Password Confirm"
      />
      <button
        className="w-[200px] sm:w-[230px] h-[50px] flex items-center justify-center justify-self-center self-center rounded-[50px] bg-gradient-to-r from-green-500 to-indigo-400 hover:from-indigo-400 hover:to-green-500 hover:text-[#03093D] cursor-pointer transition ease-in-out delay-50 text-[24px] font-[700] font-sans mt-[30px] mb-[10px] "
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
