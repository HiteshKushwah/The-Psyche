// // // import Response from '../models/Response.js';
// // // import Feedback from '../models/Feedback.js';

// // // // 25 Questions, 5 per phase
// // // const questions = {
// // //   mentality: [
// // //     { text: "How do you approach a tough problem?", options: ['Logical analysis', 'Creative brainstorming', 'Gut instinct', 'Avoid it'] },
// // //     { text: "What’s your strength in decisions?", options: ['Data-driven', 'Imagination', 'Intuition', 'Procrastination'] },
// // //     { text: "How do you plan your day?", options: ['Structured', 'Flexible', 'Spontaneous', 'No plan'] },
// // //     { text: "How do you solve conflicts?", options: ['Reasoning', 'Compromise', 'Emotion', 'Avoidance'] },
// // //     { text: "What’s your learning style?", options: ['Analytical', 'Visual', 'Trial-error', 'Passive'] },
// // //   ],
// // //   philosophy: [
// // //     { text: "What gives life meaning?", options: ['Purpose within', 'Achievements', 'Relationships', 'Nothing'] },
// // //     { text: "Is suffering necessary?", options: ['Yes, for growth', 'Sometimes', 'No, avoidable', 'Meaningless'] },
// // //     { text: "What’s your view on fate?", options: ['Destined', 'Self-made', 'Mixed', 'Random'] },
// // //     { text: "What’s happiness to you?", options: ['Inner peace', 'Success', 'Love', 'Illusion'] },
// // //     { text: "Do you question existence?", options: ['Always', 'Often', 'Rarely', 'Never'] },
// // //   ],
// // //   psychology: [
// // //     { text: "How do you react to stress?", options: ['Face it', 'Reflect', 'Suppress', 'Distract'] },
// // //     { text: "How open are you emotionally?", options: ['Very', 'Somewhat', 'Guarded', 'Closed'] },
// // //     { text: "How do you handle failure?", options: ['Learn', 'Analyze', 'Ignore', 'Deny'] },
// // //     { text: "How empathetic are you?", options: ['Highly', 'Moderately', 'Slightly', 'Not much'] },
// // //     { text: "How do you process emotions?", options: ['Express', 'Think', 'Bottle up', 'Avoid'] },
// // //   ],
// // //   fear: [
// // //     { text: "What stops you from risks?", options: ['Failure', 'Judgment', 'Uncertainty', 'Nothing'] },
// // //     { text: "What’s your biggest fear?", options: ['Loss', 'Failure', 'Rejection', 'Unknown'] },
// // //     { text: "How do you face fear?", options: ['Confront', 'Prepare', 'Hesitate', 'Run'] },
// // //     { text: "What limits your dreams?", options: ['Self-doubt', 'Others', 'Circumstances', 'Nothing'] },
// // //     { text: "How do you handle change?", options: ['Embrace', 'Adapt', 'Resist', 'Fear'] },
// // //   ],
// // //   'self-discovery': [
// // //     { text: "What drives your growth?", options: ['Reflection', 'Experience', 'Feedback', 'Comfort'] },
// // //     { text: "What’s your true passion?", options: ['Creation', 'Helping', 'Learning', 'Stability'] },
// // //     { text: "What defines you?", options: ['Values', 'Actions', 'Relationships', 'None'] },
// // //     { text: "What’s your life goal?", options: ['Purpose', 'Success', 'Happiness', 'Survival'] },
// // //     { text: "How do you find yourself?", options: ['Introspection', 'Adventure', 'Guidance', 'Routine'] },
// // //   ],
// // // };

// // // export const startAnalysis = async (req, res) => {
// // //   try {
// // //     res.json({ phase: 'mentality', question: questions.mentality[0].text, options: questions.mentality[0].options, index: 0 });
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Error starting analysis', error: err.message });
// // //   }
// // // };

// // // export const submitAnswer = async (req, res) => {
// // //   const { phase, question, answer, index } = req.body;
// // //   if (!phase || !question || !answer || index === undefined) {
// // //     return res.status(400).json({ message: 'Missing required fields' });
// // //   }
// // //   try {
// // //     await Response.create({ phase, question, answer, userID: req.user.id });
// // //     const phases = ['mentality', 'philosophy', 'psychology', 'fear', 'self-discovery'];
// // //     const phaseQuestions = questions[phase];
// // //     const nextIndex = index + 1;

// // //     if (nextIndex < phaseQuestions.length) {
// // //       const nextQuestion = phaseQuestions[nextIndex];
// // //       res.json({ phase, question: nextQuestion.text, options: nextQuestion.options, index: nextIndex });
// // //     } else {
// // //       const currentPhaseIndex = phases.indexOf(phase);
// // //       const nextPhase = phases[currentPhaseIndex + 1];
// // //       if (nextPhase) {
// // //         const nextQuestion = questions[nextPhase][0];
// // //         res.json({ phase: nextPhase, question: nextQuestion.text, options: nextQuestion.options, index: 0 });
// // //       } else {
// // //         res.json({ message: 'Analysis complete', redirect: '/report' });
// // //       }
// // //     }
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Error submitting answer', error: err.message });
// // //   }
// // // };

// // // export const getReport = async (req, res) => {
// // //   try {
// // //     const responses = await Response.findAll({ where: { userID: req.user.id } });
// // //     if (responses.length < 25) {
// // //       return res.status(400).json({ message: 'Incomplete analysis—please answer all 25 questions' });
// // //     }

// // //     const report = {
// // //       mentality: { score: 0, insight: '' },
// // //       philosophy: { score: 0, insight: '' },
// // //       psychology: { score: 0, insight: '' },
// // //       fear: { score: 0, insight: '' },
// // //       'self-discovery': { score: 0, insight: '' },
// // //     };

