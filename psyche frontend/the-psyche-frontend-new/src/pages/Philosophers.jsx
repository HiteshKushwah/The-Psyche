// // // // // src/pages/Philosophers.jsx
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';

// // // // function Philosophers() {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { dominantPhase } = location.state || {};

// // // //   if (!dominantPhase) {
// // // //     navigate('/report');
// // // //     return null;
// // // //   }

// // // //   // Philosophers and their stories based on dominant phase
// // // //   const philosophersData = {
// // // //     mentality: [
// // // //       {
// // // //         name: 'Sun Tzu',
// // // //         image: 'https://via.placeholder.com/150', // Replace with actual image URL
// // // //         story: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy and tactics. His teachings emphasize mental sharpness, adaptability, and outsmarting opponents without direct conflict—perfect for a mind that thrives on calculated moves.',
// // // //       },
// // // //       {
// // // //         name: 'Niccolò Machiavelli',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Machiavelli, an Italian philosopher, crafted "The Prince," a ruthless manual on power and cunning. His mentality-focused ideas revolve around pragmatism and control, urging you to wield your mind like a blade in a world of chaos.',
// // // //       },
// // // //     ],
// // // //     philosophy: [
// // // //       {
// // // //         name: 'Friedrich Nietzsche',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Nietzsche, a German thinker, challenged conventional morality with works like "Thus Spoke Zarathustra." His philosophy urges you to forge your own meaning in a godless world, embracing the chaos to rise above it.',
// // // //       },
// // // //       {
// // // //         name: 'Albert Camus',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Camus, a French-Algerian writer, explored the absurd in "The Stranger." His philosophy teaches you to confront life’s lack of inherent meaning and live boldly in defiance of it—perfect for a questioning soul.',
// // // //       },
// // // //     ],
// // // //     psychology: [
// // // //       {
// // // //         name: 'Carl Jung',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes and the shadow self. His work encourages you to explore the hidden depths of your psyche, turning cracks into revelations.',
// // // //       },
// // // //       {
// // // //         name: 'Sigmund Freud',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires in "The Interpretation of Dreams." His psychology invites you to face the chaos beneath your surface—raw and unfiltered.',
// // // //       },
// // // //     ],
// // // //     fear: [
// // // //       {
// // // //         name: 'Frank Herbert',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Herbert, an American author, penned "Dune," where he famously wrote, "Fear is the mind-killer." His narrative teaches you to confront fear head-on, transforming it into a tool for strength and clarity.',
// // // //       },
// // // //       {
// // // //         name: 'Epictetus',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Epictetus, a Stoic philosopher, taught resilience in "Enchiridion." His wisdom shows you how to master fear by focusing only on what you can control—your mind’s unshakable core.',
// // // //       },
// // // //     ],
// // // //     'self-discovery': [
// // // //       {
// // // //         name: 'Rumi',
// // // //         image: 'https://via.placeholder.com/150',
// // // //         story: 'Rumi, a Persian poet, wove mysticism into his verses, urging self-exploration through love and loss. His writings guide you to peel back layers, finding light in your deepest wounds.',
// // // //       },
// // // //       {
// // // //         name: 'Ralph Waldo Emerson',
// // // //         image: 'https://via.placeholder.com/1',
// // // //         story: 'Emerson, an American essayist, championed individuality in "Self-Reliance." His words push you to trust your inner voice, carving a path to your truest self amidst the noise.',
// // // //       },
// // // //     ],
// // // //   };

