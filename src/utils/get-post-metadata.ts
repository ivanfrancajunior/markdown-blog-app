import fs from 'fs'
import metter from 'gray-matter'

export function getPostMetadata(basePath: string){
    const directory = basePath+ '/';

    const files = fs.readdirSync(directory);

    const markdownPosts = files.filter(file => file.includes('.md'));

    const post = markdownPosts.map(filename =>{
        const fileContent  = fs.readFileSync(`${basePath}/${filename}`, 'utf-8');

        const result = metter(fileContent);

        return {
            title: result.data.title,
            date: result.data.date,
            subtitle: result.data.subtitle,
            slug: filename.replace('.md', ''),
        }
    } )

    return post;
}