// // //     const scoring = {
// // //       mentality: { 'Logical analysis': 2, 'Creative brainstorming': 1.5, 'Gut instinct': 1, 'Avoid it': 0, 'Data-driven': 2, 'Imagination': 1.5, 'Intuition': 1, 'Procrastination': 0, 'Structured': 2, 'Flexible': 1.5, 'Spontaneous': 1, 'No plan': 0, 'Reasoning': 2, 'Compromise': 1.5, 'Emotion': 1, 'Avoidance': 0, 'Analytical': 2, 'Visual': 1.5, 'Trial-error': 1, 'Passive': 0 },
// // //       philosophy: { 'Purpose within': 2, 'Achievements': 1.5, 'Relationships': 1, 'Nothing': 0, 'Yes, for growth': 2, 'Sometimes': 1.5, 'No, avoidable': 1, 'Meaningless': 0, 'Destined': 2, 'Self-made': 1.5, 'Mixed': 1, 'Random': 0, 'Inner peace': 2, 'Success': 1.5, 'Love': 1, 'Illusion': 0, 'Always': 2, 'Often': 1.5, 'Rarely': 1, 'Never': 0 },
// // //       psychology: { 'Face it': 2, 'Reflect': 1.5, 'Suppress': 1, 'Distract': 0, 'Very': 2, 'Somewhat': 1.5, 'Guarded': 1, 'Closed': 0, 'Learn': 2, 'Analyze': 1.5, 'Ignore': 1, 'Deny': 0, 'Highly': 2, 'Moderately': 1.5, 'Slightly': 1, 'Not much': 0, 'Express': 2, 'Think': 1.5, 'Bottle up': 1, 'Avoid': 0 },
// // //       fear: { 'Failure': 0, 'Judgment': 1, 'Uncertainty': 1.5, 'Nothing': 2, 'Loss': 0, 'Failure': 0, 'Rejection': 1, 'Unknown': 1.5, 'Confront': 2, 'Prepare': 1.5, 'Hesitate': 1, 'Run': 0, 'Self-doubt': 0, 'Others': 1, 'Circumstances': 1.5, 'Nothing': 2, 'Embrace': 2, 'Adapt': 1.5, 'Resist': 1, 'Fear': 0 },
// // //       'self-discovery': { 'Reflection': 2, 'Experience': 1.5, 'Feedback': 1, 'Comfort': 0, 'Creation': 2, 'Helping': 1.5, 'Learning': 1, 'Stability': 0, 'Values': 2, 'Actions': 1.5, 'Relationships': 1, 'None': 0, 'Purpose': 2, 'Success': 1.5, 'Happiness': 1, 'Survival': 0, 'Introspection': 2, 'Adventure': 1.5, 'Guidance': 1, 'Routine': 0 },
// // //     };

// // //     responses.forEach(r => {
// // //       report[r.phase].score += scoring[r.phase][r.answer] || 0;
// // //     });

// // //     report.mentality.insight = report.mentality.score >= 7 ? 'Strong analytical mind—great for growth!' : report.mentality.score >= 4 ? 'Balanced thinker—refine your approach.' : 'Avoidance limits you—focus on logic.';
// // //     report.philosophy.insight = report.philosophy.score >= 7 ? 'Deep meaning-seeker—your psyche shines!' : report.philosophy.score >= 4 ? 'You find purpose—explore deeper.' : 'Lack of meaning—search within.';
// // //     report.psychology.insight = report.psychology.score >= 7 ? 'Emotionally strong—great awareness!' : report.psychology.score >= 4 ? 'Balanced emotions—open up more.' : 'Guarded—work on expression.';
// // //     report.fear.insight = report.fear.score >= 7 ? 'Fearless—nothing holds you back!' : report.fear.score >= 4 ? 'Fear slows you—push past it.' : 'Fear dominates—face it to grow.';
// // //     report['self-discovery'].insight = report['self-discovery'].score >= 7 ? 'Growth-driven—your true self thrives!' : report['self-discovery'].score >= 4 ? 'Exploring potential—keep going.' : 'Stagnation limits you—step out.';

// // //     const dominantPhase = Object.keys(report).reduce((a, b) => report[a].score > report[b].score ? a : b);
// // //     const weakPhase = Object.keys(report).reduce((a, b) => report[a].score < report[b].score ? a : b);

// // //     const recommendations = {
// // //       mentality: ['Thinking, Fast and Slow - Daniel Kahneman', 'The Art of Reasoning - David Kelley'],
// // //       philosophy: ['Meditations - Marcus Aurelius', 'Thus Spoke Zarathustra - Friedrich Nietzsche'],
// // //       psychology: ['Emotional Intelligence - Daniel Goleman', 'Man and His Symbols - Carl Jung'],
// // //       fear: ['The Power of Now - Eckhart Tolle', 'Daring Greatly - Brené Brown'],
// // //       'self-discovery': ['Man’s Search for Meaning - Viktor Frankl', 'The Alchemist - Paulo Coelho'],
// // //     };

// // //     const advice = {
// // //       mentality: 'Practice structured problem-solving.',
// // //       philosophy: 'Reflect on your purpose daily.',
// // //       psychology: 'Express emotions to grow.',
// // //       fear: 'Take small risks to build confidence.',
// // //       'self-discovery': 'Explore new experiences.',
// // //     };

// // //     res.json({
// // //       report,
// // //       dominantPhase,
// // //       weakPhase,
// // //       strengths: report[dominantPhase].insight,
// // //       weaknesses: report[weakPhase].insight,
// // //       advice: advice[dominantPhase],
// // //       recommendation: recommendations[dominantPhase][Math.floor(Math.random() * 2)],
// // //       testDate: new Date().toLocaleDateString(),
// // //     });
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Error generating report', error: err.message });
// // //   }
// // // };

// // // export const submitFeedback = async (req, res) => {
// // //   const { text } = req.body;
// // //   if (!text || text.trim() === '') {
// // //     return res.status(400).json({ message: 'Feedback cannot be empty' });
// // //   }
// // //   try {
// // //     const feedback = await Feedback.create({ text, userID: req.user.id });
// // //     res.status(201).json({ message: 'Feedback submitted successfully', feedbackID: feedback.feedbackID });
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Error submitting feedback', error: err.message });
// // //   }
// // // };

// // import Response from '../models/Response.js';
// // import Feedback from '../models/Feedback.js';

