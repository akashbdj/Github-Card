var Card = React.createClass({displayName: "Card",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("img", {src: ""}), 
        React.createElement("h3", null, " Name goes here ")
      )
    );
  }
});