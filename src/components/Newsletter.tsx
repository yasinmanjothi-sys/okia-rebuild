'use client';

export default function Newsletter() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section data-nav-theme="light" className="w-full bg-neutral py-24 md:py-32 px-6">
            <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-10">
                <h2 className="font-okia text-3xl md:text-4xl !text-maroon uppercase tracking-wide leading-snug">
                    Get the good stuff in your inbox.
                </h2>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                    <input
                        type="text"
                        placeholder="First name"
                        className="w-full max-w-sm rounded-full border border-maroon/40 bg-transparent px-6 py-3 font-host text-sm text-maroon placeholder:text-maroon/50 outline-none focus:border-maroon transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="w-full max-w-sm rounded-full border border-maroon/40 bg-transparent px-6 py-3 font-host text-sm text-maroon placeholder:text-maroon/50 outline-none focus:border-maroon transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full max-w-sm rounded-full border border-maroon/40 bg-transparent px-6 py-3 font-host text-sm text-maroon placeholder:text-maroon/50 outline-none focus:border-maroon transition-colors"
                    />
                    <button
                        type="submit"
                        className="mt-2 rounded-full border border-maroon px-8 py-3 font-host font-bold text-xs uppercase tracking-[0.15em] text-maroon hover:bg-maroon hover:text-neutral transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
