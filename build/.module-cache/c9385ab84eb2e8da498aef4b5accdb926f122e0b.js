var Card = React.createClass({displayName: "Card",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("img", {src: "https://avatars.githubusercontent.com/u/7085282?v=3"}), 
        React.createElement("h3", null, " Name goes here ")
      )
    );
  }
});