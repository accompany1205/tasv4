import type { EnhancedRichBlockData } from "./RichBlock"

export default interface TestimonialData {
    _type: "testimonial",
    content: EnhancedRichBlockData, 
    tutor: {
        _ref: string,
        _type: "reference"
    }
}