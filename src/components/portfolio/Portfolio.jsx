import { useState } from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfoliolist/Portfoliolist";
export default function Portfolio() {
  const [selected, setSelected] = useState("web app");
  const list = [
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "automation",
      title: "Automation",
    },
    {
      id: "college",
      title: "College",
    },
    {
      id: "books",
      title: "Books",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
        <div className="item">
          <img src="assets/todolist.png" alt="" />
          <h3>to do list</h3>
        </div>
      </div>
    </div>
  );
}
