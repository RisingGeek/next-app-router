import AdaptiveDesign from '@/modules/AdaptiveDesign'
import React from 'react'
import { headers } from "next/headers";
import * as Parser from "ua-parser-js";

export default function AdaptiveDesignPage() {
  const headerInstance = headers();
  console.log("header", headerInstance.get("user-agent"))
  const userAgent = Parser(headerInstance.get("user-agent"));
  console.log("user agent", userAgent)
  const isMobile = userAgent.device.type;
  return (
    <AdaptiveDesign isMobile={isMobile} />
  )
}
