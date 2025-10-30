import { defineConfig } from "vite";
import { copyComponentsPlugin } from "ladrillosjs/vite";
import { promises as fs } from "fs";
import { resolve } from "path";

const copyPagesPlugin = {
  name: "copy-pages",
  async generateBundle() {
    const pagesDir = resolve(process.cwd(), "pages");
    const distDir = resolve(process.cwd(), "dist");

    try {
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

      await copyDir(pagesDir, distDir);
    } catch (err) {
      console.error("Failed to copy pages:", err);
    }
  },
};

export default defineConfig({
  plugins: [copyComponentsPlugin(), copyPagesPlugin],
});
