import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import animationGif from "../assets/animation.gif";
import physicsKG from "../assets/physicsKG.png";
import groupSVG from "../assets/Group-1332179016.svg";
import "../index.css";

const supabaseUrl = 'https://jjqogbuwqlqhgykuicei.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqcW9nYnV3cWxxaGd5a3VpY2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMzk0MzYsImV4cCI6MjA2ODYxNTQzNn0.yL2HT3cdjoo1mg5wSbkC0TdAmUgPC4SbHKo0kjpqzJ0';
const supabase = createClient(supabaseUrl, supabaseKey);

const ExperiencePage = () => {
  // Inject Material Icons font if not present
  useEffect(() => {
    if (!document.getElementById('material-icons-font')) {
      const link = document.createElement('link');
      link.id = 'material-icons-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(link);
    }
  }, []);

  // Modal state
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: "", email: "", school: "" });
  const [loading, setLoading] = useState(false);

  // Handlers for modals
  const openModal = (setter) => setter(true);
  const closeModal = (setter) => setter(false);

  // Demo form submit handler (Supabase)
  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, school } = demoForm;
    const { error } = await supabase.from('demo_requests').insert([{ name, email, school }]);
    setLoading(false);
    if (error) {
      alert('Error submitting request: ' + error.message);
    } else {
      alert('Thank you for your request! We will be in touch soon.');
      setDemoForm({ name: "", email: "", school: "" });
      setDemoModalOpen(false);
    }
  };

  // Sign In/Up dummy handlers
  const handleSignIn = (e) => {
    e.preventDefault();
    alert('Sign In functionality not implemented.');
    setSignInModalOpen(false);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign Up functionality not implemented.');
    setSignUpModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen font-[Poppins,sans-serif]">
      {/* Header */}
      <header className="bg-white fixed w-full z-40 top-0 start-0 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <a className="flex items-center space-x-3" href="#">
              <span className="material-icons text-indigo-600 text-3xl">auto_awesome</span>
              <span className="text-2xl font-bold text-gray-900">Ved AI</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-gray-600 hover:text-indigo-600" href="#features">Features</a>
              <a className="text-gray-600 hover:text-indigo-600" href="#how-it-works">How It Works</a>
              <a className="text-gray-600 hover:text-indigo-600" href="#safety">Safety</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600">
                <span className="material-icons">search</span>
              </button>
              <button onClick={() => openModal(setSignInModalOpen)} className="text-gray-600 hover:text-indigo-600">Sign In</button>
              <button onClick={() => openModal(setSignUpModalOpen)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Sign Up</button>
            </div>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
            <div className="text-center md:text-left md:col-span-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 extra-loose-leading max-w-3xl">Schools partner with us to give their students the best personal AI Tutor at home</h1>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button onClick={() => openModal(setDemoModalOpen)} className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 w-full sm:w-auto">Book a Live Demo</button>
              </div>
            </div>
            <div className="relative md:col-span-5 justify-self-center z-10 transform">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-indigo-500 rounded-full z-0"></div>
              <img src={animationGif} alt="Hero animation" className="relative z-10 rounded-lg w-full mx-auto" />
              <div className="absolute bottom-24 right-24 w-24 h-24 bg-yellow-400 rounded-full z-20"></div>
              <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-16 h-16 bg-pink-500 rounded-full z-20"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Ved is the only AI built to teach</h2>
            <p className="mt-4 text-lg text-gray-600">Discover what makes Ved AI the perfect learning companion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-green-100 mx-auto mb-6">
                  <span className="material-icons text-green-600 text-4xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 h-24 flex items-center justify-center">Always gives the right prescribed answer</h3>
              </div>
              <p className="text-gray-600 mt-auto">Grounded in teacher's lesson plan, notes, prescribed book chapters, approved video lessons, and assigned questions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-6">
                  <span className="material-icons text-blue-600 text-4xl">psychology</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 h-24 flex items-center justify-center">Builds understanding, not dependency on AI</h3>
              </div>
              <p className="text-gray-600 mt-auto">Asks questions to teach concepts that are lacking in the student's understanding instead of giving direct answers</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-yellow-100 mx-auto mb-6">
                  <span className="material-icons text-yellow-600 text-4xl">emoji_objects</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 h-24 flex items-center justify-center">Focused on developing critical thinking</h3>
              </div>
              <p className="text-gray-600">Interacts with the students using dialogue, mind maps, videos and graphs to help them come to the right answer</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-purple-100 mx-auto mb-6">
                  <span className="material-icons text-purple-600 text-4xl">person</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 h-24 flex items-center justify-center">Deeply personalised to each student's proficiency</h3>
              </div>
              <p className="text-gray-600">Maps a student's proficiency across topics to adapt difficulty, methodology, depth and conversational style</p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-24 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How Ved AI Works</h2>
            <p className="mt-4 text-lg text-gray-600">A step-by-step journey to better understanding.</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-indigo-200 hidden md:block"></div>
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="md:pr-8 text-center md:text-left">
                <div className="inline-block bg-indigo-600 text-white rounded-full px-4 py-2 mb-4 font-bold">Step 1</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Grounded in your course material to always give the right answers</h3>
                <p className="text-gray-600">Ved ingests everything from your teacher's session plan and scope to assigned exercise answers for reliably giving correct answers from prescribed material.</p>
              </div>
              <div className="mt-8 md:mt-0 flex items-center justify-center space-x-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow"><span className="material-icons text-blue-500">description</span><span>Session Plan</span></div>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow"><span className="material-icons text-yellow-500">edit_note</span><span>Student Notes</span></div>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow"><span className="material-icons text-green-500">menu_book</span><span>Book Chapters</span></div>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow"><span className="material-icons text-red-500">play_circle</span><span>Videos</span></div>
                  <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow"><span className="material-icons text-purple-500">quiz</span><span>Questions</span></div>
                </div>
                <span className="material-icons text-6xl text-gray-400">arrow_forward</span>
                <div className="flex items-center justify-center h-32 w-32 rounded-full bg-indigo-100">
                  <span className="material-icons text-indigo-600 text-6xl">auto_awesome</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white hidden md:block"></div>
            </div>
            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="md:pl-8 text-center md:text-left md:order-2">
                <div className="inline-block bg-indigo-600 text-white rounded-full px-4 py-2 mb-4 font-bold">Step 2</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Builds understanding rather than giving answers</h3>
                <p className="text-gray-600">Ved explains each doubt by listing the core concepts, assessing what lacks in student's understanding, and explaining that with dialogue and visuals.</p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-center justify-center md:order-1">
                <div className="space-y-4 w-full max-w-md">
                  <div className="flex items-start p-3 bg-white rounded-lg shadow"><span className="material-icons text-blue-500 mr-3">lightbulb</span><span>Lists core concepts needed to understand the doubt</span></div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow"><span className="material-icons text-yellow-500 mr-3">memory</span><span>Checks memory to judge student's proficiency</span></div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow"><span className="material-icons text-green-500 mr-3">help_outline</span><span>Asks clarifying questions to get what exactly is lacking in the student's understanding</span></div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow"><span className="material-icons text-red-500 mr-3">visibility</span><span>Explains the missing concepts using dialogue, visualisation and prescribed material</span></div>
                  <div className="flex items-start p-3 bg-white rounded-lg shadow"><span className="material-icons text-purple-500 mr-3">task_alt</span><span>Confirming understanding with assessing questions</span></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white hidden md:block"></div>
            </div>
            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="md:pr-8 text-center md:text-left">
                <div className="inline-block bg-indigo-600 text-white rounded-full px-4 py-2 mb-4 font-bold">Step 3</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Deeply personalised to each student's proficiency</h3>
                <p className="text-gray-600">Ved adapts it's difficulty level, approach and focus based on memory of each student's proficiency and learning patterns. Each conversation helps Ved learn what works best for a student.</p>
              </div>
              <div className="mt-8 md:mt-0 flex items-center justify-center">
                <img alt="Physics illustration" className="rounded-lg w-full max-w-md" src={physicsKG} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white hidden md:block"></div>
            </div>
            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center relative" id="safety">
              <div className="md:pl-8 text-center md:text-left md:order-2">
                <div className="inline-block bg-indigo-600 text-white rounded-full px-4 py-2 mb-4 font-bold">Step 4</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Built for safety and preserving critical thinking</h3>
                <p className="text-gray-600">Ved comes with strong guardrails to prevent getting direct answers for assigned homework, giving out of scope answers from the internet, and blocking any harmful content.</p>
              </div>
              <div className="mt-8 md:mt-0 flex items-center justify-center md:order-1">
                <img alt="Safety illustration" className="rounded-lg w-full max-w-md" src={groupSVG} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a className="flex items-center space-x-3" href="#">
                <span className="material-icons text-indigo-400 text-3xl">auto_awesome</span>
                <span className="text-2xl font-bold text-white">Ved AI</span>
              </a>
              <p className="mt-4 text-gray-400">Your Personal AI Tutor for K-12 education.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-white" href="#">Home</a></li>
                <li><a className="text-gray-400 hover:text-white" href="#features">Features</a></li>
                <li><a className="text-gray-400 hover:text-white" href="#how-it-works">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-white" href="#">FAQ</a></li>
                <li><a className="text-gray-400 hover:text-white" href="#">Contact Us</a></li>
                <li><a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
            © 2024 Ved AI. All rights reserved.
          </div>
        </div>
      </footer>
      {/* Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Book a Live Demo</h2>
              <button onClick={() => closeModal(setDemoModalOpen)} className="text-gray-500 hover:text-gray-900">
                <span className="material-icons">close</span>
              </button>
            </div>
            <form onSubmit={handleDemoSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required value={demoForm.name} onChange={e => setDemoForm({ ...demoForm, name: e.target.value })} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required value={demoForm.email} onChange={e => setDemoForm({ ...demoForm, email: e.target.value })} />
              </div>
              <div className="mb-4">
                <label htmlFor="school" className="block text-gray-700 font-semibold mb-2">School/Organization</label>
                <input type="text" id="school" name="school" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required value={demoForm.school} onChange={e => setDemoForm({ ...demoForm, school: e.target.value })} />
              </div>
              <div className="text-right">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700" disabled={loading}>{loading ? 'Submitting...' : 'Submit Request'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Sign In Modal */}
      {signInModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
              <button onClick={() => closeModal(setSignInModalOpen)} className="text-gray-500 hover:text-gray-900">
                <span className="material-icons">close</span>
              </button>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label htmlFor="signin-email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="signin-email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="signin-password" className="block text-gray-700 font-semibold mb-2">Password</label>
                <input type="password" id="signin-password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
              </div>
              <div className="text-right">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Sign Up Modal */}
      {signUpModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
              <button onClick={() => closeModal(setSignUpModalOpen)} className="text-gray-500 hover:text-gray-900">
                <span className="material-icons">close</span>
              </button>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label htmlFor="signup-name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="signup-name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="signup-email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="block text-gray-700 font-semibold mb-2">Password</label>
                <input type="password" id="signup-password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
              </div>
              <div className="text-right">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage; 