export function formatTag(tag: string): string {
    return tag.replace(/_/g, ' ');
  }
  
  export function slugifyTag(tag: string): string {
    return tag.toLowerCase().replace(/\s+/g, '-');
  }