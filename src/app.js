class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer"
        const options = ["Thing one", "Thing two", "Thing three"];
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
          <AddOption />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
      handlePick(){
        alert("handlePick");
      }
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }
  
  // Add Remove All Button
  class Options extends React.Component {
      handleRemoveAll(){
          alert("handleRemoveAll");
      }
    render() {
      return (
        <div>
          {
              // this.props.options.map((option) => <p key={option}>{option}</p>)
              this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
          <button onClick={this.handleRemoveAll}>Remove All</button>
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    onFormSubmit(event){
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            // if option has value, push it to the array
            alert(option);
        }
        // alert("onFormSubmit");
    }
    render() {
      return (
        <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  