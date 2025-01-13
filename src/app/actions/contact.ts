'use server'

import sgMail from '@sendgrid/mail'

// قم بتعيين مفتاح API الخاص بـ SendGrid
sgMail.setApiKey('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' as string)

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')
  console.log('بدء عملية إرسال النموذج:', { name, email, phone, message })
  if (!name || !email || !phone || !message) {
    return { success: false, error: 'جميع الحقول مطلوبة' }
  }
  const msg = {
    to: 'sathatjida@gmail.com', // قم بتغيير هذا إلى بريدك الإلكتروني
    from: 'aymanalsabry83@gmail.com', // يجب أن يكون هذا بريد إلكتروني مُتحقق منه في حساب SendGrid الخاص بك
    subject: 'رسالة جديدة من نموذج الاتصال',
    text: `
      اسم: ${name}
      البريد الإلكتروني: ${email}
      رقم الهاتف: ${phone}
      الرسالة: ${message}
    `,
    html: `
      <h1>رسالة جديدة من نموذج الاتصال</h1>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>البريد الإلكتروني:</strong> ${email}</p>
      <p><strong>رقم الهاتف:</strong> ${phone}</p>
      <p><strong>الرسالة:</strong> ${message}</p>
    `,
  }

  try {
    console.log('محاولة إرسال البريد الإلكتروني...')
    const response = await sgMail.send(msg)
    console.log('تم إرسال البريد الإلكتروني بنجاح:', response)
    return { success: true }
  } catch (error) {
    console.error('حدث خطأ أثناء إرسال البريد الإلكتروني:', error)
    return { success: false, error: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' }
  }
}