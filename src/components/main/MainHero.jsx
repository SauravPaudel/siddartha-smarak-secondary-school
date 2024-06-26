import React from 'react'
import book from '../../assets/book.jpg'
import { Link } from "react-router-dom"
import routeTo from '../utilities/RouteTo'

const MainHero = () => {
    return (
        <div className='w-full flex px-[7.5%] pb-32'>
            <div className='flex flex-col w-full gap-16 md:flex-row'>
                <div className='flex w-full overflow-hidden'>
                    <img src={book} className='rounded-3xl brightness-75 blur-[.5px]' alt="" />
                </div>
                <div className='flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                    <div className='w-full pb-2 text-2xl font-bold text-center uppercase border-b-2 md:text-start md:w-auto text-sky-900 border-stone-200 font-merriwether'>Siddartha Smarak Secondary School</div>
                    <div className='pt-4 '>बुद्धभूमि नगरपालिका वडा नं. १, भेलाईमा अवस्थित सिद्धार्थ स्मारक माध्यमिक विद्यालयमा शान्त, शैक्षिक, मनोरम वातावरणमा साधारण तर्फ र विशेष शिक्षा अन्तर्गत छात्रावाससहित दृष्ट्रिविहीन स्रोतकक्षासमेत संचालनमा रहेको छ ।</div>
                    <div className='pt-4'>Housing a vibrant community of over 600 students, Siddhartha Smarak Secondary School offers state-of-the-art facilities and resources conducive to learning.</div>
                    <div className='pt-4'>With a dedicated faculty and a nurturing environment, we strive to empower every student to reach their full potential.</div>
                    <div className='pt-4'>Join us at Siddhartha Smarak Secondary School and embark on a journey of academic excellence and personal growth.</div>
                    <Link onClick={routeTo} to='/About' className='flex px-4 py-1 mt-8 text-white duration-75 bg-orange-500 hover:bg-orange-400 rounded-xl font-merriwether w-max active:scale-90'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default MainHero