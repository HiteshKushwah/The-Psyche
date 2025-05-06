// function Footer() {
//     return (
//       <footer style={{ padding: '20px', background: '#0f3460', color: '#fff', textAlign: 'center', marginTop: 'auto' }}>
//         <p>© 2025 The Psyche. All rights reserved.</p>
//       </footer>
//     );
//   }
  
//   export default Footer;

import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: '20px',
        height: '40px',
        background: 'rgba(15, 52, 96, 0.9)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        textAlign: 'center',
        marginTop: 'auto  ',
      }}
    >
      <p>© 2025 The Psyche. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;