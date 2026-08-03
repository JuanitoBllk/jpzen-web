import rss from '@astrojs/rss';
import { articles } from '../data/articles.js';

function toPublicationDate(date) {
  const [year, month] = date.split('.');
  return new Date(`${year}-${month}-01T00:00:00Z`);
}

export function GET(context) {
  return rss({
    title: 'JPZEN Technical Articles',
    description: 'Public technical articles documenting JPZEN engineering knowledge, experiments and lessons learned.',
    site: context.site ?? 'https://jpzen.net',
    items: articles.map((article) => ({
      title: article.title,
      description: article.summary,
      link: article.route,
      pubDate: toPublicationDate(article.date)
    }))
  });
}
