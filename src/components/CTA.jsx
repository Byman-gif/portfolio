import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className='cta flex flex-col items-center gap-5'>
      <p className='cta-text text-center'>
        Interested? Message me here!
        <br className='sm:block hidden' />
      </p>

      <Link to='/contact' className='btn shadow-xl'>
        Contact
      </Link>

      <div className='flex items-center justify-center gap-5 mt-1'>
        <a
          href='https://www.linkedin.com/in/roi-byman/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn profile'
          className='text-3xl hover:scale-110 transition-transform duration-200'
        >
          <FaLinkedin className='text-[#0A66C2]' />
        </a>

        <a
          href='https://github.com/byman-gif'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub profile'
          className='text-3xl hover:scale-110 transition-transform duration-200'
        >
          <FaGithub className='text-[#181717]' />
        </a>
      </div>
    </section>
  );
};

export default CTA;