import { test } from "@playwright/test";

import { testChat } from "./utils/testChat";
import { testSelectBrain } from "./utils/testSelectBrain";
import { testUnplugChat } from "./utils/testUnplugChat";
import { login } from "../../utils/login";

export const chatTests = (): void => {
  test("chat", async ({ page }) => {
    await login(page);
    await testChat(page);
    await testUnplugChat(page);
    await testSelectBrain(page);
  });
};
