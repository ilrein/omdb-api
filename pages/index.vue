<template>
	<div class='text-2xl py-8 px-8 bg-slate-200'>
    <div class="text-3xl">
      Search App!
    </div>
		<div class="pt-8">
			<label for='movie' class='block text-sm font-medium text-gray-700'>Movie</label>
			<div class='mt-1'>
				<input
          v-model="search"
					type='movie'
					name='movie'
					id='movie'
					class='p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
					placeholder='you@example.com'
				/>
			</div>
		</div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        v-for="movie in movies"
        :key="movie.imdbID"
        :title="movie.Title"
        :year="movie.Year"
        :poster="movie.Poster"
      />
    </div>
	</div>
</template>

<script setup>
// {
// 	"0": {
// 		"Title": "Inception",
// 		"Year": "2010",
// 		"imdbID": "tt1375666",
// 		"Type": "movie",
// 		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
// 	}
// }
const search = ref('inception')
const movies = ref([])

onMounted(async () => {
  await getMovies(search.value)
});

const getMovies = async (text) => {
  const path = `http://www.omdbapi.com/?apikey=5b79bc3a&type=movie&s=${text}`;
  try {
    const result = await $fetch(path);
    movies.value = result.Search;
  } catch (error) {
    console.log(error);
  }
}

watch(search, async (newVal) => {
  try {
    await getMovies(newVal)
  } catch (error) {
    
  }
})
</script>

<style lang="postcss">
.container {
  /* @apply bg-red-400; */
}
</style>