function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact me</h1>

      <div className="row">
        <form action="">
          <input type="text" className="box" placeholder="first name" />
          <input type="text" className="box" placeholder="last name" />
          <input type="email" className="box" placeholder="your email" />
          <input type="text" className="box" placeholder="your project" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
          ></textarea>
          <input type="submit" value="message" className="btn" />
        </form>

        <div className="column">
          <div className="icons">
            <h3>
              <i className="fas fa-map-marker-alt"></i> address
            </h3>
            <p>Birmingham, UK</p>
          </div>
          <div className="icons">
            <h3>
              <i className="fas fa-envelope"></i> email
            </h3>
            <p>komaljaved308@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
