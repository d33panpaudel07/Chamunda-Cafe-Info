import { useState } from 'react';
import { motion } from 'framer-motion';

export function Bookings() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    type: '',
    guests: '',
    date: '',
    time: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields roughly before sending
    if (!formData.fullName || !formData.date || !formData.time) return;

    const message = `${formData.type || 'Reservation'} for ${formData.date}, ${formData.time} with about ${formData.guests} requested by ${formData.fullName}, ${formData.phone}${formData.requests ? `\n\nNotes: ${formData.requests}` : ''}`;
    window.location.href = `https://wa.me/9779823301556?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="bookings" className="w-full bg-ink text-paper py-16">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Left Col */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center py-4 border-b border-ink-2 mb-12">
            <span className="mono text-paper opacity-70">§ 10 / Bookings</span>
          </div>
          <div className="eyebrow mb-6 !text-paper opacity-70">Join us tonight</div>
          <h2 className="text-[clamp(40px,6vw,80px)] leading-[0.9] tracking-tight mb-8 px-2 -mx-2">
            Reserve your <span className="italic text-accent-gold pr-4">table.</span>
          </h2>
          <p className="text-paper/70 text-[16px] max-w-md mb-16 leading-relaxed">
            Whether it's an intimate dinner for two, a family Thakali feast, or a weekend evening with friends over Hukka and drinks, let us prepare a spot for you.
          </p>

          <div className="flex flex-col gap-6 mt-auto">
            <div className="mono opacity-80 border-b border-ink-2 pb-4">Kathmandu, Nepal</div>
            <div className="mono opacity-80 border-b border-ink-2 pb-4">Order Online</div>
            <div className="mono opacity-80 border-b border-ink-2 pb-4">hello@chamundacafe.com</div>
          </div>
        </div>

        {/* Right Col / Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col pt-4 lg:pt-[100px]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required value={formData.fullName} onChange={e => setFormData(p => ({...p, fullName: e.target.value}))} aria-label="Full Name" type="text" placeholder="Full Name" className="bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] text-paper placeholder:text-paper/50" />
              <input required value={formData.phone} onChange={e => setFormData(p => ({...p, phone: e.target.value}))} aria-label="Phone Number" type="tel" placeholder="Phone Number" className="bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] text-paper placeholder:text-paper/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <select required value={formData.type} onChange={e => setFormData(p => ({...p, type: e.target.value}))} aria-label="Reservation Type" className={`bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] appearance-none ${!formData.type ? 'text-paper/50' : 'text-paper'}`}>
                <option value="" disabled className="bg-ink text-paper/50">Reservation Type</option>
                <option value="Dine-in" className="bg-ink text-paper">Dine-in</option>
                <option value="Group Gathering" className="bg-ink text-paper">Group Gathering</option>
                <option value="Hukka Booking" className="bg-ink text-paper">Hukka Booking</option>
              </select>
              <input required value={formData.guests} onChange={e => setFormData(p => ({...p, guests: e.target.value}))} aria-label="Approximate Guests" type="number" placeholder="Approx. Guests" min="1" className="bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] text-paper placeholder:text-paper/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required value={formData.date} onChange={e => setFormData(p => ({...p, date: e.target.value}))} aria-label="Date" type="date" style={{ colorScheme: 'dark' }} className={`bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] ${!formData.date ? 'text-paper/50' : 'text-paper'}`} />
              <input required value={formData.time} onChange={e => setFormData(p => ({...p, time: e.target.value}))} aria-label="Time" type="time" style={{ colorScheme: 'dark' }} className={`bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] ${!formData.time ? 'text-paper/50' : 'text-paper'}`} />
            </div>

            <textarea 
              value={formData.requests} onChange={e => setFormData(p => ({...p, requests: e.target.value}))}
              aria-label="Special Requests"
              placeholder="Any special requests? (Celebrating a birthday, prefer outdoor seating...)" 
              rows={3}
              className="bg-transparent border-b border-ink-2 py-4 focus:outline-none focus:border-paper transition-colors font-body font-light rounded-none text-[16px] resize-none text-paper placeholder:text-paper/50"
            />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
              <span className="mono text-paper opacity-50">Sent via WhatsApp</span>
              <button 
                type="submit" 
                className="bg-accent w-full md:w-auto text-accent-ink mono px-8 py-4 hover:bg-accent-gold hover:text-ink transition-colors rounded-[2px]" 
                data-magnetic
              >
                Send Request →
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
