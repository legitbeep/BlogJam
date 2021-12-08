interface POST {
    title: string;
    description: string;
    content: string;
} 

type POSTOBJ = {
    post : POST;
}

type POSTS = {
    id : string;
    attribute : Partial<POST>;
}

type POSTSOBJ = {
    posts : Array<ATTR>;
}