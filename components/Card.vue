<template>
	<div class='flex justify-center'>
		<div class='rounded-lg shadow-lg bg-white flex flex-row'>
			<a class='w-full'>
				<img class='rounded-t-lg h-96' :src='poster' alt />
			</a>
			<div class='p-6 flex flex-col justify-between h-full'>
				<div>
					<h5 class='text-gray-900 text-xl font-medium mb-2' v-text='props.title' />
					<p class='text-gray-700 text-base mb-4' v-text='props.year' />
				</div>
				<button
					type='button'
					class='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          v-text='props.label'
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'Show'
  }
});

const poster = computed(() => {
  if (props.poster === "N/A") {
    return "https://place-hold.it/300x420";
  }

  return props.poster;
});
</script>