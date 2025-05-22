import React from "react";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";
import Exercise10 from "./components/Exercise10";

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Employee Exercises</h1>
        <Exercise1 />
        <Divider />
        <Exercise2 />
        <Divider />
        <Exercise3 />
        <Divider />
        <Exercise4 />
        <Divider />
        <Exercise5 />
        <Divider />
        <Exercise6 />
        <Divider />
        <Exercise7 />
        <Divider />
        <Exercise8 />
        <Divider />
        <Exercise9 />
        <Divider />
        <Exercise10 />
      </div>
    </div>
  );
};

const Divider = () => <hr style={{ margin: "30px 0", border: "1px solid #ccc" }} />;

const styles = {
  container: {
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    width: "100%",
    padding: "40px",
    fontFamily: "'Segoe UI', sans-serif",
    fontSize: "18px",
    lineHeight: "1.6",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "28px",
    color: "#333",
  },
};

export default App;
