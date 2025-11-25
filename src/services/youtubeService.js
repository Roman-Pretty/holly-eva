// YouTube RSS Feed Service
// Fetches videos from Holly Eva's YouTube channel

const CHANNEL_ID = 'UCWSIJOGt2ntV5_4fXfmls-w'; // Holly Eva's channel ID
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// CORS proxy to access YouTube RSS feed
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

/**
 * Fetches the latest videos from YouTube RSS feed
 * @param {number} limit - Number of videos to fetch (default: 15)
 * @returns {Promise<Array>} Array of video objects
 */
export async function fetchLatestVideos(limit = 15) {
  try {
    console.log('Fetching YouTube videos from RSS feed...');
    const response = await fetch(CORS_PROXY + encodeURIComponent(RSS_URL));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    console.log('RSS feed fetched successfully');
    
    // Parse XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parsing errors
    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
      console.error('XML parsing error:', parseError.textContent);
      throw new Error('Failed to parse XML');
    }
    
    // Extract video entries - try both with and without namespace
    let entries = xmlDoc.querySelectorAll('entry');
    if (entries.length === 0) {
      // Try with namespace
      entries = xmlDoc.getElementsByTagName('entry');
    }
    
    console.log(`Found ${entries.length} video entries`);
    const videos = [];
    
    for (let i = 0; i < Math.min(entries.length, limit); i++) {
      const entry = entries[i];
      
      // Try different ways to get videoId
      let videoId = entry.querySelector('videoId')?.textContent || 
                    entry.querySelector('yt\\:videoId')?.textContent ||
                    entry.getElementsByTagName('yt:videoId')[0]?.textContent;
      
      const title = entry.querySelector('title')?.textContent;
      const published = entry.querySelector('published')?.textContent;
      const thumbnail = entry.querySelector('media\\:thumbnail')?.getAttribute('url') ||
                       entry.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url');
      
      if (videoId) {
        videos.push({
          id: videoId,
          title: title || 'Untitled',
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          thumbnail: thumbnail || `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
          published: published ? new Date(published) : null
        });
      }
    }
    
    console.log(`Parsed ${videos.length} videos successfully`);
    
    // If no videos were found, use fallback
    if (videos.length === 0) {
      console.warn('No videos found in RSS feed, using fallback');
      return getFallbackVideos();
    }
    
    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    // Return fallback videos if fetch fails
    return getFallbackVideos();
  }
}

/**
 * Fallback videos in case the RSS feed fails
 * @returns {Array} Array of fallback video objects
 */
function getFallbackVideos() {
  const fallbackIds = [
    'S-XOPtkOpP8',
    '11Jleb4J-_0',
    'kX4J4ZfNBmA',
    'm0HTztWfoLg',
    '0Mi6X-9c6q4',
    'e9UpSuymNGc',
    'FY325zI4dWg',
    '3qSvh7ebJeA',
    'NjH8lDQxoQQ',
    'U0tuVUkmr0k',
    '9oRQk3gBKQQ',
    'M4daw97UHi4',
    'M1KBWrrm7rY',
    'PxuLmhyuX84',
    'aX-f1nMUj-8'
  ];
  
  return fallbackIds.map(id => ({
    id,
    title: 'Holly Eva Video',
    embedUrl: `https://www.youtube.com/embed/${id}`,
    thumbnail: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    published: null
  }));
}
