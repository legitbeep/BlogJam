interface POST {
    title?: string ;
    description?: string;
    content?: string;
} 

type POSTOBJ = {
    post : POST;
}

type POSTDATA = {
    id : string;
    attributes : Partial<POST>;
}

type POSTSOBJ = {
    posts : Array<POSTDATA>;
}