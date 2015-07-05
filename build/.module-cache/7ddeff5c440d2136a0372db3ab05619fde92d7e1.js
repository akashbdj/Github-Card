var Form = React.createClass({displayName: "Form",
  render: function() {
    return (
      React.createElement("div", {className: "form"}, 
        React.createElement("input", {type: "text", ref: "login", placeholder: "Provide Login"}), 
        React.createElement("button", {onClick: this.search}, "Get Card!")
      )
    );
  }
});