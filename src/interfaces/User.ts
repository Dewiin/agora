import type { Post } from "./Post"
import type { Comment } from "./Comment"
import type { Like } from "./Like"

export interface User {
    id: string,
    username: string,
    displayName: string,
    email?: string,
    createdAt: Date,
    updatedAt?: Date,
    bio?: string,
    avatarUrl?: string,
    bannerUrl?: string,
    public: boolean,
    posts: Post[],
    comments: Comment[],
    likes: Like[],
    followers: User[],
    following: User[]
}