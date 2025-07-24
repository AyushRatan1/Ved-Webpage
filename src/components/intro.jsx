"use client";
import React, { useRef, useEffect, useState } from "react";

const Intro = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0); // For parallax effect
  const [isVideoEnded, setIsVideoEnded] = useState(false); // To check if video ended
  const [isAutoplaySupported, setIsAutoplaySupported] = useState(true); // Check if autoplay is supported

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.8; // Adjust speed factor for parallax
        setParallaxOffset(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // Detect autoplay issues on iOS and other mobile devices
    const videoElement = videoRef.current;
    if (videoElement) {
      const playVideo = async () => {
        try {
          await videoElement.play();
        } catch (error) {
          setIsAutoplaySupported(false);
        }
      };
      playVideo();
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Set video end state when the video ends
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video when it ends
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src="/int2.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // Trigger video end handler
        onError={() => setIsAutoplaySupported(false)} // Handle autoplay error
      />

      {/* VED AI Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${parallaxOffset - 150}px)`, // Move text higher based on scroll
          opacity: isVideoEnded ? 1 : 1, // Fade-in effect after video ends
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1
          className="text-white text-9xl font-bold"
          style={{
            fontFamily: "CustomNeoFont, sans-serif", // Use custom font
          }}
        >
          VED AI
        </h1>
      </div>

      {/* Fallback button for autoplay issues on iOS */}
      {!isAutoplaySupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play(); // Try playing the video after user interaction
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white text-xl font-bold rounded"
          >
            Play Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Intro;
