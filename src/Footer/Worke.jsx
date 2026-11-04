import { CalendarRange } from "lucide-react"
function Worke(){
    return(
        <>
        <div>
         
         <div className="mt-30">
            <div className="w-[70%] h-px relative top-5 ml-17 bg-gray-300"></div>
      <h2 className="text-[22px] font-bold text-gray-900 text-right mb-8 mr-20">
        فرصت های شغلی
      </h2>
         </div>

         <div className="flex gap-8  justify-center mt-19">
            <div className="w-43.75 h-35-[#f1f1f1] rounded-[22px] flex-col">
                <img className="w-35 h-32.5 relative bottom-12.5 left-4" src="aa.png" alt="" />
                <h2 className="relative bottom-19 text-center text-[14px]">فرصت شغلی 18</h2>
                <p className="relative bottom-16 text-[12px] text-center text-blue-600">گروه علی بابا</p>
            </div>

            <div className="w-43.75 h-35 bg-[#f1f1f1] rounded-[22px] flex-col">
                <img className="w-35 h-32.5 relative bottom-12.5 left-4" src="bb.png" alt="" />
                <h2 className="relative bottom-19 text-center text-[14px]">فرصت شغلی14</h2>
                <p className="relative bottom-16 text-[12px] text-center text-blue-600">بیمه بازار</p>
            </div>

            <div className="w-43.75 h-35 bg-[#f1f1f1] rounded-[22px] flex-col">
                <img className="w-35 h-32.5 relative bottom-12.5 left-4" src="Card.png" alt="" />
                <h2 className="relative bottom-19 text-center text-[14px]">فرصت شغلی 11</h2>
                <p className="relative bottom-16 text-[12px] text-center text-blue-600">کارگزاری فارابی</p>
            </div>

            <div className="w-43.75 h-35 bg-[#f1f1f1] rounded-[22px] flex-col">
                <img className="w-35 h-32.5 relative bottom-12.5 left-4" src="as.png" alt="" />
                <h2 className="relative bottom-19 text-center text-[14px]">فرصت شغلی 16</h2>
                <p className="relative bottom-16 text-[12px] text-center text-blue-600">اسیاتک</p>
            </div>

            <div className="w-43.75 h-35 bg-[#f1f1f1] rounded-[22px] flex-col">
                <img className="w-35 h-32.5 relative bottom-12.5 left-4" src="blu.png" alt="" />
                <h2 className="relative bottom-19 text-center text-[14px]">فرصت شغلی 12</h2>
                <p className="relative bottom-16 text-[12px] text-center text-blue-600">بلوبانک</p>
            </div>
         </div>

         {/***/}

          <div className="relative w-full mt-30">

      {/* پس‌زمینه  */}
      <div
        className="absolute top-0 left-0 w-full h-95 bg-cover bg-center"
        style={{ backgroundImage: "url('compo.png')" }}
      >
        {/* لایه آبی  */}
        <div className="absolute inset-0 bg-blue-900/85"></div>
      </div>

      {/* خمیدگی  بالا */}
      <svg
        className="absolute top-0 left-0 w-full h-25 z-[1]"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 H1200 V0 Q600 100 0 15 Z"
          fill="white"
        />
      </svg>

      <div className="relative z-[2] pt-22.5">

        <div className="flex items-center justify-between mb-10">
          <a href="#" className="text-white text-sm ml-12">
            ‹ مشاهده همه
          </a>
          <h2 className="text-white text-xl font-bold mr-13 ">تازه‌ترین اخبار</h2>
        </div>

        {/*کارت‌ها*/}
        <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-5 justify-center">

           <div className="w-[320px] h-92.5 bg-white rounded-3xl">
            <img src="ali2.png" alt="" />
            <div className="flex justify-center gap-2 mt-4 text-center">
            </div>
            <h1 className="text-[13px] ml-53 text-[#6f7590]">تجارت الکترونیک</h1>
            <h1 className="text-[14px] text-end mt-2 ">رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت 2 خدمت در هر ثانیه</h1>
            <h1 className="text-[12px] text-end mt-4 text-gray-500">با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد.</h1>
            <div className="flex gap-20 mt-8">
              <div className="flex ml-1"><h1 className="text-gray-500">1402/12/3</h1>
               <CalendarRange size={20} className="mt-1"></CalendarRange></div>
              <div className="flex gap-1"><h1 className="text-gray-500 text-[12px]">آتوسا صفوی زاده</h1><img src="atos.png" alt="" />
              </div>
            </div>
          </div>

           <div className="w-[320px] h-92.5 bg-white rounded-3xl">
            <img src="elec.png" alt="" />
            <h1 className="text-[13px] ml-56 mt-4 text-[#6f7590]">تجارت الکترونیک</h1>
            <h1 className="text-[14px] text-end mt-3">بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد</h1>
            <h1 className="text-[12px] text-gray-600 text-end mt-4">بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن ساعت‌ه</h1>
            <div className="flex gap-24 mt-7">
              <div className="flex ml-1"><h1 className="text-gray-500">1402/12/5</h1>
              <CalendarRange size={20} className="mt-1"></CalendarRange> </div>
              <div className="flex gap-1"><h1 className="text-gray-500">امیر بختیاری</h1>
              <img src="amir.png" alt="" /></div>
            </div>
          </div>

           <div className="w-[320px] h-92.5 bg-white rounded-3xl">
            <img src="snap.png" alt="" />
            <h1 className="text-[13px] ml-56 mt-4 text-[#6f7590]">تجارت الکترونیک</h1>
            <h1 className="text-[14px] text-end mt-3 ">اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست </h1>
            <h1 className="text-[12px] text-end text-gray-600 mt-4">در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد در روز</h1>
            <div className="flex gap-21 mt-7">
              <div className="flex ml-1"><h1 className="text-gray-500">1402/12/11</h1>
               <CalendarRange size={20} className="mt-1"></CalendarRange></div>
              <div className="flex gap-1"><h1 className="text-gray-500">فرهاد رئوفی</h1>
              <img className="w-[30px] h-[30px]" src="farh.png" alt="" /></div>
            </div>
          </div>

        </div>

      </div>

      {/* خمیدگی پایین */}
      <svg
        className="absolute top-80 left-0 w-full h-25 z-[1] pointer-events-none"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 Q600 100 1200 0 V100 H0 Z" fill="white" />
      </svg>
    </div>

        </div>
        </>
    )
}
export default Worke