package cn.sl.dto;

import cn.sl.domain.Comment;
import cn.sl.domain.User;

public class CommentDto {
    private Comment comment;
    private User user;
    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