// // // 25 Mind-Blowing, Dark, Humorous, Scenario-Based Questions
// // const questions = {
// //   mentality: [
// //     { text: "You’re stuck in a room with a bomb ticking down—5 minutes left. Do you:", options: ['Analyze the wires logically', 'Smash it and hope for the best', 'Talk to it like it’s your ex', 'Wait for someone smarter to show up'] },
// //     { text: "Your boss gives you a impossible deadline. Your move:", options: ['Work like a machine', 'Fake a breakdown for sympathy', 'Sabotage the project subtly', 'Quit and ghost everyone'] },
// //     { text: "A stranger hands you a note: 'The world ends tomorrow.' You:", options: ['Plan a survival strategy', 'Laugh and toss it', 'Write back, "Good riddance"', 'Google it to confirm'] },
// //     { text: "You’re a detective, one clue away from solving a murder. Do you:", options: ['Follow the logic to the end', 'Trust your gut over evidence', 'Frame someone to close the case', 'Give up—it’s too late'] },
// //     { text: "Your brain’s a computer—how much RAM’s left before you crash?", options: ['Plenty—I’m optimized', 'Half—I multitask chaos', 'Barely—running on fumes', 'Crashed years ago'] },
// //   ],
// //   philosophy: [
// //     { text: "You’re offered immortality, but everyone you love dies tomorrow. Take it?", options: ['Yes—eternity’s worth it', 'No—love trumps all', 'Yes, but I’d sabotage it later', 'No—I’d rather rot'] },
// //     { text: "If life’s a simulation, who’s the programmer—God, you, or a bored alien?", options: ['God—divine code', 'Me—I’m the glitch', 'Alien—cosmic prank', 'Doesn’t matter—just laggy'] },
// //     { text: "A kid asks, 'Why do we exist?' You say:", options: ['To find meaning', 'To suffer and laugh', 'No clue—ask Google', 'We don’t—shut up'] },
// //     { text: "You’re the last human alive. What’s your purpose now?", options: ['Build a legacy in ruins', 'Dance till I drop', 'Talk to the walls', 'End it—no point'] },
// //     { text: "Happiness is a lie—agree or nah?", options: ['Agree—chasing shadows', 'Disagree—it’s rare but real', 'Maybe—it’s a drug', 'Who cares—pass the popcorn'] },
// //   ],
// //   psychology: [
// //     { text: "You catch your reflection smirking at you—what’s it hiding?", options: ['My darkest secret', 'A joke I don’t get', 'Nothing—just creepy', 'My real self'] },
// //     { text: "You’re screaming in a crowd, but no one hears. Why?", options: ['I’m invisible', 'They’re deaf to pain', 'I’m too quiet inside', 'It’s all a dream'] },
// //     { text: "Your best friend betrays you. Your revenge is:", options: ['Cold silence', 'Public humiliation', 'Forgive but never forget', 'Laugh—they’re pathetic'] },
// //     { text: "A voice in your head says, 'Jump.' Do you:", options: ['Ask why first', 'Jump—why not?', 'Tell it to shut up', 'Pretend it’s background noise'] },
// //     { text: "You’re a puppet—whose strings are you dancing on?", options: ['My own—I pull back', 'Society’s—cut me loose', 'Family’s—tangled mess', 'Fate’s—no escape'] },
// //   ],
// //   fear: [
// //     { text: "You’re alone in a forest, hear a whisper: 'You’re next.' Run or stay?", options: ['Run—survival mode', 'Stay—face the unknown', 'Yell back, "Bring it!"', 'Freeze—deer in headlights'] },
// //     { text: "Your biggest fear knocks on your door—literally. Open it?", options: ['Yes—stare it down', 'No—barricade it', 'Peek—then decide', 'Pretend I’m not home'] },
// //     { text: "You’re trapped in a sinking ship. What kills you first?", options: ['Panic—mind explodes', 'Water—lungs give out', 'Hope—I’d swim', 'Boredom—waiting’s worse'] },
// //     { text: "A fortune teller says you die tomorrow. Your last act?", options: ['Confront my demons', 'Party like it’s 1999', 'Hide under the bed', 'Prove her wrong'] },
// //     { text: "What’s scarier: losing everyone or losing yourself?", options: ['Everyone—alone sucks', 'Myself—identity’s all', 'Both—nightmare fuel', 'Neither—I’m unbreakable'] },
// //   ],
// //   'self-discovery': [
// //     { text: "You’re a book—what’s the title of your darkest chapter?", options: ['"The Fall"', '"Lies I Told Myself"', '"When I Gave Up"', '"Still Writing It"'] },
// //     { text: "A mirror shows your 80-year-old self. What do you ask?", options: ['"Did I win?"', '"Was it worth it?"', '"Why so many regrets?"', '"Can I redo it?"'] },
// //     { text: "You’re a superhero—what’s your power, and curse?", options: ['Mind-reading—hear the hate', 'Time-travel—stuck in loops', 'Invisibility—forever unseen', 'Strength—break everything'] },
// //     { text: "You’re lost in a maze of your memories. Exit or explore?", options: ['Exit—leave it behind', 'Explore—find the truth', 'Build a home there', 'Burn it down'] },
// //     { text: "What’s the one lie you’ve lived that you’d tell your younger self?", options: ['"You’re not enough"', '"They’ll save you"', '"It gets easier"', '"You’ll figure it out"'] },
// //   ],
// // };

// // // Rest of the psycheController.js remains the same—only questions update
// // export const startAnalysis = async (req, res) => {
// //   try {
// //     res.json({ phase: 'mentality', question: questions.mentality[0].text, options: questions.mentality[0].options, index: 0 });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error starting analysis', error: err.message });
// //   }
// // };

// // export const submitAnswer = async (req, res) => {
// //   const { phase, question, answer, index } = req.body;
// //   if (!phase || !question || !answer || index === undefined) {
// //     return res.status(400).json({ message: 'Missing required fields' });
// //   }
// //   try {
// //     await Response.create({ phase, question, answer, userID: req.user.id });
// //     const phases = ['mentality', 'philosophy', 'psychology', 'fear', 'self-discovery'];
// //     const phaseQuestions = questions[phase];
// //     const nextIndex = index + 1;

// //     if (nextIndex < phaseQuestions.length) {
// //       const nextQuestion = phaseQuestions[nextIndex];
// //       res.json({ phase, question: nextQuestion.text, options: nextQuestion.options, index: nextIndex });
// //     } else {
// //       const currentPhaseIndex = phases.indexOf(phase);
// //       const nextPhase = phases[currentPhaseIndex + 1];
// //       if (nextPhase) {
// //         const nextQuestion = questions[nextPhase][0];
// //         res.json({ phase: nextPhase, question: nextQuestion.text, options: nextQuestion.options, index: 0 });
// //       } else {
// //         res.json({ message: 'Analysis complete', redirect: '/report' });
// //       }
// //     }
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error submitting answer', error: err.message });
// //   }
// // };

// // // Scoring logic updated for new options
// // export const getReport = async (req, res) => {
// //   try {
// //     const responses = await Response.findAll({ where: { userID: req.user.id } });
// //     if (responses.length < 25) {
// //       return res.status(400).json({ message: 'Incomplete analysis—please answer all 25 questions' });
// //     }

// //     const report = {
// //       mentality: { score: 0, insight: '' },
// //       philosophy: { score: 0, insight: '' },
// //       psychology: { score: 0, insight: '' },
// //       fear: { score: 0, insight: '' },
// //       'self-discovery': { score: 0, insight: '' },
// //     };

