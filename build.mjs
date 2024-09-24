import { rm } from "node:fs/promises";
import { build } from "esbuild";

await rm("dist", { recursive: true, force: true });

const args = new Set(process.argv.slice(2));
const isProd = args.has("-P") || args.has("--prod");

await build({
  entryPoints: ["src/main.ts"],
  outdir: "dist",
  bundle: true,
  minify: false,
  keepNames: true,
  target: "node20",
  platform: "node",
  format: "esm",
  sourcemap: "inline",
  packages: "external",
  define: {
    NODE_ENV: isProd ? '"production"' : '"development"',
  },
});
