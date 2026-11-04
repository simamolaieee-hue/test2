import { CalendarRange, Logs, MapPin } from "lucide-react"

function Eventee() {
    return (
        <>
            <div>
                <div className="mt-20">
                    <a href="#" className=" text-sm relative top-17 left-23 text-gray-600">
                        ‹ مشاهده همه
                    </a>
                    <div className="w-[60%] h-px relative top-16 left-55 bg-gray-300"></div>
                    <h2 className="text-[22px] font-bold text-gray-500 text-right mt-11 mr-20">
                        رویداد‌های اخیر
                    </h2>
                </div>

                <div className="flex gap-4.5 justify-center mt-17.5">

                    <div className="w-125 h-37.5 border-1 border-[#CBCED7] flex justify-center rounded-3xl text-center items-center">
                        <div>
                            <h1 className="text-[20px] mb-4 text-end relative left-5">سکوی پرتاب غزال</h1>
                            <h2 className="w-62 text-[13px] mb-2 text-end relative left-7">سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارت</h2>
                            <div className="flex gap-22">
                                <div className="flex gap-2 relative left-2.5"> <h1 className="text-[13px]">۲۹ بهمن</h1> <CalendarRange className="mt-2" size={14}></CalendarRange></div>
                                <div className="flex gap-2 relative left-10"><h1 className="text-[13px]">تهران، ایران</h1><MapPin className="mt-2" size={16}></MapPin></div>
                            </div>
                        </div>
                        <img className="w-42.5 h-37.5 relative left-10" src="sako.png" alt="" />
                    </div>

                    <div className="w-125 h-37.5 border-1 border-[#CBCED7] flex justify-end rounded-3xl text-center items-center">
                        <div>
                            <h1 className="text-[20px] mr-4">بوت کمپ برنامه نویسی دیجی کالا</h1>
                            <h2 className="w-62 text-[13px] mt-2.5 text-end ml-4">در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و </h2>
                            <div className="flex gap-22 mt-2.5">
                                <div className="flex gap-2 relative left-2.5"> <h1 className="text-[13px]">۲۹ بهمن</h1> <CalendarRange className="mt-1" size={14}></CalendarRange></div>
                                <div className="flex gap-2  relative left-10"><h1 className="text-[13px]">تهران، ایران</h1><MapPin className="mt-1" size={16}></MapPin></div>
                            </div>
                        </div>
                        <img className="w-42.5 h-37.5" src="digi.png" alt="" />
                    </div>
                    
                </div>


                <div className="flex gap-4.5 justify-center mt-17.5">

                    <div className="w-125 h-37.5 border-1 border-[#CBCED7] flex justify-center rounded-3xl text-center items-center">
                        <div>
                            <h1 className="text-[20px] mb-4 relative left-5 text-end">فراخوان جذب ایده و استارتاپ</h1>
                            <h2 className="w-62 text-[14px] relative left-6">در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری </h2>
                            <div className="flex mt-2">
                                <div className="flex gap-2 relative left-2.5"> <h3 className="text-[13px]">۲۹ بهمن</h3> <CalendarRange className="mt-1" size={14}></CalendarRange></div>
                                <div className="flex gap-2 relative left-31"><h1 className="text-[13px]">تهران، ایران</h1><MapPin className="mt-1" size={16}></MapPin></div>
                            </div>
                        </div>
                        <img className="w-42.5 h-37.5 relative left-10.5" src="vecc.png" alt="" />
                    </div>

                    <div className="w-125 h-37.5 border-1 border-[#CBCED7] flex justify-end rounded-3xl text-center items-center">
                        <div>
                            <h1 className="text-end mr-3 mb-3 text-[19px]">سکوی پرتاب قزوین</h1>
                            <h2 className="w-62 text-[13px]">ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری</h2>
                            <div className="flex mt-2">
                                <div className="flex gap-2 relative left-2.5"> <h3 className="text-[13px]">۲۹ بهمن</h3> <CalendarRange className="mt-1" size={14}></CalendarRange></div>
                                <div className="flex gap-2 relative left-23"><h1 className="text-[13px]">تهران، ایران</h1><MapPin className="mt-1" size={16}></MapPin></div>
                            </div>
                        </div>
                        <img className="w-42.5 h-37.5" src="cont.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Eventee