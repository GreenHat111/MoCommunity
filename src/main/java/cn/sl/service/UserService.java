package cn.sl.service;

import cn.sl.domain.User;
import cn.sl.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public User findById(Integer commentUser) {
        return userMapper.findById(commentUser);
    }

    public User findByAccountId(String valueOf) {
        return userMapper.findByAccountId(valueOf);
    }

    public void updateToken(long id, String loginToken, long currentTimeMillis) {
        userMapper.updateToken(id,loginToken,currentTimeMillis);
    }

    public void insertUser(User user) {
        userMapper.insertUser(user);
    }

    public User findByToken(String token) {
        return userMapper.findByToken(token);
    }
}
