import { BridgeMessage } from "webext-bridge";
import { onMessage } from "webext-bridge/background";



onMessage("greeting", ({ data }: BridgeMessage<{ name: string }>) => {
  return "hello" + data.name
})