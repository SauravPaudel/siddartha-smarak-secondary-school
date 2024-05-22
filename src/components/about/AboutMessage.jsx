import React, { useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';
import signature from '../../assets/signature.png'

const AboutMessage = () => {

    const messageRef = useRef(null);
    UseScrollTo('message');

    return (
        <div className='w-full px-[5%] flex pb-28 relative'>
            <div ref={messageRef} className='absolute top-[-7.5rem]' id='message' />
            <div className='flex flex-col gap-4'>
                <h5 className='mb-8 heading'>Message from the Principal</h5>
                <div className='flex flex-col w-full gap-12 md:gap-32 md:flex-row'>
                    <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-8 flex flex-col w-full md:order-1 order-2'>
                        <p className='mb-[-.5rem] font-merriwether'>From the Principal's desk,</p>
                        <div>At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.</div>
                        <div>Once the application forms are completed, along with any required documentation, they can be submitted to the admissions office either in person or electronically. Our admissions team carefully reviews each application, considering factors such as academic achievement, extracurricular involvement, and character.</div>
                        <div className='font-merriwether'>
                            <img className='flex w-1/4 ml-[-10px]' src={signature} alt="" />
                            <p>Dilaram Paudel,</p>
                            <p>Principal,</p>
                            <p>Siddhartha Smarak Secondary School</p>
                        </div>
                    </div>
                    <div className='flex order-1 w-full h-full mb-8 shadow-lg md:order-2 md:mb-0' >
                        <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FThs5Y4r%2FDilaram-Paudel.jpg' className='object-cover object-center border-b-8 duration-300 hover:brightness-75 saturate-100 hover:saturate-100 border-r-8 border-sky-800 rounded-xl' alt="Image of the Principal" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage