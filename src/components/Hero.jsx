import Navbar from "@/components/Navbar";

function Hero() {
  return (
    <div>
      {/* Hero section */}
      <section className="flex left-[1440px] w-[1440px] h-[776px] bg-[url('/hero.png')] bg-cover bg-center">
        <Navbar />
        <div className="bg-gradient-to-r pt-[80px] from-green-400 to-gray-0 w-1/2">
          <div className="flex flex-col gap-[30px] pt-[170px] pl-[120] w-[602px] h-[315px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-bold w-[600px] text-white text-[48px] tracking-wider">
                Your Path to a <span className="text-green-700">Healtheir</span>{" "}
                Living Starts Here
              </h1>
              <p className="text-white w-[500px] text-[15px] tracking-widest">
                Get AI-powered meal plans,expert advice and community support
                tailored just for you.
              </p>
              <div className="flex gap-[29px] pt-[30px]">
                <button className="w-fit border-[1px] text-white border-white rounded-[5px] px-[22px] items-center py-[8px]">
                  Explore Services
                </button>
                <button className="w-fit bg-green-700 border-[1px] text-white border-green-700 rounded-[5px] px-[22px] items-center py-[8px]">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section ends here */}

      {/* Who we are section */}
      <section></section>
      {/* Who we are section ends here */}
    </div>
  );
}
export default Hero;
