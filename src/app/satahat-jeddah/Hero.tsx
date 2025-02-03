export default function Hero() {
    return (
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4">سطحات جدة</h1>
          <p className="text-2xl mb-4">خدمات نقل وسحب سيارات على مدار الساعة</p>
          <p className="text-xl mb-8">اختر حيك واحصل على أقرب خدمة سطحة في جدة سريعة وموثوقة</p>
          <a
            href="#districts"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            اختر حيك الآن
          </a>
        </div>
      </div>
    )
  }