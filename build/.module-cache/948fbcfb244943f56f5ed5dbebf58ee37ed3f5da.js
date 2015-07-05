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
    var card = this.state.logins.map(function(login){
      return (
        React.createElement(Card, {loginCred: login})
      );
    });
    return (
      React.createElement("div", null, 
        React.createElement(Form, {addCard: this.addCard}), 
        card
      )
    );
  }
});

React.render(React.createElement(Main, null), document.body);