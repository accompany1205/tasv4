<script>
	import { Video } from 'flowbite-svelte';
</script>

<div class="bg-nile-blue-900 p-4 text-white">
	<h3 class="border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black">
		Remote & On-Demand Help
	</h3>
	<div class="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
		<div class="max-w-sm">
			<h4 class="py-4 text-2xl"> Sketchup Tutors and Services </h4>
			<p>
				Get on demand SketchUp classes! We are a team of tutors and freelancers that are
				hire-able on an as-needed basis for professional help with your projects. Call us
				with a quick question, or a big project. Our availability is flexible. We teach
				remotely, so you can learn from the comfort of your home, from the jobsite, or from
				the beach! We teach classes via Zoom screenshare, so we can see each others' screens
				and cursors. It can take hours to search online for 1 simple piece of information,
				but just minutes to ask your private tutor.
			</p>
		</div>
		<Video src="/temp/remote-help.mp4" controls autoplay muted loop class="w-full max-w-full h-auto" trackSrc="/temp/remote-help.mp4" />
	</div>
</div>
