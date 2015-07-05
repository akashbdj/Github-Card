var Card = React.createClass({
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
      <div className="card">
        <img src={this.state.avatar_url}/>
        <h3> {this.state.login}</h3>
      </div>
    );
  }
});