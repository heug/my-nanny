import React from 'react';
import './gettingStarted.css';
import navbarInstance from '../LandingNav/index';

class GettingStarted extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
    <div className='gettingStarted'>
      {navbarInstance}
      <div className='row' id='gettingStartedRow'>
        <div className='col-md-12'>
          <img src='https://goo.gl/i00v4C' />
        </div>
      </div>

      <h2 className='underline'>Quick Account Set-Up</h2>

      <div className='row card-row'>
        <div className='col-md-6'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Create an Account</h3>
            <p className='alexaCommandDesc'>
              To create an account, simply log into your existing Amazon account through
              the myNanny website.  That will create an account with your email address.  
              To add more information such as name, phone number, and time zone, go to the 
              profile page in the Account menu and edit your information.  
            </p>
          </div>
        </div>
        <div className='col-md-6' id='choreComplete'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Add myNanny Skill</h3>
            <p className='alexaCommandDesc'>
              After your set up your Alexa/Echo, add my Nanny as a skill for your Alexa 
              account.  That will connect Alexa with the data you enter on the myNanny 
              website.
            </p>
          </div>
        </div>
      </div>
      
      <div className='row card-row'>
        <div className='col-md-6' id='getChoreDetails'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Add Children</h3>
            <p className='alexaCommandDesc'>
              If you haven't already added a child, the Kids page will offer the option by default.  
              If you have already added a child, the option to add another will be available at the 
              bottom of the Kids page.  When you add a child, be sure to enter his or her phone 
              number so that myNanny can send text reminders about chores and other important notifications.
            </p>
          </div>
        </div>
        <div className='col-md-6' id='choreComplete'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Create Chores and Schedules</h3>
            <p className='alexaCommandDesc'>
              On the Kids page, you can add or edit chores and a schedule for any child that has 
              been added to the account.  The Dashboard page will give you a brief 
              summary of the day's schedule and chores.
            </p>
          </div>
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-12'>

        </div>
      </div>
      
      <h2 className='underline'>Popular Voice Commands</h2>
      
      <div className='row card-row'>
        <div className='col-md-6' id='greating'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Say Hello!</h3>
            <p className='alexaCommandDesc'>
              When Alexa is greeted with this command,
               a text message will be sent to the guardian, notifying them of the
               safe arrival, and Alexa will tell the child what the chores for the day are.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>
        <div className='col-md-6' id='getChores'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Ask Alexa for Chores</h3>
            <p className='alexaCommandDesc'>
              You don't have to remember all the chores when Alexa tells you the first time.
              Simply ask Alexa to repeat them with the following command.
            </p>
            <p className='alexaCommand'>Alexa, What are [Name] chores?</p>
          </div>
        </div>      
      </div>

      <div className='row card-row'>
        <div className='col-md-6' id='getChoreDetails'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Ask Alexa for Details on Chores</h3>
            <p className='alexaCommandDesc'>
              When a parent registers a new chore to be done, there is an option to add a longer
              description to the chore. This enables you to have short names for the chores and
              make them easier to maintain. To get the description for a chore, simply ask Alexa.
            </p>
            <p className='alexaCommand'>Alexa, details on chore [Number] for [Name]</p>
          </div>
        </div>
        <div className='col-md-6' id='choreComplete'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Tell Alexa You've Completed a Chore</h3>
            <p className='alexaCommandDesc'>
              Once a chore is complete, simply tell Alexa that the chore is complete by specify
              the number of the chore.
            </p>
            <p className='alexaCommand'>Alexa, [Name] finished chore number [Number]</p>
          </div>
        </div>
      </div>
      
      <div className='row card-row'>
        <div className='col-md-6' id='choreSms'>
          <div className='col-md-12 card'>
            <h3 className='alexaCommandTitle'>Send Chores as SMS</h3>
            <p className='alexaCommandDesc'>
              When a child checks in, Alexa will ask if the child would like to recieve the
              chores as an SMS. To do so, say 'Send chores', and the list will be sent to
              the childs phone.
            </p>
            <p className='alexaCommand'>Send chores</p>
          </div>
        </div>
      </div>
    
    </div>
    );
  }

}

export default GettingStarted;
