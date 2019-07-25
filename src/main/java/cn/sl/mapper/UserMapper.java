package cn.sl.mapper;

import cn.sl.domain.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    @Insert("insert into user(name,account_id,token,gmt_create,gmt_modified,bio,head_img) " +
            "values(#{name},#{accountId},#{token},#{gmtCreate},#{gmtModified},#{bio},#{headImg})")
    int insertUser(User user);

    @Select("select * from user where token=#{token}")
//    @Results(id = "userMapper",value = {
//            @Result(column = "account_id",property = "accountId"),
//            @Result(column = "gmt_create",property = "gmtCreate"),
//            @Result(column = "gmt_modified",property = "gmtModified"),
//            @Result(column = "head_img",property = "headImg")
//    })
    User findByToken(String token);


    @Select("select * from user where id=#{creator}")
//    @Results(id = "userMapper")
    User findById(int creator);
}
