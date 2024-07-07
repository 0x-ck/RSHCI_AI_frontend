import SignButton from "@/components/atoms/SignButton";


const Header = () => {
    return (
        <header className="w-full px-[20px] max-w-[1600px] bg-transparent flex flex-row justify-between items-center absolute left-[50%] translate-x-[-50%] z-10">
            <figure className="w-[100px]">
                <img src="/images/logo/logo.png" alt="" />
            </figure>
            <div className="hidden md:flex flex-row align-middle gap-5 xl:gap-20">
                <a href="#services" className="font-[400] text-[20px] text-[white] hover:animate-bounce">Services</a>
                <a href="#system" className="font-[400] text-[20px] text-[white] hover:animate-bounce">System</a>
                <a href="#benifits" className="font-[400] text-[20px] text-[white] hover:animate-bounce">Benifits</a>
                <a href="#contact" className="font-[400] text-[20px] text-[white] hover:animate-bounce">Contact</a>
            </div>
            <div className="hidden sm:flex flex-row align-middle gap-[20px]">
                <SignButton content={"LogIn"}/>
                <SignButton content={"SignUp"}/>
            </div>
            <span className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center gap-1 border-[1px] border-white rounded-[50%] sm:hidden">
                <span className="block w-[20px] h-[2px] bg-white"></span>
                <span className="block w-[20px] h-[2px] bg-white"></span>
                <span className="block w-[20px] h-[2px] bg-white"></span>
            </span>
        </header>
    )
}

export default Header;