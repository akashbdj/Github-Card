var Main = React.createClass({displayName: "Main",
  render: function(){
    return (
        React.createElement(Card, null)
    );
  }
});

React.render(React.createElement(Main, null), document.body);