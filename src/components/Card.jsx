import React from 'react'

function getMyCords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  }
}


function Card(props) {
  let newCords =  getMyCords(props.theta, props.radius)


  return (
    // <div style={{...styles.card, left: `${props.center.x + newCords.x}px`, top:`${props.center.y - newCords.y}px`}}>
        <img style={{...styles.card, left: `${props.center.x + newCords.x}px`, top:`${props.center.y - newCords.y}px`}} src={props.pic} alt='cocktails'/>
    // </div>
  )
}

const styles = {
  card: {
    margin: '0',
    padding: '0',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '200px',
    width: '200px',
    borderRadius: '200px',
    // backgroundColor: 'blue',
    border: '1px solid'


  },


}

export default React.memo(Card)