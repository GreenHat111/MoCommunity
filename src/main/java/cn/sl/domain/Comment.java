package cn.sl.domain;


public class Comment {

  private Integer id;
  private Integer parentId;
  private Integer type;
  private Integer commentUser;
  private Long gmtCreate;
  private Long gmtModified;
  private Integer likeCount;
  private String comment;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public Integer getParentId() {
    return parentId;
  }

  public void setParentId(Integer parentId) {
    this.parentId = parentId;
  }


  public Integer getType() {
    return type;
  }

  public void setType(Integer type) {
    this.type = type;
  }

  public Integer getCommentUser() {
    return commentUser;
  }

  public void setCommentUser(Integer commentUser) {
    this.commentUser = commentUser;
  }

  public Long getGmtCreate() {
    return gmtCreate;
  }

  public void setGmtCreate(Long gmtCreate) {
    this.gmtCreate = gmtCreate;
  }

  public Long getGmtModified() {
    return gmtModified;
  }

  public void setGmtModified(Long gmtModified) {
    this.gmtModified = gmtModified;
  }

  public Integer getLikeCount() {
    return likeCount;
  }

  public void setLikeCount(Integer likeCount) {
    this.likeCount = likeCount;
  }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", parentId=" + parentId +
                ", type=" + type +
                ", commentUser=" + commentUser +
                ", gmtCreate=" + gmtCreate +
                ", gmtModified=" + gmtModified +
                ", likeCount=" + likeCount +
                ", comment='" + comment + '\'' +
                '}';
    }
}
