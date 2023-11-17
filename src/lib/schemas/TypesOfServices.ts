export default interface TypesOfServices {
    _type: "typesOfServices",
    blockHeading: string,
    services: {
        heading: string,
        icon: "tutoring" | "collaborative" | "contract",
        body: {}[]
    }[],
    bg: string
}