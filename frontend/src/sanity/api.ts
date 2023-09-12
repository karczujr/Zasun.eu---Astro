import { useSanityClient } from 'astro-sanity';
import type { PostDTO } from './posts/PostDTO';

export async function getAllPosts(): Promise<Array<PostDTO>> {
  const client = useSanityClient();
  const query = '*[_type == "post"]';
  const posts = await client.fetch<Array<PostDTO>>(query);
  return posts;
}
