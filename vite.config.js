import { defineConfig } from "vite";
// import { copyComponentsPlugin } from "ladrillosjs/vite";
import { promises as fs } from "fs";
import { resolve } from "path";

const copyDir = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copyStaticAssetsPlugin = {
  name: "copy-static-assets",
  async writeBundle() {
    const distDir = resolve(process.cwd(), "dist");

    // Folders to copy verbatim into dist/. `pages` is flattened into dist root
    // (matching previous behavior); the rest preserve their folder name.
    const tasks = [
      { src: "pages", dest: distDir, optional: true },
      { src: "components", dest: resolve(distDir, "components") },
    ];

    for (const { src, dest, optional } of tasks) {
      const srcPath = resolve(process.cwd(), src);
      try {
        await fs.access(srcPath);
      } catch {
        if (!optional) console.error(`Missing directory: ${src}`);
        continue;
      }
      try {
        await copyDir(srcPath, dest);
      } catch (err) {
        console.error(`Failed to copy ${src}:`, err);
      }
    }
  },
};

export default defineConfig({
  plugins: [copyStaticAssetsPlugin],
  base: "/ladrillosjs-site/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        "getting-started": resolve(process.cwd(), "getting-started.html"),
      },
    },
  },
});
