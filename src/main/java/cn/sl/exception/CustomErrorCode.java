package cn.sl.exception;

public enum  CustomErrorCode implements ICustomErrorCode{
    QUESTION_NOT_FOUND(2001,"你找的问题不存在，换个试试！！！"),
    TARGET_PARAM_NOT_FOUND(2002,"未选中任何问题或者评论进行回复！！！"),
    NO_LOGIN(2003,"当前操作需要登录，请登录后重试"),
    SYSTEM_ERROR(2004,"服务器冒烟了 稍后重试"),
    TYPE_PARAM_WRONG(2005,"评论类型错误或不存在"),
    COMMENT_BOT_FOUND(2006,"你操作的评论不存在");
    private String message;
    private Integer code;
    CustomErrorCode(Integer code, String message) {
        this.message = message;
        this.code = code;
    }


    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public Integer getCode() {
        return code;
    }
}
