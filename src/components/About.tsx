import { motion } from 'framer-motion';

export function About() {
    return (
        <section
            id="story"
            className="py-16 px-6 max-w-[1600px] mx-auto w-full"
        >
            {/* Section Label */}
            <div className="flex justify-between items-center py-4 border-b border-rule mb-12">
                <span className="mono">§ 02 / Our Story</span>
                <span className="mono text-ink-soft">
                    Aafno Swaad, Aafno Ghar
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left: Image */}
                <motion.div
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="aspect-[4/5] relative overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2000&auto=format&fit=crop"
                        alt="Spices being mixed"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <div className="eyebrow mb-6">Your Taste, Your Home</div>
                    <h2 className="text-[32px] md:text-[40px] leading-tight mb-6 max-w-lg">
                        We built Chamunda as a tribute to the bustling sekuwa
                        corners of Kathmandu—a place where the warmth of home
                        meets the fierce flavors of the street.
                    </h2>
                    <p className="text-ink-2 mb-12 max-w-lg leading-relaxed">
                        Every skewer we roast over our charcoal grill carries a
                        tradition passed down through generations. From our
                        meticulously sourced mountain spices to the welcoming
                        atmosphere of our dining room, everything is designed to
                        make you feel at home while experiencing the truest
                        taste of local cuisine.
                    </p>

                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        <div className="flex flex-col gap-2">
                            <span className="font-display text-5xl md:text-[64px] text-accent">
                                50+
                            </span>
                            <span className="mono text-ink-soft">
                                Menu Items
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-display text-5xl md:text-[64px] text-ink">
                                100%
                            </span>
                            <span className="mono text-ink-soft">
                                Local Spices
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-display text-5xl md:text-[64px] text-accent">
                                7 Days
                            </span>
                            <span className="mono text-ink-soft">
                                Open all week
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
