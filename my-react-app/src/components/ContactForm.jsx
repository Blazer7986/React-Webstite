import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="contact-form">
        <input type="text" placeholder="name" /> <br />
        <input type="email" placeholder="email" /> <br />
        <textarea placeholder="message"></textarea> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
