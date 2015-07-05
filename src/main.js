var Main = React.createClass({
  getInitialState: function(){
    return { logins: [] };
  },

  addCard: function(login){
    var arr = this.state.logins.concat(login);
    this.setState({logins: arr});
  },

  render: function(){
    var cards = this.state.logins.map(function(login){
      return (
        <Card loginCred={login} />
      );
    });
    return (
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    );
  }
});

React.render(<Main />, document.body);