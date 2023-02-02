import sanityClient from "@sanity/client";
//  import imageUrlBuilder from "@sanity/client";












export const client = sanityClient({

  projectId: import.meta.env.VITE_ID, // find this at manage.sanity.io or in your sanity.json
  useCdn:true,
  apiVersion:"2022-12-24",
  dataset: "production", // this is from those question during 'sanity init'

}); 

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => {builder.image(source)};