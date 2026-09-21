import img1 from '../assets/choila.jpg';
import img2 from '../assets/chowmin.jpg';
import img3 from '../assets/chicken_chowmin.jpg';
import img4 from '../assets/c_momo (2).jpg';
import img5 from '../assets/choila2.jpg';

export function Instagram() {
  // Keeping 5 top images
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-16 px-0 w-full overflow-hidden bg-paper">
      <div className="max-w-[1600px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="eyebrow mb-4">Follow along</div>
          <h2 className="font-display text-[40px] md:text-[56px] leading-none">@chamundacafe</h2>
        </div>
        <a href="#" className="mono text-ink hover:text-accent transition-colors pb-2 border-b border-ink hover:border-accent" data-magnetic>
          Open in Instagram ↗
        </a>
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 md:pl-0 md:grid md:grid-cols-5 gap-0">
        {images.map((imgSrc, idx) => (
          <a 
            href="#"
            key={idx}
            className="group relative aspect-square overflow-hidden bg-ink-2 snap-center min-w-[280px] md:min-w-0"
          >
            <img 
              src={imgSrc} 
              alt={`Instagram post ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="mono text-white">Post 0{idx + 1}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
