const Footer = () => {
    return (

        <footer className="w-full flex flex-col items-center bg-[#010427] pt-[50px] p-[20px]">
            <div className="w-full max-w-[1000px] flex flex-col items-center sm:items-start sm:flex-row gap-[30px] justify-between">
                <figure className="w-[200px]">
                        <img src="./images/logo/logo.png" alt="" />
                </figure>
                <div className="w-full max-w-[400px] flex flex-row items-start justify-between pb-[50px]">
                    <div className="flex flex-col justify-start items-end gap-8">
                        <h1 className="text-[24px] font-sans text-right font-bold text-[#fff]">Quick Link</h1>
                        <a href="#services" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Services</a>
                        <a href="#benifits" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Benifits</a>
                        <a href="#system" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">System</a>
                        <a href="#contact" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Contact</a>
                    </div>
                    <div className="flex flex-col justify-start items-end gap-8">
                        <h1 className="text-[24px] font-sans text-right font-bold text-[#fff]">Useful Link</h1>
                        <a href="" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Cookie Policy</a>
                        <a href="" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Private Privacy</a>
                        <a href="" className="text-[16px] text-[#fff] font-[400] font-sans text-right hover:animate-pulse">Terms of Use</a>
                    </div>
                </div>
            </div>
            <span className="w-[80%] h-[2px] bg-[#adadad]"></span>
            <p className="pt-[30px] pb-[50px] text-[16px] text-[#fff] font-sans font-[400]">RSHCI AI @ 2024 reversed.</p>
        </footer>
    )
}

export default Footer;