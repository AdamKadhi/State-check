import React, { useState } from "react";

const About = () => {
    const [change, setchange] = useState("")
    const [first, setfirst] = useState("")
  return (
    <div>
      <h1 className={change} >About Section</h1>
      <button onClick={()=>setchange("colorize")} >change color</button>
      <button onClick={()=>setchange("")} >Raja3</button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui illum
        corporis architecto doloribus. Expedita, incidunt laboriosam recusandae
        natus magni eius veniam aliquam architecto impedit, alias repellat qui
        eaque, voluptate reprehenderit?
      </p>
    </div>
  );
};

export default About;
