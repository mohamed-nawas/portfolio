import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../others/project-data";
import Button from "react-bootstrap/Button";

export default function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <>
      <section
        className="row"
        style={{
          backgroundColor: "#26292c",
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        <section className="col-md-8">
          <h3 style={{ color: "white", fontWeight: "bold" }}>
            {project.projectTitle}
          </h3>
          {project.projectDescription.map((p) => (
            <p key={p} style={{ color: "white" }}>
              {p}
            </p>
          ))}
          <Button
            variant="outline-primary"
            style={{ marginTop: 20 }}
            id="repo-btn"
          >
            <a
              target="_blank"
              href={project.repoLink}
              style={{
                color: "white",
                textDecoration: "none",
              }}
              rel="noreferrer"
            >
              Repo Link
            </a>
          </Button>
        </section>
        <section className="col-md-4">
          <section className="detail-other">
            <h3 style={{ color: "white", marginLeft: 15 }}>Technologies</h3>
            <ul>
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
          <section className="detail-other">
            <h3 style={{ color: "white", marginLeft: 15 }}>Concepts</h3>
            <ul>
              {project.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
