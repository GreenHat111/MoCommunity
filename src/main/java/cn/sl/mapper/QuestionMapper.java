package cn.sl.mapper;

import cn.sl.domain.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface QuestionMapper {

    @Insert("insert into question(title,description,gmt_create,gmt_modified,creator,comment_count,view_count,like_count" +
            ",tag) values(#{title},#{description},#{gmtCreate},#{gmtModified},#{creator},#{commentCount}" +
            ",#{viewCount},#{likeCount},#{tag})")
    void create(Question question);

    @Select("select * from question")
//    @Results({
//            @Result(column = "gmt_create",property = "gmtCreate"),
//            @Result(column = "gmt_modified",property = "gmtModified"),
//            @Result(column = "comment_count", property = "commentCount"),
//            @Result(column = "view_count", property = "viewCount"),
//            @Result(column = "like_count", property = "likeCount")
//    })
    List<Question> list();

    @Select("select * from question limit #{page},#{size}")
    List<Question> paginationList(@Param("page") Integer page,@Param("size") Integer size);

    @Select("select count(1) from question")
    int count();
}
