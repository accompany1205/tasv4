export default interface TutorData {
        _type: "tutor",
        shortName: string,
        longName: string,
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
        defaultCard: {
            coverImage: {
                _type: "image",
                caption: string,
                asset: {
                    _type: "reference",
                    _ref: string
                }
            }
            featuredTags: string[],
            featuredServices: string[],
            gallery: {
                _type: "image",
                title: string,
                caption: string,
                asset: {
                    _type: "reference",
                    _ref: string
                }
            }[]
            overrides?: {
                shortName: string,
                longName: string,
                rate: number,
                headshot: {
                    _type: "image",
                    caption: string,
                    asset: {
                        _type: "reference",
                        _ref: string
                    }
                },
                asset: {
                    _type: "reference",
                    _ref: string
                }

            }
        }
        tutorCoreInfo: {

            
            


        }
    }
