import React from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { InlineWidget } from "react-calendly";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="left-column">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                {/* Content in the left column */}
              </div>
            }
          </TrackVisibility>
        </div>
        <div className="right-column">
          {/* Calendly inline widget */}
          <InlineWidget url="https://calendly.com/mridulthareja/demo-call" />
        </div>
      </div>
    </section>
  );
};
