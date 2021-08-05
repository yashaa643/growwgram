export type post = {

    id: string,
    created_at: string,
    updated_at: string
    likes: number,
    liked_by_user: boolean,
    description: string,
    

    urls: {
      raw: string,
      full: string,
      regular:string,
      small:string,
      thumb: string,
    },
    
    user: user,
 }

 export type user =  {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    portfolio_url: string,
    profile_image: {
      small: string,
      medium: string,
      large: string
    }
    bio: string,
    location: string,
    total_likes: number,
    total_photos: number,
    total_collections: number,
    instagram_username: string,
    twitter_username: string,
}


export type FETCH_POSTS = {
    type: "FETCH_POSTS", payload: post[]
}