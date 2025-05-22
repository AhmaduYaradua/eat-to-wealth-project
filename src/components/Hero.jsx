import Navbar from "@/components/Navbar";
import { MoveRight } from "lucide-react";
import WhoWeAre from "./WhoWeAre";
import OurCommunity from "./OurCommunity";
import Services from "./Services";
import Link from "next/link";
import Footer from "./Footer";

function Hero() {
  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <section className="w-screen h-[428.94px] md:h-[776px] bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-r pt-[80px]  from-green-400 to-gray-0 w-1/2 h-screen">
          <div className="flex flex-col gap-[30px] pt-[50px] md:pt-[170px] pl-[15px] md:pl-[120] w-[399px] md:w-[602px] h-[310px] md:h-[315px]">
            <div className="flex space-y-4 h-[310px] md:w-[602px] md:h-[315px] flex-col md:gap-[10px]">
              <div>
                <h1 className="font-black w-[287px] md:w-[650px] text-white text-[27px] md:text-[48px] tracking-wider">
                  Your Path to a{" "}
                  <span className="text-green-700">Healthier</span> Living
                </h1>
                <p className="text-white w-[280px] md:w-[500px] text-[14px] md:text-[20px] tracking-widest">
                  Get AI-powered meal plans,expert advice and community support
                  tailored just for you.
                </p>
              </div>
              <div className="w-full md:space-x-4 flex space-y-3 md:w-[700px] flex-col md:flex-row ">
                <Link href="#">
                  <button className="w-full cursor-pointer hover:border-amber-600 hover:bg-amber-600 md:w-fit border-[1px] text-white border-white rounded-[15px] px-[35px] items-center py-[12px]">
                    Explore Services
                  </button>
                </Link>
                <Link
                  href="https://wa.me/message/7DXGUOWDEXIEE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full cursor-pointer hover:border-amber-600 hover:bg-amber-600 md:w-fit bg-green-700 border-[1px] text-white border-[#12B347] rounded-[15px] px-[35px] items-center py-[12px]">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section ends here */}

      {/* Ebook section */}
      <div>
        <section className="bg-gray-100 py-16 px-[10px]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="ebook2.png"
                alt="EatToWealth eBook Cover"
                className="w-[280px] h-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2e8b57] mb-4">
                Download Our Free eBook
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Discover how to transform your eating habits, boost your energy,
                and achieve lasting wellness with our expert-backed nutrition
                guide.
              </p>
              <a
                href="/ebook.pdf"
                download
                className="inline-block bg-[#f07731] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#276f4b] transition"
              >
                Get the eBook
              </a>

              <div className="mt-8 text-left bg-white shadow-sm rounded-lg p-4 border border-gray-200">
                <p className="text-gray-800 italic">
                  "This eBook helped me understand nutrition in a practical way
                  — simple, powerful, and truly life-changing!"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  — Amina, Wellness Enthusiast
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Ebook section ends here */}
      {/* Who we are section */}
      <div>
        <WhoWeAre />
      </div>
      {/* Who we are section ends here */}

      {/* our services section */}
      <Services />
      {/* our services section ends here */}

      {/* Our community section */}
      <OurCommunity />
      {/* Our community section ends here */}

      {/* Our blogs section */}
      <section className="bg-gray-100   ">
        <div className="md:w-[80%] md:m-auto flex flex-col">
          <div className="flex flex-col py-5">
            <div className="flex flex-col gap-[15px] pt-[32px] px-[10px] md:pl-[53px] text-center items-center">
              <h2 className="font-bold text-[32px] md:text-4xl leading-[30px] ">
                Our Blogs
              </h2>
              <h1 className="font-medium text-[24px] text-green-600 leading-[50px] md:leading-[30px] space-y-[20px]">
                Our Latest News
              </h1>
              <div>
                <h3 className="font-normal text-[16px] leading-[22px] tracking-[-0.41px]">
                  Dive into our blog for expert tips, delicious recipes, and
                  inspiring stories that will help guide you on your nutritional
                  journey.
                </h3>
                <h3 className="font-normal text-[16px] leading-[22px] tracking-[-0.41px]">
                  Our articles cover a wide range of topics to educate,
                  motivate, and support you in making healthier choices.
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  flex-col md:flex-row p-3 md:pl-[130px] pt-[30px] gap-[19.87px]">
              {/* card 1 */}
              <div className=" shadow md:w-[384px] rounded-[8px] bg-white">
                <img
                  src="card1.png"
                  alt="img"
                  className="md:w-[384px] md:h-[212px] w-full h-[168.47px] rounded-[8px] pb-[10px] object-cover"
                />
                <div className="md:p-2">
                  <div className="flex flex-col px-[10px] pt-[20px] gap-[20px] w-[348px] h-[200px]">
                    <h2 className="font-semibold text-[15.89px] md:text-[20px] leading-[23.84px] md:leading-[30px] text-green-600 tracking-[-0.32px] md:tracking-[-0.41px]">
                      How to Boost Your Energy Naturally by drinking healthy
                      juice
                    </h2>
                    <h3 className="font-normal text-[14.3px] md:text-[18px] leading-[23.84px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.41px]">
                      Learn simple nutrition tweaks to feel more vibrant daily
                      because it helps to aids digestion and supplies the
                      nutrient needed for the body...
                    </h3>
                  </div>
                  <button className="flex items-center text-[12.71px] md:text-[16px] gap-[8.74px] md:gap-[11px] p-[7.95px] md:p-[10px] mt-[30px] text-amber-600 rounded-[6.36px] md:rounded-[8px]">
                    Read more
                    <span>
                      <MoveRight />
                    </span>
                  </button>
                </div>
              </div>
              {/* card 2 */}
              <div className=" shadow md:w-[384px] rounded-[8px] bg-white">
                <img
                  src="card2.png"
                  alt="img"
                  className="md:w-[384px] md:h-[212px] w-full h-[168.47px] pb-[10px] rounded-[8px] object-cover"
                />
                <div className="md:pl-2">
                  <div className="flex flex-col px-[10px] pt-[20px] gap-[20px] w-[348px] h-[200px]">
                    <h2 className="font-semibold text-[15.89px] md:text-[20px] leading-[23.84px] md:leading-[30px] text-green-600 tracking-[-0.32px] md:tracking-[-0.41px]">
                      How to Transform Your Relationship with Food
                    </h2>
                    <h3 className="font-normal text-[14.3px] md:text-[18px] leading-[23.84px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.41px]">
                      Learn time-saving techniques and get a 5-day meal prep
                      plan that takes less than 2 hours on Sunday to prepare...
                    </h3>
                  </div>
                  <button className="flex items-center text-[12.71px] md:text-[16px] gap-[8.74px] md:gap-[11px] p-[7.95px] md:p-[10px] mt-[30px] text-amber-600 rounded-[6.36px] md:rounded-[8px]">
                    Read more
                    <span>
                      <MoveRight />
                    </span>
                  </button>
                </div>
              </div>
              {/* card 3 */}
              <div className=" shadow md:w-[384px] rounded-[8px] bg-white">
                <img
                  src="card3.png"
                  alt="img"
                  className="md:w-[384px] md:h-[212px] w-full h-[168.47px] pb-[10px] rounded-[8px] object-cover"
                />
                <div className="md:p-2">
                  <div className="flex flex-col px-[10px] pt-[20px] gap-[20px] w-[348px] h-[200px]">
                    <h2 className="font-semibold text-[15.89px] md:text-[20px] leading-[23.84px] md:leading-[30px] text-green-600 tracking-[-0.32px] md:tracking-[-0.41px]">
                      How to Transform Your Relationship with Food
                    </h2>
                    <h3 className="font-normal text-[14.3px] md:text-[18px] leading-[23.84px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.41px]">
                      Discover how bringing awareness to your eating habits can
                      improve digestion, and help you develop a healthier
                      relationship with food...
                    </h3>
                  </div>
                  <button className="flex items-center text-[12.71px] md:text-[16px] gap-[8.74px] md:gap-[11px] p-[7.95px] md:p-[10px] mt-[30px] text-amber-600 rounded-[6.36px] md:rounded-[8px]">
                    Read more
                    <span>
                      <MoveRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-10">
            <button className="flex hover:bg-amber-600 cursor-pointer items-center gap-[11px] rounded-[8px] py-[10px] font-semibold tracking-[-0.41px] text-[16px] leading-[30px] px-[20px] bg-green-600 text-white">
              Explore all blogs
              <span>
                <MoveRight />
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Our blogs section ends here */}

      <Footer />
    </div>
  );
}
export default Hero;