// //     const scoring = {
// //       mentality: {
// //         'Analyze the wires logically': 2, 'Smash it and hope for the best': 1, 'Talk to it like it’s your ex': 0.5, 'Wait for someone smarter to show up': 0,
// //         'Work like a machine': 2, 'Fake a breakdown for sympathy': 0.5, 'Sabotage the project subtly': 1, 'Quit and ghost everyone': 0,
// //         'Plan a survival strategy': 2, 'Laugh and toss it': 1, 'Write back, "Good riddance"': 0.5, 'Google it to confirm': 1.5,
// //         'Follow the logic to the end': 2, 'Trust your gut over evidence': 1.5, 'Frame someone to close the case': 0, 'Give up—it’s too late': 0.5,
// //         'Plenty—I’m optimized': 2, 'Half—I multitask chaos': 1.5, 'Barely—running on fumes': 1, 'Crashed years ago': 0,
// //       },
// //       philosophy: {
// //         'Yes—eternity’s worth it': 1.5, 'No—love trumps all': 2, 'Yes, but I’d sabotage it later': 1, 'No—I’d rather rot': 0,
// //         'God—divine code': 1.5, 'Me—I’m the glitch': 2, 'Alien—cosmic prank': 1, 'Doesn’t matter—just laggy': 0,
// //         'To find meaning': 2, 'To suffer and laugh': 1.5, 'No clue—ask Google': 0.5, 'We don’t—shut up': 0,
// //         'Build a legacy in ruins': 2, 'Dance till I drop': 1, 'Talk to the walls': 0.5, 'End it—no point': 0,
// //         'Agree—chasing shadows': 1, 'Disagree—it’s rare but real': 2, 'Maybe—it’s a drug': 1.5, 'Who cares—pass the popcorn': 0,
// //       },
// //       psychology: {
// //         'My darkest secret': 2, 'A joke I don’t get': 1, 'Nothing—just creepy': 0.5, 'My real self': 1.5,
// //         'I’m invisible': 1, 'They’re deaf to pain': 1.5, 'I’m too quiet inside': 0.5, 'It’s all a dream': 2,
// //         'Cold silence': 1.5, 'Public humiliation': 0.5, 'Forgive but never forget': 2, 'Laugh—they’re pathetic': 1,
// //         'Ask why first': 2, 'Jump—why not?': 0, 'Tell it to shut up': 1.5, 'Pretend it’s background noise': 1,
// //         'My own—I pull back': 2, 'Society’s—cut me loose': 1.5, 'Family’s—tangled mess': 1, 'Fate’s—no escape': 0,
// //       },
// //       fear: {
// //         'Run—survival mode': 1, 'Stay—face the unknown': 2, 'Yell back, "Bring it!"': 1.5, 'Freeze—deer in headlights': 0,
// //         'Yes—stare it down': 2, 'No—barricade it': 0, 'Peek—then decide': 1.5, 'Pretend I’m not home': 0.5,
// //         'Panic—mind explodes': 0, 'Water—lungs give out': 1, 'Hope—I’d swim': 2, 'Boredom—waiting’s worse': 1.5,
// //         'Confront my demons': 2, 'Party like it’s 1999': 1, 'Hide under the bed': 0, 'Prove her wrong': 1.5,
// //         'Everyone—alone sucks': 1, 'Myself—identity’s all': 2, 'Both—nightmare fuel': 1.5, 'Neither—I’m unbreakable': 0,
// //       },
// //       'self-discovery': {
// //         '"The Fall"': 1, '"Lies I Told Myself"': 1.5, '"When I Gave Up"': 0, '"Still Writing It"': 2,
// //         '"Did I win?"': 1, '"Was it worth it?"': 2, '"Why so many regrets?"': 0.5, '"Can I redo it?"': 1.5,
// //         'Mind-reading—hear the hate': 1.5, 'Time-travel—stuck in loops': 1, 'Invisibility—forever unseen': 0.5, 'Strength—break everything': 2,
// //         'Exit—leave it behind': 1, 'Explore—find the truth': 2, 'Build a home there': 0.5, 'Burn it down': 1.5,
// //         '"You’re not enough"': 1, '"They’ll save you"': 0, '"It gets easier"': 1.5, '"You’ll figure it out"': 2,
// //       },
// //     };

// //     responses.forEach(r => {
// //       report[r.phase].score += scoring[r.phase][r.answer] || 0;
// //     });

// //     report.mentality.insight = report.mentality.score >= 7 ? 'Your mind’s a steel trap—sharp and relentless.' : report.mentality.score >= 4 ? 'You think on your feet, but chaos calls.' : 'Your head’s a mess—time to reboot.';
// //     report.philosophy.insight = report.philosophy.score >= 7 ? 'You wrestle with life’s big questions—deep soul.' : report.philosophy.score >= 4 ? 'You ponder, but don’t dive too deep.' : 'Life’s a blur—start asking why.';
// //     report.psychology.insight = report.psychology.score >= 7 ? 'You read minds—yours and theirs—scary good.' : report.psychology.score >= 4 ? 'You feel, but hide the cracks.' : 'You’re a vault—open up or rust.';
// //     report.fear.insight = report.fear.score >= 7 ? 'Fear bows to you—you’re untouchable.' : report.fear.score >= 4 ? 'You flinch, but fight—keep going.' : 'Fear owns you—break free or sink.';
// //     report['self-discovery'].insight = report['self-discovery'].score >= 7 ? 'You’ve cracked your code—masterpiece.' : report['self-discovery'].score >= 4 ? 'You’re digging—truth’s close.' : 'You’re lost—start the search.';

// //     const dominantPhase = Object.keys(report).reduce((a, b) => report[a].score > report[b].score ? a : b);
// //     const weakPhase = Object.keys(report).reduce((a, b) => report[a].score < report[b].score ? a : b);

// //     const recommendations = {
// //       mentality: ['"The Art of War" - Sun Tzu', '"Thinking, Fast and Slow" - Daniel Kahneman'],
// //       philosophy: ['"Thus Spoke Zarathustra" - Nietzsche', '"The Stranger" - Albert Camus'],
// //       psychology: ['"Man’s Search for Meaning" - Viktor Frankl', '"The Body Keeps the Score" - Bessel van der Kolk'],
// //       fear: ['"Dune" - Frank Herbert', '"Feel the Fear and Do It Anyway" - Susan Jeffers'],
// //       'self-discovery': ['"The Alchemist" - Paulo Coelho', '"Siddhartha" - Hermann Hesse'],
// //     };

// //     const advice = {
// //       mentality: 'Sharpen your mind—chaos is your teacher.',
// //       philosophy: 'Question everything—answers hide in the void.',
// //       psychology: 'Face your shadows—they’re louder than you think.',
// //       fear: 'Stare it down—fear’s just a loudmouth.',
// //       'self-discovery': 'Peel the layers—your truth’s buried deep.',
// //     };

// //     res.json({
// //       report,
// //       dominantPhase,
// //       weakPhase,
// //       strengths: report[dominantPhase].insight,
// //       weaknesses: report[weakPhase].insight,
// //       advice: advice[dominantPhase],
// //       recommendation: recommendations[dominantPhase][Math.floor(Math.random() * 2)],
// //       testDate: new Date().toLocaleDateString(),
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error generating report', error: err.message });
// //   }
// // };

// // export const submitFeedback = async (req, res) => {
// //   const { text } = req.body;
// //   if (!text || text.trim() === '') {
// //     return res.status(400).json({ message: 'Feedback cannot be empty' });
// //   }
// //   try {
// //     const feedback = await Feedback.create({ text, userID: req.user.id });
// //     res.status(201).json({ message: 'Feedback submitted successfully', feedbackID: feedback.feedbackID });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error submitting feedback', error: err.message });
// //   }
// // };


// //this is the previous ok
// import Response from '../models/Response.js';
// import Feedback from '../models/Feedback.js';

