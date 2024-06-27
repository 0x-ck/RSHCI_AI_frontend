'use client';

interface Props {
    content:String;
}

const SignButton = ({content}:Props) => {
    return (
        <div className="w-[130px] h-[40px] flex justify-center items-center rounded-[30px] border-[1px] border-white bg-transparent cursor-pointer hover:animate-ping">
            <p className="text-[20px] font-[400] font-sans">{content}</p>
        </div>
    )
}

export default SignButton;