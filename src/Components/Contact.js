import React from 'react';
import { useSpring, animated } from 'react-spring';

const Contact = () => {
  // Animation for the form
  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <div className="contact-containeraa">
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="section-heading text-uppercase">Contact Us</h1>
              <p className="text-muted my-4">
                We're always eager to hear from you. Whether you have a question, feedback, or just want to share your thoughts, don't hesitate to reach out. Our dedicated team is ready to assist you. Fill out the form below or drop us an email, and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <animated.div style={formAnimation}>
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="row my-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Your Message"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="btn btn-primary my-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
