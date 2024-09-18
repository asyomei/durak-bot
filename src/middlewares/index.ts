import { autoRetry } from "@grammyjs/auto-retry";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import type { Bot } from "grammy";
import type { MyContext } from "../types/context";

export function setupMiddlewares(bot: Bot<MyContext>): void {
  bot.api.config.use(autoRetry(), apiThrottler());
}
