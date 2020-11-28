import React, { useEffect } from "react"
import Container from "./Container"
import Page from "./Page"

function About() {
  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">
        Hi there,Hi there, my name is Nuo Xu, currently, I am a graduate student at Northeastern University major in Software Engineering.</p>
        <p className="lead text-muted">
        I developedthis Social Media Application not for business use, just because I am very interested in React. And I am really enjoying this whole
        development process. After finish this project, I have a better understanding of React and Express.</p>
        <p className="lead text-muted">
        I am a problem solver and always have a curiosity for new technologies. I believe technology can change our lifestyle greatly. 
        And I like making new friends, talking with different people makes me know the world better. So if you share the same
        interests, don’t hesitate to reach out to me!
      </p>

    </Page>
  )
}

export default About
