export function Location() {
  return (
    <section id="location" className="py-24 bg-[#1a110a] text-paper w-full">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col items-start justify-center">
          <span className="mono mb-4 block opacity-70">§ 09 / Location</span>
          <h2 className="font-display text-5xl md:text-7xl mb-10 text-paper leading-[1.1]">Visit<br/><span className="italic opacity-80">Us.</span></h2>
          <div className="flex flex-col gap-6 mono text-sm opacity-80 mb-12 max-w-md">
            <p className="leading-relaxed">Bringing the authentic smoke of traditional charcoal Sekuwa straight to your table.</p>
            <div className="flex justify-between border-t border-paper/20 pt-6">
              <span>Contact:</span>
              <span className="text-right">9841899470<br/>9744436179</span>
            </div>
            <div className="flex justify-between border-t border-b border-paper/20 py-6">
              <span>Hours:</span>
              <span className="text-right">Open Every Day<br/>11:00 AM – 10:00 PM</span>
            </div>
          </div>
          
          <a href="https://share.google/fvGJfHQejGf0tvWbA" target="_blank" rel="noreferrer" className="inline-block border border-paper/30 hover:border-paper hover:bg-paper hover:text-[#1a110a] px-8 py-4 mono uppercase tracking-widest text-xs transition-colors rounded-[2px] shadow-2xl">
            Open in Google Maps
          </a>
        </div>
        
        <div className="aspect-square lg:aspect-[4/5] w-full rounded-[2px] overflow-hidden bg-white/5 relative p-2 md:p-4 border border-white/10">
          <iframe 
            src="https://www.google.com/maps?q=Chamunda+Cafe%20%26%20Sekuwa&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-[2px]"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
