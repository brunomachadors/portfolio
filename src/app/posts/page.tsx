'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import LinkButton from '../components/Button/LinkButton';

interface MediumPost {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  categories: string[];
  thumbnail?: string;
  content: string;
}

export default function MediumFeed() {
  const [feedItems, setFeedItems] = useState<MediumPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('All'); // Default filter to 'All'

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@brunomachadoricardosilva&api_key=33kjyrm5qfndwgptmtaihjr1malb7jvn6xo4evio`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }

        const data = await response.json();
        if (data.items) {
          const items: MediumPost[] = data.items.map((item: MediumPost) => ({
            ...item,
            thumbnail: extractFirstImageFromContent(item.content),
          }));
          setFeedItems(items);
        }
      } catch (error) {
        console.error('Error fetching feed:', error);
      }
    };

    fetchFeed();
  }, []);

  const extractFirstImageFromContent = (
    content: string
  ): string | undefined => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : undefined;
  };

  const extractFirstParagraph = (content: string): string => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const paragraph = doc.querySelector('p');
    return paragraph?.textContent || '';
  };

  // Get unique tags from the posts, sort them alphabetically
  const allTags = Array.from(
    new Set(feedItems.flatMap((post) => post.categories))
  ).sort((a, b) => a.localeCompare(b));
  const tags = ['All', ...allTags];

  // Filter posts based on selected tag
  const filteredPosts =
    selectedTag === 'All'
      ? feedItems
      : feedItems.filter((post) => post.categories.includes(selectedTag));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">
        My Medium Posts
      </h1>

      {/* Filter Tabs */}
      <div className="mb-6 w-full max-w-5xl px-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`inline-block px-3 py-1 sm:px-4 sm:pt-2 text-sm sm:text-lg font-semibold border-b-2 text-center ${
                selectedTag === tag
                  ? 'text-yellow-500 border-yellow-500'
                  : 'text-gray-300 border-transparent'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col border border-yellow-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
          >
            {post.thumbnail && (
              <div className="relative w-full h-64">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500 text-center">
                {post.title}
              </h2>
              <p className="text-white text-base mb-6">
                {extractFirstParagraph(post.content)}
              </p>
              <div className="mt-auto">
                <p className="text-gray-400 text-sm mb-4 text-center">
                  {new Date(post.pubDate).toLocaleDateString()} by {post.author}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 items-center justify-center">
                  {post.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500 text-black text-sm px-3 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <LinkButton href={post.link} text="Read More" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
