'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading';

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
  const [feedItems, setFeedItems] = useState<MediumPost[] | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

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

  if (feedItems === null) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        data-test-id="loading-spinner"
        aria-live="polite"
      >
        <LoadingSpinner size="w-16 h-16" color="fill-yellow-400" />
      </div>
    );
  }

  const allTags = Array.from(
    new Set(feedItems.flatMap((post) => post.categories))
  ).sort((a, b) => a.localeCompare(b));
  const tags = ['All', ...allTags];

  const filteredPosts =
    selectedTag === 'All'
      ? feedItems
      : feedItems.filter((post) => post.categories.includes(selectedTag));

  return (
    <main
      className="flex flex-col items-center justify-start min-h-screen p-4"
      role="main"
      aria-labelledby="medium-feed-title"
      data-test-id="medium-feed-main"
    >
      <h1
        className="text-4xl font-bold mb-6 text-yellow-500"
        id="medium-feed-title"
        data-test-id="medium-feed-title"
      >
        My Medium Posts
      </h1>

      <div
        className="mb-6 w-full max-w-5xl px-4"
        data-test-id="filter-tags-container"
      >
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
              data-test-id={`filter-tag-${tag.toLowerCase()}`}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-8 w-full max-w-4xl"
        data-test-id="posts-grid"
      >
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col border border-yellow-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
            data-test-id={`post-item-${index}`}
            aria-labelledby={`post-title-${index}`}
          >
            {post.thumbnail && (
              <div
                className="relative w-full h-64"
                data-test-id={`post-thumbnail-${index}`}
              >
                <Image
                  src={post.thumbnail}
                  alt={`Thumbnail for ${post.title}`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <div
              className="p-6 flex flex-col justify-between flex-grow"
              data-test-id={`post-content-${index}`}
            >
              <h2
                className="text-2xl font-semibold mb-4 text-yellow-500 text-center"
                id={`post-title-${index}`}
                data-test-id={`post-title-${index}`}
              >
                {post.title}
              </h2>
              <p
                className="text-white text-base mb-6"
                data-test-id={`post-excerpt-${index}`}
              >
                {extractFirstParagraph(post.content)}
              </p>
              <div className="mt-auto">
                <p
                  className="text-gray-400 text-sm mb-4 text-center"
                  data-test-id={`post-meta-${index}`}
                >
                  {new Date(post.pubDate).toLocaleDateString()} by {post.author}
                </p>
                <div
                  className="flex flex-wrap gap-2 mb-6 items-center justify-center"
                  data-test-id={`post-tags-${index}`}
                >
                  {post.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500 text-black text-sm px-3 py-1 rounded"
                      data-test-id={`post-tag-${index}-${idx}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div
                  className="flex justify-center"
                  data-test-id={`post-read-more-${index}`}
                >
                  <LinkButton
                    href={post.link}
                    text="Read More"
                    aria-label={`Read more about ${post.title}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-1/4 border-t border-gray-500 opacity-50 mt-12 mb-8"
        aria-hidden="true"
        data-test-id="posts-divider"
      />

      {/* Go to Contacts Button */}
      <div
        data-test-id="contacts-button-container"
        aria-label="Navigate to Contacts section"
      >
        <LinkButton
          text="Go to Contacts"
          href="/contacts"
          data-test-id="contacts-button"
          aria-label="Navigate to Contacts page"
        />
      </div>
    </main>
  );
}
