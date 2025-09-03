import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import other1 from '../../assets/other1.png';
import other2 from '../../assets/other2.png';
import other4 from '../../assets/other4.png';
import other5 from '../../assets/other5.png';
import desctopOther from "../../assets/reOtherDesktop_1.png"
import tabletOther from "../../assets/reOtherTable_1.png"
import mobileOther from "../../assets/reOtherMobile_1.png"
import sof7 from '../../assets/sofa7.png';


const OthersDetail = () => {
  return (
    <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="container font-[outfit] px-4 py-12 mt-24 flex flex-col items-center max-w-[1220px]">

      {/* Back to Home Link */}
      <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex font-normal justify-center items-center hover:text-pink-300 transition-colors'>
        <ArrowLeftIcon className='w-8 h-4' />
        Back to work
      </Link>

      {/* Headings */}
      <div style={{ margin: '0 auto' }} className="text-center  flex flex-col gap-[32px] items-center mb-12">
        <h1 className="text-[20px] sm:text-[24px] font-[400] mb-4 text-[#000000]">Other Projects</h1>
        <h2 className="text-[20px] text-[#666666]  mb-4">In this section there are designs from challenges, freelance projects, etc. </h2>
        <p className="text-[#000000] text-[18px]">
          Please note that due to NDA’s I am not allowed to display here some of my designs, please contact me in case you would like to verify if there is any other new design that I might be allowed to show that is not updated here yet.
        </p>
      </div>

      {/* Image Grid */}
      {/* make it responsive using grid */}
      <div
        style={{ marginTop: "4rem" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-8 p-4"
      >
        <div className=" h-auto sm:h-[924px] w-full sm:w-[516px] relative">
          {/* Link image above desktopOther */}
          <Link
            to="https://www.sofatutor.com/kostenlos-testen"
            target="_blank"
            className="absolute bottom-4 right-4 sm:top-108 sm:-translate-x-74 z-20"
          >
            <img
              src={sof7}
              alt="Back to Home"
              className="w-[150px] sm:w-[290.85px] h-auto"
            />
          </Link>

          {/* Background image */}
          <img
            src={desctopOther}
            alt=""
            className="w-full h-auto object-cover rounded-md z-10 relative"
          />
        </div>

        <div className=" h-auto sm:max-h-[924px] w-full sm:w-[395px]">
          <img
            src={tabletOther}
            alt=""
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className=" h-auto sm:h-[924px] w-full sm:w-[240px]">
          <img
            src={mobileOther}
            alt=""
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>



      <div style={{ marginTop: '2rem' }} className="w-full max-w-6xl mt-12 grid grid-cols-1 sm:grid-cols-2  gap-6 px-2 md:px-4">
        {/* Image 1 */}
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={other1}
            alt="Quick Dent 1"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={other2}
            alt="Quick Dent 2"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full h-[428px] overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 lg:col-span-1">
          <img
            src={other5}
            alt="Flet Appy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full  overflow-hidden">
          <img
            src={other4}
            alt="Coozee"
            className="w-full h-auto object-cover"
          />

        </div>


      </div>

      {/*  call of  */}
      <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
        <div className="animate-fadeInUp">
          <h3 className="text-[20px] sm:text-[24px] text-[#000000] font-normal">Let's Create Something Extraordinary <span className='text-[32px] font-normal'>⚡</span></h3>
        </div>
        <div className="animate-fadeInUp w-full">
          <p className="text-[18px] font-normal text-[#000000]">
            Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
          </p>
        </div>
        <div style={{ marginTop: '1rem' }} className="animate-fadeInUp">
          <Link
            style={{ padding: '8px 28px', marginBottom: '3rem' }}
            to="/realContact"
            className="inline-block text-[20px] sm:text-[24px] bg-[#DB7F97] text-white font-[700] rounded-md transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OthersDetail;
