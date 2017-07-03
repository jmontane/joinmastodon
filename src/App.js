import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Features from './Features';
import Wizard from './Wizard';

import githubLogo from './assets/github-logo.svg';
import mastodonLogo from './assets/mastodon-logo.svg';

import wiredLogo from './assets/wired-logo.svg';
import productHuntLogo from './assets/product-hunt-logo-horizontal-black.png';
import theVergeLogo from './assets/the-verge-logo.svg';
import motherboardLogo from './assets/motherboard-logo.svg';

import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';

const App = () => (
  <Router>
    <div className='app'>
      <div className='intro'>
        <div className='navbar container'>
          <ul className='left'>
            <li>
              <Link className='brand' to='/'>
                <img className='link-logo before' src={mastodonLogo} alt='Mastodon Logo'/> Mastodon
              </Link>
            </li>
          </ul>

          <ul className='right'>
            <li><a href='https://discourse.joinmastodon.org'>Support</a></li>
            <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
            <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
            <li>
              <a href='https://github.com/tootsuite/mastodon'>
                Source code <img className='link-logo after' src={githubLogo} alt='Github Logo'/>
              </a>
            </li>
          </ul>
        </div>

        <div className='text'>
          <h1>Giving social networking back to <strong>you</strong></h1>
          <p>With thousands of interconnected communities to choose from, and the tools to make your own, Mastodon is the world&rsquo;s largest free, open-source, decentralized microblogging network.</p>

          <Link to='/wizard' className='cta button'>Get started</Link>
          <a href='#' className='cta button alt'>How it works</a>
        </div>

        <div className='hero'>
          <div className='hero__floats'>
            <img src={cloud2} className='float-1' alt='Cloud' />
            <img src={cloud4} className='float-2' alt='Cloud' />
            <img src={cloud3} className='float-3' alt='Cloud' />
          </div>

          <img className='desktop' src={screenshotFull} alt='Screenshot of Mastodon on desktop'/>
          <img className='mobile' src={screenshotMobile} alt='Screenshot of Mastodon on desktop'/>
        </div>
      </div>

      <div className='as-seen-on'>
        <div className='container'>
          <h3>As seen on</h3>

          <div className='logo-grid'>
            <div>
              <a href='https://motherboard.vice.com/en_us/article/mastodon-is-like-twitter-without-nazis-so-why-are-we-not-using-it' className='logo-motherboard'><img src={motherboardLogo} alt='Motherboard' /></a>
              <a href='https://www.producthunt.com/posts/mastodon' className='logo-product-hunt'><img src={productHuntLogo} alt='Product Hunt' /></a>
            </div>

            <div>
              <a href='http://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone' className='logo-the-verge'><img src={theVergeLogo} alt='The Verge' /></a>
              <a href='https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/' className='logo-wired'><img src={wiredLogo} alt='Wired' /></a>
            </div>
          </div>
        </div>
      </div>

      <Route path='/' exact component={Features} />
      <Route path='/wizard' component={Wizard} />
    </div>
  </Router>
);

export default App;
