import React from "react";
import ReactPlayer from "react-player";
import ImageSlider from "../components/ImageSlider";
import { useNavigate } from "react-router-dom";
import { projects } from "../others/project-data";
import Button from "react-bootstrap/Button";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section style={{ backgroundColor: "#2b2f32" }}>
        {projects.map((i) => {
          return (
            <section
              key={i.id}
              className="row"
              style={{ paddingTop: 50, paddingBottom: 50 }}
            >
              <section className="col-lg-6 d-flex justify-content-center">
                <ImageSlider slides={i.sliderData} platform={i.platform} />
              </section>
              <section
                className="col-lg-6 d-flex justify-content-center"
                style={{ marginTop: 30 }}
              >
                <div>
                  <div className="react-player">
                    <ReactPlayer
                      playing={false}
                      controls={true}
                      url={i.videoPath}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <Button
                    variant="outline-primary"
                    style={{ marginTop: 20 }}
                    onClick={() => navigate(`/projects/${i.id}`)}
                  >
                    Description
                  </Button>
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
}
