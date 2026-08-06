import type { Like } from "./Like";
import type { Post } from "./Post";
import type { User } from "./User";

export interface Comment {
    id: string,
    content: string,
    createdAt: Date,
    updatedAt?: Date,

    // Relations
    user: User,
    postId: string
    likes: Like[]
}