import React, { memo } from "react";

const Child = memo (
  ({value}) => {
    console.log('Child render', value)
    return <div>{value}</div>
  }, (prev, next) => {
    return next.value % 5 !== 0
  }
)

export default Child