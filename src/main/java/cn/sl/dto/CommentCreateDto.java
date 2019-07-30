package cn.sl.dto;

public class CommentCreateDto {
    private Integer parentId;
    private String comment;
    private Integer type;

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "CommentDto{" +
                "parentId=" + parentId +
                ", comment='" + comment + '\'' +
                ", type=" + type +
                '}';
    }
}
