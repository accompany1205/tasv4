<script lang="ts">
    export let tag: any;

    let type = tag.type; // Tutor or Service
    let id = tag.id;
    let name = tag.name;

    function borderColor() {
        return type === 'tutors' ? 'border-blue-200' : 'border-red-200';
    }
</script>

<div class={`bg-white p-2 text-gray-700 w-fit rounded-xl border-2 ${borderColor()}`}>
    {name}
</div>
