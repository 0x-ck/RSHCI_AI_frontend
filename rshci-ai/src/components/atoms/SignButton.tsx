'use client';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  content: string;
}

const SignButton = ({ content }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const link = content === 'LogIn' ? 'sign_in' : 'sign_up';
    router.push(`/accounts/${link}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-[130px] h-[40px] flex justify-center items-center rounded-[30px] border-[1px] border-white bg-transparent cursor-pointer hover:animate-ping"
    >
      <p className="text-[20px] text-[white] font-[400] font-sans">{content}</p>
    </button>
  );
};

export default SignButton;