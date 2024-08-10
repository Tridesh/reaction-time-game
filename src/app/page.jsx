'use client'
import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Home = () => {
  const [firstCircleColored, setFirstCircleColored] = useState(false);
  const [secondCircleColored, setSecondCircleColored] = useState(false);
  const [thirdCircleColored, setThirdCircleColored] = useState(false);
  const [allGreen, setAllGreen] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const [greenVisibleTime, setGreenVisibleTime] = useState(null); // Store time when green color becomes visible
  const [timeDifference, setTimeDifference] = useState(null); // Store time difference
  const [audioPlayed, setAudioPlayed] = useState(false); // Track if audio has been played

  const buttonRef = useRef(null);

  // Reference to the audio element
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (!audioPlayed) {
      // Play the audio
      if (audioRef.current) {
        audioRef.current.play();
        setAudioPlayed(true); // Set audioPlayed to true after playing the audio
      }
    }

    if (allGreen) {
      const currentTime = new Date().getTime();
      if (greenVisibleTime) {
        const diff = (currentTime - greenVisibleTime) / 1000; // Convert milliseconds to seconds
        setTimeDifference(diff);
        console.log(`Time difference: ${diff.toFixed(4)} seconds`);
      }
    }
    
    setButtonText("Ready");
    setFirstCircleColored(true);
    
    setTimeout(() => {
      setSecondCircleColored(true);
    }, 400); // 1 second delay

    setTimeout(() => {
      setThirdCircleColored(true);
      
      setTimeout(() => {
        setAllGreen(true);
        setGreenVisibleTime(new Date().getTime()); // Record the time when green color becomes visible
      }, 1100); // 1 second delay after third circle turns red
    }, 2800); // 2 seconds delay
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Enter') {
        event.preventDefault(); // Prevent default space bar behavior (scrolling)
        if (buttonRef.current) {
          buttonRef.current.click(); // Programmatically click the button
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="logo-pos">
        <img className="logo" src="/images/logo.png" alt="logo" />
      </div>
      {timeDifference !== null && (
        <div className="time"><span className="text">Reaction time:</span> <span className="time-sec">{timeDifference.toFixed(4)} </span> seconds</div>
      )}
      <div className="signal">
        <div className="holder-pos">
          <div className="holder"></div>
        </div>
        <div className="holder-stack">
          <div className="box-holder"></div>
          <div className="box-holder"></div>
          <div className="box-holder"></div>
          <div className="box-holder"></div>
          <div className="box-holder"></div>
        </div>
        <div className="first-signal-stack">
          <div className={allGreen ? "colored-all-green1" : (firstCircleColored ? "colored-first-circle" : "first-circle")}></div>
          <div className={allGreen ? "colored-all-green1" : (firstCircleColored ? "colored-first-circle" : "first-circle")}></div>
          <div className={allGreen ? "colored-all-green1" : (firstCircleColored ? "colored-first-circle" : "first-circle")}></div>
          <div className={allGreen ? "colored-all-green1" : (firstCircleColored ? "colored-first-circle" : "first-circle")}></div>
          <div className={allGreen ? "colored-all-green1" : (firstCircleColored ? "colored-first-circle" : "first-circle")}></div>
        </div>
        {/* <div className="right-top-prop">
          <div className="right-top" id="right1"></div>
          <div className="right-top" id="right2"></div>
          <div className="right-top" id="right3"></div>
          <div className="right-top" id="right4"></div>
        </div> */}
        {/* <div className="left-top-prop">
          <div className="left-top" id="left1"></div>
          <div className="left-top" id="left2"></div>
          <div className="left-top" id="left3"></div>
          <div className="left-top" id="left4"></div>
        </div> */}
        <div className="second-signal-stack">
          <div className={allGreen ? "colored-all-green2" : (secondCircleColored ? "colored-second-circle" : "second-circle")}></div>
          <div className={allGreen ? "colored-all-green2" : (secondCircleColored ? "colored-second-circle" : "second-circle")}></div>
          <div className={allGreen ? "colored-all-green2" : (secondCircleColored ? "colored-second-circle" : "second-circle")}></div>
          <div className={allGreen ? "colored-all-green2" : (secondCircleColored ? "colored-second-circle" : "second-circle")}></div>
          <div className={allGreen ? "colored-all-green2" : (secondCircleColored ? "colored-second-circle" : "second-circle")}></div>
        </div>
        {/* <div className="right-bottom-prop">
          <div className="right-bottom" id="rightb1"></div>
          <div className="right-bottom" id="rightb2"></div>
          <div className="right-bottom" id="rightb3"></div>
          <div className="right-bottom" id="rightb4"></div>
        </div>
        <div className="left-bottom-prop">
          <div className="left-bottom" id="leftb1"></div>
          <div className="left-bottom" id="leftb2"></div>
          <div className="left-bottom" id="leftb3"></div>
          <div className="left-bottom" id="leftb4"></div>
        </div> */}
        <div className="third-signal-stack">
          <div className={allGreen ? "colored-all-green" : (thirdCircleColored ? "colored-third-circle" : "third-circle")}></div>
          <div className={allGreen ? "colored-all-green" : (thirdCircleColored ? "colored-third-circle" : "third-circle")}></div>
          <div className={allGreen ? "colored-all-green" : (thirdCircleColored ? "colored-third-circle" : "third-circle")}></div>
          <div className={allGreen ? "colored-all-green" : (thirdCircleColored ? "colored-third-circle" : "third-circle")}></div>
          <div className={allGreen ? "colored-all-green" : (thirdCircleColored ? "colored-third-circle" : "third-circle")}></div>
        </div>
        <div className="signal-box">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="start-button">
        <button 
          ref={buttonRef} 
          onClick={handleButtonClick} 
          className="start-button-class">
          {buttonText}
        </button>
      </div>
      {/* Audio element */}
      <audio ref={audioRef} src="./beep.mp3" />
    </div>
  );
}

export default Home;
