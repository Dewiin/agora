export interface Like {
    id: string,

    // relations
    userId: string,
    postId?: string,
    commentId?: string
}