import './landingpage.css';


function Greeting() {
  return (
    <div className="body">
      <h2 className="greeting">Welcome!</h2>
      <br />
      <h3 className="greeting">Please enter the applicant's information on the following page.</h3>
      <a className="btn" href="/#/form">Continue</a>
    </div>
  );
}

export default Greeting;