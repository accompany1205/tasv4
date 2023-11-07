export default interface TutorData {
        _type: "tutor"
        tutorCoreInfo: {
            shortName: string,
            fullName: string,
            rate: number,
            blurb: string,
            headshot: {
                _type: "image",
                caption: string,
                asset: {
                    _type: "reference",
                    _ref: string
                }
            },
            coverImage: {
                _type: "image",
                caption: string,
                asset: {
                    _type: "reference",
                    _ref: string
                }
            }
            featuredTags: string[],
            featuredServices: string[]
        }
    }
