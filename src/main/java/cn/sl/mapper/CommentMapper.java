package cn.sl.mapper;

import cn.sl.domain.Comment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface CommentMapper {
    @Insert("insert into comment(parent_id,type,comment_user,gmt_create,gmt_modified,like_count,comment) " +
            " values(#{parentId},#{type},#{commentUser},#{gmtCreate},#{gmtModified},#{likeCount},#{comment})")
    int create(Comment comment);

    @Select("select * from comment where id = #{parentId}")
    Comment selectByPrimaryKey(Integer parentId);

}