// // 25 Deep, Dark, Johan Liebert-esque Questions with Variety
// const questions = {
//   mentality: [
//     { text: "You’re in a locked room with a ticking bomb and a mirror. What do you see in your eyes?", options: ['Cold calculation', 'A flicker of panic', 'A smirk—I’m insane', 'Nothing—I’m already gone'] }, // Dark + Personal
//     { text: "Your boss dies mid-meeting, everyone looks at you. What’s your first move?", options: ['Take charge—opportunity calls', 'Play dumb—let it unfold', 'Laugh—it’s absurd', 'Poisoned him—I confess'] }, // Dark + Humorous
//     { text: "A voice in your head says, 'You’re the experiment.' How do you test it?", options: ['Break something—see the glitch', 'Talk back—demand proof', 'Ignore it—mind games', 'Believe it—I’m the lab rat'] }, // Different + Mysterious
//     { text: "You’re a chess piece in someone’s game—what piece are you, and who’s moving you?", options: ['King—me', 'Pawn—fate', 'Knight—chaos', 'Queen—someone cruel'] }, // Deep + Scenario
//     { text: "When did your mind last trick you into believing a lie—what was it?", options: ['I’d win that fight', 'They cared', 'I’m in control', 'Tomorrow’s better'] }, // Personal + Dark
//   ],
//   philosophy: [
//     { text: "You’re offered a deal: live forever, but forget your name. Sign it?", options: ['Yes—who needs a name?', 'No—I’m my story', 'Yes—but I’d carve it back', 'No—eternity’s a cage'] }, // Deep + Different
//     { text: "If the world’s a stage, what role did you never audition for?", options: ['The hero—I choke', 'The villain—I’d shine', 'The fool—I play it', 'The ghost—I’m already there'] }, // Dark + Personal
//     { text: "A child asks, 'What’s the point of living?' You answer:", options: ['To burn bright', 'To outsmart the end', 'To laugh at the mess', 'There’s none—cry'] }, // Humorous + Deep
//     { text: "You’re the last soul in a dead universe—what’s your final thought?", options: ['"I was enough"', '"What a joke"', '"I should’ve fought"', '"Silence suits me"'] }, // Dark + Scenario
//     { text: "If life’s a riddle, what’s the one clue you’ve missed?", options: ['Why I keep running', 'Who’s behind the mask', 'Where the exit is', 'That it’s all fake'] }, // Mysterious + Personal
//   ],
//   psychology: [
//     { text: "You’re a puppet dangling in a storm—who’s holding the strings?", options: ['My guilt—it’s heavy', 'Society—it’s relentless', 'A stranger—it’s eerie', 'No one—I’m cut loose'] }, // Dark + Different
//     { text: "What’s the one secret you’ve buried that claws its way back at night?", options: ['A betrayal I dealt', 'A love I killed', 'A scream I swallowed', 'I bury nothing—liar'] }, // Personal + Deep
//     { text: "You’re dissecting your mind—what’s the ugliest part you find?", options: ['The rage—it festers', 'The doubt—it eats', 'The mask—it fits', 'The void—it’s home'] }, // Dark + Introspective
//     { text: "A stranger smiles and says, 'I know what you did.' Your reply?", options: ['"Prove it"', '"So do I"', '"Good for you"', '"Then kill me"'] }, // Humorous + Mysterious
//     { text: "If your heart could scream one truth, who’d hear it first?", options: ['The one I lost', 'The one I hate', 'Myself—I’m deaf', 'No one—it’s mute'] }, // Personal + Dark
//   ],
//   fear: [
//     { text: "You’re alone, and the walls whisper your name—what’s chasing you?", options: ['My past—it’s fast', 'My shadow—it’s alive', 'My failure—it’s loud', 'Nothing—I’m paranoid'] }, // Dark + Scenario
//     { text: "What’s the one fear you’d sell your soul to erase?", options: ['Being forgotten', 'Being seen', 'Being trapped', 'Being me'] }, // Personal + Deep
//     { text: "You’re in a cage with your fear—it’s laughing. What’s it mocking?", options: ['My weak knees', 'My fake courage', 'My last hope', 'My whole life'] }, // Dark + Humorous
//     { text: "A hand grabs you from the dark—it’s yours. Why’s it pulling?", options: ['To save me', 'To drown me', 'To wake me', 'To end me'] }, // Different + Mysterious
//     { text: "You’re told you die in an hour—what’s the one thing you’d face?", options: ['The mirror—truth hurts', 'The phone—say it', 'The door—run', 'The bed—hide'] }, // Personal + Deep
//   ],
//   'self-discovery': [
//     { text: "You’re a book with one page left—what’s the last sentence?", options: ['"I fought till the end"', '"I laughed at the fall"', '"I found the light"', '"I lost the plot"'] }, // Deep + Scenario
//     { text: "What’s the one piece of you that’d shock the kid you were?", options: ['My scars—they’re medals', 'My silence—it’s loud', 'My dreams—they’re dust', 'My strength—it’s real'] }, // Personal + Dark
//     { text: "You’re a weapon—what do you destroy, and what do you guard?", options: ['Lies—my truth', 'Pain—my peace', 'Hope—my rage', 'Me—nothing left'] }, // Different + Deep
//     { text: "If you could steal one moment back, what’s it taste like?", options: ['A hug—warm', 'A win—sharp', 'A tear—bitter', 'A chance—gone'] }, // Personal + Emotional
//     { text: "You’re a shadow dancing alone—what’s the spotlight you crave?", options: ['To be known', 'To be free', 'To be feared', 'To be gone'] }, // Mysterious + Dark
//   ],
// };

// // Rest of psycheController.js with updated scoring
// export const startAnalysis = async (req, res) => {
//   try {
//     res.json({ phase: 'mentality', question: questions.mentality[0].text, options: questions.mentality[0].options, index: 0 });
//   } catch (err) {
//     res.status(500).json({ message: 'Error starting analysis', error: err.message });
//   }
// };

// export const submitAnswer = async (req, res) => {
//   const { phase, question, answer, index } = req.body;
//   if (!phase || !question || !answer || index === undefined) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }
//   try {
//     await Response.create({ phase, question, answer, userID: req.user.id });
//     const phases = ['mentality', 'philosophy', 'psychology', 'fear', 'self-discovery'];
//     const phaseQuestions = questions[phase];
//     const nextIndex = index + 1;

//     if (nextIndex < phaseQuestions.length) {
//       const nextQuestion = phaseQuestions[nextIndex];
//       res.json({ phase, question: nextQuestion.text, options: nextQuestion.options, index: nextIndex });
//     } else {
//       const currentPhaseIndex = phases.indexOf(phase);
//       const nextPhase = phases[currentPhaseIndex + 1];
//       if (nextPhase) {
//         const nextQuestion = questions[nextPhase][0];
//         res.json({ phase: nextPhase, question: nextQuestion.text, options: nextQuestion.options, index: 0 });
//       } else {
//         res.json({ message: 'Analysis complete', redirect: '/report' });
//       }
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Error submitting answer', error: err.message });
//   }
// };

// export const getReport = async (req, res) => {
//   try {
//     const responses = await Response.findAll({ where: { userID: req.user.id } });
//     if (responses.length < 25) {
//       return res.status(400).json({ message: 'Incomplete analysis—please answer all 25 questions' });
//     }

//     const report = {
//       mentality: { score: 0, insight: '' },
//       philosophy: { score: 0, insight: '' },
//       psychology: { score: 0, insight: '' },
//       fear: { score: 0, insight: '' },
//       'self-discovery': { score: 0, insight: '' },
//     };

