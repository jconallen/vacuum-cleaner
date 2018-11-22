if( Me.message ) {
  if( Me.message.indexOf('dinner')>=0 ) {
    Game.log("Wife: when do you expect to catch it?");
  } else {
    Game.log("Wife: Farmer said: " + Me.message );
  }
};

Wife.message = "When will dinner be ready?";