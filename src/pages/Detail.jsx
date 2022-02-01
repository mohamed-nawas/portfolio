import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../others/project-data";

export default function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <>
      <section className="project-detail">
        <section className="detail-description">
          <h3 style={{ color: "white", fontWeight: "bold" }}>
            {project.projectTitle}
          </h3>
          {project.projectDescription.map((p) => (
            <p key={p} style={{ color: "white" }}>
              {p}
            </p>
          ))}
          <button style={{ width: 90, height: 30, borderRadius: 5 }}>
            <a
              target="_blank"
              href={project.repoLink}
              style={{ color: "#2b2f32", fontWeight: "bold" }}
            >
              Repo Link
            </a>
          </button>
        </section>
        <section className="detail-other">
          <section className="detail-concepts">
            <h3 className="other-heading">Technologies</h3>
            <ul>
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
          <section className="detail-technology">
            <h3 className="other-heading">Concepts</h3>
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
