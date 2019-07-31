package cn.sl.mapper;

import cn.sl.domain.Notification;
import cn.sl.domain.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface NotificationMapper {

    @Insert("INSERT INTO `notification` (`notify_user`, `receive_user`, `outer_id`, `type`, `gmt_create`, `status`, `notifier_name`, `outer_title`) " +
            " VALUES(#{notifyUser},#{receiveUser},#{outerId},#{type},#{gmtCreate},#{status},#{notifierName},#{outerTitle})")
    int insert(Notification notification);

    @Select("select count(1) from notification where notify_user=#{id} and status=0")
    int count(Integer userId);

    @Select("select * from notification where notify_user=#{id} limit #{page},#{size}")
    List<Notification> paginationWithIdList(@Param("id") Integer id, @Param("page") int page, @Param("size") int size);

    @Select("select count(1) from notification where receive_user=#{id} and status=0")
    Integer unreadCount(Integer id);

    @Select("select * from notification where id=#{id}")
    Notification selectByPrimaryId(Long id);

    @Update("update notification set status=1 where id=#{id}")
    void setRead(Long id);
}
