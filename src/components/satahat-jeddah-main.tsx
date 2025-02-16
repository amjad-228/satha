import Image from "next/image"
import { Phone, Clock, CreditCard, MapPin, Shield, PenToolIcon as Tool, Truck, Users, Wrench } from "lucide-react"
import { Buttons } from "./Buttons"
import DistrictsList from "./DistrictsList"
import { Map } from "./Map"
import Link from 'next/link';

export function SatahatJeddahMain(name: string, url: string) {




    return (
        <div>
            <main className="bg-gray-100 shadow-md rounded-lg px-3 py-5 text-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-center text-purple-900">سطحة جدة {name} | أقرب سطحة في حي {name} 0535142000</h2>
                <section className="bg-white shadow-md rounded-lg p-3 mb-8">
                    <div className="mb-6">
                        <Image
                            src="/images/satha2.webp"
                            alt={`تقدم سطحات جدة خدمة نقل وسحب السيارت في مدينة جدة حي ${name}`}
                            title={`تقدم سطحات جدة خدمة نقل وhttps://kzmkrshewuza76ti0l7a.lite.vusercontent.net/سحب السيارت في مدينة جدة حي ${name}`}
                            className="rounded-lg shadow-md w-full h-64 object-cover"
                            width={800}
                            height={400}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                        />
                    </div>
                    <h2 className="text-2xl font-semibold">خدمات سطحة جدة في حي {name}</h2>
                    <h3 className="text-xl mb-6 mr-2"> نحن نفخر بتقديم أفضل خدمات سطحة في حي {name} بجدة. فريقنا المتخصص جاهز على مدار الساعة لتلبية احتياجاتكم في نقل وسحب السيارات بأعلى معايير الجودة والأمان.</h3>
                    <div className="bg-blue-100 p-4 rounded-lg mb-8">
                        <h3 className="text-xl font-semibold mb-2">اطلب سطحة الآن في حي {name}</h3>
                        <p className="text-lg mb-4">نصلك في أقرب وقت أينما كنت في حي {name}!</p>
                        <Buttons />
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">حي {name}: تاريخ وأهمية</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/2">
                            <p className="text-lg mb-4">
                                يعد حي {name} من الأحياء الحيوية في مدينة جدة، حيث يتميز بموقعه الاستراتيجي وتطوره العمراني السريع.
                                يمتاز الحي بقربه من شاطئ البحر الأحمر وتوفر العديد من المرافق الخدمية والترفيهية.
                            </p>
                            <p className="text-lg mb-4">
                                مع النمو السكاني والعمراني في حي {name}، ازدادت الحاجة إلى خدمات موثوقة مثل سطحة جدة لضمان راحة وأمان
                                السكان والزوار على حد سواء.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="images/satha2.webp"
                                alt={`صورة لحي ${name} في جدة`}
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">لماذا تختار سطحتنا في حي {name}؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <Clock className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">خدمة على مدار الساعة في {name}</h3>
                                <p>نعمل 24/7 لنكون جاهزين لمساعدتك في أي وقت تحتاج فيه إلى خدماتنا في حي {name}.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">تغطية شاملة لحي {name}</h3>
                                <p>نغطي جميع مناطق حي {name} لضمان وصولنا إليك بسرعة أينما كنت في الحي.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CreditCard className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">أسعار تنافسية في {name}</h3>
                                <p>نقدم خدماتنا بأسعار معقولة وشفافة لسكان حي {name} دون أي رسوم خفية.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">دعم فني متخصص لحي {name}</h3>
                                <p>فريقنا المتخصص على دراية تامة بحي {name} وجاهز لتقديم المساعدة والإجابة على جميع استفساراتك.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">خدماتنا في حي {name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="../../services/car-towing" className="border rounded-lg p-4">
                            <div>
                                <Truck className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-semibold text-lg mb-2">سحب السيارات المعطلة في حي {name}</h3>
                                <p>نقوم بسحب سيارتك المعطلة في حي {name} بكل احترافية وأمان إلى الوجهة المطلوبة.</p>
                            </div>
                        </Link>
                        <Link href="../../services/car-transport" className="border rounded-lg p-4">
                            <div>
                                <Shield className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-semibold text-lg mb-2">نقل آمن للسيارات في حي {name}</h3>
                                <p>نضمن نقل سيارتك بأمان تام داخل وخارج حي {name} مع مراعاة أعلى معايير السلامة.</p>
                            </div>
                        </Link>
                        <Link href="../../services/car-unlocking" className="border rounded-lg p-4">
                            <div>
                                <Tool className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-semibold text-lg mb-2">فتح ابواب السيارات في حي {name}</h3>
                                <p>نقدم خدمات احترافية لفتح ابواب السيارات في موقعك بحي {name} دون احداث اي ضرر.</p>
                            </div>
                        </Link>
                        <Link href="../../services/car-unlocking" className="border rounded-lg p-4">
                            <div>
                                <Wrench className="h-8 w-8 text-green-500 mb-3" />
                                <h3 className="font-semibold text-lg mb-2">تقدير السيارات في شيخ المعارض والورش</h3>
                                <p>نقدم خدمة تقدير السيارات في شيخ المعارض والورش بأفضل الاسعار.</p>
                            </div>
                        </Link>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">المشاكل الشائعة للسيارات في حي {name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <Wrench className="h-8 w-8 text-red-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">تعطل البطارية</h3>
                                <p>شائع في الأيام الحارة في حي {name}. نقدم خدمة شحن البطارية أو استبدالها في الموقع.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Wrench className="h-8 w-8 text-red-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">مشاكل في الإطارات</h3>
                                <p>بسبب الطرق الحارة في حي {name}، نقدم خدمة تبديل الإطارات وإصلاح الثقوب.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Wrench className="h-8 w-8 text-red-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">ارتفاع حرارة المحرك</h3>
                                <p>شائع في صيف حي {name} الحار. نقدم المساعدة الفورية لتبريد المحرك ومنع الأضرار.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Wrench className="h-8 w-8 text-red-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">نفاد الوقود</h3>
                                <p>في الطرق الطويلة بـحي {name}، نوفر خدمة توصيل الوقود لمساعدتك في مواصلة رحلتك.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">فريقنا ومعداتنا في حي {name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <Users className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">فريق متخصص</h3>
                                <p>يتكون فريقنا في حي {name} من فنيين ذوي خبرة عالية ومدربين على أحدث تقنيات سحب ونقل السيارات.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Truck className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">أسطول حديث</h3>
                                <p>نمتلك مجموعة من أحدث سيارات السحب والنقل المجهزة خصيصًا لتلبية احتياجات عملائنا في {name}.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Tool className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">معدات متطورة</h3>
                                <p>نستخدم أحدث المعدات والأدوات لضمان سلامة سيارتك أثناء عمليات السحب والنقل في حي {name}.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Shield className="h-8 w-8 text-blue-500 mr-1 ml-2" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">الأمان أولاً</h3>
                                <p>نتبع إجراءات صارمة لضمان سلامة سيارتك وسلامة فريقنا أثناء العمل في شوارع {name}.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">خريطة وتوجيهات الوصول إلى حي {name}</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/2">
                            {Map(url)}
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="font-semibold text-lg mb-2">كيفية الوصول إلى حي {name}</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>من وسط المدينة: اتجه شمالاً على طريق الأمير محمد بن عبد العزيز</li>
                                <li>من مطار الملك عبد العزيز: اتجه جنوباً على طريق المدينة المنورة</li>
                                <li>من الكورنيش: اتبع شارع فلسطين حتى تصل إلى حي {name}</li>
                            </ul>
                            <p className="mt-4">لمزيد من التفاصيل أو المساعدة في الوصول، لا تتردد في الاتصال بنا على <a href="tel:0535142000" className="text-blue-900 hover:underline">0535142000</a></p>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">نصائح لصيانة السيارة في حي {name}</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-green-600">1. فحص منتظم للإطارات</h3>
                            <p>نظرًا لحرارة الطقس في {name}، تأكد من فحص ضغط الإطارات وحالتها بانتظام لتجنب الأعطال المفاجئة.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-green-600">2. الحفاظ على مستوى سوائل التبريد</h3>
                            <p>
                                مع ارتفاع درجات الحرارة في {name}، من المهم الحفاظ على مستوى سوائل التبريد لمنع ارتفاع حرارة المحرك.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-green-600">3. فحص البطارية</h3>
                            <p>الحرارة العالية في {name} يمكن أن تؤثر على عمر البطارية. قم بفحصها بانتظام وتنظيف أقطابها.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-green-600">4. استخدام مظلات للسيارات</h3>
                            <p>عند ركن سيارتك في {name}، استخدم مظلات لحماية السيارة من أشعة الشمس المباشرة وتقليل الحرارة داخلها.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">الأسئلة الشائعة عن خدماتنا في حي {name}</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-600">كم تستغرق مدة الوصول إلى حي {name}؟</h3>
                            <p>
                                نسعى للوصول إليك في اقرب وقت من وقت اتصالك بنا في حي {name}، اعتمادًا على موقعك الدقيق وحالة حركة
                                المرور.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-600">هل تعملون خلال العطلات الرسمية في حي {name}؟</h3>
                            <p>نعم، نحن نعمل على مدار الساعة طوال أيام الأسبوع في حي {name}، بما في ذلك العطلات الرسمية.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-600">هل تقدمون خدمات خارج حي {name}؟</h3>
                            <p>
                                نعم، بالإضافة إلى تغطيتنا الشاملة لحي {name}، يمكننا تقديم خدماتنا في الأحياء المجاورة وجميع أنحاء جدة.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-600">ما هي طرق الدفع المتاحة في حي {name}؟</h3>
                            <p>
                                نقبل الدفع النقدي وكذلك الدفع عبر البطاقات الائتمانية والبطاقات المصرفية لجميع خدماتنا في حي {name}.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-4 mb-8">
                    <h2 className="text-2xl font-semibold mb-2">خدمة السطحة في أحياء جدة</h2>
                    <p className="mb-6">
                        بالإضافة إلى خدمات سطجة جدة المتميزة في حي {name}، نقدم خدماتنا في جميع أحياء جدة، بما في ذلك:
                    </p>
                    <DistrictsList />
                </section>

                <section className="bg-blue-100 shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-semibold mb-6 text-center">اتصل بنا الآن في حي {name}</h2>
                    <p className="text-lg text-center mb-6">
                        فريق سطحة جدة في حي {name} جاهز لمساعدتك في أي وقت. لا تتردد في الاتصال بنا للحصول على المساعدة الفورية.
                    </p>
                    <Buttons />
                </section>
            </main>


        </div>
    )
}

