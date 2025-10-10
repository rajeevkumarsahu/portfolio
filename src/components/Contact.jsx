import React, { useState } from 'react'
import './Features.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks, ${form.name}! We will contact you at ${form.phone} / ${form.email}.`)
    setForm({ name: '', phone: '', email: '' })
  }

  return (
    <section className="features section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Feel free to reach out using the form below.</p>

        <form onSubmit={handleSubmit} className="feature-card" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ddd' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="phone" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Contact Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your contact number"
              style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ddd' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ddd' }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


