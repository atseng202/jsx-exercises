"use strict";

function App() {
  const tweets = [
    {
      username: 'kellenrowe',
      name: 'kellen',
      date: '01/10/21',
      msg: 'kellen rocks',
      txtColor: 'blue',
      bgColor: 'orange'
    },
    {
      username: 'alantseng',
      name: 'alan',
      date: '01/12/21',
      msg: 'alan fuckin\' rocks'
    },
    {
      username: 'thirduser',
      name: 'three',
      date: '01/13/21',
      msg: 'three sucks',
      txtColor: 'blue',
      bgColor: 'orange'
    }
  ]
  return (
    <div>
      { tweets.map(t => <Tweet
        username={t.username}
        name={t.name}
        date={t.date}
        msg={t.msg}
        txtColor={t.txtColor}
        bgColor={t.bgColor}
      />)}
    </div>
  );
}