//     const scoring = {
//       mentality: {
//         'Cold calculation': 2, 'A flicker of panic': 1, 'A smirk—I’m insane': 1.5, 'Nothing—I’m already gone': 0,
//         'Take charge—opportunity calls': 2, 'Play dumb—let it unfold': 1, 'Laugh—it’s absurd': 1.5, 'Poisoned him—I confess': 0,
//         'Break something—see the glitch': 1.5, 'Talk back—demand proof': 2, 'Ignore it—mind games': 1, 'Believe it—I’m the lab rat': 0,
//         'King—me': 2, 'Pawn—fate': 0, 'Knight—chaos': 1.5, 'Queen—someone cruel': 1,
//         'I’d win that fight': 1, 'They cared': 0, 'I’m in control': 1.5, 'Tomorrow’s better': 2,
//       },
//       philosophy: {
//         'Yes—who needs a name?': 1, 'No—I’m my story': 2, 'Yes—but I’d carve it back': 1.5, 'No—eternity’s a cage': 0,
//         'The hero—I choke': 1, 'The villain—I’d shine': 1.5, 'The fool—I play it': 0, 'The ghost—I’m already there': 2,
//         'To burn bright': 2, 'To outsmart the end': 1.5, 'To laugh at the mess': 1, 'There’s none—cry': 0,
//         '"I was enough"': 2, '"What a joke"': 1, '"I should’ve fought"': 1.5, '"Silence suits me"': 0,
//         'Why I keep running': 1, 'Who’s behind the mask': 1.5, 'Where the exit is': 0, 'That it’s all fake': 2,
//       },
//       psychology: {
//         'My guilt—it’s heavy': 1, 'Society—it’s relentless': 1.5, 'A stranger—it’s eerie': 2, 'No one—I’m cut loose': 0,
//         'A betrayal I dealt': 1.5, 'A love I killed': 2, 'A scream I swallowed': 1, 'I bury nothing—liar': 0,
//         'The rage—it festers': 1.5, 'The doubt—it eats': 1, 'The mask—it fits': 2, 'The void—it’s home': 0,
//         '"Prove it"': 2, '"So do I"': 1.5, '"Good for you"': 1, '"Then kill me"': 0,
//         'The one I lost': 1, 'The one I hate': 1.5, 'Myself—I’m deaf': 0, 'No one—it’s mute': 2,
//       },
//       fear: {
//         'My past—it’s fast': 1, 'My shadow—it’s alive': 2, 'My failure—it’s loud': 1.5, 'Nothing—I’m paranoid': 0,
//         'Being forgotten': 1, 'Being seen': 1.5, 'Being trapped': 0, 'Being me': 2,
//         'My weak knees': 0, 'My fake courage': 1, 'My last hope': 1.5, 'My whole life': 2,
//         'To save me': 1, 'To drown me': 1.5, 'To wake me': 2, 'To end me': 0,
//         'The mirror—truth hurts': 2, 'The phone—say it': 1.5, 'The door—run': 1, 'The bed—hide': 0,
//       },
//       'self-discovery': {
//         '"I fought till the end"': 2, '"I laughed at the fall"': 1, '"I found the light"': 1.5, '"I lost the plot"': 0,
//         'My scars—they’re medals': 2, 'My silence—it’s loud': 1.5, 'My dreams—they’re dust': 0, 'My strength—it’s real': 1,
//         'Lies—my truth': 1.5, 'Pain—my peace': 2, 'Hope—my rage': 1, 'Me—nothing left': 0,
//         'A hug—warm': 1, 'A win—sharp': 1.5, 'A tear—bitter': 0, 'A chance—gone': 2,
//         'To be known': 1, 'To be free': 2, 'To be feared': 1.5, 'To be gone': 0,
//       },
//     };

//     responses.forEach(r => {
//       report[r.phase].score += scoring[r.phase][r.answer] || 0;
//     });

//     report.mentality.insight = report.mentality.score >= 7 ? 'Your mind’s a blade—cuts through chaos.' : report.mentality.score >= 4 ? 'You twist reality—keep sharpening.' : 'Your thoughts betray you—wake up.';
//     report.philosophy.insight = report.philosophy.score >= 7 ? 'You’ve danced with the abyss—fearless soul.' : report.philosophy.score >= 4 ? 'You peek at truth—step closer.' : 'You’re blind—open your eyes.';
//     report.psychology.insight = report.psychology.score >= 7 ? 'You’ve dissected your soul—ruthless depth.' : report.psychology.score >= 4 ? 'You hide well—cracks show.' : 'You’re a ghost—find your pulse.';
//     report.fear.insight = report.fear.score >= 7 ? 'Fear kneels to you—unshakable.' : report.fear.score >= 4 ? 'You flinch, but stand—grow bolder.' : 'Fear’s your master—break the chains.';
//     report['self-discovery'].insight = report['self-discovery'].score >= 7 ? 'You’ve carved your truth—relentless fire.' : report['self-discovery'].score >= 4 ? 'You’re unmasking—keep peeling.' : 'You’re lost—start digging.';

//     const dominantPhase = Object.keys(report).reduce((a, b) => report[a].score > report[b].score ? a : b);
//     const weakPhase = Object.keys(report).reduce((a, b) => report[a].score < report[b].score ? a : b);

//     const recommendations = {
//       mentality: ['"The Art of War" - Sun Tzu', '"Crime and Punishment" - Dostoevsky'],
//       philosophy: ['"Thus Spoke Zarathustra" - Nietzsche', '"The Stranger" - Albert Camus'],
//       psychology: ['"Man’s Search for Meaning" - Viktor Frankl', '"The Divided Self" - R.D. Laing'],
//       fear: ['"Dune" - Frank Herbert', '"The Prince" - Machiavelli'],
//       'self-discovery': ['"The Alchemist" - Paulo Coelho', '"Notes from Underground" - Dostoevsky'],
//     };

//     const advice = {
//       mentality: 'Wield your mind—chaos is your canvas.',
//       philosophy: 'Stare into the void—it stares back.',
//       psychology: 'Unravel your knots—they’re your map.',
//       fear: 'Laugh at the dark—it’s weaker than you.',
//       'self-discovery': 'Burn the mask—your truth’s alive.',
//     };

//     res.json({
//       report,
//       dominantPhase,
//       weakPhase,
//       strengths: report[dominantPhase].insight,
//       weaknesses: report[weakPhase].insight,
//       advice: advice[dominantPhase],
//       recommendation: recommendations[dominantPhase][Math.floor(Math.random() * 2)],
//       testDate: new Date().toLocaleDateString(),
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error generating report', error: err.message });
//   }
// };

// export const submitFeedback = async (req, res) => {
//   const { text } = req.body;
//   if (!text || text.trim() === '') {
//     return res.status(400).json({ message: 'Feedback cannot be empty' });
//   }
//   try {
//     const feedback = await Feedback.create({ text, userID: req.user.id });
//     res.status(201).json({ message: 'Feedback submitted successfully', feedbackID: feedback.feedbackID });
//   } catch (err) {
//     res.status(500).json({ message: 'Error submitting feedback', error: err.message });
//   }
// };



