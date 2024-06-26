import { LocateIcon, Mail, Phone } from 'lucide-react'
import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import AdmissionDrawer from '../global/AdmissionDrawer'
import { FaFacebook } from 'react-icons/fa6'

const ContactHero = () => {
    return (
        <div className='pt-12 mt-[130px] px-[5%]'>
            <div className="pb-28">
                <h2 className="w-full pb-2 text-2xl font-bold text-center uppercase border-b-2 md:text-start md:w-max text-sky-900 border-stone-200 font-merriwether">Siddartha Smarak Secondary School</h2>
                <p className="text-lg/[250%] text-stone-400 text-center tracking-wide md:text-left font-manrope md:mb-4 mb-12 ">Kapilvastu, Lumbini, Nepal</p>
                <div className="flex flex-col w-full gap-24 md:gap-12 md:flex-row">
                    <div className='flex flex-col order-2 md:w-1/2 md:order-1'>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8152529835517!2d85.31909031430198!3d27.698599982828823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9598a1d2b%3A0xa9c8b8e7d2e046d8!2sAntarikshya%20School!5e0!3m2!1sen!2snp!4v1683102678190!5m2!1sen!2snp"
                                width="100%"
                                height="600"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                    <div className='flex flex-col order-1 gap-12 md:w-1/2 md:order-2'>
                        <div className='flex flex-col py-12 md:py-0'>
                            <div className='flex flex-col items-center justify-center w-full gap-12'>
                                <div className='text-4xl text-orange-500'>
                                    <ImQuotesLeft />
                                </div>
                                <div className='text-4xl font-semibold tracking-wide text-center text-sky-900 font-merriwether'>मनुष्यको सम्पूर्ण आत्मा बुझाउने विद्या अहिलेसम्म निस्केको छैन</div>
                            </div>
                        </div>
                        <div className='gap-4 flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                            <div className='pt-4 '>
                                We believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin, interested guardians are invited to visit our school campus for a tour.
                            </div>
                            <div className='pt-4'>
                                To book such a visit or inquire more, scroll down for our contact details or cick the button below to fill out a form and inquire, after which our team will contact you ASAP.
                            </div>
                            <div className='flex justify-center w-full pt-4 md:justify-start'>
                                <AdmissionDrawer place='contact' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 pt-28'>
                    <div className='flex justify-center w-full'>
                        <p className='text-center heading md:text-start w-max'>Our Details</p>
                    </div>
                    <div className="text-lg/[250%] font-manrope flex flex-col items-center justify-center gap-6  max-w-8xl md:flex-row">
                        <a target='_blank' href='https://google.com' className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700 ">
                            <LocateIcon className='mr-4 size-8' />
                            <span>Kapilvastu, Birgunj</span>
                        </a>
                        <a href='mailto:contact@antarikshya.edu.np' className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700">
                            <Mail className='mr-4 size-8' />
                            <span>contact@antarikshya.edu</span>
                        </a>
                        <a href="tel:9843011770">
                            <div className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700">
                                <Phone className='mr-4 size-8' />
                                <span>+977-1-4780000</span>
                            </div>
                        </a>
                        <a title='Our Facebook' target='_blank' href="https://www.facebook.com/siddharthasmarakofficial">
                            <div className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700">
                                <FaFacebook className='mr-4 size-8' />
                                <span>Siddartha Smarak Secondary School</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero