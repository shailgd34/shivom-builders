export interface Specification {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  location: string;
  builtUpArea: string;
  plotSize: string;
  year: string;
  timeline: string;
  status: string;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  excerpt: string;
  overview: string;
  architectureStory: string;
  specifications: Specification[];
  highlights: string[];
  relatedSlugs: string[];
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  project: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  verified: boolean;
}

export interface StatItem {
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface PartnerBrand {
  name: string;
  category: string;
  logo?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  subtagline: string;
  aboutShort: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    altPhone: string;
    altPhoneDisplay: string;
    email: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    mapsUrl: string;
    whatsappUrl: string;
    workingHours: {
      weekdays: string;
      weekends: string;
    };
  };
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  stats: StatItem[];
  values: {
    number: string;
    title: string;
    description: string;
  }[];
  partners: PartnerBrand[];
}
