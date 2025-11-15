// This is the full data model for a creator's store
export const INITIAL_DATA = {
  meta: {
    siteName: "",
    siteSlug: "",
    baseLanguage: "en",
    baseCurrency: "USD"
  },
  creator: {
    bio: "",
    location: ""
  },
  product: {
    title: "",
    description: "",
    price: 19.99,
    images: []
  },
  contact: {
    email: "",
    phone: ""
  },
  socials: {
    twitter: "",
    instagram: "",
    linkedin: ""
  },
  seo: {
    title: "",
    description: ""
  }
};
