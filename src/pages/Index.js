import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Jullian Yapeter personal website. USC Computer Science M.S. student'
      + 'UWaterloo Mechatronics Engineering graduate.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Nice to meet you!</Link></h2>
          {/* <p>
            I&apos;m Jullian.
          </p> */}
        </div>
      </header>
      <p> Thanks for stopping by. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me. I am an incoming Machine Learning Scientist
        @ <a href="https://signal1.ai/">Signal 1</a>. If
        you just want to chat about technology/what I&apos;m up to/what you&apos;re up to,
        I&apos;d love to hear it! Please feel free to reach out :)
      </p>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
