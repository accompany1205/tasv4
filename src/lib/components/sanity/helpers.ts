const base_path = "https://cdn.sanity.io/images/20gocjb2/production/"

export const AssetRefToImageURL = (asset_ref: string) => {
    const segments = asset_ref.split('-')
    // console.log (segments)
    return base_path + segments.slice(1, 3).join('-') + "." + segments[3]
}
