import React from "react";

function Hello({ color, name = '이름없음' }) {
  return <div style={{ color: color }}>안녕하세요 {name}</div>;
}

export default Hello;