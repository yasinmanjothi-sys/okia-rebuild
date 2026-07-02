import Image from 'next/image';
import PageHeaderBand from '@/components/theater/PageHeaderBand';

export default function ContactPage() {
    return (
        <main className="w-full">
            <PageHeaderBand
                title="Contact Us"
                badgeText="Come Say Ô Kìa"
                maskSrc="/Main Masks /O kia (surprise).svg"
                maskAlt="Ô Kìa — the Surprise mask"
            />

            <section data-nav-theme="light" className="w-full bg-neutral py-16 md:py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-1">
                            <span className="font-host text-xs uppercase tracking-[0.2em] text-maroon/50">Address</span>
                            <p className="font-host text-xl md:text-2xl font-bold text-maroon">136 Riverside Drive, Nairobi, Kenya</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="font-host text-xs uppercase tracking-[0.2em] text-maroon/50">Call Us</span>
                            <p className="font-host text-xl md:text-2xl font-bold text-maroon">+254 (0) 712 345 678</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="font-host text-xs uppercase tracking-[0.2em] text-maroon/50">Hours</span>
                            <p className="font-host text-xl md:text-2xl font-bold text-maroon">Mon &mdash; Sun: 7:00 AM &mdash; 9:00 PM</p>
                        </div>

                        <a
                            href="https://wa.me/254712345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 self-start rounded-full border border-maroon px-8 py-3 font-host font-bold text-xs uppercase tracking-[0.15em] text-maroon hover:bg-maroon hover:text-neutral transition-colors"
                        >
                            Book with WhatsApp
                        </a>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/OKIA+Cafe+Riverside/@-1.2704421,36.79612,17z/data=!3m1!4b1!4m6!3m5!1s0x182f171dde73bc85:0x98fefe81694df27d!8m2!3d-1.2704421!4d36.7986949!16s%2Fg%2F11z71ysnm9?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block w-full aspect-[4/5] md:aspect-square rounded-[24px] overflow-hidden border-sticker"
                    >
                        <Image src="/MAP.png" alt="Map showing O KIA Cafe Riverside location on Google Maps" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-300" />
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-neutral border border-maroon px-6 py-2.5 font-host font-bold text-xs uppercase tracking-[0.15em] text-maroon shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View on Google Maps
                        </span>
                    </a>
                </div>
            </section>
        </main>
    );
}
