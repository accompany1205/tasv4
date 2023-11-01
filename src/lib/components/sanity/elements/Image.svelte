<script lang="ts">

    interface imageData {
        _type: "image",
        _key: string,
        asset: {
            _ref: string,
            type: string
        }
    };

    let _class = ""
    export {_class as class}
    export let image_data: imageData;

    const base_path = "https://cdn.sanity.io/images/20gocjb2/production/"
    const asset_path = image_data.asset._ref.split('-').slice(1, 3).join('-');
</script>

<picture class="{_class}">
    <img src="{base_path}{asset_path}.webp" alt=""/>
</picture>