//this is new
import Response from '../models/Response.js';
import Feedback from '../models/Feedback.js';

// 25 Deep, Dark, Johan Liebert-esque Questions with Variety
const questions = {
  mentality: [
    { text: "You’re in a locked room with a ticking bomb and a mirror. What do you see in your eyes?", options: ['Cold calculation', 'A flicker of panic', 'A smirk—I’m insane', 'Nothing—I’m already gone'] },
    { text: "Your boss dies mid-meeting, everyone looks at you. What’s your first move?", options: ['Take charge—opportunity calls', 'Play dumb—let it unfold', 'Laugh—it’s absurd', 'Poisoned him—I confess'] },
    { text: "A voice in your head says, 'You’re the experiment.' How do you test it?", options: ['Break something—see the glitch', 'Talk back—demand proof', 'Ignore it—mind games', 'Believe it—I’m the lab rat'] },
    { text: "You’re a chess piece in someone’s game—what piece are you, and who’s moving you?", options: ['King—me', 'Pawn—fate', 'Knight—chaos', 'Queen—someone cruel'] },
    { text: "When did your mind last trick you into believing a lie—what was it?", options: ['I’d win that fight', 'They cared', 'I’m in control', 'Tomorrow’s better'] },
  ],
  philosophy: [
    { text: "You’re offered a deal: live forever, but forget your name. Sign it?", options: ['Yes—who needs a name?', 'No—I’m my story', 'Yes—but I’d carve it back', 'No—eternity’s a cage'] },
    { text: "If the world’s a stage, what role did you never audition for?", options: ['The hero—I choke', 'The villain—I’d shine', 'The fool—I play it', 'The ghost—I’m already there'] },
    { text: "A child asks, 'What’s the point of living?' You answer:", options: ['To burn bright', 'To outsmart the end', 'To laugh at the mess', 'There’s none—cry'] },
    { text: "You’re the last soul in a dead universe—what’s your final thought?", options: ['"I was enough"', '"What a joke"', '"I should’ve fought"', '"Silence suits me"'] },
    { text: "If life’s a riddle, what’s the one clue you’ve missed?", options: ['Why I keep running', 'Who’s behind the mask', 'Where the exit is', 'That it’s all fake'] },
  ],
  psychology: [
    { text: "You’re a puppet dangling in a storm—who’s holding the strings?", options: ['My guilt—it’s heavy', 'Society—it’s relentless', 'A stranger—it’s eerie', 'No one—I’m cut loose'] },
    { text: "What’s the one secret you’ve buried that claws its way back at night?", options: ['A betrayal I dealt', 'A love I killed', 'A scream I swallowed', 'I bury nothing—liar'] },
    { text: "You’re dissecting your mind—what’s the ugliest part you find?", options: ['The rage—it festers', 'The doubt—it eats', 'The mask—it fits', 'The void—it’s home'] },
    { text: "A stranger smiles and says, 'I know what you did.' Your reply?", options: ['"Prove it"', '"So do I"', '"Good for you"', '"Then kill me"'] },
    { text: "If your heart could scream one truth, who’d hear it first?", options: ['The one I lost', 'The one I hate', 'Myself—I’m deaf', 'No one—it’s mute'] },
  ],
  fear: [
    { text: "You’re alone, and the walls whisper your name—what’s chasing you?", options: ['My past—it’s fast', 'My shadow—it’s alive', 'My failure—it’s loud', 'Nothing—I’m paranoid'] },
    { text: "What’s the one fear you’d sell your soul to erase?", options: ['Being forgotten', 'Being seen', 'Being trapped', 'Being me'] },
    { text: "You’re in a cage with your fear—it’s laughing. What’s it mocking?", options: ['My weak knees', 'My fake courage', 'My last hope', 'My whole life'] },
    { text: "A hand grabs you from the dark—it’s yours. Why’s it pulling?", options: ['To save me', 'To drown me', 'To wake me', 'To end me'] },
    { text: "You’re told you die in an hour—what’s the one thing you’d face?", options: ['The mirror—truth hurts', 'The phone—say it', 'The door—run', 'The bed—hide'] },
  ],
  'self-discovery': [
    { text: "You’re a book with one page left—what’s the last sentence?", options: ['"I fought till the end"', '"I laughed at the fall"', '"I found the light"', '"I lost the plot"'] },
    { text: "What’s the one piece of you that’d shock the kid you were?", options: ['My scars—they’re medals', 'My silence—it’s loud', 'My dreams—they’re dust', 'My strength—it’s real'] },
    { text: "You’re a weapon—what do you destroy, and what do you guard?", options: ['Lies—my truth', 'Pain—my peace', 'Hope—my rage', 'Me—nothing left'] },
    { text: "If you could steal one moment back, what’s it taste like?", options: ['A hug—warm', 'A win—sharp', 'A tear—bitter', 'A chance—gone'] },
    { text: "You’re a shadow dancing alone—what’s the spotlight you crave?", options: ['To be known', 'To be free', 'To be feared', 'To be gone'] },
  ],
};

