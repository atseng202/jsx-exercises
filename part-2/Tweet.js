"use strict";

function Tweet({ username, name, date, msg, txtColor, bgColor }) {
  
  const colors = {
    color: txtColor,
    backgroundColor: bgColor
  }
  return (
    <div style={colors}>
      <p>Username: { username }</p>
      <p>Name: { name }</p>
      <p>Date: { date }</p>
      <p>Tweet: { msg }</p>
    </div>
  );
}

Tweet.defaultProps = {
  txtColor: 'black',
  bgColor: 'white'
}