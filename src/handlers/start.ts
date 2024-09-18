import { Composer } from "grammy";
import type { MyContext } from "../types/context";

const comp = new Composer<MyContext>();
export { comp as startHandler };

comp.on("message:text").command("start", async ctx => {
  await ctx.reply(`You say: ${ctx.message.text}`);
});
