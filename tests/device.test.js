import test from "node:test";
import assert from "node:assert/strict";
import { detectDevice, platformDestination, MOBILE_URL, PLATFORM_URL } from "../src/lib/device.js";

const cases = [
  ["Windows notebook", { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", platform: "Win32", maxTouchPoints: 0 }, "desktop"],
  ["Windows touch notebook", { userAgent: "Mozilla/5.0 (Windows NT 10.0)", platform: "Win32", maxTouchPoints: 10 }, "desktop"],
  ["Mac", { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X)", platform: "MacIntel", maxTouchPoints: 0 }, "desktop"],
  ["Linux", { userAgent: "Mozilla/5.0 (X11; Linux x86_64)", platform: "Linux x86_64" }, "desktop"],
  ["Chromebook", { userAgent: "Mozilla/5.0 (X11; CrOS x86_64)", platform: "Linux x86_64" }, "desktop"],
  ["iPhone Safari", { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15 Safari", platform: "iPhone", maxTouchPoints: 5 }, "mobile"],
  ["Android phone", { userAgent: "Mozilla/5.0 (Linux; Android 15) Chrome/130 Mobile Safari", platform: "Linux armv8l", maxTouchPoints: 5 }, "mobile"],
  ["Client hints mobile", { userAgent: "", userAgentData: { mobile: true, platform: "Android" } }, "mobile"],
  ["iPad", { userAgent: "Mozilla/5.0 (iPad; CPU OS 18_0)", platform: "iPad", maxTouchPoints: 5 }, "tablet"],
  ["iPad desktop mode", { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)", platform: "MacIntel", maxTouchPoints: 5, userAgentData: { mobile: false } }, "tablet"],
  ["Android tablet", { userAgent: "Mozilla/5.0 (Linux; Android 14; SM-X810) Chrome Safari", platform: "Linux armv8l", maxTouchPoints: 5, userAgentData: { mobile: false } }, "tablet"],
  ["SSR", undefined, "unknown"],
  ["Unknown browser", { userAgent: "Unrecognized agent" }, "unknown"]
];
for (const [name, nav, expected] of cases) test(name, () => assert.equal(detectDevice(nav), expected));
test("Contextual destination uses the official environments", () => {
  assert.equal(platformDestination("desktop"), PLATFORM_URL);
  for (const type of ["mobile", "tablet"]) assert.equal(platformDestination(type), MOBILE_URL);
});
test("Incompatible explicit actions remain internal", () => {
  assert.equal(platformDestination("desktop", "mobile"), "/dispositivo-incompativel?destino=mobile");
  for (const type of ["mobile", "tablet"]) assert.equal(platformDestination(type, "desktop"), "/dispositivo-incompativel?destino=desktop");
});
test("Unknown devices receive a safe choice without guessing", () => {
  for (const intent of ["auto", "desktop", "mobile"]) assert.equal(platformDestination("unknown", intent), "/dispositivo-incompativel?destino=" + intent);
});
test("Viewport is never used as device identity", () => {
  assert.equal(detectDevice({ ...cases[0][1], innerWidth: 320 }), "desktop");
  assert.equal(detectDevice({ ...cases[5][1], innerWidth: 1920 }), "mobile");
});
