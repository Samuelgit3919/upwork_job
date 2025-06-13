import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import other1 from '../../assets/other1.png';

const OthersDetail = () => {
  return (
    <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="container  px-4 py-12 mt-24 flex flex-col items-center max-w-[1220px]">

      {/* Back to Home Link */}
      <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex justify-center items-center hover:text-pink-300 transition-colors'>
        <ArrowLeftIcon className='w-8 h-4' />
        Back to work
      </Link>

      {/* Headings */}
      <div style={{ margin: '0 auto' }} className="text-center  flex flex-col gap-[32px] items-center mb-12">
        <h1 className="text-[20px] font-[400] mb-4 text-[#000000]">Other Projects</h1>
        <h2 className="text-[20px] text-[#666666]  mb-4">In this section there are designs from challenges, freelance projects, etc. </h2>
        <p className="text-[#000000] text-[18px]">
          Please note that due to NDA’s I am not allowed to display here some of my designs, please contact me in case you would like to verify if there is any other new design that I might be allowed to show that is not updated here yet.
        </p>
      </div>

      {/* Image Grid */}
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
            src="https://galajm.com/wp-content/uploads/2024/02/quick-dent-2.png"
            alt="Quick Dent 2"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full overflow-hidden rounded-lg ">
          <img
            src="https://galajm.com/wp-content/uploads/2024/02/serviper-homepage.png"
            alt="Serviper Homepage"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full overflow-hidden">
          <img
            src="https://galajm.com/wp-content/uploads/2024/02/coozee.png"
            alt="Coozee"
            className="w-full h-auto object-cover"
          />
          <div className="w-full overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src="https://galajm.com/wp-content/uploads/2024/02/flet-appy.png"
              alt="Flet Appy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>


      </div>

      {/*  call of  */}
      <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
        <div className="animate-fadeInUp">
          <h3 className="text-[20px] text-[#000000] font-[400]">Let's Create Something Extraordinary ⚡</h3>
        </div>
        <div className="animate-fadeInUp w-full">
          <p className="text-[18px] text-[#000000]">
            Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
          </p>
        </div>
        <div style={{ marginTop: '1rem' }} className="animate-fadeInUp">
          <Link
            style={{ padding: '8px 28px', fontSize: '20px', marginBottom: '3rem' }}
            to="/realContact"
            className="inline-block bg-[#DB7F97] text-white font-[700] rounded-md transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OthersDetail;
