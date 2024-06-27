const Loading = () => {
    return (
        <div className="fixed top-0 z-[9999] left-0 w-full h-screen flex items-center justify-center bg-gradient-to-b from-lime-300 to-blue-500">
            <figure className="w-[200px]">
                <img src="/images/logo/logo.png" alt="Logo" className="w-full object-cover block animate-bounce" />
            </figure>
            <h1 className="text-[50px] font-[700] text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center pt-[50px]">RSHCI AI</h1>
        </div>
    );
};

export default Loading;