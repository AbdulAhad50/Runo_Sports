export type Blog = {
  _rev: string;
  _updatedAt: string;
  content: Array<{
    style: string;
    _key: string;
    markDefs: Array<any>; // Specify more if you know the structure of markDefs
    children: Array<{
      _type: string;
      text: string; // Assuming text content, modify if the child has a different structure
    }>;
    _type: string;
  }>;
  slug: {
    current: string;
    _type: string;
  };
  category: string;
  title: string;
  featuredImage: {
    _type: string;
    alt: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  publishedAt: string;
  _createdAt: string;
  _type: string;
};
