import React from "react";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form action="">
          <div>
            <label >Name</label>
            <input type="text" required placeholder="ABC" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="ABC.@xyz.com" />
          </div>
          <div>
            <label htmlFor="">Massage</label>
            <input
              type="email"
              required
              placeholder="Tell me About us your query"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
