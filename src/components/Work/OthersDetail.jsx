import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import other1 from '../../assets/other1.png';

const OthersDetail = () => {
  return (
    <div style={{ margin: '0 auto', marginTop: '6rem' }} className="container mx-auto px-4 py-12 mt-24 flex flex-col items-center ">

      {/* Back to Home Link */}
      <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-pink-400  text-center flex justify-center items-center hover:text-pink-300 transition-colors'>
        <ArrowLeftIcon className='w-8 h-4' />
        Back to work
      </Link>

      {/* Headings */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">Other Projects</h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 leading-relaxed">
            Designs from challenges, freelance projects, and creative explorations
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8  ">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Please note that due to NDAs, I am not allowed to display some of my designs here. Feel free to contact
              me if you'd like to verify any additional work that may be available for display but not yet updated on
              this page.
            </p>
          </div>
        </div>
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
      <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
        <div className="animate-fadeInUp">
          <h3 className="text-3xl font-semibold">Let's Create Something Extraordinary ⚡</h3>
        </div>
        <div className="animate-fadeInUp max-w-2xl">
          <p className="text-lg text-gray-600">
            Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
          </p>
        </div>
        <div style={{ marginTop: '1rem' }} className="animate-fadeInUp">
          <Link
            style={{ padding: '0.5rem 2rem', fontSize: '1rem', marginBottom: '3rem' }}
            to="/contact"
            className="inline-block bg-pink-300 text-white font-medium rounded-md hover:bg-pink-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OthersDetail;
