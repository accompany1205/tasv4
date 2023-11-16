export default interface TypesOfServices {
    _type: "typesOfServices",
    blockHeading: string,
    services: {
        heading: string,
        icon: string,
        body: {}[]
    }[],
    bg: string
}