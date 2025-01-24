import { Truck, Clock, CreditCard, Phone } from "lucide-react"

const features = [
  { icon: Truck, title: "خدمة سريعة", description: "نصل إليك في أقل من 30 دقيقة" },
  { icon: Clock, title: "متاح 24/7", description: "خدمة على مدار الساعة طوال أيام الأسبوع" },
  { icon: CreditCard, title: "أسعار تنافسية", description: "أفضل الأسعار في جدة" },
  { icon: Phone, title: "دعم فني", description: "فريق دعم متخصص لمساعدتك" },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">مميزاتنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            لماذا تختار سطحات جدة؟
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12  text-blue-600 font-semibold">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

