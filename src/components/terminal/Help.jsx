import "/src/styles/help.scss";

const CommandList = () => {
  return (
    <section className="command_list">
      <div className="type_commands">
        <span>
          <p className="command">&apos;about&apos;</p>
          <p>About this cool guy</p>
        </span>
        <span>
          <p className="command">&apos;projects&apos;</p>
          <p>A reason for you to hire me</p>
        </span>
        <span>
          <p className="command">&apos;resume&apos;</p>
          <p>View my resume</p>
        </span>
        <span>
          <p className="command">&apos;cd&apos;</p>
          <p>Change directory</p>
        </span>
        <span>
          <p className="command">&apos;exit&apos;</p>
          <p>Normal view</p>
        </span>
        <span>
          <p className="command">&apos;theme set&apos;</p>
          <p>Change terminal style</p>
        </span>
        <span>
          <p className="command">&apos;clear&apos;</p>
          <p>Clear the terminal</p>
        </span>
      </div>
      <div className="keyboardShortcuts">
        <div>
          Press <span style={{ color: "rgb(153, 153, 0)" }}>[Tab]</span> to auto
          complete
        </div>
        <div>
          Press{" "}
          <span style={{ color: "rgb(153, 153, 0)" }}>[Ctrl] + [Bck]</span> to
          clear input
        </div>
        <div>
          Press{" "}
          <span style={{ color: "rgb(153, 153, 0)" }}>[&#8593;] [&darr;]</span>{" "}
          to cycle through command history
        </div>
      </div>
    </section>
  );
};

export default CommandList;
