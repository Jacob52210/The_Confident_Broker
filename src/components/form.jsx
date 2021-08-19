import './form.css';


function Form() {
  return (
    <div className="form-container">
      <h3>This is the Form.</h3>
      <div className="btn-container">
        <a className="btn" href="/#/results">Submit</a>
        <a className="btn" href="/#/form">Clear</a>
      </div>
    </div>
  );
}

export default Form;