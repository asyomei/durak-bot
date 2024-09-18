import { run } from "@grammyjs/runner";
import { Bot } from "grammy";
import { env } from "./env";
import { setupHandlers } from "./handlers";
import { setupMiddlewares } from "./middlewares";
import type { MyContext } from "./types/context";

start();

async function start(): Promise<void> {
  const bot = new Bot<MyContext>(env.BOT_TOKEN);
  setupMiddlewares(bot);
  setupHandlers(bot);

  run(bot);

  await bot.init();
  const { username } = bot.botInfo;
  console.log(`@${username} started`);
}