// // // //   const philosophers = philosophersData[dominantPhase] || [];

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{
// // // //         width: '100%',
// // // //         maxWidth: '1300px',
// // // //         padding: '60px 20px',
// // // //         textAlign: 'center',
// // // //         background: 'linear-gradient(135deg, #1F4459, #011325)',
// // // //       }}
// // // //     >
// // // //       <h2
// // // //         style={{
// // // //           fontSize: '42px',
// // // //           fontWeight: '700',
// // // //           marginBottom: '50px',
// // // //           color: '#fff',
// // // //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // // //         }}
// // // //       >
// // // //         Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
// // // //       </h2>

// // // //       <div
// // // //         style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // //           gap: '30px',
// // // //           justifyItems: 'center',
// // // //         }}
// // // //       >
// // // //         {philosophers.map((philosopher, index) => (
// // // //           <motion.div
// // // //             key={philosopher.name}
// // // //             initial={{ opacity: 0, y: 50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.2 * (index + 1) }}
// // // //             style={{
// // // //               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // // //               backdropFilter: 'blur(12px)',
// // // //               borderRadius: '18px',
// // // //               padding: '25px',
// // // //               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // // //               border: '1px solid rgba(255, 255, 255, 0.25)',
// // // //               textAlign: 'left',
// // // //               width: '100%',
// // // //               maxWidth: '350px',
// // // //               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // // //             }}
// // // //             whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// // // //           >
// // // //             <img
// // // //               src={philosopher.image}
// // // //               alt={philosopher.name}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 height: '150px',
// // // //                 objectFit: 'cover',
// // // //                 borderRadius: '10px',
// // // //                 marginBottom: '15px',
// // // //               }}
// // // //             />
// // // //             <h3
// // // //               style={{
// // // //                 fontSize: '22px',
// // // //                 fontWeight: '600',
// // // //                 color: '#e94560',
// // // //                 marginBottom: '15px',
// // // //                 textTransform: 'uppercase',
// // // //                 letterSpacing: '1px',
// // // //               }}
// // // //             >
// // // //               {philosopher.name}
// // // //             </h3>
// // // //             <p
// // // //               style={{
// // // //                 fontSize: '16px',
// // // //                 color: '#e0e0e0',
// // // //                 lineHeight: '1.6',
// // // //               }}
// // // //             >
// // // //               {philosopher.story}
// // // //             </p>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default Philosophers;

// // // // src/pages/Philosophers.jsx
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';

// // // function Philosophers() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const { dominantPhase } = location.state || {};

// // //   if (!dominantPhase) {
// // //     navigate('/report');
// // //     return null;
// // //   }

// // //   // Philosophers and their stories based on dominant phase
// // //   const philosophersData = {
// // //     mentality: [
// // //       {
// // //         name: 'Sun Tzu',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sun_Tzu.jpg',
// // //         story: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy and tactics. His teachings emphasize mental sharpness, adaptability, and outsmarting opponents without direct conflict—perfect for a mind that thrives on calculated moves.',
// // //       },
// // //       {
// // //         name: 'Niccolò Machiavelli',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Niccolo_Machiavelli.jpg',
// // //         story: 'Machiavelli, an Italian philosopher, crafted "The Prince," a ruthless manual on power and cunning. His mentality-focused ideas revolve around pragmatism and control, urging you to wield your mind like a blade in a world of chaos.',
// // //       },
// // //     ],
// // //     philosophy: [
// // //       {
// // //         name: 'Friedrich Nietzsche',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
// // //         story: 'Nietzsche, a German thinker, challenged conventional morality with works like "Thus Spoke Zarathustra." His philosophy urges you to forge your own meaning in a godless world, embracing the chaos to rise above it.',
// // //       },
// // //       {
// // //         name: 'Albert Camus',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Albert_Camus%2C_gallimard.jpg',
// // //         story: 'Camus, a French-Algerian writer, explored the absurd in "The Stranger." His philosophy teaches you to confront life’s lack of inherent meaning and live boldly in defiance of it—perfect for a questioning soul.',
// // //       },
// // //     ],
// // //     psychology: [
// // //       {
// // //         name: 'Carl Jung',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Carl_Jung_%28circa_1910%29.jpg',
// // //         story: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes and the shadow self. His work encourages you to explore the hidden depths of your psyche, turning cracks into revelations.',
// // //       },
// // //       {
// // //         name: 'Sigmund Freud',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Sigmund_Freud_1921.jpg',
// // //         story: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires in "The Interpretation of Dreams." His psychology invites you to face the chaos beneath your surface—raw and unfiltered.',
// // //       },
// // //     ],
// // //     fear: [
// // //       {
// // //         name: 'Frank Herbert',
// // //         image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Frank_Herbert_%281985%29.jpg',
// // //         story: 'Herbert, an American author, penned "Dune," where he famously wrote, "Fear is the mind-killer." His narrative teaches you to confront fear head-on, transforming it into a tool for strength and clarity.',
// // //       },
// // //       {
// // //         name: 'Epictetus',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Epictetus.png',
// // //         story: 'Epictetus, a Stoic philosopher, taught resilience in "Enchiridion." His wisdom shows you how to master fear by focusing only on what you can control—your mind’s unshakable core.',
// // //       },
// // //     ],
// // //     'self-discovery': [
// // //       {
// // //         name: 'Rumi',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Jalal_ad-Din_Muhammad_Balkhi_Rumi.jpg',
// // //         story: 'Rumi, a Persian poet, wove mysticism into his verses, urging self-exploration through love and loss. His writings guide you to peel back layers, finding light in your deepest wounds.',
// // //       },
// // //       {
// // //         name: 'Ralph Waldo Emerson',
// // //         image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ralph_Waldo_Emerson_ca1857_retouched.jpg',
// // //         story: 'Emerson, an American essayist, championed individuality in "Self-Reliance." His words push you to trust your inner voice, carving a path to your truest self amidst the noise.',
// // //       },
// // //     ],
// // //   };

// // //   const philosophers = philosophersData[dominantPhase] || [];

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{
// // //         width: '100%',
// // //         maxWidth: '1300px',
// // //         padding: '60px 20px',
// // //         textAlign: 'center',
// // //         background: 'linear-gradient(135deg, #1F4459, #011325)',
// // //       }}
// // //     >
// // //       <h2
// // //         style={{
// // //           fontSize: '42px',
// // //           fontWeight: '700',
// // //           marginBottom: '50px',
// // //           color: '#fff',
// // //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // //         }}
// // //       >
// // //         Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
// // //       </h2>

// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // //           gap: '30px',
// // //           justifyItems: 'center',
// // //         }}
// // //       >
// // //         {philosophers.map((philosopher, index) => (
// // //           <motion.div
// // //             key={philosopher.name}
// // //             initial={{ opacity: 0, y: 50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.2 * (index + 1) }}
// // //             style={{
// // //               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //               backdropFilter: 'blur(12px)',
// // //               borderRadius: '18px',
// // //               padding: '25px',
// // //               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //               border: '1px solid rgba(255, 255, 255, 0.25)',
// // //               textAlign: 'left',
// // //               width: '100%',
// // //               maxWidth: '350px',
// // //               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // //             }}
// // //             whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// // //           >
// // //             <img
// // //               src={philosopher.image}
// // //               alt={philosopher.name}
// // //               style={{
// // //                 width: '100%',
// // //                 height: '150px',
// // //                 objectFit: 'cover',
// // //                 borderRadius: '10px',
// // //                 marginBottom: '15px',
// // //               }}
// // //             />
// // //             <h3
// // //               style={{
// // //                 fontSize: '22px',
// // //                 fontWeight: '600',
// // //                 color: '#e94560',
// // //                 marginBottom: '15px',
// // //                 textTransform: 'uppercase',
// // //                 letterSpacing: '1px',
// // //               }}
// // //             >
// // //               {philosopher.name}
// // //             </h3>
// // //             <p
// // //               style={{
// // //                 fontSize: '16px',
// // //                 color: '#e0e0e0',
// // //                 lineHeight: '1.6',
// // //               }}
// // //             >
// // //               {philosopher.story}
// // //             </p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }

// // // export default Philosophers;


// // import { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import jungImage from "../assets/jung.jpg"; // Add the correct extension



// // function Philosophers() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { dominantPhase } = location.state || {};

// //   // State to track which philosopher's full story is expanded
// //   const [expandedStories, setExpandedStories] = useState({});

// //   if (!dominantPhase) {
// //     navigate('/report');
// //     return null;
// //   }

// //   // Philosophers and their stories based on dominant phase (same as provided)
// //   const philosophersData = {
// //     mentality: [
// //       {
// //         name: 'Sun Tzu',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sun_Tzu.jpg',
// //         shortStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy.',
// //         fullStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy and tactics. His teachings emphasize mental sharpness, adaptability, and outsmarting opponents without direct conflict—perfect for a mind that thrives on calculated moves.',
// //       },
// //       {
// //         name: 'Niccolò Machiavelli',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Niccolo_Machiavelli.jpg',
// //         shortStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a manual on power and cunning.',
// //         fullStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a ruthless manual on power and cunning. His mentality-focused ideas revolve around pragmatism and control, urging you to wield your mind like a blade in a world of chaos.',
// //       },
// //     ],
// //     philosophy: [
// //       {
// //         name: 'Friedrich Nietzsche',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
// //         shortStory: 'Nietzsche, a German thinker, challenged conventional morality with his bold ideas.',
// //         fullStory: 'Nietzsche, a German thinker, challenged conventional morality with works like "Thus Spoke Zarathustra." His philosophy urges you to forge your own meaning in a godless world, embracing the chaos to rise above it.',
// //       },
// //       {
// //         name: 'Albert Camus',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Albert_Camus%2C_gallimard.jpg',
// //         shortStory: 'Camus, a French-Algerian writer, explored the absurd in his philosophical works.',
// //         fullStory: 'Camus, a French-Algerian writer, explored the absurd in "The Stranger." His philosophy teaches you to confront life’s lack of inherent meaning and live boldly in defiance of it—perfect for a questioning soul.',
// //       },
// //     ],
// //     psychology: [
// //       {
// //         name: 'Carl Jung',
// //         image: jungImage,
// //         shortStory: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes.',
// //         fullStory: 'Carl Gustav Jung (1875–1961), a Swiss psychiatrist and psychoanalyst, reshaped modern psychology with his groundbreaking theories on the unconscious mind, archetypes, and individuation. Initially a close associate of Sigmund Freud, Jung eventually broke away due to differing views on the nature of the unconscious. Jung proposed that the mind consists of the Personal Unconscious — repressed memories and personal experiences — and the Collective Unconscious — a shared layer containing universal symbols and patterns called archetypes (e.g., Persona, Shadow, Anima/Animus, and Self). Jung emphasized that understanding and integrating these archetypes through a process called individuation leads to psychological balance and self-awareness. His concept of the shadow self refers to the hidden, darker side of the psyche—our fears, insecurities, and suppressed desires. He believed that true growth comes from confronting and integrating the shadow rather than rejecting it. Until you make the unconscious conscious, it will direct your life and you will call it fate. Jung\'s contributions include founding Analytical Psychology, developing the concept of Introversion and Extraversion, influencing the Myers-Briggs Type Indicator (MBTI), and introducing Dream Analysis and the idea of Synchronicity (meaningful coincidences). Notable works include "Psychological Types," which introduced personality theory; "Modern Man in Search of a Soul," which explored modern existential struggles; and "The Archetypes and the Collective Unconscious," which explained the nature of archetypes. Jung’s work transcends psychology, influencing fields like literature, mythology, spirituality, and even quantum physics. His teachings encourage you to explore the hidden depths of your mind, embrace your shadow, and achieve psychological wholeness. Who looks outside, dreams; who looks inside, awakes. Jung didn’t just study the mind—he mapped the path to self-mastery.'
// //       },
      
// //       {
// //         name: 'Sigmund Freud',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Sigmund_Freud_1921.jpg',
// //         shortStory: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires.',
// //         fullStory: `Sigmund Freud (1856–1939) was an Austrian neurologist and the founder of psychoanalysis, a groundbreaking theory and method for understanding and treating the human mind. Freud introduced the idea that much of human behavior stems from unconscious motives, drives, and conflicts. His structural model of the mind divided it into three parts: the Id (primitive instincts and desires), the Ego (rational self that mediates reality), and the Superego (moral conscience shaped by society). 
    
// //     Freud’s theory of psychosexual development proposed that early childhood experiences shape personality through five stages: oral, anal, phallic, latency, and genital. His concept of defense mechanisms—like repression, denial, and projection—explains how the mind protects itself from anxiety and inner conflict. Freud’s interpretation of dreams, outlined in "The Interpretation of Dreams," argued that dreams reveal hidden desires and unresolved conflicts from the unconscious.
    
// //     His theory of the Oedipus complex suggested that children develop unconscious sexual desires for their opposite-sex parent and rivalry with the same-sex parent—a controversial but influential idea. Freud also explored the death drive (Thanatos) and the life drive (Eros), proposing that human behavior stems from the tension between these opposing forces.
    
// //     Despite criticism and controversy, Freud's work reshaped psychology, psychiatry, and even literature and art. His legacy continues to influence modern psychotherapy, particularly through techniques like free association and transference analysis. Freud taught that understanding the hidden forces of the mind is key to psychological healing and self-awareness. "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways."`
// //     },
    
// //     ],
// //     fear: [
// //       {
// //         name: 'Frank Herbert',
// //         image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Frank_Herbert_%281985%29.jpg',
// //         shortStory: 'Herbert, an American author, penned "Dune," teaching how to confront fear.',
// //         fullStory: 'Herbert, an American author, penned "Dune," where he famously wrote, "Fear is the mind-killer." His narrative teaches you to confront fear head-on, transforming it into a tool for strength and clarity.',
// //       },
// //       {
// //         name: 'Epictetus',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Epictetus.png',
// //         shortStory: 'Epictetus, a Stoic philosopher, taught resilience in the face of fear.',
// //         fullStory: 'Epictetus, a Stoic philosopher, taught resilience in "Enchiridion." His wisdom shows you how to master fear by focusing only on what you can control—your mind’s unshakable core.',
// //       },
// //     ],
// //     'self-discovery': [
// //       {
// //         name: 'Rumi',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Jalal_ad-Din_Muhammad_Balkhi_Rumi.jpg',
// //         shortStory: 'Rumi, a Persian poet, wove mysticism into his verses on self-exploration.',
// //         fullStory: 'Rumi, a Persian poet, wove mysticism into his verses, urging self-exploration through love and loss. His writings guide you to peel back layers, finding light in your deepest wounds.',
// //       },
// //       {
// //         name: 'Ralph Waldo Emerson',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ralph_Waldo_Emerson_ca1857_retouched.jpg',
// //         shortStory: 'Emerson, an American essayist, championed individuality in his works.',
// //         fullStory: 'Emerson, an American essayist, championed individuality in "Self-Reliance." His words push you to trust your inner voice, carving a path to your truest self amidst the noise.',
// //       },
// //     ],
// //   };

// //   const philosophers = philosophersData[dominantPhase] || [];

// //   // Toggle function for Load More/Less
// //   const toggleStory = (name) => {
// //     setExpandedStories((prev) => ({
// //       ...prev,
// //       [name]: !prev[name],
// //     }));
// //   };

// //   // Scroll to top function
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };


// //   const handleBack = () => {
// //     navigate(-1); // Go back one page in history (to /report)
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{
// //         width: '100%',
// //         maxWidth: '1300px',
// //         padding: '60px 20px',
// //         textAlign: 'center',
// //         // background: 'linear-gradient(135deg, #1F4459, #011325)',
// //       }}
// //     >
// //       <h2
// //         style={{
// //           fontSize: '42px',
// //           fontWeight: '700',
// //           marginBottom: '50px',
// //           color: '#fff',
// //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// //         }}
// //       >
// //         Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
// //       </h2>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: '30px',
// //           justifyItems: 'center',
// //         }}
// //       >
// //         {philosophers.map((philosopher, index) => (
// //           <motion.div
// //             key={philosopher.name}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2 * (index + 1) }}
// //             style={{
// //               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //               backdropFilter: 'blur(12px)',
// //               borderRadius: '18px',
// //               padding: '25px',
// //               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //               border: '1px solid rgba(255, 255, 255, 0.25)',
// //               textAlign: 'left',
// //               width: '100%',
// //               maxWidth: '350px',
// //               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //             }}
// //             whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// //           >
// //             <img
// //               src={philosopher.image}
// //               alt={philosopher.name}
// //               style={{
// //                 width: '100%',
// //                 height: '150px',
// //                 objectFit: 'cover',
// //                 borderRadius: '10px',
// //                 marginBottom: '15px',
// //               }}
// //             />
// //             <h3
// //               style={{
// //                 fontSize: '22px',
// //                 fontWeight: '600',
// //                 color: '#e94560',
// //                 marginBottom: '15px',
// //                 textTransform: 'uppercase',
// //                 letterSpacing: '1px',
// //               }}
// //             >
// //               {philosopher.name}
// //             </h3>
// //             <p
// //               style={{
// //                 fontSize: '16px',
// //                 color: '#e0e0e0',
// //                 lineHeight: '1.6',
// //               }}
// //             >
// //               {expandedStories[philosopher.name] ? philosopher.fullStory : philosopher.shortStory}
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => toggleStory(philosopher.name)}
// //               style={{
// //                 marginTop: '15px',
// //                 padding: '10px 20px',
// //                 background: '#e94560',
// //                 border: 'none',
// //                 borderRadius: '50px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //                 fontSize: '14px',
// //               }}
// //             >
// //               {expandedStories[philosopher.name] ? 'Show Less' : 'Load More'}
// //             </motion.button>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Navigation Buttons */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.5 }}
// //         style={{
// //           marginTop: '60px',
// //           display: 'flex',
// //           justifyContent: 'center',
// //           gap: '20px',
// //         }}
// //       >
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={scrollToTop}
// //           style={{
// //             padding: '15px 40px',
// //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             fontSize: '18px',
// //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// //           }}
// //         >
// //           Go to Up
// //         </motion.button>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/')}
// //           style={{
// //             padding: '15px 40px',
// //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             fontSize: '18px',
// //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// //           }}
// //         >
// //           Go to Homepage
// //         </motion.button>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // export default Philosophers;

// // import { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import jungImage from "../assets/jung.jpg"; // Ensure this path is correct

// // function Philosophers() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { dominantPhase } = location.state || {};

// //   // State to track which philosopher's full story is expanded
// //   const [expandedStories, setExpandedStories] = useState({});

// //   if (!dominantPhase) {
// //     navigate('/report');
// //     return null;
// //   }

// //   // Philosophers and their stories based on dominant phase
// //   const philosophersData = {
// //     mentality: [
// //       {
// //         name: 'Sun Tzu',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sun_Tzu.jpg',
// //         shortStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy.',
// //         fullStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy and tactics. His teachings emphasize mental sharpness, adaptability, and outsmarting opponents without direct conflict—perfect for a mind that thrives on calculated moves.',
// //       },
// //       {
// //         name: 'Niccolò Machiavelli',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Niccolo_Machiavelli.jpg',
// //         shortStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a manual on power and cunning.',
// //         fullStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a ruthless manual on power and cunning. His mentality-focused ideas revolve around pragmatism and control, urging you to wield your mind like a blade in a world of chaos.',
// //       },
// //     ],
// //     philosophy: [
// //       {
// //         name: 'Friedrich Nietzsche',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
// //         shortStory: 'Nietzsche, a German thinker, challenged conventional morality with his bold ideas.',
// //         fullStory: 'Nietzsche, a German thinker, challenged conventional morality with works like "Thus Spoke Zarathustra." His philosophy urges you to forge your own meaning in a godless world, embracing the chaos to rise above it.',
// //       },
// //       {
// //         name: 'Albert Camus',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Albert_Camus%2C_gallimard.jpg',
// //         shortStory: 'Camus, a French-Algerian writer, explored the absurd in his philosophical works.',
// //         fullStory: 'Camus, a French-Algerian writer, explored the absurd in "The Stranger." His philosophy teaches you to confront life’s lack of inherent meaning and live boldly in defiance of it—perfect for a questioning soul.',
// //       },
// //     ],
// //     psychology: [
// //       {
// //         name: 'Carl Jung',
// //         image: jungImage,
// //         shortStory: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes.',
// //         fullStory: 'Carl Gustav Jung (1875–1961), a Swiss psychiatrist and psychoanalyst, reshaped modern psychology with his groundbreaking theories on the unconscious mind, archetypes, and individuation. Initially a close associate of Sigmund Freud, Jung eventually broke away due to differing views on the nature of the unconscious. Jung proposed that the mind consists of the Personal Unconscious — repressed memories and personal experiences — and the Collective Unconscious — a shared layer containing universal symbols and patterns called archetypes (e.g., Persona, Shadow, Anima/Animus, and Self). Jung emphasized that understanding and integrating these archetypes through a process called individuation leads to psychological balance and self-awareness. His concept of the shadow self refers to the hidden, darker side of the psyche—our fears, insecurities, and suppressed desires. He believed that true growth comes from confronting and integrating the shadow rather than rejecting it. Until you make the unconscious conscious, it will direct your life and you will call it fate. Jung\'s contributions include founding Analytical Psychology, developing the concept of Introversion and Extraversion, influencing the Myers-Briggs Type Indicator (MBTI), and introducing Dream Analysis and the idea of Synchronicity (meaningful coincidences). Notable works include "Psychological Types," which introduced personality theory; "Modern Man in Search of a Soul," which explored modern existential struggles; and "The Archetypes and the Collective Unconscious," which explained the nature of archetypes. Jung’s work transcends psychology, influencing fields like literature, mythology, spirituality, and even quantum physics. His teachings encourage you to explore the hidden depths of your mind, embrace your shadow, and achieve psychological wholeness. Who looks outside, dreams; who looks inside, awakes. Jung didn’t just study the mind—he mapped the path to self-mastery.',
// //       },
// //       {
// //         name: 'Sigmund Freud',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Sigmund_Freud_1921.jpg',
// //         shortStory: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires.',
// //         fullStory: `Sigmund Freud (1856–1939) was an Austrian neurologist and the founder of psychoanalysis, a groundbreaking theory and method for understanding and treating the human mind. Freud introduced the idea that much of human behavior stems from unconscious motives, drives, and conflicts. His structural model of the mind divided it into three parts: the Id (primitive instincts and desires), the Ego (rational self that mediates reality), and the Superego (moral conscience shaped by society). 
    
// //     Freud’s theory of psychosexual development proposed that early childhood experiences shape personality through five stages: oral, anal, phallic, latency, and genital. His concept of defense mechanisms—like repression, denial, and projection—explains how the mind protects itself from anxiety and inner conflict. Freud’s interpretation of dreams, outlined in "The Interpretation of Dreams," argued that dreams reveal hidden desires and unresolved conflicts from the unconscious.
    
// //     His theory of the Oedipus complex suggested that children develop unconscious sexual desires for their opposite-sex parent and rivalry with the same-sex parent—a controversial but influential idea. Freud also explored the death drive (Thanatos) and the life drive (Eros), proposing that human behavior stems from the tension between these opposing forces.
    
// //     Despite criticism and controversy, Freud's work reshaped psychology, psychiatry, and even literature and art. His legacy continues to influence modern psychotherapy, particularly through techniques like free association and transference analysis. Freud taught that understanding the hidden forces of the mind is key to psychological healing and self-awareness. "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways."`,
// //       },
// //     ],
// //     fear: [
// //       {
// //         name: 'Frank Herbert',
// //         image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Frank_Herbert_%281985%29.jpg',
// //         shortStory: 'Herbert, an American author, penned "Dune," teaching how to confront fear.',
// //         fullStory: 'Herbert, an American author, penned "Dune," where he famously wrote, "Fear is the mind-killer." His narrative teaches you to confront fear head-on, transforming it into a tool for strength and clarity.',
// //       },
// //       {
// //         name: 'Epictetus',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Epictetus.png',
// //         shortStory: 'Epictetus, a Stoic philosopher, taught resilience in the face of fear.',
// //         fullStory: 'Epictetus, a Stoic philosopher, taught resilience in "Enchiridion." His wisdom shows you how to master fear by focusing only on what you can control—your mind’s unshakable core.',
// //       },
// //     ],
// //     'self-discovery': [
// //       {
// //         name: 'Rumi',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Jalal_ad-Din_Muhammad_Balkhi_Rumi.jpg',
// //         shortStory: 'Rumi, a Persian poet, wove mysticism into his verses on self-exploration.',
// //         fullStory: 'Rumi, a Persian poet, wove mysticism into his verses, urging self-exploration through love and loss. His writings guide you to peel back layers, finding light in your deepest wounds.',
// //       },
// //       {
// //         name: 'Ralph Waldo Emerson',
// //         image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ralph_Waldo_Emerson_ca1857_retouched.jpg',
// //         shortStory: 'Emerson, an American essayist, championed individuality in his works.',
// //         fullStory: 'Emerson, an American essayist, championed individuality in "Self-Reliance." His words push you to trust your inner voice, carving a path to your truest self amidst the noise.',
// //       },
// //     ],
// //   };

// //   const philosophers = philosophersData[dominantPhase] || [];

// //   // Toggle function for Load More/Less
// //   const toggleStory = (name) => {
// //     setExpandedStories((prev) => ({
// //       ...prev,
// //       [name]: !prev[name],
// //     }));
// //   };

// //   // Scroll to top function
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   // Back function
// //   const handleBack = () => {
// //     navigate(-1); // Go back one page in history (to /report)
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{
// //         width: '100%',
// //         maxWidth: '1300px',
// //         padding: '60px 20px',
// //         textAlign: 'center',
// //         // background: 'linear-gradient(135deg, #1F4459, #011325)',
// //         position: 'relative', // For positioning the back button
// //       }}
// //     >
// //       {/* Back Button - Below Navbar */}
// //       <motion.button
// //         whileHover={{ scale: 1.05 }}
// //         whileTap={{ scale: 0.95 }}
// //         onClick={handleBack}
// //         style={{
// //           position: 'absolute',
// //           top: '70px', // Below navbar (40px height + 20px padding + 10px buffer)
// //           left: '20px',
// //           padding: '10px 15px',
// //           background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //           border: 'none',
// //           borderRadius: '50px',
// //           color: '#fff',
// //           cursor: 'pointer',
// //           fontSize: '18px',
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '5px',
// //           zIndex: 1001, // Higher than navbar's 1000
// //         }}
// //       >
// //         ←
// //       </motion.button>

// //       <h2
// //         style={{
// //           fontSize: '42px',
// //           fontWeight: '700',
// //           marginBottom: '50px',
// //           color: '#fff',
// //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// //         }}
// //       >
// //         Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
// //       </h2>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: '30px',
// //           justifyItems: 'center',
// //         }}
// //       >
// //         {philosophers.map((philosopher, index) => (
// //           <motion.div
// //             key={philosopher.name}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2 * (index + 1) }}
// //             style={{
// //               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //               backdropFilter: 'blur(12px)',
// //               borderRadius: '18px',
// //               padding: '25px',
// //               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //               border: '1px solid rgba(255, 255, 255, 0.25)',
// //               textAlign: 'left',
// //               width: '100%',
// //               maxWidth: '350px',
// //               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //             }}
// //             whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// //           >
// //             <img
// //               src={philosopher.image}
// //               alt={philosopher.name}
// //               style={{
// //                 width: '100%',
// //                 height: '150px',
// //                 objectFit: 'cover',
// //                 borderRadius: '10px',
// //                 marginBottom: '15px',
// //               }}
// //             />
// //             <h3
// //               style={{
// //                 fontSize: '22px',
// //                 fontWeight: '600',
// //                 color: '#e94560',
// //                 marginBottom: '15px',
// //                 textTransform: 'uppercase',
// //                 letterSpacing: '1px',
// //               }}
// //             >
// //               {philosopher.name}
// //             </h3>
// //             <p
// //               style={{
// //                 fontSize: '16px',
// //                 color: '#e0e0e0',
// //                 lineHeight: '1.6',
// //               }}
// //             >
// //               {expandedStories[philosopher.name] ? philosopher.fullStory : philosopher.shortStory}
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => toggleStory(philosopher.name)}
// //               style={{
// //                 marginTop: '15px',
// //                 padding: '10px 20px',
// //                 background: '#e94560',
// //                 border: 'none',
// //                 borderRadius: '50px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //                 fontSize: '14px',
// //               }}
// //             >
// //               {expandedStories[philosopher.name] ? 'Show Less' : 'Load More'}
// //             </motion.button>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Navigation Buttons */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.5 }}
// //         style={{
// //           marginTop: '60px',
// //           display: 'flex',
// //           justifyContent: 'center',
// //           gap: '20px',
// //         }}
// //       >
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={scrollToTop}
// //           style={{
// //             padding: '15px 40px',
// //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             fontSize: '18px',
// //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// //           }}
// //         >
// //           Go to Up
// //         </motion.button>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/')}
// //           style={{
// //             padding: '15px 40px',
// //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             fontSize: '18px',
// //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// //           }}
// //         >
// //           Go to Homepage
// //         </motion.button>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }



// // export default Philosophers;


// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import jungImage from "../assets/jung.jpg"; // Ensure this path is correct
// import albertImage from "../assets/download.jpg"; 
// import chineseImage from "../assets/chinese.jpg"; 
// import nicoloImage from  "../assets/nicolo.jpg";
// import sigmundImage from  "../assets/sigmund.jpg";
// import frankImage from  "../assets/frank.jpg";
// import epixImage from  "../assets/epix.jpg";
// import rumiImage from  "../assets/rumi.jpg";
// import RalphImage from  "../assets/Ralph.jpg";

 




// function Philosophers() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { dominantPhase } = location.state || {};

//   // State to track which philosopher's full story is expanded
//   const [expandedStories, setExpandedStories] = useState({});

//   if (!dominantPhase) {
//     navigate('/report');
//     return null;
//   }

//   // Philosophers and their stories based on dominant phase
//   const philosophersData = {
//     mentality: [
//       // Existing 2
//       {
//         name: 'Sun Tzu',
//         image: chineseImage,
//         shortStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy.',
//         fullStory: 'Sun Tzu, a legendary Chinese military strategist and philosopher from the Eastern Zhou period (circa 544–496 BCE), authored "The Art of War," a seminal text that has transcended its origins to become a cornerstone of strategic thinking across military, business, and personal development spheres. This ancient masterpiece, composed of 13 chapters, offers profound insights into warfare, emphasizing mental acuity, adaptability, and the art of outmaneuvering opponents without necessarily engaging in direct conflict. Sun Tzu’s teachings assert that victory lies not in brute force but in understanding the terrain, exploiting the enemy’s weaknesses, and maintaining psychological dominance—principles that resonate deeply with a mind honed for calculated moves. His famous maxim, "The supreme art of war is to subdue the enemy without fighting," underscores a philosophy of efficiency and foresight, urging leaders to win through strategy rather than bloodshed. Beyond the battlefield, his ideas influence modern leadership, negotiation tactics, and even sports psychology, showcasing his enduring relevance. Sun Tzu’s life remains shrouded in mystery, with some historians debating his existence as a single individual versus a collective pseudonym, yet his legacy endures through translations that have reached global audiences. For someone with a dominant mentality phase, his work serves as a blueprint to sharpen your intellect, anticipate challenges, and master the subtle dance of power—perfect for a mind that thrives on strategic mastery and intellectual precision.',
//       },
//       {
//         name: 'Niccolò Machiavelli',
//         image: nicoloImage,
//         shortStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a manual on power and cunning.',
//         fullStory: 'Niccolò Machiavelli, an Italian diplomat, philosopher, and writer (1469–1527), is best known for his political treatise "The Prince," a work that has sparked centuries of debate for its unapologetic exploration of power, cunning, and governance. Born in Florence during the Renaissance, Machiavelli witnessed the turbulent politics of city-states, which shaped his pragmatic and often ruthless worldview. "The Prince," published posthumously in 1532, advises rulers on maintaining authority through strategic manipulation, calculated cruelty when necessary, and the appearance of virtue rather than genuine morality—ideas that align perfectly with a mentality-driven mindset. He famously argued that it is better for a leader to be feared than loved if one cannot be both, a concept rooted in his observation of human nature’s fickleness. His other notable work, "Discourses on Livy," reveals a deeper appreciation for republican governance, suggesting a duality in his thought that challenges simplistic labels like "Machiavellian." Exiled and tortured for his political affiliations, Machiavelli’s life was a testament to resilience, turning personal adversity into intellectual legacy. For those with a dominant mentality phase, his teachings offer a toolkit to navigate complex social dynamics, wield influence with precision, and transform chaos into order—encouraging you to sharpen your mind like a blade in a world where power is the ultimate currency.',
//       },
//       // 8 New Philosophers for Mentality
//       {
//         name: 'Chanakya',
//         image: 'path/to/chanakya.jpg', // Add your image path
//         shortStory: 'Chanakya, an Indian strategist, wrote "Arthashastra," a guide on statecraft and strategy.',
//         fullStory: 'Chanakya (c. 350–283 BCE), also known as Kautilya or Vishnugupta, was an ancient Indian philosopher, economist, and strategist who authored the "Arthashastra," a comprehensive treatise on statecraft, economics, and military strategy. A professor at Takshashila University and later the chief advisor to Emperor Chandragupta Maurya, Chanakya played a pivotal role in founding the Maurya Empire by overthrowing the Nanda dynasty. His "Arthashastra" covers governance, diplomacy, espionage, and warfare, emphasizing the importance of strategic alliances, intelligence networks, and economic stability to maintain power—ideas that resonate with a mentality-driven mind. Known for his pragmatic and sometimes ruthless approach, Chanakya’s maxims like "Even if a snake is not poisonous, it should pretend to be venomous" highlight his focus on perception and cunning. His life, marked by a vow to unify India against foreign threats, reflects his dedication to strategic mastery. For you, Chanakya’s teachings offer a playbook to navigate challenges with foresight, build unshakeable systems, and lead with calculated precision in any arena.',
//       },
//       {
//         name: 'Miyamoto Musashi',
//         image: 'path/to/musashi.jpg',
//         shortStory: 'Musashi, a Japanese samurai, wrote "The Book of Five Rings," a guide to strategy and mastery.',
//         fullStory: 'Miyamoto Musashi (1584–1645), a legendary Japanese swordsman, philosopher, and strategist, is renowned for his undefeated record in duels and his seminal work "The Book of Five Rings," a treatise on strategy, tactics, and philosophy. A master of the two-sword fighting style (Niten Ichi-ryu), Musashi won over 60 duels, often against multiple opponents, cementing his reputation as Japan’s greatest samurai. Written in 1645 near the end of his life, "The Book of Five Rings" outlines his principles of strategy across five elements—earth, water, fire, wind, and void—emphasizing adaptability, timing, and psychological dominance, making it a perfect fit for a mentality-driven individual. Musashi’s philosophy extends beyond combat, advocating for mental clarity, discipline, and a relentless pursuit of self-improvement, as seen in his quote, "Do nothing which is of no use." His life, marked by a solitary quest for mastery and a rejection of societal norms, inspires you to sharpen your focus, outthink your challenges, and achieve excellence through strategic precision and inner strength.',
//       },
//       {
//         name: 'Hannibal Barca',
//         image: 'path/to/hannibal.jpg',
//         shortStory: 'Hannibal, a Carthaginian general, outsmarted Rome with daring military strategies.',
//         fullStory: 'Hannibal Barca (247–183 BCE), a Carthaginian general, is celebrated as one of history’s greatest military strategists for his audacious campaigns against Rome during the Second Punic War (218–201 BCE). Born in Carthage (modern-day Tunisia), Hannibal swore an oath as a child to oppose Rome, a vow he fulfilled by leading an army—complete with war elephants—across the Alps to invade Italy, a feat considered impossible. His victories, like the Battle of Cannae (216 BCE), where he encircled and annihilated a larger Roman force, showcased his genius for tactics, deception, and psychological warfare, aligning perfectly with a mentality-dominant mindset. Despite never capturing Rome, Hannibal’s strategies forced the Romans to adapt, ultimately shaping their military evolution. His life, marked by exile and betrayal after Carthage’s defeat, reflects a man who thrived on outthinking his enemies. For you, Hannibal’s legacy offers lessons in boldness, strategic innovation, and resilience—teaching you to turn obstacles into opportunities and dominate through intellect and daring.',
//       },
//       {
//         name: 'George S. Patton',
//         image: 'path/to/patton.jpg',
//         shortStory: 'Patton, an American general, led with bold strategies in World War II.',
//         fullStory: 'George S. Patton (1885–1945), an American general, was a pivotal figure in World War II, known for his aggressive tactics, rapid maneuvers, and unyielding leadership. Nicknamed "Old Blood and Guts," Patton commanded the U.S. Third Army, leading lightning-fast campaigns across North Africa, Sicily, and Western Europe, including the Battle of the Bulge (1944), where his forces relieved the besieged town of Bastogne. A master of armored warfare, Patton emphasized speed, surprise, and psychological intimidation, often outpacing his own supply lines to keep the enemy off balance—traits that resonate with a mentality-driven mind. His famous quote, "A good plan violently executed now is better than a perfect plan executed next week," reflects his belief in decisive action over hesitation. Despite controversies, including his outspoken nature and harsh discipline, Patton’s strategic brilliance earned him respect as a commander who could turn the tide of war. For you, Patton’s life teaches the power of bold execution, mental toughness, and relentless focus—urging you to seize opportunities with unshakeable confidence and strategic clarity.',
//       },
//       {
//         name: 'Catherine the Great',
//         image: 'path/to/catherine.jpg',
//         shortStory: 'Catherine, a Russian empress, ruled with strategic vision and cunning.',
//         fullStory: 'Catherine the Great (1729–1796), Empress of Russia, transformed her adopted nation into a global power through strategic governance, diplomatic maneuvering, and cultural reform. Born as Sophie of Prussia, she seized the throne in 1762 through a coup against her husband, Peter III, showcasing her political acumen. Catherine expanded Russia’s borders, modernized its administration, and promoted the arts, earning the title "Great" by blending Enlightenment ideals with pragmatic rule—perfect for a mentality-driven individual. Her ability to navigate alliances, suppress rebellions like Pugachev’s Rebellion, and maintain power in a male-dominated court highlights her mastery of strategy and influence. She famously said, "I shall be an autocrat: that’s my trade. And the good Lord will forgive me: that’s his." Her reign, though not without flaws like serfdom’s persistence, left a legacy of progress and power. For you, Catherine’s life offers a masterclass in strategic leadership, calculated risks, and wielding authority with intellect—encouraging you to rule your own life with the same cunning and vision.',
//       },
//       {
//         name: 'John von Neumann',
//         image: 'path/to/vonneumann.jpg',
//         shortStory: 'Von Neumann, a mathematician, pioneered game theory for strategic thinking.',
//         fullStory: 'John von Neumann (1903–1957), a Hungarian-American mathematician, physicist, and polymath, is celebrated for his groundbreaking contributions to game theory, a mathematical framework for strategic decision-making that aligns perfectly with a mentality-driven mind. Born in Budapest, von Neumann’s prodigious intellect led him to contribute to quantum mechanics, computer science, and economics, but his 1944 book "Theory of Games and Economic Behavior," co-authored with Oskar Morgenstern, revolutionized how we understand conflict and cooperation. Game theory analyzes competitive scenarios—like negotiations, wars, or markets—offering strategies to maximize outcomes, such as the minimax theorem, which balances risk and reward. His work laid the foundation for modern economics, AI, and military strategy, including Cold War deterrence theories like mutually assured destruction. A key figure in the Manhattan Project, von Neumann’s life was marked by a relentless pursuit of logic and innovation, though his health declined early due to cancer. For you, his teachings provide a scientific lens to approach life’s challenges—teaching you to anticipate moves, calculate risks, and win through intellectual precision.',
//       },
//       {
//         name: 'Cleopatra',
//         image: 'path/to/cleopatra.jpg',
//         shortStory: 'Cleopatra, an Egyptian queen, used strategy to protect her kingdom.',
//         fullStory: 'Cleopatra VII (69–30 BCE), the last active ruler of Ptolemaic Egypt, is renowned for her intelligence, charisma, and strategic brilliance in navigating the treacherous politics of the ancient world. Fluent in multiple languages and educated in mathematics, philosophy, and astronomy, Cleopatra secured Egypt’s independence by forging alliances with powerful Romans—first Julius Caesar, then Mark Antony—using both diplomacy and seduction as tools of statecraft, making her a fit for a mentality-driven mind. Her famous arrival in Rome, rolled in a carpet to meet Caesar, was a calculated move to secure his support against her brother Ptolemy XIII. Despite her efforts, Rome’s rise under Octavian (later Augustus) led to her defeat at the Battle of Actium and eventual suicide, ending Egypt’s independence. Cleopatra’s legacy, often romanticized, underscores her ability to wield power in a male-dominated world through intellect and strategy. For you, her life offers lessons in adaptability, charm, and strategic alliances—teaching you to navigate life’s power dynamics with cunning and grace.',
//       },
//       {
//         name: 'Otto von Bismarck',
//         image: 'path/to/bismarck.jpg',
//         shortStory: 'Bismarck, a Prussian statesman, unified Germany with strategic diplomacy.',
//         fullStory: 'Otto von Bismarck (1815–1898), the Iron Chancellor of Prussia, was the mastermind behind the unification of Germany, transforming a fragmented collection of states into a powerful empire through strategic diplomacy and calculated warfare. Appointed Chancellor in 1862, Bismarck orchestrated three short wars—against Denmark (1864), Austria (1866), and France (1870–71)—to consolidate power, using realpolitik, a pragmatic approach prioritizing power over ideals, which suits a mentality-driven mindset. His manipulation of alliances, like isolating France through the Ems Dispatch, showcased his genius for psychological warfare and foresight. After unification in 1871, Bismarck’s foreign policy focused on maintaining stability through a web of treaties, earning him the title "honest broker" at the Congress of Berlin (1878). His domestic policies, like introducing welfare reforms, balanced authority with progress. For you, Bismarck’s life is a lesson in strategic orchestration—teaching you to build alliances, anticipate conflicts, and shape outcomes with a blend of intellect and pragmatism.',
//       },
//     ],
//     philosophy: [
//       // Existing 2
//       {
//         name: 'Friedrich Nietzsche',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
//         shortStory: 'Nietzsche, a German thinker, challenged conventional morality with his bold ideas.',
//         fullStory: 'Friedrich Nietzsche (1844–1900), a German philosopher, cultural critic, and poet, revolutionized Western thought with his bold rejection of traditional morality and his call for individuals to create their own values. His seminal works, including "Thus Spoke Zarathustra," "Beyond Good and Evil," and "The Birth of Tragedy," introduce concepts like the "Übermensch" (Overman), the "will to power," and the "death of God," challenging the foundations of Christian ethics and societal norms. Nietzsche’s philosophy emerged from a life marked by intellectual brilliance and personal struggle—health issues forced him to abandon his academic career, leading to a solitary existence where he penned his most provocative ideas. The "Übermensch" represents an ideal of self-overcoming, urging you to rise above mediocrity and forge meaning in a world stripped of divine absolutes—a perfect fit for a philosophy-dominant mind. His critique of nihilism and embrace of eternal recurrence (the idea that life repeats infinitely) push you to live authentically, embracing life’s chaos with courage. Despite his descent into mental collapse in 1889, Nietzsche’s influence spans existentialism, psychology, and literature, inspiring figures like Sartre, Freud, and modern thinkers. For you, his teachings are a call to break free from convention, embrace your inner strength, and craft a life of profound purpose amidst the void.',
//       },
//       {
//         name: 'Albert Camus',
//         image: albertImage,
//         shortStory: 'Camus, a French-Algerian writer, explored the absurd in his philosophical works.',
//         fullStory: 'Albert Camus (1913–1960), a French-Algerian philosopher, author, and journalist, is a towering figure in existentialism, renowned for his exploration of the absurd—the conflict between humanity’s search for meaning and the universe’s indifference. Born in poverty in French Algeria, Camus overcame hardship to produce works like "The Stranger," "The Myth of Sisyphus," and "The Plague," blending literary artistry with philosophical depth. In "The Myth of Sisyphus," he posits that life’s lack of inherent meaning is not a cause for despair but a challenge to be met with defiance and joy, advocating for living fully despite the absurd—a philosophy that resonates with a questioning, philosophy-driven soul. His concept of the "absurd hero" encourages you to embrace rebellion against futility, finding freedom in accepting life’s randomness. As a resistance fighter during World War II and a Nobel Prize winner in 1957, Camus’s life reflected his ideals of moral integrity and human solidarity, though he rejected being labeled an existentialist, preferring to be seen as an absurdist. His untimely death in a car accident cut short a prolific career, but his legacy endures, influencing modern ethics, literature, and personal resilience. For you, Camus offers a path to confront life’s void with boldness, turning existential uncertainty into a source of strength and authenticity.',
//       },
//       // 8 New Philosophers for Philosophy
//       {
//         name: 'Socrates',
//         image: 'path/to/socrates.jpg',
//         shortStory: 'Socrates, a Greek philosopher, questioned everything to uncover truth.',
//         fullStory: 'Socrates (c. 470–399 BCE), an ancient Greek philosopher, is often called the father of Western philosophy for his relentless pursuit of truth through questioning. Born in Athens, he developed the Socratic Method—a form of dialogue involving probing questions to expose contradictions in one’s beliefs and uncover deeper truths, perfectly suited for a philosophy-driven mind. Unlike his contemporaries, Socrates never wrote anything; his teachings were recorded by his student Plato in works like "Apology" and "Phaedo." He famously declared, "The unexamined life is not worth living," emphasizing self-inquiry and ethical living over material gain. His method led to his trial and execution in 399 BCE for "corrupting the youth" and "impiety," yet he chose death over abandoning his principles, cementing his legacy as a martyr for truth. Socrates’ influence shaped Plato, Aristotle, and Western thought, inspiring critical thinking and moral philosophy. For you, Socrates offers a challenge to question everything—your beliefs, your purpose, and your existence—pushing you to seek wisdom through relentless inquiry.',
//       },
//       {
//         name: 'Jean-Paul Sartre',
//         image: 'path/to/sartre.jpg',
//         shortStory: 'Sartre, a French existentialist, explored freedom and responsibility.',
//         fullStory: 'Jean-Paul Sartre (1905–1980), a French philosopher, novelist, and playwright, was a leading figure in existentialism, emphasizing human freedom and the weight of responsibility. His seminal works, including "Being and Nothingness," "Nausea," and the play "No Exit," argue that existence precedes essence—meaning you’re born without a predefined purpose and must create your own through choices. Sartre’s concept of "bad faith" warns against denying your freedom by conforming to societal roles, a powerful idea for a philosophy-driven mind. His famous line, "Man is condemned to be free," underscores the burden of crafting meaning in a godless universe, a theme he explored as a resistance fighter during World War II and a public intellectual advocating for social justice. Sartre’s rejection of the 1964 Nobel Prize in Literature reflects his disdain for institutional honors, prioritizing authenticity. For you, Sartre’s philosophy is a call to embrace your freedom, take ownership of your choices, and live authentically—no excuses, just pure responsibility.',
//       },
//       {
//         name: 'Immanuel Kant',
//         image: 'path/to/kant.jpg',
//         shortStory: 'Kant, a German philosopher, redefined ethics with his categorical imperative.',
//         fullStory: 'Immanuel Kant (1724–1804), a German philosopher, revolutionized Western thought with his rigorous exploration of metaphysics, ethics, and epistemology. Born in Königsberg (now Kaliningrad, Russia), Kant’s "Critique of Pure Reason" (1781) examines how we perceive reality, arguing that our understanding of the world is shaped by the mind’s inherent structures—a profound idea for a philosophy-driven soul. His ethical framework, outlined in "Groundwork of the Metaphysics of Morals," introduces the categorical imperative: act only according to rules you’d want to be universal, emphasizing duty over desire. Kant’s life was famously disciplined—he never left his hometown, and locals set their clocks by his daily walks—yet his ideas were revolutionary, bridging rationalism and empiricism. His influence spans modern philosophy, from ethics to cognitive science, challenging you to think beyond appearances and act with universal integrity. For you, Kant offers a lens to question reality itself, align your actions with timeless principles, and seek truth through reason.',
//       },
//       {
//         name: 'Arthur Schopenhauer',
//         image: 'path/to/schopenhauer.jpg',
//         shortStory: 'Schopenhauer, a German thinker, explored the nature of will and suffering.',
//         fullStory: 'Arthur Schopenhauer (1788–1860), a German philosopher, is best known for his pessimistic yet profound philosophy centered on the concept of the "will" as the driving force of existence. In his magnum opus, "The World as Will and Representation," Schopenhauer argues that the world we perceive is a representation of an insatiable, blind will—a metaphysical force that fuels desire, suffering, and endless striving, resonating with a philosophy-driven mind. Influenced by Kant and Eastern thought like Buddhism, he saw life as a cycle of unfulfilled desires, advocating for asceticism, art, and compassion as paths to transcend suffering. His ideas, initially overlooked, later influenced Nietzsche, Wagner, and Freud, bridging Western and Eastern philosophy. Schopenhauer’s life was marked by isolation and a disdain for academic norms, yet his clarity of thought endures. For you, his work offers a stark look at life’s inherent struggles, encouraging you to find meaning through creativity, empathy, and a deeper understanding of your own desires.',
//       },
//       {
//         name: 'Simone de Beauvoir',
//         image: 'path/to/beauvoir.jpg',
//         shortStory: 'Beauvoir, a French existentialist, explored freedom and gender in her works.',
//         fullStory: 'Simone de Beauvoir (1908–1986), a French philosopher, writer, and feminist, is a key figure in existentialism and modern feminism, best known for her groundbreaking work "The Second Sex" (1949). A lifelong partner of Jean-Paul Sartre, Beauvoir argued that "one is not born, but rather becomes, a woman," exposing how societal structures oppress women and limit their freedom—a profound insight for a philosophy-driven mind. Her existentialist philosophy, seen in works like "The Ethics of Ambiguity," emphasizes personal freedom, responsibility, and the rejection of imposed roles, encouraging authentic living in an ambiguous world. An activist for women’s rights and social justice, Beauvoir’s life reflected her ideas—she lived unconventionally, rejecting marriage and embracing intellectual partnerships. Her influence spans feminism, ethics, and literature, inspiring generations to question systemic norms. For you, Beauvoir’s teachings are a call to break free from societal shackles, define your own essence, and live with unapologetic freedom.',
//       },
//       {
//         name: 'Lao Tzu',
//         image: 'path/to/laotzu.jpg',
//         shortStory: 'Lao Tzu, a Chinese philosopher, founded Taoism with a focus on harmony.',
//         fullStory: 'Lao Tzu (c. 6th century BCE), an ancient Chinese philosopher and the founder of Taoism, is traditionally credited with authoring the "Tao Te Ching," a foundational text of Taoist thought that explores the nature of existence, harmony, and the "Tao" (the Way)—an ineffable force guiding all things, perfect for a philosophy-driven soul. Lao Tzu’s teachings advocate for simplicity, humility, and living in alignment with nature’s flow, famously stating, "The journey of a thousand miles begins with a single step." His philosophy emphasizes wu wei (non-action), not as passivity but as effortless action in harmony with the universe, encouraging you to let go of ego and embrace spontaneity. Lao Tzu’s life is shrouded in legend—he reportedly left civilization on a water buffalo after writing the "Tao Te Ching" at a border guard’s request. His ideas have influenced Chinese thought, from Confucianism to Zen Buddhism, and resonate globally in mindfulness practices. For you, Lao Tzu offers a path to find meaning through simplicity, balance, and a deeper connection to the natural order.',
//       },
//       {
//         name: 'Baruch Spinoza',
//         image: 'path/to/spinoza.jpg',
//         shortStory: 'Spinoza, a Dutch philosopher, explored rationalism and the nature of God.',
//         fullStory: 'Baruch Spinoza (1632–1677), a Dutch philosopher of Sephardic Jewish descent, is a key figure in the Enlightenment, known for his rationalist philosophy and pantheistic view of God as synonymous with nature. In his masterpiece "Ethics," Spinoza uses a geometric method to argue that everything is part of a single, infinite substance—God or Nature—challenging traditional religious views and resonating with a philosophy-driven mind. Excommunicated from the Jewish community at 23 for his radical ideas, Spinoza lived a modest life as a lens grinder, dedicating himself to philosophy. His concepts of intellectual freedom, determinism, and the idea that emotions can be mastered through understanding (as in his theory of affects) offer a framework for rational living. Spinoza’s influence spans modern philosophy, from Hegel to Einstein, who admired his ideas. For you, Spinoza’s work is a call to see the interconnectedness of all things, approach life with reason, and find peace through intellectual clarity.',
//       },
//       {
//         name: 'Søren Kierkegaard',
//         image: 'path/to/kierkegaard.jpg',
//         shortStory: 'Kierkegaard, a Danish philosopher, explored faith and individuality.',
//         fullStory: 'Søren Kierkegaard (1813–1855), a Danish philosopher and theologian, is often called the father of existentialism for his focus on individual existence, faith, and the "leap of faith." In works like "Fear and Trembling," "Either/Or," and "The Sickness Unto Death," Kierkegaard explores the tension between freedom and despair, urging you to confront life’s uncertainties through personal choice and commitment—a fitting philosophy for a questioning mind. His concept of the "knight of faith," who embraces the absurd through belief, challenges you to find meaning beyond reason. Kierkegaard’s life, marked by a broken engagement and public ridicule, reflects his deep sensitivity and commitment to authenticity, as he wrote, "Life can only be understood backwards; but it must be lived forwards." His influence on existentialism, theology, and psychology (notably impacting Heidegger and Sartre) endures. For you, Kierkegaard offers a path to embrace your individuality, face life’s paradoxes, and find purpose through a deeply personal leap into the unknown.',
//       },
//     ],
//     psychology: [
//       // Existing 2
//       {
//         name: 'Carl Jung',
//         image: jungImage,
//         shortStory: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes.',
//         fullStory: 'Carl Gustav Jung (1875–1961), a Swiss psychiatrist and psychoanalyst, revolutionized modern psychology with his pioneering theories on the unconscious mind, archetypes, and the process of individuation. Initially a close collaborator of Sigmund Freud, Jung’s eventual break with him in 1913—due to differing views on the unconscious—marked the birth of Analytical Psychology. He proposed a dual-layered unconscious: the Personal Unconscious, housing repressed memories and individual experiences, and the Collective Unconscious, a universal reservoir of archetypes—innate symbols like the Persona (social mask), Shadow (hidden self), Anima/Animus (contrasexual soul), and Self (wholeness). Individuation, Jung’s lifelong journey toward integrating these elements, promises psychological balance and self-realization, making it ideal for a psychology-dominant mind. His concept of the Shadow, the repressed darker aspects of personality, urges you to confront fears and insecurities for growth, encapsulated in his maxim, “Until you make the unconscious conscious, it will direct your life and you will call it fate.” Jung’s innovations extend to introversion/extraversion (later shaping the MBTI), dream analysis, and synchronicity (meaningful coincidences), with key works like "Psychological Types," "Modern Man in Search of a Soul," and "The Archetypes and the Collective Unconscious." His influence reaches beyond psychology into mythology, spirituality, and quantum physics, encouraging you to explore your mind’s depths, embrace your shadow, and achieve wholeness. Jung’s life, filled with mystical experiences and global travels, reflects a man who didn’t just study the psyche—he charted a path to self-mastery.',
//       },
//       {
//         name: 'Sigmund Freud',
//         image: sigmundImage,
//         shortStory: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires.',
//         fullStory: 'Sigmund Freud (1856–1939), an Austrian neurologist turned revolutionary thinker, founded psychoanalysis, a transformative approach to understanding the human mind that reshaped psychology, psychiatry, and culture. Born in Moravia (now Czech Republic), Freud’s early medical career evolved into a lifelong quest to unravel the unconscious, driven by his observation that much of human behavior stems from hidden motives and repressed desires. His structural model divides the mind into the Id (primitive instincts), Ego (rational mediator), and Superego (moral conscience), a framework that underpins his theory of psychosexual development—spanning oral, anal, phallic, latency, and genital stages—where childhood experiences mold personality. Freud’s exploration of defense mechanisms (repression, denial, projection) explains how the mind shields itself from anxiety, while his groundbreaking "The Interpretation of Dreams" (1899) posits dreams as windows to unconscious conflicts and desires. His controversial Oedipus complex, suggesting unconscious desires for the opposite-sex parent, and his dual-drive theory (Eros for life, Thanatos for death) add layers to his complex legacy. Despite facing criticism and exile from Nazi-occupied Vienna, Freud’s influence endures through techniques like free association and transference, impacting literature, art, and modern therapy. For a psychology-dominant individual, Freud’s work is a call to delve into the mind’s hidden depths, confront buried emotions, and unlock the key to self-awareness, as he famously noted, “Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.”',
//       },
//       // 8 New Philosophers for Psychology
//       {
//         name: 'Erik Erikson',
//         image: 'path/to/erikson.jpg',
//         shortStory: 'Erikson, a German-American psychologist, developed stages of psychosocial development.',
//         fullStory: 'Erik Erikson (1902–1994), a German-American developmental psychologist and psychoanalyst, is best known for his theory of psychosocial development, which outlines eight stages of life, each marked by a conflict that shapes personality—a perfect framework for a psychology-driven mind. Building on Freud’s psychosexual stages, Erikson emphasized social and cultural influences, introducing stages like trust vs. mistrust (infancy), identity vs. role confusion (adolescence), and integrity vs. despair (late adulthood). His concept of the "identity crisis," particularly in adolescence, became a cornerstone of developmental psychology, highlighting the struggle to define oneself amidst societal pressures. Born in Frankfurt and later immigrating to the U.S., Erikson’s own search for identity—having never known his biological father—deeply informed his work. His books, like "Childhood and Society" (1950), explore how relationships and environment shape the self. For you, Erikson’s theory offers a roadmap to understand your emotional growth, navigate life’s conflicts, and build a cohesive sense of self through connection and reflection.',
//       },
//       {
//         name: 'Viktor Frankl',
//         image: 'path/to/frankl.jpg',
//         shortStory: 'Frankl, an Austrian psychiatrist, found meaning in suffering through logotherapy.',
//         fullStory: 'Viktor Frankl (1905–1997), an Austrian psychiatrist and Holocaust survivor, developed logotherapy, a therapeutic approach centered on finding meaning in life, even amidst profound suffering—a fitting philosophy for a psychology-driven mind. In his seminal book "Man’s Search for Meaning" (1946), Frankl recounts his experiences in Nazi concentration camps, where he observed that those who found purpose were more likely to survive. Logotherapy, often called the "third Viennese school of psychotherapy" after Freud and Adler, posits that the primary human drive is not pleasure or power but meaning, achievable through creating, experiencing, or adopting an attitude toward suffering. Frankl’s concept of the "existential vacuum"—a sense of emptiness from lack of purpose—resonates in modern psychology, offering tools to combat despair. His life, marked by loss and resilience, reflects his belief: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances." For you, Frankl’s work is a guide to find meaning in your struggles, channel your emotions, and live with purpose.',
//       },
//       {
//         name: 'Abraham Maslow',
//         image: 'path/to/maslow.jpg',
//         shortStory: 'Maslow, an American psychologist, created the hierarchy of needs.',
//         fullStory: 'Abraham Maslow (1908–1970), an American psychologist, is renowned for his hierarchy of needs, a theory of human motivation that maps out five levels of needs driving behavior—physiological, safety, love/belonging, esteem, and self-actualization at the top—a foundational idea for a psychology-driven mind. Introduced in his 1943 paper "A Theory of Human Motivation," Maslow’s pyramid suggests that lower needs (like food and safety) must be met before higher ones (like self-actualization) can be pursued. Later in life, he expanded this to include self-transcendence, emphasizing the drive to connect with something greater. A key figure in humanistic psychology, Maslow focused on human potential and growth, contrasting with Freud’s emphasis on pathology, as seen in his book "Motivation and Personality" (1954). His work influenced education, management, and therapy, encouraging a holistic view of the self. For you, Maslow’s hierarchy offers a lens to understand your emotional needs, prioritize your growth, and strive for your highest potential through self-awareness and fulfillment.',
//       },
//       {
//         name: 'Alfred Adler',
//         image: 'path/to/adler.jpg',
//         shortStory: 'Adler, an Austrian psychologist, explored inferiority and social connection.',
//         fullStory: 'Alfred Adler (1870–1937), an Austrian medical doctor and psychotherapist, founded Individual Psychology, emphasizing the role of social relationships and the drive to overcome inferiority in shaping personality—a key insight for a psychology-driven mind. Initially a collaborator of Freud, Adler broke away in 1911, rejecting Freud’s focus on sexual drives and instead proposing that humans are motivated by a need for belonging and significance, as seen in his concept of the "inferiority complex." Adler believed that feelings of inferiority, often rooted in childhood, drive individuals to strive for superiority, either constructively (through achievement) or destructively (through overcompensation). His works, like "Understanding Human Nature," highlight the importance of community feeling ("Gemeinschaftsgefühl") for mental health. Adler’s influence extends to education, parenting, and therapy, notably through concepts like birth order’s impact on personality. For you, Adler’s teachings offer a path to understand your emotional drives, heal from feelings of inadequacy, and build meaningful connections that foster growth.',
//       },
//       {
//         name: 'Karen Horney',
//         image: 'path/to/horney.jpg',
//         shortStory: 'Horney, a German psychoanalyst, focused on neurosis and self-realization.',
//         fullStory: 'Karen Horney (1885–1952), a German psychoanalyst, made significant contributions to psychology by challenging Freudian orthodoxy and emphasizing cultural and social factors in personality development—a fitting perspective for a psychology-driven mind. In her book "Neurosis and Human Growth" (1950), Horney argued that neurosis stems from disturbed relationships, particularly in childhood, leading to "basic anxiety" and coping strategies like moving toward, against, or away from others. She rejected Freud’s penis envy, instead proposing "womb envy" and focusing on how societal pressures, like gender roles, shape the psyche. Horney’s concept of the "real self" versus the "ideal self" highlights the conflict between authentic growth and the neurotic pursuit of perfection, advocating for self-realization through self-awareness. A pioneer for women in psychology, Horney’s work influenced humanistic psychology and feminist theory. For you, her insights offer a path to understand your emotional patterns, break free from societal expectations, and cultivate a healthier, more authentic self.',
//       },
//       {
//         name: 'John Bowlby',
//         image: 'path/to/bowlby.jpg',
//         shortStory: 'Bowlby, a British psychologist, developed attachment theory.',
//         fullStory: 'John Bowlby (1907–1990), a British psychologist and psychiatrist, is the founder of attachment theory, a groundbreaking framework that explains how early relationships shape emotional development—a crucial concept for a psychology-driven mind. In his trilogy "Attachment and Loss" (1969–1980), Bowlby argued that children are biologically wired to form attachments with caregivers for survival, and the quality of these bonds—secure, anxious, or avoidant—profoundly impacts personality and relationships into adulthood. His work with orphaned children during World War II highlighted the devastating effects of maternal deprivation, influencing child welfare policies worldwide. Bowlby’s collaboration with Mary Ainsworth, who developed the "Strange Situation" experiment, further validated his theory by identifying attachment styles. His famous quote, "What cannot be communicated to the mother cannot be communicated to the self," underscores the link between attachment and self-understanding. For you, Bowlby’s theory offers a lens to explore your relational patterns, heal from past wounds, and build secure, meaningful connections.',
//       },
//       {
//         name: 'B.F. Skinner',
//         image: 'path/to/skinner.jpg',
//         shortStory: 'Skinner, an American psychologist, studied behavior through operant conditioning.',
//         fullStory: 'B.F. Skinner (1904–1990), an American psychologist and behaviorist, revolutionized psychology with his theory of operant conditioning, which explores how behavior is shaped by consequences—a practical insight for a psychology-driven mind. In his book "Beyond Freedom and Dignity" (1971), Skinner argued that behavior is influenced by reinforcement (positive or negative) and punishment, not free will, introducing concepts like the "Skinner box" to study learning in animals. His experiments showed that rewarding desired behaviors increases their frequency, a principle applied in education, parenting, and therapy (e.g., behavior modification programs). A leading figure in behaviorism, Skinner’s work contrasted with Freud’s focus on the unconscious, emphasizing observable actions over internal states. Despite criticism for downplaying emotions, his ideas, like schedules of reinforcement, remain influential in psychology and technology (e.g., gamification). For you, Skinner’s work offers a practical tool to understand your habits, reshape your behaviors, and create positive change through intentional reinforcement.',
//       },
//       {
//         name: 'Daniel Goleman',
//         image: 'path/to/goleman.jpg',
//         shortStory: 'Goleman, an American psychologist, popularized emotional intelligence.',
//         fullStory: 'Daniel Goleman (born 1946), an American psychologist and science journalist, brought the concept of emotional intelligence (EI) to the forefront with his bestselling book "Emotional Intelligence" (1995), a transformative idea for a psychology-driven mind. Building on earlier research, Goleman outlined five components of EI: self-awareness, self-regulation, motivation, empathy, and social skills, arguing that emotional literacy often matters more than IQ for success in life and relationships. His work, grounded in neuroscience, showed how the brain’s emotional centers (like the amygdala) interact with rational ones, influencing decision-making and behavior. Goleman’s later books, like "Social Intelligence," explore how relationships shape our minds, impacting education, leadership, and mental health practices. A former journalist for The New York Times, Goleman’s ability to bridge science and public understanding made EI a global phenomenon. For you, his teachings offer a framework to master your emotions, deepen your empathy, and navigate life’s challenges with emotional clarity and connection.',
//       },
//     ],
//     fear: [
//       // Existing 2
//       {
//         name: 'Frank Herbert',
//         image: frankImage,
//         shortStory: 'Herbert, an American author, penned "Dune," teaching how to confront fear.',
//         fullStory: 'Frank Herbert (1920–1986), an American science fiction writer, is celebrated for his monumental novel "Dune," a sprawling epic that blends ecological science, political intrigue, and profound psychological insights, particularly around confronting fear. Published in 1965, "Dune" follows Paul Atreides on the desert planet Arrakis, where the iconic Litany Against Fear—“I must not fear. Fear is the mind-killer…”—becomes a mantra for mastering terror, resonating deeply with a fear-dominant mind. Herbert’s narrative weaves complex themes: the interplay of power and religion, the stewardship of natural resources, and the human capacity to overcome primal instincts through discipline. Drawing from his journalistic background and fascination with ecology, Herbert spent years researching deserts and indigenous cultures, infusing "Dune" with authenticity and depth. The book’s success spawned a franchise, including sequels and adaptations, cementing his legacy as a visionary. For you, Herbert’s work offers a transformative lesson: fear, when faced with courage and preparation, becomes a catalyst for strength and clarity, teaching you to harness your inner resolve amidst life’s harshest trials, much like the Fremen warriors of Arrakis who turn adversity into triumph.',
//       },
//       {
//         name: 'Epictetus',
//         image: epixImage,
//         shortStory: 'Epictetus, a Stoic philosopher, taught resilience in the face of fear.',
//         fullStory: 'Epictetus (c. 50–135 CE), a Greek Stoic philosopher born into slavery, emerged as a beacon of resilience, teaching that inner freedom and mastery over fear are achievable regardless of external circumstances. After gaining freedom, he founded a philosophical school in Nicopolis, where his teachings, recorded by his student Arrian in the "Discourses" and the handbook "Enchiridion," emphasize controlling what you can—your thoughts and reactions—while accepting what you cannot. His philosophy, rooted in Stoicism, asserts that fear arises from misjudgment, and by aligning your will with nature’s course, you can achieve tranquility—a perfect guide for a fear-dominant soul. Epictetus’s life, marked by hardship including physical disability from a cruel master, exemplifies his doctrine: “It’s not what happens to you, but how you react to it that matters.” His ideas influenced Roman emperors like Marcus Aurelius and modern thinkers alike, offering a practical framework to navigate life’s uncertainties. For you, Epictetus provides a roadmap to conquer fear by focusing on your unshakable inner core, transforming adversity into a source of strength and wisdom through disciplined self-mastery.',
//       },
//       // 8 New Philosophers for Fear
//       {
//         name: 'Marcus Aurelius',
//         image: 'path/to/aurelius.jpg',
//         shortStory: 'Aurelius, a Roman emperor, faced fear with Stoic wisdom.',
//         fullStory: 'Marcus Aurelius (121–180 CE), a Roman emperor and Stoic philosopher, ruled during a time of plague, war, and internal strife, yet his personal writings, compiled as "Meditations," reveal a man who confronted fear with profound inner strength—a perfect guide for a fear-dominant mind. Written during military campaigns, "Meditations" is a collection of reflections on Stoic principles, emphasizing rationality, self-discipline, and acceptance of what cannot be changed. Aurelius famously wrote, "You have power over your mind—not outside events. Realize this, and you will find strength," a mantra for mastering fear by focusing on what’s within your control. Despite his imperial power, he lived modestly, embodying his philosophy of humility and duty. His reign, marked by the Antonine Plague and Germanic invasions, tested his resilience, yet he remained a philosopher-king, admired by history. For you, Aurelius offers a stoic shield against fear—teaching you to face life’s storms with calm, rational courage and an unwavering focus on your inner fortitude.',
//       },
//       {
//         name: 'Pema Chödrön',
//         image: 'path/to/pema.jpg',
//         shortStory: 'Chödrön, a Buddhist nun, teaches how to embrace fear with mindfulness.',
//         fullStory: 'Pema Chödrön (born 1936), an American Tibetan Buddhist nun and teacher, is renowned for her accessible teachings on facing fear through mindfulness and compassion—a fitting guide for a fear-dominant mind. Ordained in 1981, Chödrön became a leading voice in Western Buddhism, authoring books like "When Things Fall Apart" and "The Places That Scare You," where she encourages leaning into fear rather than resisting it. Drawing from the Tibetan Buddhist concept of "shenpa" (attachment or being hooked), she teaches that fear often stems from clinging to comfort, and by sitting with discomfort—through meditation and self-compassion—you can find freedom. Her life, marked by personal struggles including divorce and a search for meaning, led her to Buddhism, where she found solace in embracing impermanence. Chödrön’s teachings, often shared at Gampo Abbey in Nova Scotia, have inspired millions to face fear with openness. For you, her wisdom offers a path to transform fear into a teacher—encouraging you to breathe through anxiety, soften your heart, and find peace in the unknown.',
//       },
//       {
//         name: 'Ernest Shackleton',
//         image: 'path/to/shackleton.jpg',
//         shortStory: 'Shackleton, a British explorer, led his crew through fear in the Antarctic.',
//         fullStory: 'Ernest Shackleton (1874–1922), a British explorer, is celebrated for his extraordinary leadership during the ill-fated Endurance expedition (1914–1917), where he and his crew survived against all odds in the Antarctic—a story of facing fear head-on, perfect for a fear-dominant mind. When their ship, the Endurance, was trapped and crushed by ice, Shackleton led his 27 men through a grueling 800-mile journey across icy seas in small lifeboats to reach safety, ensuring not a single life was lost. His ability to remain calm, instill hope, and make bold decisions under extreme uncertainty—such as the treacherous boat journey to South Georgia—made him a legend of resilience. Shackleton’s motto, "By endurance we conquer," reflects his belief in perseverance over panic. His expeditions, though often financially strained, showcased his unyielding spirit. For you, Shackleton’s story teaches how to face fear with leadership, optimism, and grit—turning the impossible into a triumph through sheer determination.',
//       },
//       {
//         name: 'Edmund Hillary',
//         image: 'path/to/hillary.jpg',
//         shortStory: 'Hillary, a New Zealand mountaineer, conquered fear to summit Everest.',
//         fullStory: 'Edmund Hillary (1919–2008), a New Zealand mountaineer, became the first person (along with Sherpa Tenzing Norgay) to summit Mount Everest in 1953, facing fear with courage and determination—an inspiring example for a fear-dominant mind. A beekeeper turned adventurer, Hillary joined the British Everest expedition after years of climbing in the Himalayas, confronting extreme altitudes, treacherous icefalls, and the ever-present risk of death to reach the 29,029-foot summit. His famous quote, "It is not the mountain we conquer, but ourselves," reflects his belief that the true battle is against inner fear and doubt. After Everest, Hillary continued exploring, leading expeditions to the South Pole and founding schools in Nepal through the Himalayan Trust, showing a life of purpose beyond conquest. His humility and teamwork—always crediting Tenzing—made him a global icon. For you, Hillary’s journey offers a lesson in facing fear through preparation, persistence, and self-belief—encouraging you to climb your own mountains, no matter how daunting.',
//       },
//       {
//         name: 'Seneca',
//         image: 'path/to/seneca.jpg',
//         shortStory: 'Seneca, a Roman Stoic, taught how to face fear with rational thought.',
//         fullStory: 'Seneca the Younger (c. 4 BCE–65 CE), a Roman Stoic philosopher, statesman, and dramatist, offered timeless wisdom on facing fear through rationality and virtue—a guiding light for a fear-dominant mind. As a tutor and advisor to Emperor Nero, Seneca navigated a treacherous political landscape, ultimately facing exile and a forced suicide for alleged conspiracy. His works, including "Letters from a Stoic" and "On the Shortness of Life," emphasize preparing for adversity through mental discipline, as in his advice, "We are more often frightened than hurt; and we suffer more from imagination than from reality." Seneca’s Stoicism teaches that fear stems from attachment to things beyond your control, urging you to focus on your inner response instead. His life, marked by wealth, power, and eventual downfall, reflects a man who practiced what he preached—facing death with calm acceptance. For you, Seneca’s teachings offer a stoic toolkit to tame fear—encouraging you to rationalize your anxieties, embrace adversity, and live with courage and clarity.',
//       },
//       {
//         name: 'Harriet Tubman',
//         image: 'path/to/tubman.jpg',
//         shortStory: 'Tubman, an American abolitionist, overcame fear to lead slaves to freedom.',
//         fullStory: 'Harriet Tubman (c. 1822–1913), an American abolitionist and social activist, defied fear to become a conductor on the Underground Railroad, leading hundreds of enslaved people to freedom—a heroic example for a fear-dominant mind. Born into slavery in Maryland, Tubman escaped in 1849 and returned south at least 13 times, risking capture and death to guide others north, earning the nickname "Moses." Facing constant threats—bounties on her head, physical violence, and her own health struggles (narcolepsy from a childhood injury)—she never lost a passenger, famously saying, "I never ran my train off the track, and I never lost a passenger." Tubman also served as a spy and nurse during the Civil War, later advocating for women’s suffrage. Her unyielding courage, rooted in faith and a vision of freedom, made her a symbol of resilience. For you, Tubman’s life teaches how to face fear with purpose—showing you that bravery isn’t the absence of fear but the strength to push through for a greater cause.',
//       },
//       {
//         name: 'Thich Nhat Hanh',
//         image: 'path/to/thich.jpg',
//         shortStory: 'Thich Nhat Hanh, a Vietnamese monk, taught mindfulness to overcome fear.',
//         fullStory: 'Thich Nhat Hanh (1926–2022), a Vietnamese Buddhist monk, poet, and peace activist, introduced mindfulness to the West, offering tools to face fear with presence and compassion—an invaluable guide for a fear-dominant mind. Exiled from Vietnam in 1966 for his anti-war activism, he founded the Plum Village monastery in France, where he taught mindfulness practices like walking meditation and conscious breathing, as detailed in books like "The Miracle of Mindfulness" and "Fear: Essential Wisdom for Getting Through the Storm." His concept of "interbeing"—the interconnectedness of all things—encourages you to see fear as a part of life to be embraced, not fought, with his advice, "Breathing in, I calm my body. Breathing out, I smile." Nominated for the Nobel Peace Prize by Martin Luther King Jr., Thich Nhat Hanh’s teachings have influenced global mindfulness movements. For you, his wisdom offers a gentle path to face fear—teaching you to ground yourself in the present, soften your resistance, and find peace amidst life’s uncertainties.',
//       },
//       {
//         name: 'Nelson Mandela',
//         image: 'path/to/mandela.jpg',
//         shortStory: 'Mandela, a South African leader, overcame fear to fight apartheid.',
//         fullStory: 'Nelson Mandela (1918–2013), a South African anti-apartheid activist and the nation’s first Black president, faced fear with unwavering courage to dismantle systemic oppression—an inspiring figure for a fear-dominant mind. Imprisoned for 27 years for his activism against apartheid, Mandela endured harsh conditions on Robben Island, yet emerged without bitterness, leading South Africa to democracy in 1994. His autobiography, "Long Walk to Freedom," reveals his approach to fear: "I learned that courage was not the absence of fear, but the triumph over it." As president, Mandela focused on reconciliation, forming the Truth and Reconciliation Commission to heal a divided nation, earning him the 1993 Nobel Peace Prize. His life, marked by personal sacrifice—years away from family, constant threats—shows a man who transformed fear into a force for justice. For you, Mandela’s journey offers a lesson in facing fear with dignity—encouraging you to stand firm in your values, act with compassion, and lead with fearless resolve.',
//       },
//     ],
//     'self-discovery': [
//       // Existing 2
//       {
//         name: 'Rumi',
//         image: rumiImage,
//         shortStory: 'Rumi, a Persian poet, wove mysticism into his verses on self-exploration.',
//         fullStory: 'Jalal ad-Din Muhammad Rumi (1207–1273), a Persian poet, Sufi mystic, and scholar, is revered for his lyrical masterpieces that weave mysticism with profound insights into self-discovery and spiritual awakening. Born in what is now Afghanistan, Rumi’s life transformed after meeting the wandering dervish Shams Tabrizi, igniting a deep friendship that inspired his poetic outpouring, collected in works like the "Masnavi" and "Divan-e Shams-e Tabrizi." His poetry explores love—both human and divine—as a path to peel back the layers of the self, revealing the light within through surrender and introspection, a journey ideal for a self-discovery-dominant mind. Themes of unity, the soul’s longing, and the dissolution of ego permeate his verses, encouraging you to find meaning in loss and embrace your deepest wounds as portals to growth. Rumi’s legacy, spread by the Whirling Dervishes, transcends cultures, influencing poetry, spirituality, and psychology worldwide. His life, marked by exile and personal tragedy, reflects a man who turned pain into poetry, offering you a guide to explore your inner universe, connect with the divine, and emerge transformed through the alchemy of self-awareness.',
//       },
//       {
//         name: 'Ralph Waldo Emerson',
//         image: RalphImage,
//         shortStory: 'Emerson, an American essayist, championed individuality in his works.',
//         fullStory: 'Ralph Waldo Emerson (1803–1882), an American essayist, lecturer, and transcendentalist philosopher, championed the power of individuality and self-reliance, shaping American intellectual thought in the 19th century. Born in Boston, Emerson’s early career as a Unitarian minister ended when he rejected formal doctrine, leading him to develop transcendentalism—a belief in the inherent goodness of people and nature as a source of divine truth. His essay "Self-Reliance" (1841) urges you to trust your inner voice, reject conformity, and carve your own path amidst societal noise, a philosophy that resonates deeply with a self-discovery-dominant spirit. Influenced by European Romanticism and Eastern philosophies, Emerson’s works like "Nature" and "The American Scholar" celebrate the individual’s connection to the universe, encouraging personal growth through intuition and experience. His life, marked by the loss of his first wife and a shift to public lecturing, reflects a man who lived his ideals, inspiring figures like Thoreau and Whitman. For you, Emerson offers a call to embrace your unique essence, trust your instincts, and build a life of authentic self-expression, turning inward to discover the limitless potential within.',
//       },
//       // 8 New Philosophers for Self-Discovery
//       {
//         name: 'Henry David Thoreau',
//         image: 'path/to/thoreau.jpg',
//         shortStory: 'Thoreau, an American transcendentalist, lived simply to discover his true self.',
//         fullStory: 'Henry David Thoreau (1817–1862), an American writer, naturalist, and transcendentalist, is best known for "Walden," a reflection on simple living and self-discovery through his two-year experiment in a cabin by Walden Pond. A disciple of Ralph Waldo Emerson, Thoreau sought to strip life to its essentials, famously writing, "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach." His philosophy, rooted in individualism and a deep connection to nature, encourages you to reject societal pressures and discover your true self through introspection and simplicity—a perfect fit for a self-discovery-driven mind. Thoreau’s essay "Civil Disobedience," inspired by his arrest for refusing to pay a poll tax, influenced figures like Gandhi and Martin Luther King Jr. His life, marked by a quiet rebellion against materialism, offers you a path to find clarity by stepping away from noise, listening to your inner voice, and embracing the beauty of the present.',
//       },
//       {
//         name: 'Carl Rogers',
//         image: 'path/to/rogers.jpg',
//         shortStory: 'Rogers, an American psychologist, emphasized self-actualization in therapy.',
//         fullStory: 'Carl Rogers (1902–1987), an American psychologist and founder of client-centered therapy, revolutionized psychotherapy by focusing on the individual’s capacity for self-discovery and growth—a guiding light for a self-discovery-driven mind. In his book "On Becoming a Person" (1961), Rogers introduced the concept of the "actualizing tendency," the innate drive to realize one’s full potential, emphasizing that a supportive, empathetic environment—unconditional positive regard, genuineness, and empathy—allows the self to flourish. A key figure in humanistic psychology, Rogers shifted therapy from directive analysis to a collaborative process, trusting clients to find their own answers. His approach influenced education, parenting, and conflict resolution, earning him a nomination for the Nobel Peace Prize for his work in Northern Ireland. Rogers’ life, marked by a shift from theology to psychology, reflects his belief in human potential. For you, his teachings offer a framework to uncover your authentic self, heal through self-acceptance, and grow into the person you’re meant to be.',
//       },
//       {
//         name: 'Hermann Hesse',
//         image: 'path/to/hesse.jpg',
//         shortStory: 'Hesse, a German novelist, explored self-discovery in his works like "Siddhartha."',
//         fullStory: 'Hermann Hesse (1877–1962), a German-Swiss novelist and poet, is celebrated for his introspective works that explore the journey of self-discovery and spiritual awakening, making him a fitting guide for a self-discovery-driven mind. His novel "Siddhartha" (1922) follows a man’s quest for enlightenment through various paths—asceticism, materialism, love, and finally inner peace—mirroring the universal search for the true self. Other works like "Steppenwolf" and "The Glass Bead Game" (for which he won the 1946 Nobel Prize in Literature) delve into the tension between individuality and societal expectations, urging you to embrace your inner contradictions. Influenced by Jungian psychology and Eastern philosophy, Hesse’s life was marked by personal struggles, including a breakdown that led him to psychoanalysis, fueling his literary exploration of the self. For you, Hesse’s stories offer a mirror to your own journey—encouraging you to seek authenticity, embrace your inner complexity, and find meaning through self-exploration.',
//       },
//       {
//         name: 'Joseph Campbell',
//         image: 'path/to/campbell.jpg',
//         shortStory: 'Campbell, an American mythologist, explored the hero’s journey of self-discovery.',
//         fullStory: 'Joseph Campbell (1904–1987), an American mythologist and writer, is best known for his concept of the "hero’s journey," a universal narrative structure that outlines the path of self-discovery—a powerful framework for a self-discovery-driven mind. In his book "The Hero with a Thousand Faces" (1949), Campbell identifies a monomyth across cultures: a hero leaves the ordinary world, faces trials, gains wisdom, and returns transformed. Influenced by Jungian archetypes and global mythologies, Campbell’s work, like his PBS series "The Power of Myth," encourages you to see your life as a heroic journey, with challenges as opportunities for growth. His famous advice, "Follow your bliss," urges you to pursue what truly resonates with your soul, even if the path is uncertain. Campbell’s teachings have shaped storytelling (notably influencing Star Wars) and personal development. For you, his insights offer a mythic lens to navigate your own journey—encouraging you to face the unknown, discover your inner strengths, and return with newfound wisdom.',
//       },
//       {
//         name: 'Krishnamurti',
//         image: 'path/to/krishnamurti.jpg',
//         shortStory: 'Krishnamurti, an Indian philosopher, taught self-awareness without dogma.',
//         fullStory: 'Jiddu Krishnamurti (1895–1986), an Indian philosopher and speaker, dedicated his life to teaching self-awareness and inner freedom, rejecting all forms of authority and dogma—a profound guide for a self-discovery-driven mind. Groomed by the Theosophical Society as a "world teacher," Krishnamurti dissolved the organization in 1929, declaring, "Truth is a pathless land," and spent the next six decades speaking globally on the need for radical self-inquiry. In books like "Freedom from the Known," he urges you to observe your thoughts without judgment, question conditioning, and discover truth through direct experience, not through gurus or systems. His dialogues, often held in natural settings, emphasize mindfulness, love, and the dissolution of the self. Krishnamurti’s life, marked by a rejection of external authority, reflects his commitment to inner liberation. For you, his teachings offer a path to uncover your true self—encouraging you to let go of preconceptions, observe your mind, and find freedom through pure awareness.',
//       },
//       {
//         name: 'Anaïs Nin',
//         image: 'path/to/nin.jpg',
//         shortStory: 'Nin, a French-American writer, explored self-discovery through diaries.',
//         fullStory: 'Anaïs Nin (1903–1977), a French-American writer and diarist, is celebrated for her introspective diaries and fiction that delve into the depths of self-discovery, emotions, and femininity—a fitting inspiration for a self-discovery-driven mind. Her multivolume "Diary of Anaïs Nin," spanning over 60 years, chronicles her inner life, relationships, and artistic struggles, offering a raw exploration of the self through vulnerability and creativity. In works like "Delta of Venus" and "House of Incest," Nin blends surrealism with psychological depth, exploring themes of love, identity, and the unconscious. A friend to figures like Henry Miller, Nin’s life was marked by a quest for authenticity, often navigating the tension between societal norms and her inner desires. Her famous quote, "We don’t see things as they are, we see them as we are," reflects her belief in self-awareness as a lens to truth. For you, Nin’s work offers a guide to explore your inner world—encouraging you to write, reflect, and embrace your complexities with courage and creativity.',
//       },
//       {
//         name: 'Alan Watts',
//         image: 'path/to/watts.jpg',
//         shortStory: 'Watts, a British-American philosopher, brought Eastern wisdom to the West.',
//         fullStory: 'Alan Watts (1915–1973), a British-American philosopher, writer, and speaker, popularized Eastern philosophy in the West, offering insights into self-discovery through Zen Buddhism and Taoism—a valuable perspective for a self-discovery-driven mind. In books like "The Wisdom of Insecurity" and "The Book: On the Taboo Against Knowing Who You Are," Watts challenges Western notions of the self as a separate entity, arguing that you are inseparable from the universe—a concept he calls "cosmic consciousness." His lectures, often delivered with humor and clarity, explore mindfulness, the illusion of ego, and the joy of living in the present, as in his quote, "The only way to make sense out of change is to plunge into it, move with it, and join the dance." Watts’ life, marked by a transition from Anglican priest to Zen scholar, reflects his quest for authentic understanding. For you, his teachings offer a path to dissolve the illusion of separation, embrace the flow of life, and discover your true nature as part of the cosmic whole.',
//       },
//       {
//         name: 'Toni Morrison',
//         image: 'path/to/morrison.jpg',
//         shortStory: 'Morrison, an American novelist, explored identity through storytelling.',
//         fullStory: 'Toni Morrison (1931–2019), an American novelist, editor, and professor, is celebrated for her powerful narratives that explore identity, race, and self-discovery, making her a profound guide for a self-discovery-driven mind. Her novels, including "Beloved" (1987), "The Bluest Eye," and "Song of Solomon," delve into the African-American experience, examining how history, trauma, and love shape the self. "Beloved," which won the Pulitzer Prize, explores a mother’s haunting past, urging you to confront your own ghosts to find healing. Morrison’s work as an editor at Random House also amplified Black voices, and her 1993 Nobel Prize in Literature cemented her legacy as a literary giant. Her quote, "You are your best thing," reflects her belief in the power of self-acceptance and inner exploration. For you, Morrison’s stories offer a lens to explore your own identity—encouraging you to face your past, embrace your roots, and discover the beauty of your own narrative through courage and love.',
//       },
//     ],
//   };

//   const philosophers = philosophersData[dominantPhase] || [];

//   // Toggle function for Load More/Less
//   const toggleStory = (name) => {
//     setExpandedStories((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Back function
//   const handleBack = () => {
//     navigate(-1); // Go back one page in history (to /report)
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         width: '100%',
//         maxWidth: '1300px',
//         padding: '60px 20px',
//         textAlign: 'center',
//         // background: 'linear-gradient(135deg, #1F4459, #011325)',
//         position: 'relative', // For positioning the back button
//       }}
//     >
//       {/* Back Button - Below Navbar */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleBack}
//         style={{
//           position: 'absolute',
//           top: '70px', // Below navbar (40px height + 20px padding + 10px buffer)
//           left: '20px',
//           padding: '10px 15px',
//           background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//           border: 'none',
//           borderRadius: '50px',
//           color: '#fff',
//           cursor: 'pointer',
//           fontSize: '18px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '5px',
//           zIndex: 1001, // Higher than navbar's 1000
//         }}
//       >
//         ←
//       </motion.button>

//       <h2
//         style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           marginBottom: '50px',
//           color: '#fff',
//           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//         }}
//       >
//         Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
//       </h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '30px',
//           justifyItems: 'center',
//         }}
//       >
//         {philosophers.map((philosopher, index) => (
//           <motion.div
//             key={philosopher.name}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * (index + 1) }}
//             style={{
//               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//               backdropFilter: 'blur(12px)',
//               borderRadius: '18px',
//               padding: '25px',
//               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//               border: '1px solid rgba(255, 255, 255, 0.25)',
//               textAlign: 'left',
//               width: '100%',
//               maxWidth: '350px',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//             }}
//             whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
//           >
//             <img
//               src={philosopher.image}
//               alt={philosopher.name}
//               style={{
//                 width: '100%',
//                 height: '150px',
//                 objectFit: 'cover',
//                 borderRadius: '10px',
//                 marginBottom: '15px',
//               }}
//             />
//             <h3
//               style={{
//                 fontSize: '22px',
//                 fontWeight: '600',
//                 color: '#e94560',
//                 marginBottom: '15px',
//                 textTransform: 'uppercase',
//                 letterSpacing: '1px',
//               }}
//             >
//               {philosopher.name}
//             </h3>
//             <p
//               style={{
//                 fontSize: '16px',
//                 color: '#e0e0e0',
//                 lineHeight: '1.6',
//               }}
//             >
//               {expandedStories[philosopher.name] ? philosopher.fullStory : philosopher.shortStory}
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => toggleStory(philosopher.name)}
//               style={{
//                 marginTop: '15px',
//                 padding: '10px 20px',
//                 background: '#e94560',
//                 border: 'none',
//                 borderRadius: '50px',
//                 color: '#fff',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//               }}
//             >
//               {expandedStories[philosopher.name] ? 'Show Less' : 'Load More'}
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         style={{
//           marginTop: '60px',
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '20px',
//         }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={scrollToTop}
//           style={{
//             padding: '15px 40px',
//             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//             border: 'none',
//             borderRadius: '50px',
//             color: '#fff',
//             cursor: 'pointer',
//             fontSize: '18px',
//             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
//           }}
//         >
//           Go to Up
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/')}
//           style={{
//             padding: '15px 40px',
//             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//             border: 'none',
//             borderRadius: '50px',
//             color: '#fff',
//             cursor: 'pointer',
//             fontSize: '18px',
//             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
//           }}
//         >
//           Go to Homepage
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Philosophers;


import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import jungImage from "../assets/jung.jpg";
import albertImage from "../assets/download.jpg";
import chineseImage from "../assets/chinese.jpg";
import nicoloImage from "../assets/nicolo.jpg";
import sigmundImage from "../assets/sigmund.jpg";
import frankImage from "../assets/frank.jpg";
import epixImage from "../assets/epix.jpg";
import rumiImage from "../assets/rumi.jpg";
import RalphImage from "../assets/Ralph.jpg";
import chankyaImage from "../assets/chankya.jpg";
import MiyamotoImage from "../assets/Miyamoto.jpg";
import barcaImage from "../assets/barca.jpg";
import georgeImage from "../assets/george.jpg";


function Philosophers() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dominantPhase } = location.state || {};

  // State to track which philosopher's full story is expanded
  const [expandedStories, setExpandedStories] = useState({});

  if (!dominantPhase) {
    navigate('/report');
    return null;
  }

  // Philosophers and their stories based on dominant phase
  const philosophersData = {
    mentality: [
      {
        name: 'Sun Tzu',
        image: chineseImage,
        shortStory: 'Sun Tzu, a Chinese military strategist, wrote "The Art of War," a timeless guide on strategy.',
        fullStory: 'Sun Tzu, a legendary Chinese military strategist and philosopher from the Eastern Zhou period (circa 544–496 BCE), authored "The Art of War," a seminal text that has transcended its origins to become a cornerstone of strategic thinking across military, business, and personal development spheres. This ancient masterpiece, composed of 13 chapters, offers profound insights into warfare, emphasizing mental acuity, adaptability, and the art of outmaneuvering opponents without necessarily engaging in direct conflict. Sun Tzu’s teachings assert that victory lies not in brute force but in understanding the terrain, exploiting the enemy’s weaknesses, and maintaining psychological dominance—principles that resonate deeply with a mind honed for calculated moves. His famous maxim, "The supreme art of war is to subdue the enemy without fighting," underscores a philosophy of efficiency and foresight, urging leaders to win through strategy rather than bloodshed. Beyond the battlefield, his ideas influence modern leadership, negotiation tactics, and even sports psychology, showcasing his enduring relevance. Sun Tzu’s life remains shrouded in mystery, with some historians debating his existence as a single individual versus a collective pseudonym, yet his legacy endures through translations that have reached global audiences. For someone with a dominant mentality phase, his work serves as a blueprint to sharpen your intellect, anticipate challenges, and master the subtle dance of power—perfect for a mind that thrives on strategic mastery and intellectual precision.',
      },
      {
        name: 'Niccolò Machiavelli',
        image: nicoloImage,
        shortStory: 'Machiavelli, an Italian philosopher, crafted "The Prince," a manual on power and cunning.',
        fullStory: 'Niccolò Machiavelli, an Italian diplomat, philosopher, and writer (1469–1527), is best known for his political treatise "The Prince," a work that has sparked centuries of debate for its unapologetic exploration of power, cunning, and governance. Born in Florence during the Renaissance, Machiavelli witnessed the turbulent politics of city-states, which shaped his pragmatic and often ruthless worldview. "The Prince," published posthumously in 1532, advises rulers on maintaining authority through strategic manipulation, calculated cruelty when necessary, and the appearance of virtue rather than genuine morality—ideas that align perfectly with a mentality-driven mindset. He famously argued that it is better for a leader to be feared than loved if one cannot be both, a concept rooted in his observation of human nature’s fickleness. His other notable work, "Discourses on Livy," reveals a deeper appreciation for republican governance, suggesting a duality in his thought that challenges simplistic labels like "Machiavellian." Exiled and tortured for his political affiliations, Machiavelli’s life was a testament to resilience, turning personal adversity into intellectual legacy. For those with a dominant mentality phase, his teachings offer a toolkit to navigate complex social dynamics, wield influence with precision, and transform chaos into order—encouraging you to sharpen your mind like a blade in a world where power is the ultimate currency.',
      },
      {
        name: 'Chanakya',
        image: chankyaImage,
        shortStory: 'Chanakya, an Indian strategist, wrote "Arthashastra," a guide on statecraft and strategy.',
        fullStory: 'Chanakya (c. 350–283 BCE), also known as Kautilya or Vishnugupta, was an ancient Indian philosopher, economist, and strategist who authored the "Arthashastra," a comprehensive treatise on statecraft, economics, and military strategy. A professor at Takshashila University and later the chief advisor to Emperor Chandragupta Maurya, Chanakya played a pivotal role in founding the Maurya Empire by overthrowing the Nanda dynasty. His "Arthashastra" covers governance, diplomacy, espionage, and warfare, emphasizing the importance of strategic alliances, intelligence networks, and economic stability to maintain power—ideas that resonate with a mentality-driven mind. Known for his pragmatic and sometimes ruthless approach, Chanakya’s maxims like "Even if a snake is not poisonous, it should pretend to be venomous" highlight his focus on perception and cunning. His life, marked by a vow to unify India against foreign threats, reflects his dedication to strategic mastery. For you, Chanakya’s teachings offer a playbook to navigate challenges with foresight, build unshakeable systems, and lead with calculated precision in any arena.',
      },
      {
        name: 'Miyamoto Musashi',
        image: MiyamotoImage,
        shortStory: 'Musashi, a Japanese samurai, wrote "The Book of Five Rings," a guide to strategy and mastery.',
        fullStory: 'Miyamoto Musashi (1584–1645), a legendary Japanese swordsman, philosopher, and strategist, is renowned for his undefeated record in duels and his seminal work "The Book of Five Rings," a treatise on strategy, tactics, and philosophy. A master of the two-sword fighting style (Niten Ichi-ryu), Musashi won over 60 duels, often against multiple opponents, cementing his reputation as Japan’s greatest samurai. Written in 1645 near the end of his life, "The Book of Five Rings" outlines his principles of strategy across five elements—earth, water, fire, wind, and void—emphasizing adaptability, timing, and psychological dominance, making it a perfect fit for a mentality-driven individual. Musashi’s philosophy extends beyond combat, advocating for mental clarity, discipline, and a relentless pursuit of self-improvement, as seen in his quote, "Do nothing which is of no use." His life, marked by a solitary quest for mastery and a rejection of societal norms, inspires you to sharpen your focus, outthink your challenges, and achieve excellence through strategic precision and inner strength.',
      },
      {
        name: 'Hannibal Barca',
        image: barcaImage,
        shortStory: 'Hannibal, a Carthaginian general, outsmarted Rome with daring military strategies.',
        fullStory: 'Hannibal Barca (247–183 BCE), a Carthaginian general, is celebrated as one of history’s greatest military strategists for his audacious campaigns against Rome during the Second Punic War (218–201 BCE). Born in Carthage (modern-day Tunisia), Hannibal swore an oath as a child to oppose Rome, a vow he fulfilled by leading an army—complete with war elephants—across the Alps to invade Italy, a feat considered impossible. His victories, like the Battle of Cannae (216 BCE), where he encircled and annihilated a larger Roman force, showcased his genius for tactics, deception, and psychological warfare, aligning perfectly with a mentality-dominant mindset. Despite never capturing Rome, Hannibal’s strategies forced the Romans to adapt, ultimately shaping their military evolution. His life, marked by exile and betrayal after Carthage’s defeat, reflects a man who thrived on outthinking his enemies. For you, Hannibal’s legacy offers lessons in boldness, strategic innovation, and resilience—teaching you to turn obstacles into opportunities and dominate through intellect and daring.',
      },
      {
        name: 'George S. Patton',
        image:  georgeImage,
        shortStory: 'Patton, an American general, led with bold strategies in World War II.',
        fullStory: 'George S. Patton (1885–1945), an American general, was a pivotal figure in World War II, known for his aggressive tactics, rapid maneuvers, and unyielding leadership. Nicknamed "Old Blood and Guts," Patton commanded the U.S. Third Army, leading lightning-fast campaigns across North Africa, Sicily, and Western Europe, including the Battle of the Bulge (1944), where his forces relieved the besieged town of Bastogne. A master of armored warfare, Patton emphasized speed, surprise, and psychological intimidation, often outpacing his own supply lines to keep the enemy off balance—traits that resonate with a mentality-driven mind. His famous quote, "A good plan violently executed now is better than a perfect plan executed next week," reflects his belief in decisive action over hesitation. Despite controversies, including his outspoken nature and harsh discipline, Patton’s strategic brilliance earned him respect as a commander who could turn the tide of war. For you, Patton’s life teaches the power of bold execution, mental toughness, and relentless focus—urging you to seize opportunities with unshakeable confidence and strategic clarity.',
      },
      {
        name: 'Catherine the Great',
        image: 'path/to/catherine.jpg',
        shortStory: 'Catherine, a Russian empress, ruled with strategic vision and cunning.',
        fullStory: 'Catherine the Great (1729–1796), Empress of Russia, transformed her adopted nation into a global power through strategic governance, diplomatic maneuvering, and cultural reform. Born as Sophie of Prussia, she seized the throne in 1762 through a coup against her husband, Peter III, showcasing her political acumen. Catherine expanded Russia’s borders, modernized its administration, and promoted the arts, earning the title "Great" by blending Enlightenment ideals with pragmatic rule—perfect for a mentality-driven individual. Her ability to navigate alliances, suppress rebellions like Pugachev’s Rebellion, and maintain power in a male-dominated court highlights her mastery of strategy and influence. She famously said, "I shall be an autocrat: that’s my trade. And the good Lord will forgive me: that’s his." Her reign, though not without flaws like serfdom’s persistence, left a legacy of progress and power. For you, Catherine’s life offers a masterclass in strategic leadership, calculated risks, and wielding authority with intellect—encouraging you to rule your own life with the same cunning and vision.',
      },
      {
        name: 'John von Neumann',
        image: 'path/to/vonneumann.jpg',
        shortStory: 'Von Neumann, a mathematician, pioneered game theory for strategic thinking.',
        fullStory: 'John von Neumann (1903–1957), a Hungarian-American mathematician, physicist, and polymath, is celebrated for his groundbreaking contributions to game theory, a mathematical framework for strategic decision-making that aligns perfectly with a mentality-driven mind. Born in Budapest, von Neumann’s prodigious intellect led him to contribute to quantum mechanics, computer science, and economics, but his 1944 book "Theory of Games and Economic Behavior," co-authored with Oskar Morgenstern, revolutionized how we understand conflict and cooperation. Game theory analyzes competitive scenarios—like negotiations, wars, or markets—offering strategies to maximize outcomes, such as the minimax theorem, which balances risk and reward. His work laid the foundation for modern economics, AI, and military strategy, including Cold War deterrence theories like mutually assured destruction. A key figure in the Manhattan Project, von Neumann’s life was marked by a relentless pursuit of logic and innovation, though his health declined early due to cancer. For you, his teachings provide a scientific lens to approach life’s challenges—teaching you to anticipate moves, calculate risks, and win through intellectual precision.',
      },
      {
        name: 'Cleopatra',
        image: 'path/to/cleopatra.jpg',
        shortStory: 'Cleopatra, an Egyptian queen, used strategy to protect her kingdom.',
        fullStory: 'Cleopatra VII (69–30 BCE), the last active ruler of Ptolemaic Egypt, is renowned for her intelligence, charisma, and strategic brilliance in navigating the treacherous politics of the ancient world. Fluent in multiple languages and educated in mathematics, philosophy, and astronomy, Cleopatra secured Egypt’s independence by forging alliances with powerful Romans—first Julius Caesar, then Mark Antony—using both diplomacy and seduction as tools of statecraft, making her a fit for a mentality-driven mind. Her famous arrival in Rome, rolled in a carpet to meet Caesar, was a calculated move to secure his support against her brother Ptolemy XIII. Despite her efforts, Rome’s rise under Octavian (later Augustus) led to her defeat at the Battle of Actium and eventual suicide, ending Egypt’s independence. Cleopatra’s legacy, often romanticized, underscores her ability to wield power in a male-dominated world through intellect and strategy. For you, her life offers lessons in adaptability, charm, and strategic alliances—teaching you to navigate life’s power dynamics with cunning and grace.',
      },
      {
        name: 'Otto von Bismarck',
        image: 'path/to/bismarck.jpg',
        shortStory: 'Bismarck, a Prussian statesman, unified Germany with strategic diplomacy.',
        fullStory: 'Otto von Bismarck (1815–1898), the Iron Chancellor of Prussia, was the mastermind behind the unification of Germany, transforming a fragmented collection of states into a powerful empire through strategic diplomacy and calculated warfare. Appointed Chancellor in 1862, Bismarck orchestrated three short wars—against Denmark (1864), Austria (1866), and France (1870–71)—to consolidate power, using realpolitik, a pragmatic approach prioritizing power over ideals, which suits a mentality-driven mindset. His manipulation of alliances, like isolating France through the Ems Dispatch, showcased his genius for psychological warfare and foresight. After unification in 1871, Bismarck’s foreign policy focused on maintaining stability through a web of treaties, earning him the title "honest broker" at the Congress of Berlin (1878). His domestic policies, like introducing welfare reforms, balanced authority with progress. For you, Bismarck’s life is a lesson in strategic orchestration—teaching you to build alliances, anticipate conflicts, and shape outcomes with a blend of intellect and pragmatism.',
      },
    ],
    philosophy: [
      {
        name: 'Friedrich Nietzsche',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
        shortStory: 'Nietzsche, a German thinker, challenged conventional morality with his bold ideas.',
        fullStory: 'Friedrich Nietzsche (1844–1900), a German philosopher, cultural critic, and poet, revolutionized Western thought with his bold rejection of traditional morality and his call for individuals to create their own values. His seminal works, including "Thus Spoke Zarathustra," "Beyond Good and Evil," and "The Birth of Tragedy," introduce concepts like the "Übermensch" (Overman), the "will to power," and the "death of God," challenging the foundations of Christian ethics and societal norms. Nietzsche’s philosophy emerged from a life marked by intellectual brilliance and personal struggle—health issues forced him to abandon his academic career, leading to a solitary existence where he penned his most provocative ideas. The "Übermensch" represents an ideal of self-overcoming, urging you to rise above mediocrity and forge meaning in a world stripped of divine absolutes—a perfect fit for a philosophy-dominant mind. His critique of nihilism and embrace of eternal recurrence (the idea that life repeats infinitely) push you to live authentically, embracing life’s chaos with courage. Despite his descent into mental collapse in 1889, Nietzsche’s influence spans existentialism, psychology, and literature, inspiring figures like Sartre, Freud, and modern thinkers. For you, his teachings are a call to break free from convention, embrace your inner strength, and craft a life of profound purpose amidst the void.',
      },
      {
        name: 'Albert Camus',
        image: albertImage,
        shortStory: 'Camus, a French-Algerian writer, explored the absurd in his philosophical works.',
        fullStory: 'Albert Camus (1913–1960), a French-Algerian philosopher, author, and journalist, is a towering figure in existentialism, renowned for his exploration of the absurd—the conflict between humanity’s search for meaning and the universe’s indifference. Born in poverty in French Algeria, Camus overcame hardship to produce works like "The Stranger," "The Myth of Sisyphus," and "The Plague," blending literary artistry with philosophical depth. In "The Myth of Sisyphus," he posits that life’s lack of inherent meaning is not a cause for despair but a challenge to be met with defiance and joy, advocating for living fully despite the absurd—a philosophy that resonates with a questioning, philosophy-driven soul. His concept of the "absurd hero" encourages you to embrace rebellion against futility, finding freedom in accepting life’s randomness. As a resistance fighter during World War II and a Nobel Prize winner in 1957, Camus’s life reflected his ideals of moral integrity and human solidarity, though he rejected being labeled an existentialist, preferring to be seen as an absurdist. His untimely death in a car accident cut short a prolific career, but his legacy endures, influencing modern ethics, literature, and personal resilience. For you, Camus offers a path to confront life’s void with boldness, turning existential uncertainty into a source of strength and authenticity.',
      },
      {
        name: 'Socrates',
        image: 'path/to/socrates.jpg',
        shortStory: 'Socrates, a Greek philosopher, questioned everything to uncover truth.',
        fullStory: 'Socrates (c. 470–399 BCE), an ancient Greek philosopher, is often called the father of Western philosophy for his relentless pursuit of truth through questioning. Born in Athens, he developed the Socratic Method—a form of dialogue involving probing questions to expose contradictions in one’s beliefs and uncover deeper truths, perfectly suited for a philosophy-driven mind. Unlike his contemporaries, Socrates never wrote anything; his teachings were recorded by his student Plato in works like "Apology" and "Phaedo." He famously declared, "The unexamined life is not worth living," emphasizing self-inquiry and ethical living over material gain. His method led to his trial and execution in 399 BCE for "corrupting the youth" and "impiety," yet he chose death over abandoning his principles, cementing his legacy as a martyr for truth. Socrates’ influence shaped Plato, Aristotle, and Western thought, inspiring critical thinking and moral philosophy. For you, Socrates offers a challenge to question everything—your beliefs, your purpose, and your existence—pushing you to seek wisdom through relentless inquiry.',
      },
      {
        name: 'Jean-Paul Sartre',
        image: 'path/to/sartre.jpg',
        shortStory: 'Sartre, a French existentialist, explored freedom and responsibility.',
        fullStory: 'Jean-Paul Sartre (1905–1980), a French philosopher, novelist, and playwright, was a leading figure in existentialism, emphasizing human freedom and the weight of responsibility. His seminal works, including "Being and Nothingness," "Nausea," and the play "No Exit," argue that existence precedes essence—meaning you’re born without a predefined purpose and must create your own through choices. Sartre’s concept of "bad faith" warns against denying your freedom by conforming to societal roles, a powerful idea for a philosophy-driven mind. His famous line, "Man is condemned to be free," underscores the burden of crafting meaning in a godless universe, a theme he explored as a resistance fighter during World War II and a public intellectual advocating for social justice. Sartre’s rejection of the 1964 Nobel Prize in Literature reflects his disdain for institutional honors, prioritizing authenticity. For you, Sartre’s philosophy is a call to embrace your freedom, take ownership of your choices, and live authentically—no excuses, just pure responsibility.',
      },
      {
        name: 'Immanuel Kant',
        image: 'path/to/kant.jpg',
        shortStory: 'Kant, a German philosopher, redefined ethics with his categorical imperative.',
        fullStory: 'Immanuel Kant (1724–1804), a German philosopher, revolutionized Western thought with his rigorous exploration of metaphysics, ethics, and epistemology. Born in Königsberg (now Kaliningrad, Russia), Kant’s "Critique of Pure Reason" (1781) examines how we perceive reality, arguing that our understanding of the world is shaped by the mind’s inherent structures—a profound idea for a philosophy-driven soul. His ethical framework, outlined in "Groundwork of the Metaphysics of Morals," introduces the categorical imperative: act only according to rules you’d want to be universal, emphasizing duty over desire. Kant’s life was famously disciplined—he never left his hometown, and locals set their clocks by his daily walks—yet his ideas were revolutionary, bridging rationalism and empiricism. His influence spans modern philosophy, from ethics to cognitive science, challenging you to think beyond appearances and act with universal integrity. For you, Kant offers a lens to question reality itself, align your actions with timeless principles, and seek truth through reason.',
      },
      {
        name: 'Arthur Schopenhauer',
        image: 'path/to/schopenhauer.jpg',
        shortStory: 'Schopenhauer, a German thinker, explored the nature of will and suffering.',
        fullStory: 'Arthur Schopenhauer (1788–1860), a German philosopher, is best known for his pessimistic yet profound philosophy centered on the concept of the "will" as the driving force of existence. In his magnum opus, "The World as Will and Representation," Schopenhauer argues that the world we perceive is a representation of an insatiable, blind will—a metaphysical force that fuels desire, suffering, and endless striving, resonating with a philosophy-driven mind. Influenced by Kant and Eastern thought like Buddhism, he saw life as a cycle of unfulfilled desires, advocating for asceticism, art, and compassion as paths to transcend suffering. His ideas, initially overlooked, later influenced Nietzsche, Wagner, and Freud, bridging Western and Eastern philosophy. Schopenhauer’s life was marked by isolation and a disdain for academic norms, yet his clarity of thought endures. For you, his work offers a stark look at life’s inherent struggles, encouraging you to find meaning through creativity, empathy, and a deeper understanding of your own desires.',
      },
      {
        name: 'Simone de Beauvoir',
        image: 'path/to/beauvoir.jpg',
        shortStory: 'Beauvoir, a French existentialist, explored freedom and gender in her works.',
        fullStory: 'Simone de Beauvoir (1908–1986), a French philosopher, writer, and feminist, is a key figure in existentialism and modern feminism, best known for her groundbreaking work "The Second Sex" (1949). A lifelong partner of Jean-Paul Sartre, Beauvoir argued that "one is not born, but rather becomes, a woman," exposing how societal structures oppress women and limit their freedom—a profound insight for a philosophy-driven mind. Her existentialist philosophy, seen in works like "The Ethics of Ambiguity," emphasizes personal freedom, responsibility, and the rejection of imposed roles, encouraging authentic living in an ambiguous world. An activist for women’s rights and social justice, Beauvoir’s life reflected her ideas—she lived unconventionally, rejecting marriage and embracing intellectual partnerships. Her influence spans feminism, ethics, and literature, inspiring generations to question systemic norms. For you, Beauvoir’s teachings are a call to break free from societal shackles, define your own essence, and live with unapologetic freedom.',
      },
      {
        name: 'Lao Tzu',
        image: 'path/to/laotzu.jpg',
        shortStory: 'Lao Tzu, a Chinese philosopher, founded Taoism with a focus on harmony.',
        fullStory: 'Lao Tzu (c. 6th century BCE), an ancient Chinese philosopher and the founder of Taoism, is traditionally credited with authoring the "Tao Te Ching," a foundational text of Taoist thought that explores the nature of existence, harmony, and the "Tao" (the Way)—an ineffable force guiding all things, perfect for a philosophy-driven soul. Lao Tzu’s teachings advocate for simplicity, humility, and living in alignment with nature’s flow, famously stating, "The journey of a thousand miles begins with a single step." His philosophy emphasizes wu wei (non-action), not as passivity but as effortless action in harmony with the universe, encouraging you to let go of ego and embrace spontaneity. Lao Tzu’s life is shrouded in legend—he reportedly left civilization on a water buffalo after writing the "Tao Te Ching" at a border guard’s request. His ideas have influenced Chinese thought, from Confucianism to Zen Buddhism, and resonate globally in mindfulness practices. For you, Lao Tzu offers a path to find meaning through simplicity, balance, and a deeper connection to the natural order.',
      },
      {
        name: 'Baruch Spinoza',
        image: 'path/to/spinoza.jpg',
        shortStory: 'Spinoza, a Dutch philosopher, explored rationalism and the nature of God.',
        fullStory: 'Baruch Spinoza (1632–1677), a Dutch philosopher of Sephardic Jewish descent, is a key figure in the Enlightenment, known for his rationalist philosophy and pantheistic view of God as synonymous with nature. In his masterpiece "Ethics," Spinoza uses a geometric method to argue that everything is part of a single, infinite substance—God or Nature—challenging traditional religious views and resonating with a philosophy-driven mind. Excommunicated from the Jewish community at 23 for his radical ideas, Spinoza lived a modest life as a lens grinder, dedicating himself to philosophy. His concepts of intellectual freedom, determinism, and the idea that emotions can be mastered through understanding (as in his theory of affects) offer a framework for rational living. Spinoza’s influence spans modern philosophy, from Hegel to Einstein, who admired his ideas. For you, Spinoza’s work is a call to see the interconnectedness of all things, approach life with reason, and find peace through intellectual clarity.',
      },
      {
        name: 'Søren Kierkegaard',
        image: 'path/to/kierkegaard.jpg',
        shortStory: 'Kierkegaard, a Danish philosopher, explored faith and individuality.',
        fullStory: 'Søren Kierkegaard (1813–1855), a Danish philosopher and theologian, is often called the father of existentialism for his focus on individual existence, faith, and the "leap of faith." In works like "Fear and Trembling," "Either/Or," and "The Sickness Unto Death," Kierkegaard explores the tension between freedom and despair, urging you to confront life’s uncertainties through personal choice and commitment—a fitting philosophy for a questioning mind. His concept of the "knight of faith," who embraces the absurd through belief, challenges you to find meaning beyond reason. Kierkegaard’s life, marked by a broken engagement and public ridicule, reflects his deep sensitivity and commitment to authenticity, as he wrote, "Life can only be understood backwards; but it must be lived forwards." His influence on existentialism, theology, and psychology (notably impacting Heidegger and Sartre) endures. For you, Kierkegaard offers a path to embrace your individuality, face life’s paradoxes, and find purpose through a deeply personal leap into the unknown.',
      },
    ],
    psychology: [
      {
        name: 'Carl Jung',
        image: jungImage,
        shortStory: 'Jung, a Swiss psychiatrist, delved into the unconscious with concepts like archetypes.',
        fullStory: 'Carl Gustav Jung (1875–1961), a Swiss psychiatrist and psychoanalyst, revolutionized modern psychology with his pioneering theories on the unconscious mind, archetypes, and the process of individuation. Initially a close collaborator of Sigmund Freud, Jung’s eventual break with him in 1913—due to differing views on the unconscious—marked the birth of Analytical Psychology. He proposed a dual-layered unconscious: the Personal Unconscious, housing repressed memories and individual experiences, and the Collective Unconscious, a universal reservoir of archetypes—innate symbols like the Persona (social mask), Shadow (hidden self), Anima/Animus (contrasexual soul), and Self (wholeness). Individuation, Jung’s lifelong journey toward integrating these elements, promises psychological balance and self-realization, making it ideal for a psychology-dominant mind. His concept of the Shadow, the repressed darker aspects of personality, urges you to confront fears and insecurities for growth, encapsulated in his maxim, “Until you make the unconscious conscious, it will direct your life and you will call it fate.” Jung’s innovations extend to introversion/extraversion (later shaping the MBTI), dream analysis, and synchronicity (meaningful coincidences), with key works like "Psychological Types," "Modern Man in Search of a Soul," and "The Archetypes and the Collective Unconscious." His influence reaches beyond psychology into mythology, spirituality, and quantum physics, encouraging you to explore your mind’s depths, embrace your shadow, and achieve wholeness. Jung’s life, filled with mystical experiences and global travels, reflects a man who didn’t just study the psyche—he charted a path to self-mastery.',
      },
      {
        name: 'Sigmund Freud',
        image: sigmundImage,
        shortStory: 'Freud, the father of psychoanalysis, uncovered the mind’s buried desires.',
        fullStory: 'Sigmund Freud (1856–1939), an Austrian neurologist turned revolutionary thinker, founded psychoanalysis, a transformative approach to understanding the human mind that reshaped psychology, psychiatry, and culture. Born in Moravia (now Czech Republic), Freud’s early medical career evolved into a lifelong quest to unravel the unconscious, driven by his observation that much of human behavior stems from hidden motives and repressed desires. His structural model divides the mind into the Id (primitive instincts), Ego (rational mediator), and Superego (moral conscience), a framework that underpins his theory of psychosexual development—spanning oral, anal, phallic, latency, and genital stages—where childhood experiences mold personality. Freud’s exploration of defense mechanisms (repression, denial, projection) explains how the mind shields itself from anxiety, while his groundbreaking "The Interpretation of Dreams" (1899) posits dreams as windows to unconscious conflicts and desires. His controversial Oedipus complex, suggesting unconscious desires for the opposite-sex parent, and his dual-drive theory (Eros for life, Thanatos for death) add layers to his complex legacy. Despite facing criticism and exile from Nazi-occupied Vienna, Freud’s influence endures through techniques like free association and transference, impacting literature, art, and modern therapy. For a psychology-dominant individual, Freud’s work is a call to delve into the mind’s hidden depths, confront buried emotions, and unlock the key to self-awareness, as he famously noted, “Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.”',
      },
      {
        name: 'Erik Erikson',
        image: 'path/to/erikson.jpg',
        shortStory: 'Erikson, a German-American psychologist, developed stages of psychosocial development.',
        fullStory: 'Erik Erikson (1902–1994), a German-American developmental psychologist and psychoanalyst, is best known for his theory of psychosocial development, which outlines eight stages of life, each marked by a conflict that shapes personality—a perfect framework for a psychology-driven mind. Building on Freud’s psychosexual stages, Erikson emphasized social and cultural influences, introducing stages like trust vs. mistrust (infancy), identity vs. role confusion (adolescence), and integrity vs. despair (late adulthood). His concept of the "identity crisis," particularly in adolescence, became a cornerstone of developmental psychology, highlighting the struggle to define oneself amidst societal pressures. Born in Frankfurt and later immigrating to the U.S., Erikson’s own search for identity—having never known his biological father—deeply informed his work. His books, like "Childhood and Society" (1950), explore how relationships and environment shape the self. For you, Erikson’s theory offers a roadmap to understand your emotional growth, navigate life’s conflicts, and build a cohesive sense of self through connection and reflection.',
      },
      {
        name: 'Viktor Frankl',
        image: 'path/to/frankl.jpg',
        shortStory: 'Frankl, an Austrian psychiatrist, found meaning in suffering through logotherapy.',
        fullStory: 'Viktor Frankl (1905–1997), an Austrian psychiatrist and Holocaust survivor, developed logotherapy, a therapeutic approach centered on finding meaning in life, even amidst profound suffering—a fitting philosophy for a psychology-driven mind. In his seminal book "Man’s Search for Meaning" (1946), Frankl recounts his experiences in Nazi concentration camps, where he observed that those who found purpose were more likely to survive. Logotherapy, often called the "third Viennese school of psychotherapy" after Freud and Adler, posits that the primary human drive is not pleasure or power but meaning, achievable through creating, experiencing, or adopting an attitude toward suffering. Frankl’s concept of the "existential vacuum"—a sense of emptiness from lack of purpose—resonates in modern psychology, offering tools to combat despair. His life, marked by loss and resilience, reflects his belief: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances." For you, Frankl’s work is a guide to find meaning in your struggles, channel your emotions, and live with purpose.',
      },
      {
        name: 'Abraham Maslow',
        image: 'path/to/maslow.jpg',
        shortStory: 'Maslow, an American psychologist, created the hierarchy of needs.',
        fullStory: 'Abraham Maslow (1908–1970), an American psychologist, is renowned for his hierarchy of needs, a theory of human motivation that maps out five levels of needs driving behavior—physiological, safety, love/belonging, esteem, and self-actualization at the top—a foundational idea for a psychology-driven mind. Introduced in his 1943 paper "A Theory of Human Motivation," Maslow’s pyramid suggests that lower needs (like food and safety) must be met before higher ones (like self-actualization) can be pursued. Later in life, he expanded this to include self-transcendence, emphasizing the drive to connect with something greater. A key figure in humanistic psychology, Maslow focused on human potential and growth, contrasting with Freud’s emphasis on pathology, as seen in his book "Motivation and Personality" (1954). His work influenced education, management, and therapy, encouraging a holistic view of the self. For you, Maslow’s hierarchy offers a lens to understand your emotional needs, prioritize your growth, and strive for your highest potential through self-awareness and fulfillment.',
      },
      {
        name: 'Alfred Adler',
        image: 'path/to/adler.jpg',
        shortStory: 'Adler, an Austrian psychologist, explored inferiority and social connection.',
        fullStory: 'Alfred Adler (1870–1937), an Austrian medical doctor and psychotherapist, founded Individual Psychology, emphasizing the role of social relationships and the drive to overcome inferiority in shaping personality—a key insight for a psychology-driven mind. Initially a collaborator of Freud, Adler broke away in 1911, rejecting Freud’s focus on sexual drives and instead proposing that humans are motivated by a need for belonging and significance, as seen in his concept of the "inferiority complex." Adler believed that feelings of inferiority, often rooted in childhood, drive individuals to strive for superiority, either constructively (through achievement) or destructively (through overcompensation). His works, like "Understanding Human Nature," highlight the importance of community feeling ("Gemeinschaftsgefühl") for mental health. Adler’s influence extends to education, parenting, and therapy, notably through concepts like birth order’s impact on personality. For you, Adler’s teachings offer a path to understand your emotional drives, heal from feelings of inadequacy, and build meaningful connections that foster growth.',
      },
      {
        name: 'Karen Horney',
        image: 'path/to/horney.jpg',
        shortStory: 'Horney, a German psychoanalyst, focused on neurosis and self-realization.',
        fullStory: 'Karen Horney (1885–1952), a German psychoanalyst, made significant contributions to psychology by challenging Freudian orthodoxy and emphasizing cultural and social factors in personality development—a fitting perspective for a psychology-driven mind. In her book "Neurosis and Human Growth" (1950), Horney argued that neurosis stems from disturbed relationships, particularly in childhood, leading to "basic anxiety" and coping strategies like moving toward, against, or away from others. She rejected Freud’s penis envy, instead proposing "womb envy" and focusing on how societal pressures, like gender roles, shape the psyche. Horney’s concept of the "real self" versus the "ideal self" highlights the conflict between authentic growth and the neurotic pursuit of perfection, advocating for self-realization through self-awareness. A pioneer for women in psychology, Horney’s work influenced humanistic psychology and feminist theory. For you, her insights offer a path to understand your emotional patterns, break free from societal expectations, and cultivate a healthier, more authentic self.',
      },
      {
        name: 'John Bowlby',
        image: 'path/to/bowlby.jpg',
        shortStory: 'Bowlby, a British psychologist, developed attachment theory.',
        fullStory: 'John Bowlby (1907–1990), a British psychologist and psychiatrist, is the founder of attachment theory, a groundbreaking framework that explains how early relationships shape emotional development—a crucial concept for a psychology-driven mind. In his trilogy "Attachment and Loss" (1969–1980), Bowlby argued that children are biologically wired to form attachments with caregivers for survival, and the quality of these bonds—secure, anxious, or avoidant—profoundly impacts personality and relationships into adulthood. His work with orphaned children during World War II highlighted the devastating effects of maternal deprivation, influencing child welfare policies worldwide. Bowlby’s collaboration with Mary Ainsworth, who developed the "Strange Situation" experiment, further validated his theory by identifying attachment styles. His famous quote, "What cannot be communicated to the mother cannot be communicated to the self," underscores the link between attachment and self-understanding. For you, Bowlby’s theory offers a lens to explore your relational patterns, heal from past wounds, and build secure, meaningful connections.',
      },
      {
        name: 'B.F. Skinner',
        image: 'path/to/skinner.jpg',
        shortStory: 'Skinner, an American psychologist, studied behavior through operant conditioning.',
        fullStory: 'B.F. Skinner (1904–1990), an American psychologist and behaviorist, revolutionized psychology with his theory of operant conditioning, which explores how behavior is shaped by consequences—a practical insight for a psychology-driven mind. In his book "Beyond Freedom and Dignity" (1971), Skinner argued that behavior is influenced by reinforcement (positive or negative) and punishment, not free will, introducing concepts like the "Skinner box" to study learning in animals. His experiments showed that rewarding desired behaviors increases their frequency, a principle applied in education, parenting, and therapy (e.g., behavior modification programs). A leading figure in behaviorism, Skinner’s work contrasted with Freud’s focus on the unconscious, emphasizing observable actions over internal states. Despite criticism for downplaying emotions, his ideas, like schedules of reinforcement, remain influential in psychology and technology (e.g., gamification). For you, Skinner’s work offers a practical tool to understand your habits, reshape your behaviors, and create positive change through intentional reinforcement.',
      },
      {
        name: 'Daniel Goleman',
        image: 'path/to/goleman.jpg',
        shortStory: 'Goleman, an American psychologist, popularized emotional intelligence.',
        fullStory: 'Daniel Goleman (born 1946), an American psychologist and science journalist, brought the concept of emotional intelligence (EI) to the forefront with his bestselling book "Emotional Intelligence" (1995), a transformative idea for a psychology-driven mind. Building on earlier research, Goleman outlined five components of EI: self-awareness, self-regulation, motivation, empathy, and social skills, arguing that emotional literacy often matters more than IQ for success in life and relationships. His work, grounded in neuroscience, showed how the brain’s emotional centers (like the amygdala) interact with rational ones, influencing decision-making and behavior. Goleman’s later books, like "Social Intelligence," explore how relationships shape our minds, impacting education, leadership, and mental health practices. A former journalist for The New York Times, Goleman’s ability to bridge science and public understanding made EI a global phenomenon. For you, his teachings offer a framework to master your emotions, deepen your empathy, and navigate life’s challenges with emotional clarity and connection.',
      },
    ],
    fear: [
      {
        name: 'Frank Herbert',
        image: frankImage,
        shortStory: 'Herbert, an American author, penned "Dune," teaching how to confront fear.',
        fullStory: 'Frank Herbert (1920–1986), an American science fiction writer, is celebrated for his monumental novel "Dune," a sprawling epic that blends ecological science, political intrigue, and profound psychological insights, particularly around confronting fear. Published in 1965, "Dune" follows Paul Atreides on the desert planet Arrakis, where the iconic Litany Against Fear—“I must not fear. Fear is the mind-killer…”—becomes a mantra for mastering terror, resonating deeply with a fear-dominant mind. Herbert’s narrative weaves complex themes: the interplay of power and religion, the stewardship of natural resources, and the human capacity to overcome primal instincts through discipline. Drawing from his journalistic background and fascination with ecology, Herbert spent years researching deserts and indigenous cultures, infusing "Dune" with authenticity and depth. The book’s success spawned a franchise, including sequels and adaptations, cementing his legacy as a visionary. For you, Herbert’s work offers a transformative lesson: fear, when faced with courage and preparation, becomes a catalyst for strength and clarity, teaching you to harness your inner resolve amidst life’s harshest trials, much like the Fremen warriors of Arrakis who turn adversity into triumph.',
      },
      {
        name: 'Epictetus',
        image: epixImage,
        shortStory: 'Epictetus, a Stoic philosopher, taught resilience in the face of fear.',
        fullStory: 'Epictetus (c. 50–135 CE), a Greek Stoic philosopher born into slavery, emerged as a beacon of resilience, teaching that inner freedom and mastery over fear are achievable regardless of external circumstances. After gaining freedom, he founded a philosophical school in Nicopolis, where his teachings, recorded by his student Arrian in the "Discourses" and the handbook "Enchiridion," emphasize controlling what you can—your thoughts and reactions—while accepting what you cannot. His philosophy, rooted in Stoicism, asserts that fear arises from misjudgment, and by aligning your will with nature’s course, you can achieve tranquility—a perfect guide for a fear-dominant soul. Epictetus’s life, marked by hardship including physical disability from a cruel master, exemplifies his doctrine: “It’s not what happens to you, but how you react to it that matters.” His ideas influenced Roman emperors like Marcus Aurelius and modern thinkers alike, offering a practical framework to navigate life’s uncertainties. For you, Epictetus provides a roadmap to conquer fear by focusing on your unshakable inner core, transforming adversity into a source of strength and wisdom through disciplined self-mastery.',
      },
      {
        name: 'Marcus Aurelius',
        image: 'path/to/aurelius.jpg',
        shortStory: 'Aurelius, a Roman emperor, faced fear with Stoic wisdom.',
        fullStory: 'Marcus Aurelius (121–180 CE), a Roman emperor and Stoic philosopher, ruled during a time of plague, war, and internal strife, yet his personal writings, compiled as "Meditations," reveal a man who confronted fear with profound inner strength—a perfect guide for a fear-dominant mind. Written during military campaigns, "Meditations" is a collection of reflections on Stoic principles, emphasizing rationality, self-discipline, and acceptance of what cannot be changed. Aurelius famously wrote, "You have power over your mind—not outside events. Realize this, and you will find strength," a mantra for mastering fear by focusing on what’s within your control. Despite his imperial power, he lived modestly, embodying his philosophy of humility and duty. His reign, marked by the Antonine Plague and Germanic invasions, tested his resilience, yet he remained a philosopher-king, admired by history. For you, Aurelius offers a stoic shield against fear—teaching you to face life’s storms with calm, rational courage and an unwavering focus on your inner fortitude.',
      },
      {
        name: 'Pema Chödrön',
        image: 'path/to/pema.jpg',
        shortStory: 'Chödrön, a Buddhist nun, teaches how to embrace fear with mindfulness.',
        fullStory: 'Pema Chödrön (born 1936), an American Tibetan Buddhist nun and teacher, is renowned for her accessible teachings on facing fear through mindfulness and compassion—a fitting guide for a fear-dominant mind. Ordained in 1981, Chödrön became a leading voice in Western Buddhism, authoring books like "When Things Fall Apart" and "The Places That Scare You," where she encourages leaning into fear rather than resisting it. Drawing from the Tibetan Buddhist concept of "shenpa" (attachment or being hooked), she teaches that fear often stems from clinging to comfort, and by sitting with discomfort—through meditation and self-compassion—you can find freedom. Her life, marked by personal struggles including divorce and a search for meaning, led her to Buddhism, where she found solace in embracing impermanence. Chödrön’s teachings, often shared at Gampo Abbey in Nova Scotia, have inspired millions to face fear with openness. For you, her wisdom offers a path to transform fear into a teacher—encouraging you to breathe through anxiety, soften your heart, and find peace in the unknown.',
      },
      {
        name: 'Ernest Shackleton',
        image: 'path/to/shackleton.jpg',
        shortStory: 'Shackleton, a British explorer, led his crew through fear in the Antarctic.',
        fullStory: 'Ernest Shackleton (1874–1922), a British explorer, is celebrated for his extraordinary leadership during the ill-fated Endurance expedition (1914–1917), where he and his crew survived against all odds in the Antarctic—a story of facing fear head-on, perfect for a fear-dominant mind. When their ship, the Endurance, was trapped and crushed by ice, Shackleton led his 27 men through a grueling 800-mile journey across icy seas in small lifeboats to reach safety, ensuring not a single life was lost. His ability to remain calm, instill hope, and make bold decisions under extreme uncertainty—such as the treacherous boat journey to South Georgia—made him a legend of resilience. Shackleton’s motto, "By endurance we conquer," reflects his belief in perseverance over panic. His expeditions, though often financially strained, showcased his unyielding spirit. For you, Shackleton’s story teaches how to face fear with leadership, optimism, and grit—turning the impossible into a triumph through sheer determination.',
      },
      {
        name: 'Edmund Hillary',
        image: 'path/to/hillary.jpg',
        shortStory: 'Hillary, a New Zealand mountaineer, conquered fear to summit Everest.',
        fullStory: 'Edmund Hillary (1919–2008), a New Zealand mountaineer, became the first person (along with Sherpa Tenzing Norgay) to summit Mount Everest in 1953, facing fear with courage and determination—an inspiring example for a fear-dominant mind. A beekeeper turned adventurer, Hillary joined the British Everest expedition after years of climbing in the Himalayas, confronting extreme altitudes, treacherous icefalls, and the ever-present risk of death to reach the 29,029-foot summit. His famous quote, "It is not the mountain we conquer, but ourselves," reflects his belief that the true battle is against inner fear and doubt. After Everest, Hillary continued exploring, leading expeditions to the South Pole and founding schools in Nepal through the Himalayan Trust, showing a life of purpose beyond conquest. His humility and teamwork—always crediting Tenzing—made him a global icon. For you, Hillary’s journey offers a lesson in facing fear through preparation, persistence, and self-belief—encouraging you to climb your own mountains, no matter how daunting.',
      },
      {
        name: 'Seneca',
        image: 'path/to/seneca.jpg',
        shortStory: 'Seneca, a Roman Stoic, taught how to face fear with rational thought.',
        fullStory: 'Seneca the Younger (c. 4 BCE–65 CE), a Roman Stoic philosopher, statesman, and dramatist, offered timeless wisdom on facing fear through rationality and virtue—a guiding light for a fear-dominant mind. As a tutor and advisor to Emperor Nero, Seneca navigated a treacherous political landscape, ultimately facing exile and a forced suicide for alleged conspiracy. His works, including "Letters from a Stoic" and "On the Shortness of Life," emphasize preparing for adversity through mental discipline, as in his advice, "We are more often frightened than hurt; and we suffer more from imagination than from reality." Seneca’s Stoicism teaches that fear stems from attachment to things beyond your control, urging you to focus on your inner response instead. His life, marked by wealth, power, and eventual downfall, reflects a man who practiced what he preached—facing death with calm acceptance. For you, Seneca’s teachings offer a stoic toolkit to tame fear—encouraging you to rationalize your anxieties, embrace adversity, and live with courage and clarity.',
      },
      {
        name: 'Harriet Tubman',
        image: 'path/to/tubman.jpg',
        shortStory: 'Tubman, an American abolitionist, overcame fear to lead slaves to freedom.',
        fullStory: 'Harriet Tubman (c. 1822–1913), an American abolitionist and social activist, defied fear to become a conductor on the Underground Railroad, leading hundreds of enslaved people to freedom—a heroic example for a fear-dominant mind. Born into slavery in Maryland, Tubman escaped in 1849 and returned south at least 13 times, risking capture and death to guide others north, earning the nickname "Moses." Facing constant threats—bounties on her head, physical violence, and her own health struggles (narcolepsy from a childhood injury)—she never lost a passenger, famously saying, "I never ran my train off the track, and I never lost a passenger." Tubman also served as a spy and nurse during the Civil War, later advocating for women’s suffrage. Her unyielding courage, rooted in faith and a vision of freedom, made her a symbol of resilience. For you, Tubman’s life teaches how to face fear with purpose—showing you that bravery isn’t the absence of fear but the strength to push through for a greater cause.',
      },
      {
        name: 'Thich Nhat Hanh',
        image: 'path/to/thich.jpg',
        shortStory: 'Thich Nhat Hanh, a Vietnamese monk, taught mindfulness to overcome fear.',
        fullStory: 'Thich Nhat Hanh (1926–2022), a Vietnamese Buddhist monk, poet, and peace activist, introduced mindfulness to the West, offering tools to face fear with presence and compassion—an invaluable guide for a fear-dominant mind. Exiled from Vietnam in 1966 for his anti-war activism, he founded the Plum Village monastery in France, where he taught mindfulness practices like walking meditation and conscious breathing, as detailed in books like "The Miracle of Mindfulness" and "Fear: Essential Wisdom for Getting Through the Storm." His concept of "interbeing"—the interconnectedness of all things—encourages you to see fear as a part of life to be embraced, not fought, with his advice, "Breathing in, I calm my body. Breathing out, I smile." Nominated for the Nobel Peace Prize by Martin Luther King Jr., Thich Nhat Hanh’s teachings have influenced global mindfulness movements. For you, his wisdom offers a gentle path to face fear—teaching you to ground yourself in the present, soften your resistance, and find peace amidst life’s uncertainties.',
      },
      {
        name: 'Nelson Mandela',
        image: 'path/to/mandela.jpg',
        shortStory: 'Mandela, a South African leader, overcame fear to fight apartheid.',
        fullStory: 'Nelson Mandela (1918–2013), a South African anti-apartheid activist and the nation’s first Black president, faced fear with unwavering courage to dismantle systemic oppression—an inspiring figure for a fear-dominant mind. Imprisoned for 27 years for his activism against apartheid, Mandela endured harsh conditions on Robben Island, yet emerged without bitterness, leading South Africa to democracy in 1994. His autobiography, "Long Walk to Freedom," reveals his approach to fear: "I learned that courage was not the absence of fear, but the triumph over it." As president, Mandela focused on reconciliation, forming the Truth and Reconciliation Commission to heal a divided nation, earning him the 1993 Nobel Peace Prize. His life, marked by personal sacrifice—years away from family, constant threats—shows a man who transformed fear into a force for justice. For you, Mandela’s journey offers a lesson in facing fear with dignity—encouraging you to stand firm in your values, act with compassion, and lead with fearless resolve.',
      },
    ],
    'self-discovery': [
      {
        name: 'Rumi',
        image: rumiImage,
        shortStory: 'Rumi, a Persian poet, wove mysticism into his verses on self-exploration.',
        fullStory: 'Jalal ad-Din Muhammad Rumi (1207–1273), a Persian poet, Sufi mystic, and scholar, is revered for his lyrical masterpieces that weave mysticism with profound insights into self-discovery and spiritual awakening. Born in what is now Afghanistan, Rumi’s life transformed after meeting the wandering dervish Shams Tabrizi, igniting a deep friendship that inspired his poetic outpouring, collected in works like the "Masnavi" and "Divan-e Shams-e Tabrizi." His poetry explores love—both human and divine—as a path to peel back the layers of the self, revealing the light within through surrender and introspection, a journey ideal for a self-discovery-dominant mind. Themes of unity, the soul’s longing, and the dissolution of ego permeate his verses, encouraging you to find meaning in loss and embrace your deepest wounds as portals to growth. Rumi’s legacy, spread by the Whirling Dervishes, transcends cultures, influencing poetry, spirituality, and psychology worldwide. His life, marked by exile and personal tragedy, reflects a man who turned pain into poetry, offering you a guide to explore your inner universe, connect with the divine, and emerge transformed through the alchemy of self-awareness.',
      },
      {
        name: 'Ralph Waldo Emerson',
        image: RalphImage,
        shortStory: 'Emerson, an American essayist, championed individuality in his works.',
        fullStory: 'Ralph Waldo Emerson (1803–1882), an American essayist, lecturer, and transcendentalist philosopher, championed the power of individuality and self-reliance, shaping American intellectual thought in the 19th century. Born in Boston, Emerson’s early career as a Unitarian minister ended when he rejected formal doctrine, leading him to develop transcendentalism—a belief in the inherent goodness of people and nature as a source of divine truth. His essay "Self-Reliance" (1841) urges you to trust your inner voice, reject conformity, and carve your own path amidst societal noise, a philosophy that resonates deeply with a self-discovery-dominant spirit. Influenced by European Romanticism and Eastern philosophies, Emerson’s works like "Nature" and "The American Scholar" celebrate the individual’s connection to the universe, encouraging personal growth through intuition and experience. His life, marked by the loss of his first wife and a shift to public lecturing, reflects a man who lived his ideals, inspiring figures like Thoreau and Whitman. For you, Emerson offers a call to embrace your unique essence, trust your instincts, and build a life of authentic self-expression, turning inward to discover the limitless potential within.',
      },
      {
        name: 'Henry David Thoreau',
        image: 'path/to/thoreau.jpg',
        shortStory: 'Thoreau, an American transcendentalist, lived simply to discover his true self.',
        fullStory: 'Henry David Thoreau (1817–1862), an American writer, naturalist, and transcendentalist, is best known for "Walden," a reflection on simple living and self-discovery through his two-year experiment in a cabin by Walden Pond. A disciple of Ralph Waldo Emerson, Thoreau sought to strip life to its essentials, famously writing, "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach." His philosophy, rooted in individualism and a deep connection to nature, encourages you to reject societal pressures and discover your true self through introspection and simplicity—a perfect fit for a self-discovery-driven mind. Thoreau’s essay "Civil Disobedience," inspired by his arrest for refusing to pay a poll tax, influenced figures like Gandhi and Martin Luther King Jr. His life, marked by a quiet rebellion against materialism, offers you a path to find clarity by stepping away from noise, listening to your inner voice, and embracing the beauty of the present.',
      },
      {
        name: 'Carl Rogers',
        image: 'path/to/rogers.jpg',
        shortStory: 'Rogers, an American psychologist, emphasized self-actualization in therapy.',
        fullStory: 'Carl Rogers (1902–1987), an American psychologist and founder of client-centered therapy, revolutionized psychotherapy by focusing on the individual’s capacity for self-discovery and growth—a guiding light for a self-discovery-driven mind. In his book "On Becoming a Person" (1961), Rogers introduced the concept of the "actualizing tendency," the innate drive to realize one’s full potential, emphasizing that a supportive, empathetic environment—unconditional positive regard, genuineness, and empathy—allows the self to flourish. A key figure in humanistic psychology, Rogers shifted therapy from directive analysis to a collaborative process, trusting clients to find their own answers. His approach influenced education, parenting, and conflict resolution, earning him a nomination for the Nobel Peace Prize for his work in Northern Ireland. Rogers’ life, marked by a shift from theology to psychology, reflects his belief in human potential. For you, his teachings offer a framework to uncover your authentic self, heal through self-acceptance, and grow into the person you’re meant to be.',
      },
      {
        name: 'Hermann Hesse',
        image: 'path/to/hesse.jpg',
        shortStory: 'Hesse, a German novelist, explored self-discovery in his works like "Siddhartha."',
        fullStory: 'Hermann Hesse (1877–1962), a German-Swiss novelist and poet, is celebrated for his introspective works that explore the journey of self-discovery and spiritual awakening, making him a fitting guide for a self-discovery-driven mind. His novel "Siddhartha" (1922) follows a man’s quest for enlightenment through various paths—asceticism, materialism, love, and finally inner peace—mirroring the universal search for the true self. Other works like "Steppenwolf" and "The Glass Bead Game" (for which he won the 1946 Nobel Prize in Literature) delve into the tension between individuality and societal expectations, urging you to embrace your inner contradictions. Influenced by Jungian psychology and Eastern philosophy, Hesse’s life was marked by personal struggles, including a breakdown that led him to psychoanalysis, fueling his literary exploration of the self. For you, Hesse’s stories offer a mirror to your own journey—encouraging you to seek authenticity, embrace your inner complexity, and find meaning through self-exploration.',
      },
      {
        name: 'Joseph Campbell',
        image: 'path/to/campbell.jpg',
        shortStory: 'Campbell, an American mythologist, explored the hero’s journey of self-discovery.',
        fullStory: 'Joseph Campbell (1904–1987), an American mythologist and writer, is best known for his concept of the "hero’s journey," a universal narrative structure that outlines the path of self-discovery—a powerful framework for a self-discovery-driven mind. In his book "The Hero with a Thousand Faces" (1949), Campbell identifies a monomyth across cultures: a hero leaves the ordinary world, faces trials, gains wisdom, and returns transformed. Influenced by Jungian archetypes and global mythologies, Campbell’s work, like his PBS series "The Power of Myth," encourages you to see your life as a heroic journey, with challenges as opportunities for growth. His famous advice, "Follow your bliss," urges you to pursue what truly resonates with your soul, even if the path is uncertain. Campbell’s teachings have shaped storytelling (notably influencing Star Wars) and personal development. For you, his insights offer a mythic lens to navigate your own journey—encouraging you to face the unknown, discover your inner strengths, and return with newfound wisdom.',
      },
      {
        name: 'Krishnamurti',
        image: 'path/to/krishnamurti.jpg',
        shortStory: 'Krishnamurti, an Indian philosopher, taught self-awareness without dogma.',
        fullStory: 'Jiddu Krishnamurti (1895–1986), an Indian philosopher and speaker, dedicated his life to teaching self-awareness and inner freedom, rejecting all forms of authority and dogma—a profound guide for a self-discovery-driven mind. Groomed by the Theosophical Society as a "world teacher," Krishnamurti dissolved the organization in 1929, declaring, "Truth is a pathless land," and spent the next six decades speaking globally on the need for radical self-inquiry. In books like "Freedom from the Known," he urges you to observe your thoughts without judgment, question conditioning, and discover truth through direct experience, not through gurus or systems. His dialogues, often held in natural settings, emphasize mindfulness, love, and the dissolution of the self. Krishnamurti’s life, marked by a rejection of external authority, reflects his commitment to inner liberation. For you, his teachings offer a path to uncover your true self—encouraging you to let go of preconceptions, observe your mind, and find freedom through pure awareness.',
      },
      {
        name: 'Anaïs Nin',
        image: 'path/to/nin.jpg',
        shortStory: 'Nin, a French-American writer, explored self-discovery through diaries.',
        fullStory: 'Anaïs Nin (1903–1977), a French-American writer and diarist, is celebrated for her introspective diaries and fiction that delve into the depths of self-discovery, emotions, and femininity—a fitting inspiration for a self-discovery-driven mind. Her multivolume "Diary of Anaïs Nin," spanning over 60 years, chronicles her inner life, relationships, and artistic struggles, offering a raw exploration of the self through vulnerability and creativity. In works like "Delta of Venus" and "House of Incest," Nin blends surrealism with psychological depth, exploring themes of love, identity, and the unconscious. A friend to figures like Henry Miller, Nin’s life was marked by a quest for authenticity, often navigating the tension between societal norms and her inner desires. Her famous quote, "We don’t see things as they are, we see them as we are," reflects her belief in self-awareness as a lens to truth. For you, Nin’s work offers a guide to explore your inner world—encouraging you to write, reflect, and embrace your complexities with courage and creativity.',
      },
      {
        name: 'Alan Watts',
        image: 'path/to/watts.jpg',
        shortStory: 'Watts, a British-American philosopher, brought Eastern wisdom to the West.',
        fullStory: 'Alan Watts (1915–1973), a British-American philosopher, writer, and speaker, popularized Eastern philosophy in the West, offering insights into self-discovery through Zen Buddhism and Taoism—a valuable perspective for a self-discovery-driven mind. In books like "The Wisdom of Insecurity" and "The Book: On the Taboo Against Knowing Who You Are," Watts challenges Western notions of the self as a separate entity, arguing that you are inseparable from the universe—a concept he calls "cosmic consciousness." His lectures, often delivered with humor and clarity, explore mindfulness, the illusion of ego, and the joy of living in the present, as in his quote, "The only way to make sense out of change is to plunge into it, move with it, and join the dance." Watts’ life, marked by a transition from Anglican priest to Zen scholar, reflects his quest for authentic understanding. For you, his teachings offer a path to dissolve the illusion of separation, embrace the flow of life, and discover your true nature as part of the cosmic whole.',
      },
      {
        name: 'Toni Morrison',
        image: 'path/to/morrison.jpg',
        shortStory: 'Morrison, an American novelist, explored identity through storytelling.',
        fullStory: 'Toni Morrison (1931–2019), an American novelist, editor, and professor, is celebrated for her powerful narratives that explore identity, race, and self-discovery, making her a profound guide for a self-discovery-driven mind. Her novels, including "Beloved" (1987), "The Bluest Eye," and "Song of Solomon," delve into the African-American experience, examining how history, trauma, and love shape the self. "Beloved," which won the Pulitzer Prize, explores a mother’s haunting past, urging you to confront your own ghosts to find healing. Morrison’s work as an editor at Random House also amplified Black voices, and her 1993 Nobel Prize in Literature cemented her legacy as a literary giant. Her quote, "You are your best thing," reflects her belief in the power of self-acceptance and inner exploration. For you, Morrison’s stories offer a lens to explore your own identity—encouraging you to face your past, embrace your roots, and discover the beauty of your own narrative through courage and love.',
      },
    ],
  };

  const philosophers = philosophersData[dominantPhase] || [];

  // Toggle function for Load More/Less
  const toggleStory = (name) => {
    setExpandedStories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back function
  const handleBack = () => {
    navigate(-1); // Go back one page in history (to /report)
  };

  // Group philosophers into pairs
  const philosopherPairs = [];
  for (let i = 0; i < philosophers.length; i += 2) {
    philosopherPairs.push(philosophers.slice(i, i + 2));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '1300px',
        padding: '60px 20px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Back Button - Below Navbar */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '70px',
          left: '20px',
          padding: '10px 15px',
          background: 'linear-gradient(135deg, #e94560, #ff6f91)',
          border: 'none',
          borderRadius: '50px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          zIndex: 1001,
        }}
      >
        ←
      </motion.button>

      <h2
        style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '50px',
          color: '#fff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Philosophers for {dominantPhase.charAt(0).toUpperCase() + dominantPhase.slice(1)}
      </h2>

      {/* Container for philosopher pairs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px', // Space between each pair row
          alignItems: 'center',
        }}
      >
        {philosopherPairs.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '30px', // Space between the two cards in a pair
              justifyContent: 'center',
              width: '100%',
              maxWidth: '750px', // Adjust to fit two cards comfortably
            }}
          >
            {pair.map((philosopher, index) => (
              <motion.div
                key={philosopher.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (pairIndex * 2 + index + 1) }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '18px',
                  padding: '25px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  textAlign: 'left',
                  width: '100%',
                  maxWidth: '350px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
              >
                <img
                  src={philosopher.image}
                  alt={philosopher.name}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '15px',
                  }}
                />
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#e94560',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {philosopher.name}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#e0e0e0',
                    lineHeight: '1.6',
                  }}
                >
                  {expandedStories[philosopher.name] ? philosopher.fullStory : philosopher.shortStory}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleStory(philosopher.name)}
                  style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    background: '#e94560',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  {expandedStories[philosopher.name] ? 'Show Less' : 'Load More'}
                </motion.button>
              </motion.div>
            ))}
            {/* If there's only one philosopher in the pair (odd number), add an empty placeholder */}
            {pair.length === 1 && (
              <div
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  visibility: 'hidden',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          style={{
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #e94560, #ff6f91)',
            border: 'none',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
          }}
        >
          Go to Up
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          style={{
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #e94560, #ff6f91)',
            border: 'none',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
          }}
        >
          Go to Homepage
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Philosophers;