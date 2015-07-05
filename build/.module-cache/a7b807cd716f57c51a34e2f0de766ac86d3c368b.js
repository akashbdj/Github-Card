var Card = React.createClass({displayName: "Card",
  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
    var cardComponent = this;
    $.get("https://api.github.com/users/akash-bhardwaj", function(data){
      cardComponent.setState(data);
    });
  },

  render: function(){
    return (
      React.createElement("div", {className: "card"}, 
        React.createElement("img", {src: this.state.avatar_url}), 
        React.createElement("h3", null, " ", this.state.login)
      )
    );
  }
});