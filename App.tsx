
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Settings, 
  Award, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  MapPin,
  Phone,
  GraduationCap,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Search,
  Layout,
  Rocket,
  Users
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { ExperienceItem, CompetencyGroup } from './types';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#about' },
    { name: 'Career History', href: '#experience' },
    { name: 'Skill Ecosystem', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-neutral-900">
          JD<span className="text-blue-600">.</span> <span className="hidden sm:inline-block font-medium text-sm text-neutral-400">Senior Product Designer</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">
            Available for Hire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-neutral-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-neutral-600"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-bold">
            Available for Hire
          </a>
        </div>
      )}
    </nav>
  );
};

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <article className="relative pl-8 pb-12 group last:pb-0">
    {/* Timeline Line */}
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-neutral-200 group-last:bottom-8"></div>
    {/* Timeline Dot */}
    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-4 border-white bg-blue-600 z-10"></div>
    
    <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-xl font-bold text-neutral-900">{item.role}</h3>
        <p className="text-blue-600 font-semibold">{item.company}</p>
      </div>
      <div className="mt-1 md:mt-0 text-right">
        <span className="text-sm font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-lg uppercase tracking-wider">{item.period}</span>
        <p className="text-xs text-neutral-400 mt-1 font-medium">{item.location}</p>
      </div>
    </header>
    
    <ul className="mt-4 space-y-3">
      {item.bullets.map((bullet, idx) => (
        <li key={idx} className="flex gap-3 text-neutral-600 text-sm leading-relaxed">
          <ChevronRight className="w-4 h-4 mt-1 text-blue-400 shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);

const SkillPill: React.FC<{ text: string }> = ({ text }) => (
  <span className="bg-white border border-neutral-200 text-neutral-700 px-3 py-1.5 rounded-lg text-[13px] font-medium hover:border-blue-400 hover:text-blue-600 hover:shadow-sm transition-all cursor-default whitespace-nowrap">
    {text}
  </span>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Nav />

      {/* Hero Section - Optimized for ATS & Narrative Impact */}
      <section id="about" className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <header>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 tracking-widest uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Strategic Leadership in Design
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6 tracking-tight">
                  {RESUME_DATA.name}
                </h1>
              </header>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0">
                {RESUME_DATA.summary}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                <a href="#contact" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center gap-2">
                  Discuss a Venture <ChevronRight size={18} />
                </a>
                <div className="flex items-center gap-2 sm:gap-4 px-6">
                  <a href={RESUME_DATA.contact.linkedin} className="p-2.5 bg-neutral-100 rounded-xl text-neutral-400 hover:text-blue-600 transition-all hover:bg-blue-50" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-2.5 bg-neutral-100 rounded-xl text-neutral-400 hover:text-blue-600 transition-all hover:bg-blue-50" aria-label="Email">
                    <Mail size={22} />
                  </a>
                  <div className="hidden sm:block w-px h-10 bg-neutral-200 mx-2"></div>
                  <div className="hidden sm:block text-left">
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">Industry Veteran</p>
                    <p className="text-lg font-bold text-neutral-900 leading-none">20+ Years</p>
                  </div>
                </div>
              </div>

              {/* Keyword Cloud for ATS */}
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3 opacity-60">
                 {["SaaS", "Design Systems", "UX Research", "Mentoring", "Product Strategy", "Figma", "Accessibility"].map(kw => (
                   <span key={kw} className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{kw}</span>
                 ))}
              </div>
            </div>

            <div className="w-full max-w-md lg:w-2/5 relative">
              <div className="absolute -inset-6 bg-blue-100 rounded-[3rem] -z-10 rotate-2 opacity-40 blur-sm"></div>
              <div className="absolute -inset-6 bg-blue-600 rounded-[3rem] -z-10 -rotate-2 opacity-5 blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Strategic Design Environment" 
                className="w-full h-[550px] object-cover rounded-[2.5rem] shadow-2xl float-animation"
              />
              
              {/* Floating Badge - Job Status */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-neutral-100 group cursor-default max-w-[260px]">
                <div className="bg-blue-50 p-3 rounded-2xl relative shrink-0">
                   <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-pulse opacity-20 group-hover:opacity-40"></div>
                  <Rocket className="text-blue-600 relative z-10" size={28} />
                </div>
                <div>
                  <p className="text-sm font-black text-neutral-900 leading-tight">Seeking Next Venture</p>
                  <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider mt-1">Strategic Design Leadership</p>
                </div>
              </div>

              {/* Floating Badge - Mentoring/Experience */}
              <div className="absolute top-12 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 hidden md:flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                    <Users size={20} />
                 </div>
                 <div className="pr-2">
                    <p className="text-[10px] font-black text-neutral-400 uppercase leading-none">Mentorship</p>
                    <p className="text-xs font-bold text-neutral-800">Design Team Growth</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Structured for Readability */}
      <section id="experience" className="py-24 bg-neutral-50 border-y border-neutral-200 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <header className="sticky top-32">
                <h2 className="text-4xl font-black text-neutral-900 mb-6 tracking-tight flex items-center gap-4">
                  <Briefcase className="text-blue-600" size={32} /> Career Path
                </h2>
                <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                  A distinguished trajectory leading design transformation for global market leaders in SaaS, E-commerce, and Media.
                </p>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 space-y-8">
                  <section>
                    <h4 className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-4">Credentials</h4>
                    <ul className="space-y-4">
                      {RESUME_DATA.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-neutral-700 font-bold">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-4">Education</h4>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-neutral-900">{RESUME_DATA.education.school}</p>
                        <p className="text-xs text-neutral-500 font-medium">{RESUME_DATA.education.degree}</p>
                        <p className="text-xs text-neutral-400 mt-1 font-bold">{RESUME_DATA.education.period}</p>
                      </div>
                    </div>
                  </section>
                </div>
              </header>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-neutral-100">
                {RESUME_DATA.experience.map((item, idx) => (
                  <ExperienceCard key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Ecosystem Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Skill Ecosystem</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Comprehensive expertise in architecting digital products that bridge the gap between human needs and business objectives.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {RESUME_DATA.competencies.map((group, idx) => (
              <div key={idx} className="bg-white border border-neutral-100 p-8 md:p-12 rounded-[3rem] hover:shadow-2xl hover:-translate-y-1 transition-all group duration-500">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-[1.25rem] bg-neutral-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-500">
                    {idx === 0 && <Zap size={28} />}
                    {idx === 1 && <Search size={28} />}
                    {idx === 2 && <Layout size={28} />}
                    {idx === 3 && <ShieldCheck size={28} />}
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900 tracking-tight">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <SkillPill key={sIdx} text={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-neutral-100">
            <h3 className="text-center text-xs font-black text-neutral-400 uppercase tracking-[0.3em] mb-12">Toolstack & DesignOps</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {RESUME_DATA.tools.map((tool, idx) => (
                <span key={idx} className="px-6 py-3 bg-neutral-50 rounded-2xl text-neutral-700 font-bold hover:bg-neutral-900 hover:text-white hover:-translate-y-1 transition-all cursor-default text-sm shadow-sm border border-neutral-100">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Bold & High Conversion */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
            {/* Abstract Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-16">
              <div className="flex-1 text-center xl:text-left">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                  Design for <span className="text-blue-500">Scale</span>.<br />Build for Impact.
                </h2>
                <p className="text-neutral-400 text-xl mb-12 max-w-xl mx-auto xl:mx-0 font-medium">
                  Currently open to strategic Senior Product Design or Leadership roles in Amsterdam or globally (remote). Let's discuss your product vision.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center xl:justify-start gap-4 text-white">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Email Address</p>
                      <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-lg font-bold hover:text-blue-400 transition-colors">{RESUME_DATA.contact.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center xl:justify-start gap-4 text-white">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Mobile Connect</p>
                      <p className="text-lg font-bold">{RESUME_DATA.contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 min-w-[320px] w-full xl:w-auto">
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white px-10 py-6 rounded-[2rem] font-black text-neutral-900 hover:bg-neutral-100 transition-all text-lg shadow-xl shadow-black/20 group">
                  Connect on LinkedIn <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={RESUME_DATA.contact.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-blue-600 px-10 py-6 rounded-[2rem] font-black text-white hover:bg-blue-700 transition-all text-lg shadow-xl shadow-blue-900/40 group">
                  View Full Portfolio <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-100 px-6 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-neutral-900 font-black text-xl tracking-tight">JD<span className="text-blue-600">.</span></p>
            <p className="text-neutral-500 text-sm font-medium">© {new Date().getFullYear()} {RESUME_DATA.name}. Strategic Senior Product Designer.</p>
          </div>
          <div className="flex items-center gap-3 text-neutral-400 text-sm font-bold bg-neutral-50 px-5 py-3 rounded-2xl border border-neutral-100 shadow-sm">
            <MapPin size={18} className="text-blue-500" /> {RESUME_DATA.location}
          </div>
          <div className="flex gap-6">
             <a href="#about" className="text-xs font-black text-neutral-400 uppercase hover:text-blue-600 transition-colors">Top</a>
             <a href="#experience" className="text-xs font-black text-neutral-400 uppercase hover:text-blue-600 transition-colors">Career</a>
             <a href="#skills" className="text-xs font-black text-neutral-400 uppercase hover:text-blue-600 transition-colors">Expertise</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
