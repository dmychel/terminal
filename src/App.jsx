// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import About from "/src/components/terminal/About";
import Help from "/src/components/terminal/Help";
import Home from "/src/components/terminal/home/Home";
import Projects from "/src/components/terminal/Projects";
import RenderTerminal from "./components/terminal/renders/RenderTerminal";
import PrintTheme from "./components/terminal/renders/PrintTheme";
import ThemeSet from "./components/terminal/renders/ThemeSet";

// STYLES
import "./App.css";

function App() {
  // useState
  const [command, setCommand] = useState("");
  const [commandHist, setCommandHist] = useState([]);
  const [renderComp, setRenderComp] = useState([Home]);
  const [index, setIndex] = useState(0);
  const [cdIndex, setCdIndex] = useState(0);
  const [os, setOs] = useState("");
  // const [loading, setLoading] = useState(true);
  const usersOS = navigator.userAgent;

  // list of cd commands for autocomplete
  const cdCommands = [
    "about",
    "projects",
    "windfall-matchup",
    "node-message-board",
    "video-game-archive",
    "cv-maker",
    "email",
    "linkedin",
    "github",
    "serena-shopping",
  ];

  // all useEffect functions

  useEffect(() => {
    if (usersOS.includes("Windows")) {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/windows.webp')";
      return setOs("Windows");
    }

    if (usersOS.includes("Mac")) {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/mac.jpg')";
      return setOs("Mac");
    }

    if (usersOS.includes("X11" || "Linux")) {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/arch.png')";
      return setOs("Linux");
    } else {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/android.jpg')";
      return setOs("Mobile");
    }
  }, [usersOS]);

  // EVENT HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command;
    const adjustedStr = handleString(input);
    clearCommandInput();
    setCommandHist([...commandHist, adjustedStr]);
    return handleCommand(adjustedStr);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") cycleHistoryUp();
    if (e.key === "ArrowDown") cycleHistoryDown();
    if (e.key === "Tab") e.preventDefault(), checkAutoComplete();
  };

  const handleString = (string) => {
    return string.toLowerCase();
  };

  const clearCommandInput = () => {
    setCommand("");
  };

  const checkAutoComplete = () => {
    if (command.includes("cd")) cycleCdComms();
    if (command.includes("ab")) setCommand("cdabout");
    if (command.includes("pro")) setCommand("cd projects");
    if (command.includes("ex")) setCommand("exit");
    if (command.includes("cl")) setCommand("clear");
    if (command.includes("he")) setCommand("help");
    // if (command.includes("tou")) setCommand("touch resume");
    else return;
  };

  // COMMAND AUTOCOMPLETE/HISTORY FUNCTIONS
  const cycleHistoryUp = () => {
    let arr = commandHist;
    if (index === 0) {
      const input = arr.at(-1);
      setCommand(input);
      setIndex(index - 1);
    } else {
      const input = arr.at(index - 1);
      setCommand(input);
      return setIndex(index - 1);
    }
  };

  const cycleHistoryDown = () => {
    let arr = commandHist;
    const input = arr.at(index + 1);
    setCommand(input);
    setIndex(index + 1);
  };

  const cycleCdComms = () => {
    let arr = cdCommands;
    if (cdIndex === 9) {
      const input = arr.at(0);
      setCdIndex(0);
      setCommand("cd " + input);
    } else {
      let input = arr.at(cdIndex);
      setCdIndex(cdIndex + 1);
      setCommand("cd " + input);
    }
  };

  const setTheme = (theme) => {
    if (theme === "Windows") {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/windows.webp')";
      return setOs("Windows");
    }

    if (theme === "Mac") {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/mac.jpg')";
      return setOs("Mac");
    }

    if (theme === "X11" || theme === "Linux") {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/arch.png')";
      return setOs("Linux");
    }
    if (theme === "Mobile") {
      document.body.style.backgroundImage =
        "url('/assets/backgrounds/android.jpg')";
      return setOs("Mobile");
    }
  };

  // COMMAND HANDLER
  const handleCommand = (input) => {
    switch (input) {
      case "cd about": {
        setRenderComp([...renderComp, About]);
        break;
      }
      case "cd projects": {
        setRenderComp([...renderComp, Projects]);
        break;
      }
      case "exit": {
        window.open("https://dyloncrowley.dev", "_blank");
        break;
      }
      case "clear": {
        setRenderComp([]);
        break;
      }

      case "help": {
        setRenderComp([...renderComp, Help]);
        break;
      }

      case "neofetch": {
        setRenderComp([...renderComp, Home]);
        break;
      }

      case "cd windfall-matchup": {
        window.open("https://windfall-matchup.netlify.app/", "_blank");
        break;
      }

      case "cd node-message-board": {
        window.open("https://message-board-apba.onrender.com/", "_blank");
        break;
      }

      case "cd video-game-archive": {
        window.open("https://dmychel.github.io/game-archive/", "_blank");
        break;
      }

      case "cd cv-maker": {
        window.open("https://cv-maker-webapp.netlify.app/", "_blank");
        break;
      }

      case "cd serena-shopping": {
        window.open("https://serena-shop.netlify.app/", "_blank");
        break;
      }

      case "cd email": {
        window.open("mailto:dyloncrowley86@gmail.com");
        break;
      }

      case "cd github": {
        window.open("https://github.com/dmychel", "_blank");
        break;
      }

      case "cd linkedin": {
        window.open(
          "https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/",
          "_blank"
        );
        break;
      }

      case "theme set":
        {
          setRenderComp([...renderComp, ThemeSet]);
        }
        break;

      case "theme set mobile":
        {
          setTheme("Mobile");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      case "theme set alacritty":
        {
          setTheme("Linux");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      case "theme set powershell":
        {
          setTheme("Windows");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      case "theme set mac":
        {
          setTheme("Mac");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      // case "touch resume":
      //   {
      //     window.open("/assets/other/art_tech_resume.pdf", "_blank");
      //   }
      //   break;
      default: {
        alert(
          `'${input}' is not a command. Type 'help' for a list of commands`
        );
      }
    }
  };

  return (
    <div className="terminal">
      <RenderTerminal
        renderComp={renderComp}
        os={os}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
}

export default App;
