const React = require('react');
const { Component } = require('react');

export default function FilteredFruitList({fruit, filter}) {

  const list = !filter ? fruit :
    fruit.filter(i => i.fruit_type == filter);

    return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    );
  }

FilteredFruitList.defaultProps = {fruit: [], filter: "all" }

module.exports = FilteredFruitList;
