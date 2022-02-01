import React from "react";
import ReactPlayer from "react-player";
import ImageSlider from "../components/ImageSlider";
import { useNavigate } from "react-router-dom";
import { projects } from "../others/project-data";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section>
        {projects.map((i) => {
          return (
            <section
              key={i.id}
              className={
                i.platform === "Web"
                  ? "project-item-web"
                  : "project-item-mobile"
              }
            >
              <section id="home-content">
                <ImageSlider slides={i.sliderData} platform={i.platform} />
              </section>
              <section id="home-content">
                {i.platform === "Mobile" ? (
                  <div className="react-player-mobile">
                    <ReactPlayer
                      playing={false}
                      controls={true}
                      url={i.videoPath}
                      width="100%"
                      height="100%"
                    />
                  </div>
                ) : (
                  <div className="react-player-web">
                    <ReactPlayer
                      playing={false}
                      controls={true}
                      url={i.videoPath}
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
                <button
                  style={{ marginTop: 20 }}
                  className={
                    i.platform === "Web" ? "read-btn" : "read-btn-mobile"
                  }
                  onClick={() => navigate(`/projects/${i.id}`)}
                >
                  Read
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
}
