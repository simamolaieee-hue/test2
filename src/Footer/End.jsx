import { MapPin,Phone,Check} from "lucide-react";

function End() {
  return (
    <div className="w-full relative mt-20 text-white">
      <div
        dir="ltr"
        className="relative bg-cover bg-center bg-no-repeat {/*حداقل ارتفاع*/}min-h-112.5"
       style={{backgroundImage: "url('/ho.jpg')",}}
      >
        {/* لایه آبی روی عکس */}
        <div className="absolute {برای تایین فاصله عنصر از چهار طرف}inset-0 bg-blue-950/95"></div>
        <svg
          className="absolute {موقعیت دهی مطلق} top-0 left-0 w-full z-10"
          viewBox="0 0 1103 90"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H1103 V10 Q551 100 0 10 Z"
            fill="white"
          />
        </svg>

        <div className="relative z-20 flex flex-col md:flex-row gap-10 px-6 md:px-[7.5%] pt-28 pb-12">
          {/* ستون سمت چپ */}
          <div
            dir="rtl"
            className="w-full md:w-[40%] flex flex-col items-center md:items-start"
          >
            <h3 className="text-sm font-bold mb-4">
              از جدیدترین اخبار مطلع شوید:
            </h3>

            {/* فرم عضویت */}
            <div className="w-full max-w-83.75 h-10.5 bg-gray-200 rounded-full flex items-center p-1">
              <button className="bg-blue-600 hover:bg-blue-700 transition rounded-full px-4 h-8 flex items-center gap-2 text-white text-xs shrink-0">
                <Check size={16} /> عضویت</button>
              <input type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-transparent outline-none text-gray-700 text-xs text-right px-3 w-full min-w-0"/>
            </div>

            <div className="flex items-center gap-2 mt-7 text-xs">
              <MapPin size={17} />
              <p>
                آدرس: تهران، خیابان ولیعصر، خیابان ساختمان سرو، ساختمان کانسپتو
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs">
              <Phone size={17} />
              <p>
                شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹
              </p>
            </div>

            {/* شبکه های اجتماعی */}
            <h3 className="font-bold text-sm mt-8 mb-4">
              ما را در شبکه های اجتماعی دنبال کنید:
            </h3>

            <div className="flex items-center gap-7">

            </div>

          </div>

          {/* ستون سمت راست */}
          <div
            dir="rtl"
            className="w-full md:w-[60%] flex flex-col">
            {/* لینک ها */}
            <div className="flex justify-between gap-5">

              {/* ستون اول */}
              <div className="flex flex-col gap-5 text-xs">
                <h3 className="font-bold text-sm">
                  کانسپتو
                </h3>

                <a href="#">درباره ما</a>
                <a href="#">تماس با ما</a>
                <a href="#">اتاق خبر</a>
                <a href="#">قوانین و مقررات</a>
              </div>

              {/* ستون دوم */}
              <div className="flex flex-col gap-5 text-xs">
                <h3 className="font-bold text-sm">
                  خدمات مشتریان
                </h3>

                <a href="#">حساب کاربری</a>
                <a href="#">سوالات متداول</a>
                <a href="#">راهنمای کار با سایت</a>
                <a href="#">گزارش باگ</a>
              </div>

              {/* ستون سوم */}
              <div className="flex flex-col gap-5 text-xs">
                <h3 className="font-bold text-sm">
                  پیشنهاد کانسپتو
                </h3>

                <a href="#">لیست استارتاپ های ایرانی</a>
                <a href="#">ارزش گذاری استارتاپ</a>
                <a href="#">ایده های استارتاپی</a>
                <a href="#">محبوب ترین شرکت ها</a>
              </div>
            </div>

            <div className="mt-9 text-right">

              <h2 className="text-xl font-extrabold tracking-wider mb-3">CONCEPTO </h2>

              <p className="text-xs leading-7 text-justify">
                استارتاپ‌هایی که آینده را شکل می‌دهند، از ایده‌های
                نوآورانه تا پروژه‌های پیشرفته، جهان استارتاپ‌ها را
                از اینجا کشف کنید.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* نوار پایین */}
      <div
        dir="rtl"
        className="bg-[#001735] text-white h-11.25 flex items-center justify-center text-xs">
        © ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است.
      </div>
    </div>
  );
}

export default End;
