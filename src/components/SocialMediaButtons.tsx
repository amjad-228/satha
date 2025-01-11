import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiX, SiWhatsapp } from 'react-icons/si'

export const SocialMediaButtons = () => {
  return (
    <div className="flex items-center space-x-2 mb-6">
        <a href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة"  target="_blank" rel="noopener noreferrer">
          <SiWhatsapp className="h-5 w-5 text-green-600 ml-4" />
          <span className="sr-only">واتساب</span>
        </a>

        <a href="https://facebook.com/profile.php?id=61571033757810" target="_blank" rel="noopener noreferrer">
          <SiFacebook className="h-5 w-5 text-blue-600 ml-4 mr-2" />
          <span className="sr-only">فيسبوك</span>
        </a>
      
        <a href="https://instagram.com/sathat_jida" target="_blank" rel="noopener noreferrer">
          <SiInstagram className="h-5 w-5 text-pink-600 ml-4" />
          <span className="sr-only">انستغرام</span>
        </a>
      
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="h-5 w-5 text-blue-700 ml-4" />
          <span className="sr-only">لينكد إن</span>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <SiYoutube className="h-5 w-5 text-red-600 ml-4" />
          <span className="sr-only">يوتيوب</span>
        </a>
      
        <a href="https://x.com/sathaapp" target="_blank" rel="noopener noreferrer">
          <SiX className="h-5 w-5 text-gray-900 ml-4" />
          <span className="sr-only">تويتر</span>
        </a>  
    </div>
  )
}