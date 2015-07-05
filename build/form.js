var Form = React.createClass({displayName: "Form",
  handleSubmit: function(){
    var loginInput = this.refs.login.getDOMNode();
    this.props.addCard(loginInput.value);
    loginInput.value = " ";
  },

  render: function() {
    return (
      React.createElement("div", {className: "form"}, 
        React.createElement("input", {type: "text", ref: "login", placeholder: "Provide Login"}), 
        React.createElement("button", {onClick: this.handleSubmit}, "Get Card!")
      )
    );
  }
});