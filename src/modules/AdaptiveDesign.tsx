import React from 'react'
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));
import dynamic from 'next/dynamic';

export default function AdaptiveDesign(props) {
  const { isMobile } = props;
  return (
    <div>
      {isMobile ?
        <Mobile /> :
        <Desktop />
      }
    </div>
  )
}
