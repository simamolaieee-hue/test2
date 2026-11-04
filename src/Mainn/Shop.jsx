
function Shop() {
  return (
    <div className="w-full mt-40">
          <div className="w-[84%] h-px relative top-5 bg-gray-300"></div>

      
      <h2 className="text-[22px] font-bold text-gray-900 text-right mb-8 mr-8">
        دسته‌بندی ها
      </h2>

      {/* ردیف اول */}
      <div className="flex flex-wrap justify-center gap-x-18 gap-y-8 mb-10">

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Switchh.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>هوافضا</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Switchhh.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>رسانه ها</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Buttonn.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>گرافیک</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Switch.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>حسابداری</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Butto.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>ارز دیجیتال</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Buttone.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>برنامه نویسی</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
            <img src="Buttona.png" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
          <p>هوش مصنوعی</p>
        </div>

      </div>

      {/* ردیف دوم */}
      <div className="flex flex-wrap justify-center gap-18 mt-25">

       <div className="flex flex-col items-center gap-3">
         <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="Slider.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>حمل و نقل</p>
       </div>

       <div className="flex flex-col items-center gap-3">
         <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="mov.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>فیلم و سینما</p>
       </div>

       <div className="flex flex-col items-center gap-3">
         <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="dn.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>بیوتکنولوژی</p>
       </div>

       <div className="flex flex-col items-center gap-3">
         <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="mus.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>موسیقی</p>
       </div>

        <div className="flex flex-col items-center gap-3">
            <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="den.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>علمی</p>
        </div>

       <div className="flex flex-col items-center gap-3">
         <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="cum.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>تجارت الکترونیک</p>
       </div>

        <div className="flex flex-col items-center gap-3">
            <div className="w-21 h-21 rounded-full border-2 border-blue-500 p-1">
          <img src="doc.png" alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <p>پزشکی</p>
        </div>

      </div>

    </div>
  );
}

export default Shop;