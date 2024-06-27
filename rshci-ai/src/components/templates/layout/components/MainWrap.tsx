import LinkButton from "@/components/atoms/LinkButton";
import TopForm from "@/components/atoms/TopForm";

const MainWrap = () => {
    return (
        <main className="w-full flex flex-col justify-center items-center align-middle bg-[#03093D]">
            <section className="w-full max-w-[1440px] flex flex-col-reverse px-[20px]  sm:flex-row md:px-[50px] justify-between items-center max-w-120  pt-[150px]  ">
                <div className="w-full sm:w-[50%] flex flex-col gap-[30px] align-left ">
                    <h1 className=" text-[60px] font-[800] text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">RSHCI AI Coin</h1>
                    <p className="text-[24px] color-[white] ">RSHCI AI Coin is a powerful centralized coin.<br/>
                    Please invest and then start your AI journey.</p>
                    <LinkButton content = {"Get Started"} />
                </div>
                <figure className="w-full sm:w-[50%] max-w-[600px]">
                    <img src="/images/top/fv.png" alt="" />
                </figure>
            </section>
            <section className="w-full max-w-[1440px] flex flex-col justify-center items-center pt-[80px] px-[20px] sm:px-[50px]" id="services">
                <h1 className="text-[50px] font-[700] text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text">Services</h1>
                <p className="text-[16px] text-[#1199FA] font-sans font-[400] pt-[20px] text-center">We provide exclusive services for our clients</p>
                <div className="w-full flex flex-col gap-5 sm:flex-row justify-between items-center pt-[50px]">
                    <div className="flex flex-col justify-center items-center gap-[30px] ">
                        <figure className="w-[120px]">
                            <img src="/images/top/automation.png" alt="" />
                        </figure>
                        <p className="text-white text-[24px] font-sans font-[700] text-center">Automate Processes</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <figure className="w-[120px]">
                            <img src="/images/top/customer.png" alt="" />
                        </figure>
                        <p className="text-white text-[24px] font-sans font-[700] text-center">Insights from data</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <figure className="w-[120px]">
                            <img src="/images/top/support.png" alt="" />
                        </figure>
                        <p className="text-white text-[24px] font-sans font-[700] text-center">Enhance Experiences</p>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-[1000px] flex flex-col justify-center items-center pt-[80px] px-[20px] bg-[url(/images/top/how-bg.png)] bg-no-repeat bg-center bg-contain sm:px-[50px]">
                <h1 className="text-[50px] font-[700] text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">How our program works</h1>
                <p className="text-white text-[14px] font-sans font-[300] leading-normal pt-[30px] max-w-[1000px]">Introducing RSHCI AI your trusted partner in unlocking the potential of Artificial Intelligence. <br /> 
We offer a comprehensive suite of AI-powered services, tailored to meet the unique needs of your business.<br />
 
- Streamlined Operations: Say goodbye to manual data entry and repetitive tasks. Our AI-powered automation solutions 
streamline workflows, optimize resource allocation, and boost productivity.<br />
  
- Data-Driven Insights: Uncover hidden patterns and trends within your data with our advanced analytics and machine 
learning algorithms. Gain a deeper understanding of your customers, markets, and operations.<br />
  
- Personalized Experiences: Deliver highly personalized and engaging experiences across every touchpoint. 
Our AI-powered solutions enable real-time recommendations, predict customer needs, and create seamless interactions.<br />
  
- Predictive Analytics: Forecast future trends and anticipate potential risks. Leverage our predictive models to optimize 
inventory management, sales forecasting, and resource allocation.<br />
  
- Enhanced Security: Protect your valuable data and systems with our AI-driven security solutions. <br />
Detect and prevent cyber threats, ensure compliance with industry regulations, and build a robust security posture.  <br />
More than just technology, we offer expertise and partnership.<br />

Our dedicated team of AI specialists provides comprehensive support, from initial consultation to implementation and ongoing 
optimization. <br /> Ready to take your business to the next level with the power of AI?  <br/>
Contact us today for a personalized consultation and discover 
how our solutions can transform your operations.</p>
                <iframe src="/images/top/how.mp4" className="w-full max-w-[700px] bg-transparent object-cover min-h-[300px] sm:min-h-[470px] py-[35px]"></iframe>
                <LinkButton content={"Contact Us"}/>
            </section>
            <section className="w-full max-w-[1440px] flex flex-col justify-center items-center pt-[80px] px-[20px] sm:px-[50px]" id="system">
                <h1 className="text-[50px] font-[700] text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center">RSHCI AI System</h1>
                <p className="md:bg-[url('/images/top/system-bg.png')] bg-[length:400px] bg-left-bottom bg-no-repeat text-[14px] font-sans font-[400] text-white max-w-[1200px] pt-[40px] pl-[0px] md:pl-[400px]  ">There are several reasons why customers should choose our 
AI-powered marketing services for real estate. <br /><br />

Here are some of the key benefits:<br /><br />

    1. Personalization: Our AI technology analyzes customer data to deliver
 personalized marketing messages that resonate with
     each individual customer. This helps increase engagement and conversions.<br /><br />

    2. Efficiency: With AI, we can automate many of the time-consuming tasks
 associated with real estate marketing, such as lead 
     generation and management. This allows us to focus on delivering high-quality 
campaigns that produce results.<br /><br />

    3. Data-Driven Insights: Our AI algorithms analyze large amounts of data 
to identify patterns and trends that help us optimize 
     your marketing campaigns for maximum effectiveness.<br /><br />

    4. Cost-Effective: By automating tasks and optimizing campaigns, 
we can reduce costs and deliver more effective marketing 
     at a lower cost.<br /><br />

    5. Expertise: Our team has extensive experience in real estate marketing 
and AI technology. <br /><br />
     We combine these skills to deliver cutting-edge marketing solutions 
that are tailored to your specific needs.<br /><br />

Ultimately, by choosing our AI marketing services for real estate
, customers can benefit from highly personalized, efficient, and 
effective marketing campaigns that drive results and help their business grow.</p>
            </section>

            <section className="w-full max-w-[1440px] flex flex-col justify-center items-center pt-[80px] px-[20px] sm:px-[50px] " id="benifits">
            <h1 className="text-[50px] font-[700] text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Benifits</h1>
            <iframe src="/images/top/benifit.mp4" className="w-full max-w-[700px] min-h-[300px] sm:min-h-[450px] py-[40px] px-[20px]"></iframe>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon1.png" alt="" />
                    </figure>
                    <h3 className="text-[20px] font-sans font-[600] text-white text-center py-[20px]">Untapped Insights</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Reveal actionable insights from 
                    vast amounts of EDA tool data.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon2.png" alt="" />
                    </figure>
                    <h3 className="py-[20px] text-[20px] font-sans font-[600] text-white text-center">Automated Creation</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Generate workflows, RTL, 
                    and testbenches with GenAI.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon3.png" alt="" />
                    </figure>
                    <h3 className="py-[20px] text-[20px] font-sans font-[600] text-white text-center">Optimize product launches</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Meet your launch targets 
by adjusting tactics at the speeds.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon4.png" alt="" />
                    </figure>
                    <h3 className="py-[20px] text-[20px] font-sans font-[600] text-white text-center">Instant Guidance</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Get expert knowledge in seconds 
                    with conversation intelligence.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon5.png" alt="" />
                    </figure>
                    <h3 className="py-[20px] text-[20px] font-sans font-[600] text-white text-center">Fastest Time to Targets</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Autonomously converge to
                    tapeout-ready solutions.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className="w-[100px] object-cover">
                        <img src="/images/top/benifit-icon6.png" alt="" />
                    </figure>
                    <h3 className="py-[20px] text-[20px] font-sans font-[600] text-white text-center">Next-Level Productivity</h3>
                    <p className="text-[14px] text-white font-sans font-[400] text-center">Enable design teams to scale and 
                    operate at expert levels.</p>
                </div>
            </div>

            </section>

            <section className="w-full flex flex-col justify-center items-center mt-[80px] relative">
            {/* <iframe src="/images/top/meet-bg.mp4" className="w-full h-[700px] object-cover"></iframe> */}
            <video src="/images/top/meet-bg.mp4" autoPlay muted loop className="h-[800px] w-full object-cover"/>
                <div className="w-full max-w-[800px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-gradient-to-b  from-green-500 to-indigo-950 rounded-[30px] flex flex-col items-center py-[50px] px-[20px] z-10">
                    <h1 className="text-[50px] font-[700] text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Meet the Team</h1>
                    <div className="w-full flex flex-row justify-around items-center pt-[50px] sm:pt-[150px]">
                        <div className="flex flex-col justify-center items-center">
                            <figure className="w-[100px] sm:w-[150px] h-[150px] rounded-[50%]">
                                <img src="/images/top/yoshida.png" alt="" />
                            </figure>
                            <h1 className="text-[20px] font-sans font-[600] text-[#1199FA] text-center">CTO & Co-founder</h1>
                            <p className="text-[14px] font-sans font-[400] text-[#1199FA] text-center">Yoshida Daisuke</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-[-50px] sm:mt-[-250px]">
                            <figure className="w-[100px] sm:w-[150px] h-[150px] rounded-[50%]">
                                <img src="/images/top/Michael.png" alt="" />
                            </figure>
                            <h1 className="text-[20px] font-sans font-[600] text-[#1199FA] text-center">Founder & CEO</h1>
                            <p className="text-[14px] font-sans font-[400] text-[#1199FA] text-center">Michael Magnus</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <figure className="w-[100px] sm:w-[150px] h-[150px] rounded-[50%]">
                                <img src="/images/top/Juliana.png" alt="" />
                            </figure>
                            <h1 className="text-[20px] font-sans font-[600] text-[#1199FA] text-center">Sales & Co-founder</h1>
                            <p className="text-[14px] font-sans font-[400] text-[#1199FA] text-center">Juliana</p>
                        </div>
                    </div>

                    
                </div>
           
            </section>
            <section className="w-full flex flex-col justify-center items-center pt-[80px] px-[20px] sm:px-[50px] pb-[50px]" id="contact">
                <div className="w-full max-w-[800px] flex flex-col pt-[50px] pb-[50px] bg-gradient-radial from-pink-500 to-indigo-900 rounded-[30px] px-[20px]">
                    <h1 className="text-[50px] font-[700] text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Get In Touch</h1>
                    <div className="w-full flex flex-row justify-between items-center py-[20px] ">
                        <div className="w-[50%] flex flex-row justify-start items-end gap-2">
                            <span>
                                <img className="w-[40px]" src="/images/top/address-icon.png" alt="" />
                            </span>
                            <p className="text-[16px] font-[400] font-sans">Spain www. www</p>
                        </div>
                        <div className="w-[50%] flex flex-row justify-start items-end gap-2">
                            <span>
                                <img className="w-[40px]" src="/images/top/mail-icon.png" alt="" />
                            </span>
                            <p className="text-[16px] font-[400] font-sans">Info@rshciAI.com</p>
                        </div>
                    </div>
                    <TopForm />
                </div>
            </section>
        </main>
    )
}

export default MainWrap;