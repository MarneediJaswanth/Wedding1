import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section4Telugu = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Exact same entry animation as the English card
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center z-10 px-4">
      
      {/* EXACT Identical Frosted Glass Card Container to English Details */}
      <div 
        ref={cardRef} 
        className="w-[90%] max-w-[600px] relative z-10 rounded-[20px] bg-[#020617]/50 backdrop-blur-xl border border-gold/30 shadow-[0_8px_32px_rgba(217,119,6,0.15)] p-[20px] md:p-[40px] text-center flex flex-col items-center mx-auto"
      >
        
        {/* Top Header */}
        <p className="font-telugu text-xs md:text-sm text-gold-light tracking-widest opacity-90 mb-4 drop-shadow-sm">
          శ్రీరస్తు! &nbsp;&nbsp;&nbsp; శుభమస్తు!! &nbsp;&nbsp;&nbsp; అవిఘ్నమస్తు!!!
        </p>

        {/* Title */}
        <h2 className="font-telugu text-3xl md:text-5xl text-gold mb-2 drop-shadow-lg font-bold">
          అంతర్వేది వారి
        </h2>
        <h3 className="font-telugu text-lg md:text-2xl text-gold-light mb-6 drop-shadow-lg font-bold">
          వివాహ ముహూర్తపు ఆహ్వాన పత్రిక
        </h3>

        {/* Shloka/Introduction */}
        <p className="font-telugu text-xs md:text-sm text-gold-light italic mb-6 leading-loose px-2" style={{ lineHeight: '1.8' }}>
          శ్రీ అంతర్వేది గంగాధర్ - శ్రీమతి సత్యవతి దంపతులు వ్రాయు శుభలేఖాధ్యములు
        </p>

        {/* Bride */}
        <p className="font-telugu text-sm md:text-base text-gray-300 italic mb-1" style={{ lineHeight: '1.8' }}>
          మా చిరంజీవి కుమారై
        </p>
        <h3 className="font-telugu text-3xl md:text-5xl text-gold mb-2 font-bold tracking-wider">
          ఇంద్రజ
        </h3>
        
        <p className="font-telugu text-lg md:text-xl text-gold-light my-2">
          కు
        </p>

        {/* Groom */}
        <p className="font-telugu text-sm md:text-base text-gray-300 italic mb-1" style={{ lineHeight: '1.8' }}>
          చిరంజీవి
        </p>
        <h3 className="font-telugu text-3xl md:text-5xl text-gold mb-2 font-bold tracking-wider">
          రత్నకుమార్
        </h3>
        <p className="font-telugu text-xs md:text-sm text-gray-300 italic mb-8 px-4" style={{ lineHeight: '1.8' }}>
          (పశ్చిమ గోదావరి జిల్లా, భీమవరం వాస్తవ్యులు శ్రీ విస్సాకోడేటి వెంకటనారాయణ - శ్రీమతి విజయ కుమారి దంపతుల జ్యేష్ఠ కుమారుడు)
        </p>

        {/* Muhurtham Text */}
        <p className="font-telugu text-sm md:text-base text-white font-light tracking-wide mb-6" style={{ lineHeight: '1.8' }}>
          <span className="text-gold font-bold">ముహూర్తం:</span><br/>
          స్వస్తిశ్రీ చాంద్రమాన శ్రీ పరాభవ నామ సంవత్సర <br/>
          తేది. <span className="text-gold-light font-bold">07-05-2026</span> గురువారం రాత్రి గం|| <span className="text-gold-light font-bold">7-19</span> ని||లకు <br/>
          ఉత్తరాషాఢ నక్షత్రయుక్త వృశ్చిక లగ్నము నందు
        </p>

        <p className="font-telugu text-sm md:text-base text-white font-light tracking-wide mb-8 px-4" style={{ lineHeight: '1.8' }}>
          <span className="text-gold font-bold">ఆకాంక్ష:</span> మమతానురాగాలు, ఆత్మీయతలు, అనుబంధాలు ముడిపడే మా ఇంట జరిగే ఈ శుభకార్యానికి విచ్చేసి నూతన వధూవరులను ఆశీర్వదించకోరతాము...
        </p>

        {/* Venue & Lunch Box */}
        <div className="w-full mb-8 border-t border-gold/20 pt-6">
          <h4 className="font-telugu text-lg md:text-xl text-gold font-bold mb-3">కల్యాణ వేదిక:</h4>
          <p className="font-telugu text-sm md:text-base text-white drop-shadow-sm mb-3 font-bold" style={{ lineHeight: '1.8' }}>
            జై రాజేంద్ర ఫంక్షన్ హాలు<br/>
            శివాలయం సెంటర్, నరసాపురం
          </p>
          <p className="font-telugu text-xs md:text-sm text-gray-300 drop-shadow-sm mb-6">
            <a href="https://maps.app.goo.gl/4MfbZD1QMCkJCA6UA?g_st=aw" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-light transition-colors">
              మ్యాప్ లొకేషన్ చూడటానికి ఇక్కడ క్లిక్ చేయండి
            </a>
          </p>
          <p className="font-telugu text-lg md:text-xl text-gold font-bold mb-2">విందు:</p>
          <p className="font-telugu text-sm md:text-base text-white font-bold" style={{ lineHeight: '1.8' }}>
            రాత్రి 7.00 గంటల నుండి<br/>
            <span className="font-normal text-gold-light">కల్యాణ వేదిక వద్ద</span>
          </p>
        </div>

        {/* Invited By & Relatives */}
        <div className="w-full pt-6 border-t border-gold/20 flex flex-col items-center">
            <div className="flex flex-col md:flex-row w-full justify-between text-center md:text-left gap-6 px-4 mb-8">
                <div className="flex-1">
                    <p className="font-telugu text-sm md:text-base text-gold font-bold mb-2">ఆహ్వానించువారు:</p>
                    <p className="font-telugu text-xs md:text-sm text-white opacity-90 mb-1">అంతర్వేది సూర్యచంద్రరావు - శ్రీమతి సువర్ణకుమారి</p>
                    <p className="font-telugu text-xs md:text-sm text-white opacity-90 mb-1">దొమ్మేటి హనుమంతరావు - శ్రీమతి అనంతరామదుర్గ, సోంపల్లి</p>
                    <p className="font-telugu text-xs md:text-sm text-white opacity-90 mb-1">విస్సాకోడేటి విజయకుమారి</p>
                </div>
                <div className="flex-1 md:text-right">
                    <p className="font-telugu text-sm md:text-base text-gold font-bold mb-2">భవదీయులు:</p>
                    <p className="font-telugu text-xs md:text-sm text-white opacity-90 mb-1">అంతర్వేది గంగాధర్ - శ్రీమతి సత్యవతి</p>
                </div>
            </div>

            <p className="font-telugu text-xs md:text-sm text-white opacity-80 mt-2 px-2" style={{ lineHeight: '1.8' }}>
              అంతర్వేది నాగరాజు, శ్రీను, బాబీ, భాస్కర్, శ్రీకాంత్, చింతలపాటి దుర్గారావు - శ్రీమతి మంగ, <br/>
              చింతలపాటి ప్రభాకర్, రాజు, నాగేంద్ర, దొమ్మేటి మల్లేశ్వరరావు, బద్రీనాథ్, <br/>
              శ్రీనుబాబు, నేదునూరి దుర్గాప్రసాద్, మహేష్, నాదూరి రాజేష్, రాము, <br/>
              పోతుమూడి సత్యనారాయణ, దొడ్డవరపు సతీష్, మొగలూరు రాజేష్, కోనపల్లి సురేష్, <br/>
              భీమడోలు గంగ - శ్రీమతి లక్ష్మి గార్లు మరియు బంధుమిత్రుల అభినందనలతో...
            </p>
        </div>

      </div>

    </section>
  );
};

export default Section4Telugu;
