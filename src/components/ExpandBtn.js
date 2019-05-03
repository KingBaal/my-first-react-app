import React from 'react'

function ExpandBtn(props) {
  const logo1 = '▼';
  const logo2 = '▲';
  
  return (
    <div>
      <button className="btn" onClick={props.onBtnClick}>
        {props.isOpened ? logo2 : logo1}
      </button>
    </div>
  )
}

export default ExpandBtn 