export default function AboutSection() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">من نحن</h3>
            <p className="text-lg text-gray-700 mb-4">
              سطحة جدة هي سطحة رائدة في مجال خدمات السيارات في جدة. تقدم خدمات سريعة وموثوقة لنقل وسحب السيارات المتعطلة وفتح أبواب السيارات المقفلة. فريقنا من الفنيين المهرة جاهز للمساعدة على مدار الساعة.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>خبرة أكثر من 10 سنوات في خدمات السيارات</li>
              <li>فريق متخصص ومدرب على أحدث التقنيات</li>
              <li>خدمة عملاء متميزة وسرعة في الاستجابة</li>
              <li>تغطية شاملة لجميع أنحاء جدة</li>
              <li>أسعار مناسبة ورخيصة</li>
            </ul>
        </div>
    )
}