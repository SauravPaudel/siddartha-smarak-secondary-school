import React from 'react'
import book from '../../assets/book.jpg'

const MainHero = () => {
    return (
        <div className='w-full flex px-[7.5%] pb-48'>
            <div className='flex flex-col w-full gap-16 md:flex-row'>
                <div className='flex w-full'>
                    <img src={book} className='rounded-sm brightness-75 blur-[1px]' alt="" />
                </div>
                <div className='flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                    <div className='pb-2 text-2xl font-bold uppercase border-b-2 text-sky-900 border-stone-200 w-max font-merriwether'>Siddartha Smarak Secondary School</div>
                    <div className='pt-4 '>Where Excellence meets Opportunity, our institution stands as a beacon of academic achievement and holistic growth.</div>
                    <div className='pt-4'>Housing a vibrant community of over 600 students, Siddhartha Smarak Secondary School offers state-of-the-art facilities and resources conducive to learning.</div>
                    <div className='pt-4'>With a dedicated faculty and a nurturing environment, we strive to empower every student to reach their full potential.</div>
                    <div className='pt-4'>Join us at Siddhartha Smarak Secondary School and embark on a journey of academic excellence and personal growth.</div>
                </div>
            </div>
        </div>
    )
}

export default MainHero