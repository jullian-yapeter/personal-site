import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jullian Arta Yapeter</h2>
        <p><a href="mailto:jullianyapeter@gmail.com">jullianyapeter@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m a final-year Computer Science M.S. student at USC.
        I am currently a Machine Learning Scientist at <a href="https://signal1.ai/">Signal 1</a> and
        a Graduate Research Assistant at <a href="https://clvrai.com/">CLVR Lab</a>.
        I received my Bachelor&apos;s degree in Mechatronics Engineering with a minor in AI from
        the <a href="https://uwaterloo.ca/future-students/programs/mechatronics-engineering">University of Waterloo</a>.
        I have done a number of internships in the field of
        Computer Vision and Deep Learning, including at
        <a href="https://la.disneyresearch.com/"> Disney Research</a>,
        <a href="https://www.ibm.com/ca-en"> IBM</a>,
        <a href="https://www.gm.com/"> GM (2908 Lab)
        </a>,
        and <a href="https://www.dragonfruit.ai/"> Dragonfruit AI</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jullian Yapeter <Link to="/">jullianyapeter.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
