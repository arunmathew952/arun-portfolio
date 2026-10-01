// START HERE: edit the logo, hero image, and contact links.
// Put assets in public/images/. Paths below begin with /images/.
// NOTE: vite.config.js sets base: '/arun-portfolio/', so every asset path
// must be prefixed with import.meta.env.BASE_URL (NOT a hardcoded leading "/").
const base = import.meta.env.BASE_URL;
export const site = {
  logoText: "ARUN MATHEW",
  logoImage: "", // Example: `${base}images/my-logo.svg`. Leave empty for the text logo.
  logoAlt: "Arun Mathew — home",
  heroImage: `${base}images/infra.png`,
  heroImageAlt: "Server racks illustrating cloud infrastructure",
  aboutImage: `${base}images/profile.jpg`, // Add your photo to public/images/profile.jpg
  aboutImageAlt: "Arun Mathew",
  location: "Bangalore, India",
  email: "arunmathew952@gmail.com",
  github: "https://github.com/arunmathew952",
  linkedin: "https://www.linkedin.com/in/arunmathew952",
};
