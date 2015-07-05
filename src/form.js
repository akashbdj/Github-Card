var Form = React.createClass({
  handleSubmit: function(){
    var loginInput = this.refs.login.getDOMNode();
    this.props.addCard(loginInput.value);
    loginInput.value = " ";
  },

  render: function() {
    return (
      <div className="form">
        <input type="text" ref="login" placeholder="Provide Login" />
        <button onClick={this.handleSubmit}>Get Card!</button>
      </div>
    );
  }
});