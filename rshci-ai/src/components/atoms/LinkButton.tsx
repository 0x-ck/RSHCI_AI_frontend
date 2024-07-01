'use client';


interface Props {
    content:String;
}

const LinkButton = ({content}:Props) => {
    return (
        <div className="w-[250px] h-[50px] flex items-center justify-center rounded-[50px] bg-gradient-to-r from-green-500 to-indigo-400 hover:from-indigo-400 hover:to-green-500 hover:text-[#03093D] cursor-pointer transition ease-in-out delay-50">
            <p className="text-[24px] font-[700] font-sans">{content}</p>
        </div>
    )
}

export default LinkButton;