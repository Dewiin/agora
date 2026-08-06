import type { User } from "./User"
import type { Comment } from "./Comment"
import type { Like } from "./Like"

export interface Post {
    id: string,
    content: string,
    createdAt: Date,
    updatedAt?: Date,
    
    author: User,
    comments: Comment[],
    likes: Like[],
}