import React from "React"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1> About Anshul Sharma</h1>
        <p>
          I am a front-end developer, founder of a digital agency. I am on the
          quest of hitting sustainable revenues monthly. I will accomplish this
          by Feb 28, 2020.
        </p>
        <p>
          Hello, do you need a developer?{" "}
          <Link to="/contact">Get In Touch My G!</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
