import React from "react";
import { Typewriter } from "react-simple-typewriter";
import transformers from "../assets/transformers.jpg";
import "../styles/Home.css";
import About from "./About";

function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{ backgroundImage: `url(${transformers})` }}
      >
        <div className="home-overlay"></div>

        <div className="home-content">

          <div className="home-title">
            Vimal Transformer
          </div>

          <div className="home-tagline">
            We Are{" "}
            <span className="home-animated-text">
              <Typewriter
                words={[
                  "Manufacturing Excellence",
                  "Rebuilding Power Systems",
                  "Innovating Energy Solutions",
                  "Delivering Industrial Reliability",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <button className="home-button">
            Explore Our Services
          </button>

        </div>
      </div>

      <About />
    </>
  );
}

export default Home;