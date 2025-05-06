import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa';

function Roadmap() {
  const [roadmap, setRoadmap] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const roadmapRef = useRef(null); // For PDF capture

  useEffect(() => {
    const report = location.state?.report;
    if (!report) {
      navigate('/report'); // Redirect if no report data
      return;
    }

    // Generate the 21-day roadmap based on report
    const generateRoadmap = () => {
      const { dominantPhase, weakPhase, report: reportData } = report;
      const phases = reportData;

      // Sample logic for tailoring (customize this further)
      const roadmapData = {
        weeks: [
          {
            title: 'Week 1: Awaken Your Edge',
            days: [
              { task: `Leverage your ${dominantPhase} - Plan a bold move today.`, focus: dominantPhase, reflection: 'What’s worth your fight?' },
              { task: `Face a small ${weakPhase.toLowerCase()} - Act now.`, focus: weakPhase, reflection: `What did overcoming ${weakPhase.toLowerCase()} taste like?` },
              { task: `Read a quote tied to ${dominantPhase} and apply it.`, focus: dominantPhase, reflection: 'How will you sharpen your soul?' },
              { task: `Name a ${weakPhase.toLowerCase()} you’ve dodged - Write it.`, focus: weakPhase, reflection: 'What’s hiding in your shadow?' },
              { task: `Strategize your next step with ${dominantPhase}.`, focus: dominantPhase, reflection: 'What chaos will you master?' },
              { task: `Meditate on ${weakPhase.toLowerCase()} - 10 minutes.`, focus: weakPhase, reflection: 'What silence revealed?' },
              { task: `Score your grit using ${dominantPhase}.`, focus: dominantPhase, reflection: 'What did you prove?' },
            ],
            milestone: `Outsmart one ${weakPhase.toLowerCase()} this week.`,
          },
          {
            title: 'Week 2: Confront the Abyss',
            days: [
              { task: `Push ${dominantPhase} further - Solve a tough problem.`, focus: dominantPhase, reflection: 'What broke that you’ll rebuild?' },
              { task: `Challenge a bigger ${weakPhase.toLowerCase()} - Face it.`, focus: weakPhase, reflection: 'What fear crumbled?' },
              { task: `Teach someone using your ${dominantPhase}.`, focus: dominantPhase, reflection: 'What wisdom grew?' },
              { task: `Reflect on a past ${weakPhase.toLowerCase()} moment.`, focus: weakPhase, reflection: 'What lesson lingers?' },
              { task: `Create with ${dominantPhase} - Build something small.`, focus: dominantPhase, reflection: 'What sparked?' },
              { task: `Walk into a ${weakPhase.toLowerCase()} scenario.`, focus: weakPhase, reflection: 'What strength emerged?' },
              { task: `Review your ${dominantPhase} wins this week.`, focus: dominantPhase, reflection: 'What’s your edge now?' },
            ],
            milestone: `Conquer a ${weakPhase.toLowerCase()} you’ve run from.`,
          },
          {
            title: 'Week 3: Forge Your Fire',
            days: [
              { task: `Master ${dominantPhase} - Lead something today.`, focus: dominantPhase, reflection: 'What crown fits you?' },
              { task: `Rewrite a ${weakPhase.toLowerCase()} story - Change it.`, focus: weakPhase, reflection: 'What past dies today?' },
              { task: `Share your ${dominantPhase} insight with someone.`, focus: dominantPhase, reflection: 'What echoed back?' },
              { task: `Face your deepest ${weakPhase.toLowerCase()} head-on.`, focus: weakPhase, reflection: 'What rose from the dark?' },
              { task: `Dream big with ${dominantPhase} - Plan it out.`, focus: dominantPhase, reflection: 'What’s your horizon?' },
              { task: `Let go of one ${weakPhase.toLowerCase()} burden.`, focus: weakPhase, reflection: 'What weight lifted?' },
              { task: `Define your purpose in 10 words.`, focus: 'self-discovery', reflection: 'What’s your fire?' },
            ],
            milestone: 'Claim your psyche’s truth.',
          },
        ],
      };
      setRoadmap(roadmapData);
    };

    generateRoadmap();
  }, [location, navigate]);

  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    doc.setFillColor(31, 68, 89); // Header color
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Your 21-Day Psyche Roadmap', 105, 20, { align: 'center' });

    let y = 40;
    roadmap.weeks.forEach((week, weekIndex) => {
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text(week.title, 20, y);
      y += 10;

      week.days.forEach((day, dayIndex) => {
        doc.setFontSize(12);
        doc.text(`Day ${weekIndex * 7 + dayIndex + 1}: ${day.task}`, 25, y);
        doc.text(`Reflection: ${day.reflection}`, 25, y + 5);
        y += 15;
      });

      doc.text(`Milestone: ${week.milestone}`, 25, y);
      y += 15;

      if (y > 260 && weekIndex < roadmap.weeks.length - 1) {
        doc.addPage();
        y = 20;
      }
    });

    doc.setFillColor(0, 19, 37); // Footer
    doc.rect(0, 270, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('Powered by The Psyche', 105, 285, { align: 'center' });

    doc.save(`Psyche_Roadmap_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`);
  };

  if (!roadmap) return <div style={{ width: '100%', textAlign: 'center', padding: '40px', color: '#fff' }}>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '1000px',
        padding: '60px 20px',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h2
        style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '40px',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Your 21-Day Psyche Roadmap
      </h2>
      <p
        style={{
          fontSize: '20px',
          marginBottom: '40px',
          fontStyle: 'italic',
        }}
      >
        Three weeks to sharpen your soul—will you rise?
      </p>

      <div ref={roadmapRef}>
        {roadmap.weeks.map((week, weekIndex) => (
          <motion.div
            key={weekIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: weekIndex * 0.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
              backdropFilter: 'blur(12px)',
              borderRadius: '18px',
              padding: '25px',
              marginBottom: '30px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <h3
              style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#e94560',
                marginBottom: '20px',
              }}
            >
              {week.title}
            </h3>
            {week.days.map((day, dayIndex) => (
              <div
                key={dayIndex}
                style={{
                  textAlign: 'left',
                  marginBottom: '15px',
                }}
              >
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#ff6f91',
                  }}
                >
                  Day {weekIndex * 7 + dayIndex + 1}: {day.task}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#e0e0e0',
                    fontStyle: 'italic',
                  }}
                >
                  Reflection: {day.reflection}
                </p>
              </div>
            ))}
            <p
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#e94560',
                marginTop: '20px',
              }}
            >
              Milestone: {week.milestone}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={generatePDF}
        style={{
          marginTop: '40px',
          padding: '15px 40px',
          background: 'linear-gradient(135deg, #e94560, #ff6f91)',
          border: 'none',
          borderRadius: '50px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '18px',
          boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          margin: '0 auto',
        }}
      >
        <FaDownload /> Download Your Roadmap
      </motion.button>
    </motion.div>
  );
}

export default Roadmap;