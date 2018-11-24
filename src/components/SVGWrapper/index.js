import React from 'react';
const reqSvgs = require.context("./source", false, /\.js$/);
const paths = reqSvgs.keys();
const svgs = {};
paths.forEach(path => {
  const match = path.match(/.\/([^\\]*)\.(\w+)$/);
  console.log(path);
  if (match) {
    const type = match[1];
    svgs[type] = reqSvgs(path).default;
  }
});

class Icon extends React.Component {
  render() {
    const { type="Add" } = this.props;
    const Componet = svgs[type];
    return (
      <Componet {...this.props}/>
    )
  }
}

export default Icon