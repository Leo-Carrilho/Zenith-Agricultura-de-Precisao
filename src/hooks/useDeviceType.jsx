import { createContext, useContext, useEffect, useState } from "react";
import { detectDevice } from "../lib/device";
const DeviceContext = createContext("unknown");
export function DeviceProvider({ children }) {
  const [device, setDevice] = useState("unknown");
  useEffect(() => { setDevice(detectDevice(window.navigator)); }, []);
  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
}
export function useDeviceType() { return useContext(DeviceContext); }

