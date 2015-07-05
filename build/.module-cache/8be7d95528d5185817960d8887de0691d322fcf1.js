var Main = React.createClass({displayName: "Main",
  getInitialState: function(){
    return { logins: [] };
  },

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Form, null), 
        React.createElement(Card, null)
      )
    );
  }
});

React.render(React.createElement(Main, null), document.body);