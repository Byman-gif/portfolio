import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import marko from '../assets/images/marko.jpg'
import roope from '../assets/images/roope.jpg'
import SpeechBubbleCard from '../components/ReferenceBubble';

import { skills, experiences} from '../constants'
import CTA from '../components/CTA';

//https://byman-gif.github.io/portfolio/
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Roi</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software engineer from Finland and I specialize in software and game developement.</p>
      </div>
      <div className='mt-6'>
          <a
            href="/portfolio/Roi_CV.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition inline-block"
          >
            You can find my CV here! 📄 
          </a>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} 
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>My works</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Here is my slighty unsual career path.</p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map ((experience) => (
                <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[70%] h-[70%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal plz-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <h3 className='subhead-text'>My Referees</h3>
          <div className="mt-6 flex gap-15">
            <SpeechBubbleCard
              image={marko}
              name="Marko Suokas"
              role="Messilä Golf Oy, kenttämestari"
              quote="Työntekijänä Roi Byman on vastuullinen. Hoitaa hänelle annetut työt huolellisesti ja sovitusti. Hän on myös joustava, jotta hommat saadaan hoidettua sujuvasti. Noudattaa työaikoja."
            />

            <SpeechBubbleCard
              image={roope}
              name="Roope Suonio"
              role="Lahti Basketball, toiminnanjohtaja"
              quote="Roi Byman on aina Lahti Basketballin riveissä osoittanut todellista ammattimaisuutta, tavoitteellisuutta omien taitojen kehittämistä, hienoa johtajuutta ja häntä voi kutsua ihanteelliseksi työntekijäksi."
            />
          </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About

