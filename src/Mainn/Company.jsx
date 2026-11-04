import { MapPin } from "lucide-react";
function Company() {
  return (
    <section className="relative w-full mt-35">

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

      <div className="relative z-[2] pt-32.5 pb-10 px-8">

        <div className="flex items-center justify-between mb-12">
          <a href="#" className="text-white text-sm">
            ‹ مشاهده همه
          </a>

          <h2 className="text-white text-xl font-bold ">
            شرکت‌های محبوب
          </h2>
        </div>

        {/*کارت‌ها*/}
        <div className="flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-4 gap-5">

           <div className="w-66.25 h-92.5 bg-white rounded-3xl">
            <img src="ali.png" alt="" />
            <div className="flex justify-center gap-2 mt-4 text-center">
              <div className="w-28.75 h-17.5  border-[1px] border-gray-300 rounded-[9px]">
                <h1 className="text-[12px] mt-2">سرمایه گذاران جدید</h1>
                <h1 className="text-[#0D6EFD] mt-1.5 ml-12">234</h1></div>

             <div className="w-28.75 h-17.5 rounded-[9px] border-1 border-gray-300">
              <h1  className="text-[12px] mt-2">مخاطبین جدید</h1>
              <h1 className="text-[#0D6EFD] mt-1.5 ml-12">26,750</h1></div>
            </div>
            <h1 className="text-[12px] text-end mt-3 text-gray-700">علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی </h1>

            <div className="flex gap-30 mt-7">
              <div className="flex ml-1"><h1 className="text-gray-500">5</h1>
               <img src="star.png" alt="" /></div>
              <div className="flex"><h1 className="text-gray-500">تهران , ایران</h1>
              <MapPin size={19}></MapPin>
              </div>
            </div>
          </div>

           <div className="w-66.25 h-92.5 bg-white rounded-3xl">
            <img src="fa.png" alt="" />
            <div className="flex justify-center gap-2 mt-4 text-center">
              <div className="w-28.75 h-17.5  border-[1px] border-gray-300 rounded-[9px]">
                <h1 className="text-[12px] mt-2">سرمایه گذاران جدید</h1>
                <h1 className="text-[#0D6EFD] mt-1.5 ml-12">392</h1></div>

             <div className="w-28.75 h-17.5 rounded-[9px] border-1 border-gray-300">
              <h1  className="text-[12px] mt-2">مخاطبین جدید</h1>
              <h1 className="text-[#0D6EFD] mt-1.5 ml-12">29,120</h1></div>
            </div>
            <h1 className="text-[12px] text-end mt-3 text-gray-700">کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات در </h1>

            <div className="flex gap-30 mt-12">
              <div className="flex ml-1"><h1 className="text-gray-500">5</h1>
               <img src="star.png" alt="" /></div>
              <div className="flex"><h1 className="text-gray-500">تهران , ایران</h1>
              <MapPin size={19}></MapPin>
              </div>
            </div>
          </div>

           <div className="w-66.25 h-92.5 bg-white rounded-3xl">
            <img src="di.png" alt="" />
            <div className="flex justify-center gap-2 mt-4 text-center">
              <div className="w-28.75 h-17.5  border-1 border-gray-300 rounded-[9px]">
                <h1 className="text-[12px] mt-2">سرمایه گذاران جدید</h1>
                <h1 className="text-[#0D6EFD] mt-1.5 ml-12">432</h1></div>

             <div className="w-28.75 h-17.5 rounded-[9px] border-1 border-gray-300">
              <h1  className="text-[12px] mt-2">مخاطبین جدید</h1>
              <h1 className="text-[#0D6EFD] mt-1.5 ml-12">25,120</h1></div>
            </div>
            <h1 className="text-[12px] text-end mt-3 text-gray-700">هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، </h1>
            <div className="flex gap-30 mt-11">
              <div className="flex ml-1"><h1 className="text-gray-500">4</h1>
               <img src="star.png" alt="" /></div>
              <div className="flex"><h1 className="text-gray-500">تهران , ایران</h1>
              <MapPin size={19}></MapPin>
              </div>
            </div>
          </div>

          <div className="w-66.25 h-92.5 bg-white rounded-3xl">
            <img src="contaa.png" alt="" />
            <div className="flex justify-center gap-2 mt-4 text-center">
              <div className="w-28.75 h-17.5  border-1 border-gray-300 rounded-[9px]">
                <h1 className="text-[12px] mt-2">سرمایه گذاران جدید</h1>
                <h1 className="text-[#0D6EFD] mt-1.5 ml-12">398</h1></div>

             <div className="w-28.75 h-17.5 rounded-[9px] border-1 border-gray-300">
              <h1  className="text-[12px] mt-2">مخاطبین جدید</h1>
              <h1 className="text-[#0D6EFD] mt-1.5 ml-12">21,394</h1></div>
            </div>
            <h1 className="text-[12px] text-end mt-3 text-gray-700">از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روان</h1>

            <div className="flex gap-30 mt-6">
              <div className="flex ml-1"><h1 className="text-gray-500">5</h1>
               <img src="star.png" alt="" /></div>
              <div className="flex"><h1 className="text-gray-500">تهران , ایران</h1>
              <MapPin size={19}></MapPin>
              </div>
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
    </section>
  );
}
export default Company;