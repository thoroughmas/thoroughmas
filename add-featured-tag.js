import { readdir, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Replace this with your blog posts directory path
const BLOG_DIR = './src/content/blog';

// Read all directories in the blog directory
readdir(BLOG_DIR, { withFileTypes: true }, (err, entries) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter for directories only
    entries.forEach(entry => {
        if (entry.isDirectory()) {
            const dirPath = join(BLOG_DIR, entry.name);
            const indexPath = join(dirPath, 'index.md');
            
            try {
                let content = readFileSync(indexPath, 'utf8');
                
                // Check if the file already has frontmatter
                if (content.startsWith('---')) {
                    // If it does, add featured: false before the closing ---
                    content = content.replace(/---\n/, '---\nfeatured: false\n');
                } else {
                    // If it doesn't, add new frontmatter
                    content = `---\nfeatured: false\n---\n${content}`;
                }

                // Write the modified content back to the file
                writeFileSync(indexPath, content);
                console.log(`Updated ${entry.name}/index.md`);
            } catch (error) {
                console.error(`Error processing ${entry.name}/index.md:`, error);
            }
        }
    });
});