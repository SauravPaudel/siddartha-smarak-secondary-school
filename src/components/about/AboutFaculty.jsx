import React, { useEffect, useState, useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';


const AboutFaculty = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var delay1, delay2, delay3, delay4, delay5, delay6;

    if (windowWidth > 768) {
        delay1 = 50;
        delay2 = 100;
        delay3 = 150;
        delay4 = 200;
        delay5 = 250;
        delay6 = 300;
    } else if (windowWidth > 640) {
        delay1 = 50;
        delay2 = 100;
        delay3 = 50;
        delay4 = 10;
        delay5 = 50;
        delay6 = 100;
    } else {
        delay1 = 100;
        delay2 = 100;
        delay3 = 100;
        delay4 = 100;
        delay5 = 100;
        delay6 = 100;
    }

    const staffSectionRef = useRef(null);
    UseScrollTo('staff');

        const staffs = [
            {
                url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FThs5Y4r%2FDilaram-Paudel.jpg",
                name: "Dilaram Paudel",
                position: "Head Teacher",
                id: 1,
                delay: delay1,
            },

        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FSnYz01H%2FBasudev-Khanal.jpg",
            name: "Basudev Khanal",
            position: "Accountant",
            id: 2,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FxCQWb9f%2FSaraswati-Gaire.jpg",
            name: "Saraswati Gaire",
            position: "Assistant",
            id: 3,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2Fj3mKxWf%2FJiblal-Panthi.jpg",
            name: "Jiblal Panthi",
            position: "Assistant Principle",
            id: 4,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F0hGQv9s%2FBinaya-Tharu.jpg",
            name: "Binaya Tharu",
            position: "Teacher - Basic",
            id: 5,
            delay: delay4,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FysFtNh9%2FBishnu-Maya-Bhusal.jpg",
            name: "Bishnu Maya Bhusal",
            position: "Teacher - Primary / Third",
            id: 7,
            delay: delay5,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F2jkRnXZ%2FDinesh-Khanal.jpg",
            name: "Dinesh Khanal",
            position: "Teacher - Secondary / Third",
            id: 7,
            delay: delay6,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F4jYzVs9%2FDipak-Pandey.jpg",
            name: "Dipak Pandey",
            position: "Teacher - Primary / Second",
            id: 8,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FG3LPG61%2FDivya-Parajuli.jpg",
            name: "Divya Parajuli",
            position: "Store Keeper",
            id: 9,
            delay: delay1,
        },
      
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F0r6tLV0%2FKalpana-Parajuli.jpg",
            name: "Kalpana Parajuli",
            position: "Teacher - Lower Secondary / Third",
            id: 10,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FbR7XNcc%2FAnil-Kumar-chaudary.jpg",
            name: "Anil Kumar Chaudary",
            position: "Security Guard",
            id: 11,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FQDCgvJ5%2FAsha-Pandey.jpg",
            name: "Asha Panda",
            position: "Teacher - Primary / Second",
            id: 12,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2Fzmm6t5M%2FDevraj-Tharu.jpg",
            name: "Devraj Tharu",
            position: "Teacher - Primary / Second",
            id: 13,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F4dyGGp8%2FGiri-Prasad-Khanal.jpg",
            name: "Giri Prasad Khanal",
            position: "Teacher -  Secondary / Third",
            id: 14,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FVw872Qt%2FBhojram-Khanal.jpg",
            name: "Bhojram Khanal",
            position: "Teacher - Primary / Third",
            id: 15,
            delay: delay3,
        },
      
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F8PDpkvT%2FKamala-Ghimire.jpg",
            name: "Kamala Ghimire",
            position: "Teacher - Primary / Third",
            id: 16,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F54bVMM2%2FLaxmi-Belbase.jpg",
            name: "Laxmi Belbase",
            position: "Teacher - Pre-Primary",
            id: 17,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FN72DL4Y%2FMaya-Khanal.jpg",
            name: "Maya Khanal",
            position: "Cleaning Assistant",
            id: 18,
            delay: delay1,
        },

        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FM8VW63P%2FPabitra-Chhetri.jpg",
            name: "Pabitra Chhetri",
            position: "Teacher - Primary",
            id: 19,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F2MXJG3p%2FRamchardra-Bhattarai.jpg",
            name: "Ramchandra Bhattrai",
            position: "Teacher - Secondary / Second",
            id: 20,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FsVCwQdW%2FRom-harsh-panthi.jpg",
            name: "Rom Harsh Panthi",
            position: "Teacher - Lower Secondary / Third",
            id: 21,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F3kj2HSP%2FRudra-Prasad-Bhusal.jpg",
            name: "Rudra Prasad Bhusal",
            position: "Teacher - Secondary / Third",
            id: 22,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F9gm6Lcr%2FSabita-Khanal.jpg",
            name: "Sabita Khanal",
            position: "Teacher - Basic",
            id: 23,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FKLrs6bD%2FSakintala-Tharu.jpg",
            name: "Sakintala Tharu",
            position: "Teacher - Pre-Primary",
            id: 24,
            delay: delay1,
        },
        {
            url: "https://i.ibb.co/mNJXJpK/Gaura-Nyaupane.jpg",
            name: "Gaura Nyaupane",
            position: "Teacher - Primary / Third",
            id: 25,
            delay: delay2,
        },
    
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FGWWzQ5Q%2FSita-pokheral.jpg",
            name: "Sita Pokheral",
            position: "Teacher - Primary / Third",
            id: 26,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FnjrF0Vb%2FSumitra-Rana.jpg",
            name: "Sumitra Rana",
            position: "Teacher - Pre-Primary",
            id: 27,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FC2b9BDp%2FSurendra-Kumar-G-c.jpg",
            name: "Surendra Kumar Gc",
            position: "Teacher - Secondary / Second",
            id: 28,
            delay: delay1,
        },
        {
            url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2F37YzwfH%2FUttam-Poudel.jpg",
            name: "Uttam Poudel",
            position: "Teacher - Basic",
            id: 29,
            delay: delay1,
        }
    ];

    return (
        <>
            <div className='w-full px-[5%] flex relative' >
                <div ref={staffSectionRef} className='absolute top-[-7.5rem]' id='staff' />
                <div className='flex flex-col w-full'>
                    <h5 className='heading'>Members of our faculty & staff
                    </h5>
                    <div className='flex flex-wrap justify-between w-full gap-8 mt-8'>
                        {staffs.map((staff) => {
                            return <Staff staff={staff} key={staff.id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

const Staff = ({ staff }) => {
    return (
        <div data-aos='fade-up' data-aos-delay={staff.delay} data-aos-duration='300' key={staff.id} className='group flex flex-col w-full sm:w-[45%] md:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden'>
            <div className='overflow-hidden'><img className='flex object-cover object-center w-full duration-500 h-80 group-hover:scale-110 saturate-100 group-hover:saturate-100' src={staff.url} alt="" /></div>
            <div className='w-full pt-8 pb-2 text-xl text-center text-neutral-800 font-merriwether'>{staff.name}</div>
            <div className='w-full pb-8 text-base text-center text-black font-manrope'>{staff.position}</div>
        </div>
    );
}

export default AboutFaculty;