export const startAnalysis = async (req, res) => {
  try {
    res.json({
      phase: 'mentality',
      question: questions.mentality[0].text,
      options: questions.mentality[0].options,
      index: 0,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error starting analysis', error: err.message });
  }
};

export const submitAnswer = async (req, res) => {
  const { phase, question, answer, index } = req.body;
  if (!phase || !question || !answer || index === undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    await Response.create({ phase, question, answer, userID: req.user.id });
    const phases = ['mentality', 'philosophy', 'psychology', 'fear', 'self-discovery'];
    const phaseQuestions = questions[phase];
    const nextIndex = index + 1;

    if (nextIndex < phaseQuestions.length) {
      const nextQuestion = phaseQuestions[nextIndex];
      res.json({ phase, question: nextQuestion.text, options: nextQuestion.options, index: nextIndex });
    } else {
      const currentPhaseIndex = phases.indexOf(phase);
      const nextPhase = phases[currentPhaseIndex + 1];
      if (nextPhase) {
        const nextQuestion = questions[nextPhase][0];
        res.json({ phase: nextPhase, question: nextQuestion.text, options: nextQuestion.options, index: 0 });
      } else {
        res.json({ message: 'Analysis complete', redirect: '/report' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: 'Error submitting answer', error: err.message });
  }
};

export const getReport = async (req, res) => {
  try {
    // Fetch all responses for the user, ordered by createdAt descending, and limit to the latest 25
    const responses = await Response.findAll({
      where: { userID: req.user.id },
      order: [['createdAt', 'DESC']], // Sort by most recent first
      limit: 25, // Take only the latest 25 responses
    });

    if (responses.length !== 25) {
      return res.status(400).json({ message: `Expected exactly 25 responses, got ${responses.length}` });
    }

    const report = {
      mentality: { score: 0, insight: '' },
      philosophy: { score: 0, insight: '' },
      psychology: { score: 0, insight: '' },
      fear: { score: 0, insight: '' },
      'self-discovery': { score: 0, insight: '' },
    };

    const scoring = {
      mentality: {
        'Cold calculation': 2, 'A flicker of panic': 1, 'A smirk—I’m insane': 1.5, 'Nothing—I’m already gone': 0,
        'Take charge—opportunity calls': 2, 'Play dumb—let it unfold': 1, 'Laugh—it’s absurd': 1.5, 'Poisoned him—I confess': 0,
        'Break something—see the glitch': 1.5, 'Talk back—demand proof': 2, 'Ignore it—mind games': 1, 'Believe it—I’m the lab rat': 0,
        'King—me': 2, 'Pawn—fate': 0, 'Knight—chaos': 1.5, 'Queen—someone cruel': 1,
        'I’d win that fight': 1, 'They cared': 0, 'I’m in control': 1.5, 'Tomorrow’s better': 2,
      },
      philosophy: {
        'Yes—who needs a name?': 1, 'No—I’m my story': 2, 'Yes—but I’d carve it back': 1.5, 'No—eternity’s a cage': 0,
        'The hero—I choke': 1, 'The villain—I’d shine': 1.5, 'The fool—I play it': 0, 'The ghost—I’m already there': 2,
        'To burn bright': 2, 'To outsmart the end': 1.5, 'To laugh at the mess': 1, 'There’s none—cry': 0,
        '"I was enough"': 2, '"What a joke"': 1, '"I should’ve fought"': 1.5, '"Silence suits me"': 0,
        'Why I keep running': 1, 'Who’s behind the mask': 1.5, 'Where the exit is': 0, 'That it’s all fake': 2,
      },
      psychology: {
        'My guilt—it’s heavy': 1, 'Society—it’s relentless': 1.5, 'A stranger—it’s eerie': 2, 'No one—I’m cut loose': 0,
        'A betrayal I dealt': 1.5, 'A love I killed': 2, 'A scream I swallowed': 1, 'I bury nothing—liar': 0,
        'The rage—it festers': 1.5, 'The doubt—it eats': 1, 'The mask—it fits': 2, 'The void—it’s home': 0,
        '"Prove it"': 2, '"So do I"': 1.5, '"Good for you"': 1, '"Then kill me"': 0,
        'The one I lost': 1, 'The one I hate': 1.5, 'Myself—I’m deaf': 0, 'No one—it’s mute': 2,
      },
      fear: {
        'My past—it’s fast': 1, 'My shadow—it’s alive': 2, 'My failure—it’s loud': 1.5, 'Nothing—I’m paranoid': 0,
        'Being forgotten': 1, 'Being seen': 1.5, 'Being trapped': 0, 'Being me': 2,
        'My weak knees': 0, 'My fake courage': 1, 'My last hope': 1.5, 'My whole life': 2,
        'To save me': 1, 'To drown me': 1.5, 'To wake me': 2, 'To end me': 0,
        'The mirror—truth hurts': 2, 'The phone—say it': 1.5, 'The door—run': 1, 'The bed—hide': 0,
      },
      'self-discovery': {
        '"I fought till the end"': 2, '"I laughed at the fall"': 1, '"I found the light"': 1.5, '"I lost the plot"': 0,
        'My scars—they’re medals': 2, 'My silence—it’s loud': 1.5, 'My dreams—they’re dust': 0, 'My strength—it’s real': 1,
        'Lies—my truth': 1.5, 'Pain—my peace': 2, 'Hope—my rage': 1, 'Me—nothing left': 0,
        'A hug—warm': 1, 'A win—sharp': 1.5, 'A tear—bitter': 0, 'A chance—gone': 2,
        'To be known': 1, 'To be free': 2, 'To be feared': 1.5, 'To be gone': 0,
      },
    };

    responses.forEach(r => {
      report[r.phase].score += scoring[r.phase][r.answer] || 0;
    });


    report.mentality.insight = report.mentality.score >= 7 ? 'Your mind’s a blade—cuts through chaos.' : report.mentality.score >= 4 ? 'You twist reality—keep sharpening.' : 'Your thoughts betray you—wake up.';
    report.philosophy.insight = report.philosophy.score >= 7 ? 'You’ve danced with the abyss—fearless soul.' : report.philosophy.score >= 4 ? 'You peek at truth—step closer.' : 'You’re blind—open your eyes.';
    report.psychology.insight = report.psychology.score >= 7 ? 'You’ve dissected your soul—ruthless depth.' : report.psychology.score >= 4 ? 'You hide well—cracks show.' : 'You’re a ghost—find your pulse.';
    report.fear.insight = report.fear.score >= 7 ? 'Fear kneels to you—unshakable.' : report.fear.score >= 4 ? 'You flinch, but stand—grow bolder.' : 'Fear’s your master—break the chains.';
    report['self-discovery'].insight = report['self-discovery'].score >= 7 ? 'You’ve carved your truth—relentless fire.' : report['self-discovery'].score >= 4 ? 'You’re unmasking—keep peeling.' : 'You’re lost—start digging.';

    const dominantPhase = Object.keys(report).reduce((a, b) => report[a].score > report[b].score ? a : b);
    const weakPhase = Object.keys(report).reduce((a, b) => report[a].score < report[b].score ? a : b);

    const recommendations = {
      mentality: ['"The Art of War" - Sun Tzu', '"Crime and Punishment" - Dostoevsky'],
      philosophy: ['"Thus Spoke Zarathustra" - Nietzsche', '"The Stranger" - Albert Camus'],
      psychology: ['"Man’s Search for Meaning" - Viktor Frankl', '"The Divided Self" - R.D. Laing'],
      fear: ['"Dune" - Frank Herbert', '"The Prince" - Machiavelli'],
      'self-discovery': ['"The Alchemist" - Paulo Coelho', '"Notes from Underground" - Dostoevsky'],
    };

    const advice = {
      mentality: 'Wield your mind—chaos is your canvas.',
      philosophy: 'Stare into the void—it stares back.',
      psychology: 'Unravel your knots—they’re your map.',
      fear: 'Laugh at the dark—it’s weaker than you.',
      'self-discovery': 'Burn the mask—your truth’s alive.',
    };

    res.json({
      report,
      dominantPhase,
      weakPhase,
      strengths: report[dominantPhase].insight,
      weaknesses: report[weakPhase].insight,
      advice: advice[dominantPhase],
      recommendation: recommendations[dominantPhase][Math.floor(Math.random() * 2)],
      testDate: new Date().toLocaleDateString(),
    });
  } catch (err) {
    res.status(500).json({ message: 'Error generating report', error: err.message });
  }
};

export const submitFeedback = async (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ message: 'Feedback cannot be empty' });
  }
  try {
    const feedback = await Feedback.create({ text, userID: req.user.id });
    res.status(201).json({ message: 'Feedback submitted successfully', feedbackID: feedback.feedbackID });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting feedback', error: err.message });
  }
};
