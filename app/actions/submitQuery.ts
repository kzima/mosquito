'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitQuery(formData: FormData) {
  const email = formData.get('email') as string
  const query = formData.get('query') as string

  if (email.length < 3 || query.length < 3) {
    return { success: false, error: 'Invalid input' }
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kris@mosquito.ie',
      subject: 'New AI Consulting Query',
      text: `Email: ${email}\n\nQuery: ${query}`,
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Failed to send email' }
  }
}
