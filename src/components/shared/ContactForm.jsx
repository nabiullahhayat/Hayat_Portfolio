import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { CONTACT_CONTENT } from '../../constants/contact'
import { SITE_CONFIG } from '../../constants/site'
import { Send } from '../ui/Icons'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  projectType: '',
  message: '',
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20'

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()

    if (!accessKey || accessKey === 'your_access_key_here') {
      const subject = encodeURIComponent(
        form.subject || `Portfolio Contact from ${form.name}`,
      )
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Project Type: ${form.projectType || 'Not specified'}`,
          '',
          form.message,
        ].join('\n'),
      )

      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`

      toast.success('Opening your email app…', {
        description:
          'Complete the message in your mail app to send it. To enable direct form delivery, add your Web3Forms key to .env',
      })
      setForm(initialForm)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: [
            `Project Type: ${form.projectType || 'Not specified'}`,
            '',
            form.message,
          ].join('\n'),
          from_name: SITE_CONFIG.name,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Message sent successfully!', {
          description: CONTACT_CONTENT.responseTime,
        })
        setForm(initialForm)
      } else {
        toast.error('Failed to send message.', {
          description: result.message || 'Please try again later.',
        })
      }
    } catch {
      toast.error('Something went wrong.', {
        description: 'Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold text-white sm:text-2xl">Send a Message</h2>
      <p className="mt-2 text-sm text-slate-400">
        Fill out the form below and I&apos;ll get back to you soon.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-300">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" className="bg-surface-elevated">
              Select a type
            </option>
            {CONTACT_CONTENT.projectTypes.map((type) => (
              <option key={type} value={type} className="bg-surface-elevated">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </motion.form>
  )
}

export default ContactForm
