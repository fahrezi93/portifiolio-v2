import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { useEffect, useState, useRef } from 'react';

const CircularProgressBar = ({ percentage, title }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);
  const progressStarted = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !progressStarted.current) {
          setIsVisible(true);
          progressStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setProgress(0); // Explicitly set to 0 first
      const startTime = Date.now();
      const duration = 1500; // 1.5 seconds

      const updateProgress = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        
        if (elapsed < duration) {
          const nextProgress = Math.min(
            Math.floor((elapsed / duration) * percentage),
            percentage
          );
          setProgress(nextProgress);
          requestAnimationFrame(updateProgress);
        } else {
          setProgress(percentage);
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [isVisible, percentage]);

  return (
    <div className="circular-progress-container" ref={progressRef}>
      <div 
        className={`circular-progress ${isVisible ? 'animate' : ''}`}
        style={{ "--progress": `${progress * 3.6}deg` }}
      >
        <div className="circular-progress-value">
          {progress}%
        </div>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export const Skills = () => {
  const skills = [
    { title: "Graphic Design", percentage: 90 },
    { title: "UI/UX Design", percentage: 80 },
    { title: "Video Editing", percentage: 85 },
    { title: "Motion Graphic", percentage: 75 },
    { title: "Photofraphy/Videography", percentage: 90 },
    { title: "Web Development", percentage: 70 }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => (
                                <div className="item" key={index}>
                                    <CircularProgressBar 
                                        percentage={skill.percentage}
                                        title={skill.title}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
