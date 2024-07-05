import "/src/styles/projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="tip">
        <span>Tip:</span> Try typing
        <span style={{ marginLeft: "1%" }}>
          &apos;<span style={{ color: "cyan" }}>cd windfall-matchup</span>&apos;
        </span>
      </div>
      <span>Windfall Matchup</span>
      <span>Node Messsage Board</span>
      <span>Video Game Archive</span>
      <span>CV Maker</span>
      <span>Serena Shopping</span>
    </section>
  );
};

export default Projects;
