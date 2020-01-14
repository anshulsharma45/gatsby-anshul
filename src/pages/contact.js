import React from "React"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact Anshul Sharma</h1>
        <p>
          By Email:{" "}
          <a href="anshul@liftedsolutions.com">anshul@liftedsolutions.com</a> or
          by phone:
          <a href="tel:905-299-1933">905-299-1933</a>
        </p>
        <p>
          Check out my twitter profile{" "}
          <a href="https://twitter.com/yaboyridl" target="_blank">
            @YaBoyRIDL yo
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
