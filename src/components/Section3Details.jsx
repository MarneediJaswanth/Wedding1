import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3Details = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Cinematic Blur-to-Clear Reveal
    // Starts blurred, lower down, and scales up smoothly
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.95, y: 80, filter: "blur(20px)" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", 
          end: "top 30%", // Extended end point for smoother transition
          scrub: 1.5, // Smoother scrub matches the cinematic feel
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center z-10 px-4">
      
      {/* English Invitation Card */}
      <div 
        ref={cardRef} 
        // Strict identical layout for both cards
        className="w-[90%] max-w-[600px] relative z-10 rounded-[20px] bg-[#020617]/50 backdrop-blur-xl border border-gold/30 shadow-[0_8px_32px_rgba(217,119,6,0.15)] p-[20px] md:p-[40px] text-center flex flex-col items-center mx-auto"
      >
        
        {/* Top Header */}
        <p className="font-serif text-xs md:text-sm text-gold-light italic tracking-widest opacity-90 mb-6 drop-shadow-sm">
          Srirasthu ! &nbsp;&nbsp;&nbsp; Shubhamasthu !! &nbsp;&nbsp;&nbsp; Avignamasthu !!!
        </p>

        {/* Title */}
        <h2 className="font-calligraphy text-4xl md:text-6xl text-gold mb-8 drop-shadow-lg">
          Wedding Invitation
        </h2>

        {/* Body Text */}
        <p className="font-serif text-sm md:text-base text-white font-light tracking-wide mb-4" style={{ lineHeight: '1.8' }}>
          We cordially invite you and your family to the <br/>
          auspicious occasion of the marriage of <br/>
          <span className="text-gray-300 italic">Our Daughter</span>
        </p>

        {/* Bride */}
        <h3 className="font-serif text-2xl md:text-4xl text-gold mb-2 font-bold tracking-wider">
          Indu
        </h3>

        <p className="font-calligraphy text-xl md:text-2xl text-gold-light mb-2">
          With
        </p>

        {/* Groom */}
        <h3 className="font-serif text-2xl md:text-4xl text-gold mb-1 font-bold tracking-wider">
          Ratna Kumar
        </h3>
        <p className="font-serif text-xs md:text-sm text-gray-300 italic mb-8" style={{ lineHeight: '1.8' }}>
          (Eldest son of Smt. Vijaya Kumari & Sri. Vipparthi Venkatrao, Bhimavaram)
        </p>

        {/* Sumuhurtham Box */}
        <fieldset className="w-full border border-gold/40 rounded-xl p-4 md:p-6 mb-8 bg-white/5">
          <legend className="px-4 font-serif text-gold font-bold mx-auto whitespace-nowrap">
            ~ Muhurtham ~
          </legend>
          <p className="font-serif text-sm md:text-base text-white mt-2" style={{ lineHeight: '1.8' }}>
            On Thursday, <span className="font-bold text-gold-light">7th May 2026</span> at <span className="font-bold text-gold-light">07:19 p.m.</span> <br/>
            Uttarashada Nakshatram, Vrischika Lagnam.
          </p>
        </fieldset>

        {/* Venue & Lunch */}
        <div className="mb-8 w-full border-t border-gold/20 pt-6">
          <h4 className="font-serif text-lg text-gold font-bold mb-3">Venue :</h4>
          <p className="font-serif text-sm md:text-base text-white font-bold mb-3" style={{ lineHeight: '1.8' }}>
            Jai Rajendra Function Hall <br/>
            Sivalayam Center, Narasapuram
          </p>
          <p className="font-serif text-sm md:text-base text-white drop-shadow-sm mb-6" style={{ lineHeight: '1.8' }}>
            <a href="https://maps.app.goo.gl/4MfbZD1QMCkJCA6UA?g_st=aw" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light transition-colors">
              Click here to view Location Map
            </a>
          </p>
          <h4 className="font-serif text-lg text-gold font-bold mb-2">Dinner :</h4>
          <p className="font-serif text-sm md:text-base text-white font-bold">
            From 7:00 PM onwards <br/>
            <span className="font-normal text-gold-light italic">at the Venue</span>
          </p>
        </div>

        {/* Invited By */}
        <div className="w-full pt-6 border-t border-gold/20 flex flex-col md:flex-row justify-between text-center md:text-left gap-6 mb-4">
            <div className="flex-1">
                <p className="font-serif text-sm text-gold font-bold mb-2">Invited by :</p>
                <p className="font-serif text-xs md:text-sm text-white mb-1">Sri. Antarvedi Suryachandrarao - Smt. Suryakumari</p>
                <p className="font-serif text-xs md:text-sm text-white">Sri. Chimmati Manikyalarao - Smt. Tarakarameshwari</p>
            </div>
            <div className="flex-1 md:text-right">
                <p className="font-serif text-sm text-gold font-bold mb-2">Yours sincerely :</p>
                <p className="font-serif text-xs md:text-sm text-white">Sri. Antarvedi Gangadhar - Smt. Satyavathi</p>
            </div>
        </div>
        <div className="w-full pt-4 border-t border-gold/20 flex flex-col items-center">
          <p className="font-calligraphy text-lg md:text-xl text-gold-light opacity-90 mt-2">
            With Best Compliments from Near & Dear...
          </p>
        </div>

      </div>

    </section>
  );
};

export default Section3Details;
