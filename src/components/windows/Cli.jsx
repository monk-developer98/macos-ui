import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({windowName={windowName} ,setWindowState={setWindowState} }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}  width="30vw" height="40vh">
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
                descrption:"",
                usage:""
            },
          }}
          welcomeMessage={"welcomeMessage"}
          promptLabel={"ashishsaxena:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
