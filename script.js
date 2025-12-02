const { useState, useEffect } = React;

// Icons
const Icons = {
    Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    MessageCircle: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
    CheckCircle: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 5h4"></path><path d="M6 7H2"></path></svg>,
    Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>,
    X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>,
    ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
};

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // REPLACE THIS WITH YOUR NUMBER
    const whatsappNumber = "355691234567";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = (text) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    const ServiceCard = ({ icon: Icon, title, price, desc, features }) => (
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
            <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-gold mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Icon />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-amber-600 font-bold mb-4">{price}</p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{desc}</p>
            <ul className="space-y-2 mb-8">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <span className="text-green-500"><Icons.CheckCircle /></span> {f}
                    </li>
                ))}
            </ul>
            <a href={whatsappLink(`Hi, I am interested in ${title}`)} target="_blank" className="w-full block text-center py-3 rounded-lg border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all mt-auto">
                Book Service
            </a>
        </div>
    );

    return (
        <div className="min-h-screen pb-20 md:pb-0 font-sans">
            {/* Top Bar */}
            <div className="bg-amber-400 text-slate-900 text-xs font-bold py-2 px-4 text-center tracking-wide">
                #1 RATED CLEANING SERVICE IN TIRANA
            </div>

            {/* Navbar */}
            <nav className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur shadow-md py-3' : 'bg-white py-5'}`}>
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-amber-500"><Icons.Sparkles /></div>
                        <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Elite<span className="text-amber-600">Cleaning</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
                        <a href="#trust" className="hover:text-amber-600 transition-colors">Why Us</a>

                    </div>
                    <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
                        <div className="flex flex-col p-4 space-y-4 font-medium">
                            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                            <a href={whatsappLink("Hi, I need a quote")} target="_blank" className="bg-green-500 text-white py-3 rounded-lg text-center font-bold">WhatsApp Booking</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold text-sm tracking-wide uppercase backdrop-blur-sm">
                        English Speaking Management • Background Checked Staff
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        The Gold Standard of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Cleaning in Tirana</span>
                    </h1>
                    <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
                        Don't settle for average. We provide vetted, highly trained staff for Tirana's most exclusive residences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={whatsappLink("Hi, I would like to book Elite Service")} target="_blank" className="bg-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl shadow-amber-900/20 flex items-center justify-center gap-2">
                            Book Elite Service <Icons.ArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={Icons.Sparkles}
                            title="Elite Residence"
                            price="800 LEK / hour"
                            desc="Perfect for weekly upkeep of apartments and villas. Minimum 4 hours."
                            features={["Dusting & Vacuuming", "Bathroom Sanitation", "Kitchen Detailing", "Bed Making"]}
                        />
                        <ServiceCard
                            icon={Icons.Shield}
                            title="Move-In / Deep Clean"
                            price="From 100€ Flat Fee"
                            desc="Deep sanitation for tenants, landlords, or post-renovation needs."
                            features={["Inside Windows", "Inside Cabinets/Oven", "Grout Scrubbing", "Limescale Removal"]}
                        />
                        <ServiceCard
                            icon={Icons.CheckCircle}
                            title="Airbnb Turnover"
                            price="20€ - 30€ / turnover"
                            desc="Reliable service for hosts. We ensure 5-star cleanliness reviews."
                            features={["Same Day (11am-3pm)", "Linen Changing", "Amenities Restock", "Photo Reporting"]}
                        />
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp */}
            <a href={whatsappLink("Hi, I need a quote")} target="_blank" className="fixed bottom-20 md:bottom-8 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce">
                <Icons.MessageCircle />
            </a>

            {/* Mobile Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 md:hidden z-40 flex gap-3">
                <a href="tel:+355691234567" className="flex-1 py-3 rounded-lg bg-slate-100 text-slate-900 font-bold flex justify-center items-center gap-2">
                    <Icons.Phone /> Call
                </a>
                <a href={whatsappLink("Hi, I need a quote")} target="_blank" className="flex-1 py-3 rounded-lg bg-green-500 text-white font-bold flex justify-center items-center gap-2">
                    <Icons.MessageCircle /> WhatsApp
                </a>
            </div>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
