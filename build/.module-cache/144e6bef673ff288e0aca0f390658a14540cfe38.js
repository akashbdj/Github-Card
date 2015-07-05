var Main = React.createClass({displayName: "Main",
  getInitialState: function(){
    return { logins: [] };
  },

  addCard: function(login){
    var arr = this.state.logins;
    arr.push(login);
    this.setState({logins: arr});
  },

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Form, {addCard: this.addCard}), 
        React.createElement(Card, null)
      )
    );
  }
});

React.render(React.createElement(Main, null), document.body);