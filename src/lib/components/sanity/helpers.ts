const base_path = "https://cdn.sanity.io/images/20gocjb2/production/"

export const AssetRefToImageURL = (asset_ref: string) => {
    return base_path + asset_ref.split('-').slice(1, 3).join('-')
}
