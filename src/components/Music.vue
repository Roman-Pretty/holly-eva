<script setup>
import { ref, onMounted } from 'vue';
import { fetchLatestVideos } from '../services/youtubeService.js';

const videos = ref([]);
const loading = ref(false);
const error = ref(null);

// Initialize with empty array, will be populated on mount
onMounted(async () => {
  loading.value = true;
  console.log('Music component mounted, fetching videos...');
  
  try {
    const fetchedVideos = await fetchLatestVideos(15);
    console.log('Videos fetched:', fetchedVideos.length, fetchedVideos);
    videos.value = fetchedVideos;
  } catch (err) {
    console.error('Error in Music component:', err);
    error.value = 'Failed to load videos';
  } finally {
    loading.value = false;
    console.log('Loading complete. Videos:', videos.value.length);
  }
});
</script>

<template>
    <section id="music" class="bg-base-200 min-h-[100dvh] py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <h1 class="md:text-5xl text-4xl font-semibold text-center text-base-content/90 font-serif mb-16">Music</h1>
        
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-16">
            <span class="loading loading-spinner loading-lg"></span>
            <p class="mt-4 text-base-content/70">Loading videos...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-16">
            <p class="text-error">{{ error }}</p>
        </div>

        <!-- Videos Grid -->
        <div v-else class="w-full h-full flex flex-wrap justify-between gap-y-10">
            <!-- Debug info -->
            <div v-if="videos.length === 0" class="w-full text-center py-16">
                <p class="text-base-content/70">No videos found. Videos array length: {{ videos.length }}</p>
            </div>
            
            <iframe 
                v-for="video in videos" 
                :key="video.id"
                class="lg:w-[30%] md:w-[47%] w-full h-[30dvh]" 
                :src="video.embedUrl" 
                :title="video.title"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
    </section>
</template>