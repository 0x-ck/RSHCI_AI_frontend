import LoginForm from "@/components/atoms/LoginForm";

const SignIn = () => {

    

    return (
        <div className="w-full flex flex-row justify-between bg-gradient-to-b from-lime-300 to-blue-500">
            <div className="w-full h-screen sm:w-[50%] flex justify-center items-center p-[20px] ">
                <div className="w-full max-w-[700px] flex flex-col justify-center items-center bg-[#fff] p-[30px] rounded-[20px]">
                    <h1 className="text-[50px] font-[700] text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center">Log In</h1>
                    <LoginForm/>
                    <a href="/accounts/sign_up" className="text-[16px] text-[#2f6da7] font-sans font-normal underline cursor-pointer">Create New Account</a>
                </div>
            </div>
            <figure className="hidden sm:block w-[50%] h-screen ">
                <img src="/images/signin/signin.jpg" alt="" className="w-full h-full object-cover rounded-tl-[50px] " />
            </figure>
        </div>
    )
}

export default SignIn;