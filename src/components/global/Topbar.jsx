import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const Topbar = () => {


    return (
        <div id="topbar"
            className='bg-sky-900 fixed z-10 flex w-full py-2 items-center justify-end md:justify-between text-white transition-all duration-300  top-0 h-[40px]'>
            {/* <div className='items-center justify-center hidden gap-2 md:flex'><IoMdMail /> Email: info@abcsecondaryschool.com</div>
            <div className='flex justify-between w-full gap-8 tracking-tight divide-orange-200 md:divide-x md:justify-center md:w-max'>
                <div className="flex items-center justify-center gap-2"><FaPhone />Call: 123 4561 5523</div>
                <div className="flex items-center justify-center gap-8 pl-8 text-lg">
                    <FaFacebook className="hover:scale-125 duration-500 cursor-pointer hover:rotate-[360deg]" />
                    <FaInstagram className="hover:scale-125 duration-500 cursor-pointer hover:rotate-[360deg]" />
                </div>
            </div> */}
            <marquee>
                <ul className="flex gap-8 list-disc">
                    <li>बुद्धभूमि नगरपालिका वडा नं. १, भेलाईमा अवस्थित सिद्धार्थ स्मारक माध्यमिक विद्यालयमा शान्त, शैक्षिक, मनोरम वातावरणमा साधारण तर्फ र विशेष शिक्षा अन्तर्गत छात्रावाससहित दृष्ट्रिविहीन स्रोतकक्षासमेत संचालनमा रहेको छ ।</li>
                    <li>विक्रम सम्वत २०१८ सालमा स्थापना भएको यस क्षेत्रके सबैभन्दा पुरानो पूर्ण सरकारी अनुदान प्राप्त विद्यालयमा बालबिकाशका कक्षा देखि कक्षा १२ सम्म नेपाली र अंग्रेजी दुवै माध्यममा सिकाइ हुदै आएको छ ।</li>
                    <li>बुद्धभूमि नगरपालिका वडा नं. १, भेलाईमा अवस्थित सिद्धार्थ स्मारक माध्यमिक विद्यालयमा शान्त, शैक्षिक, मनोरम वातावरणमा साधारण तर्फ र विशेष शिक्षा अन्तर्गत छात्रावाससहित दृष्ट्रिविहीन स्रोतकक्षासमेत संचालनमा रहेको छ ।</li>
                    
                    
                </ul>
            </marquee>
        </div>
    )
}

export default Topbar