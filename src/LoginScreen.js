import React, { useState } from 'react'
import './LoginScreen.css';
import SignupScreen from './SignupScreen';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);
    
  return (

    <div className="loginScreen">
      <div className="loginScreen__background">
        <img 
        className="loginScreen__logo"
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" 
        alt="" />
        
        <button onClick={() => setSignIn(true)}
        className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient"/>
      </div>

      <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ): (
            <>
              <h1>
              Unlimited movies, TV shows and more.
              </h1>
              <h2>
                  Watch anywhere. Cancel at any anytime.
              </h2>
              <h3>
                  Ready to watch? Enter your email to create or restart your membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type='email' placeholder="Email Address" />
                  <button onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted">
                    Get Started <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                  </button>
                </form>
              </div> 
              <div class="container1">
                <div class="text">
                  <h1>Enjoy on your TV.</h1>
                  <p>
                    Watchx on Smart TVs, Playstation, Xbox,
                    Chromecast, Apple TV, Blu-ray players, and
                    more.
                  </p>
                </div>
                <div class="image">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                </div>
              </div>
              <div class="container1">
                <div class="image">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" alt="" />
                </div>
                <div class="text">
                  <h1>Download your shows to watch on the go.</h1>
                  <p>
                  Save your data and watch all your favorites offline.
                  </p>
                </div> 
              </div>
              <div class="container1">
                <div class="text">
                  <h1>Watch everywhere.</h1>
                  <p>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                  </p>
                </div>
                <div class="image">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
                </div>
              </div>
              <div class="question">

                <div class="FAQ">Frequently Asked Questions.
                </div>
  
                <div class="quest">
                  <div class="textbox">What is Netflix?</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div> 
                </div>
                <div class="quest">
                  <div class="textbox">How much does Netflix cost?</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div> 
                </div>             
                <div class="quest">
                  <div class="textbox">Where can I watch?</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div> 
                </div>                 
                <div class="quest">
                  <div class="textbox">How do I cancel?</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div> 
                </div>               
                <div class="quest">
                  <div class="textbox">What can I watch on Netflix??</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div> 
                </div>
                <div class="quest">
                  <div class="textbox">What is Netflix?</div>
                  <div class="Icon">
                    <AddIcon style={{ fontSize: 40 }} />
                  </div>                    
                </div> 
                <div class="search1">
                  <input type="text" class="box1" placeholder="Email" />
                  <span class="try1" onClick={() => setSignIn(true)}>Try 30 days free <ArrowForwardIosIcon style={{ fontSize: 25 }} /> </span>
                  </div>      
                    <h4>Ready to watch? Enter your email to create or access your account</h4>     
              </div>
              

            </>
          )}
        
      </div>
    </div>
    )
}

export default LoginScreen;
