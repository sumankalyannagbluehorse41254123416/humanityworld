export interface CMSSubSection {
  title?: string;
  description?: string;
  image?: string;
}

export interface CMSSection {
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: CMSSubSection[];
}
