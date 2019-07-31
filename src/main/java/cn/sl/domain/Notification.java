package cn.sl.domain;


public class Notification {

  private Long id;
  private Integer notifyUser;
  private Integer receiveUser;
  private Long outerId;
  private Integer type;
  private Long gmtCreate;
  private Integer status;
  private String notifierName;
  private String outerTitle;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Integer getNotifyUser() {
    return notifyUser;
  }

  public void setNotifyUser(Integer notifyUser) {
    this.notifyUser = notifyUser;
  }

  public Integer getReceiveUser() {
    return receiveUser;
  }

  public void setReceiveUser(Integer receiveUser) {
    this.receiveUser = receiveUser;
  }

    public Long getOuterId() {
        return outerId;
    }

    public void setOuterId(Long outerId) {
        this.outerId = outerId;
    }

    public Integer getType() {
    return type;
  }

  public void setType(Integer type) {
    this.type = type;
  }

  public Long getGmtCreate() {
    return gmtCreate;
  }

  public void setGmtCreate(Long gmtCreate) {
    this.gmtCreate = gmtCreate;
  }

  public Integer getStatus() {
    return status;
  }

  public void setStatus(Integer status) {
    this.status = status;
  }

  public String getNotifierName() {
    return notifierName;
  }

  public void setNotifierName(String notifierName) {
    this.notifierName = notifierName;
  }

  public String getOuterTitle() {
    return outerTitle;
  }

  public void setOuterTitle(String outerTitle) {
    this.outerTitle = outerTitle;
  }

    @Override
    public String toString() {
        return "Notification{" +
                "id=" + id +
                ", notifyUser=" + notifyUser +
                ", receiveUser=" + receiveUser +
                ", outer=" + outerId +
                ", type=" + type +
                ", gmtCreate=" + gmtCreate +
                ", status=" + status +
                ", notifierName='" + notifierName + '\'' +
                ", outerTitle='" + outerTitle + '\'' +
                '}';
    }
}
