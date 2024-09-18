import type { Bot } from "grammy";
import type { MyContext } from "../types/context";
import { startHandler } from "./start";

export function setupHandlers(bot: Bot<MyContext>): void {
  bot.use(startHandler);
}
