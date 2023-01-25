import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

function Section3() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8888/").then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);
  return (
    <div className="sec-2">
      <div className="sec-2-title">
        <div className="services">SERVICES</div>
        <p className="sec-2-text">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="sec-2-cards">
        {post.map((element) => {
          return (
            <>
              <div className="card">
                <i className={element.imgurl}></i>
                <div className="card-title">{element.title}</div>
                <p className="card-text">{element.text}</p>
              </div>
              <div className="card">
                <i className={element.imgurl}></i>
                <div className="card-title">{element.title}</div>
                <p className="card-text">{element.text}</p>
              </div>
              <div className="card">
                <i className={element.imgurl}></i>
                <div className="card-title">{element.title}</div>
                <p className="card-text">{element.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Section3;
