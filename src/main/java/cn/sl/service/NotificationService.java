package cn.sl.service;

import cn.sl.domain.Notification;
import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.NotificationDto;
import cn.sl.dto.PaginationDto;
import cn.sl.dto.QuestionDto;
import cn.sl.enums.NotificationTypeEnum;
import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import cn.sl.mapper.NotificationMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationMapper notificationMapper;
    @Autowired
    private UserService userService;

    public void insert(Notification notification) {
        notificationMapper.insert(notification);
    }

    public PaginationDto list(Integer userId, int page, int size) {
        int totalPage = getTotalPage(notificationMapper.count(userId),size);
        if (totalPage <= 0) totalPage=1;
        if (page<1) page=1;
        else if (page>totalPage) page=totalPage;
        int offset = size * (page - 1);
        List<Notification> notifications = notificationMapper.paginationWithIdList(userId,offset, size);
        return getPaginationDto(notifications,userId,page,size);
    }

    private int getTotalPage(int count, int size) {
        return count%size==0?count/size:count/size+1;
    }
    private PaginationDto getPaginationDto(List<Notification> notifications,Integer userId,int page,int size) {
        PaginationDto<NotificationDto> paginationDto = new PaginationDto<>();
        List<NotificationDto> notificationDtos = new ArrayList<>();
        for (Notification notification:notifications) {
            NotificationDto notificationDto = new NotificationDto();
            BeanUtils.copyProperties(notification,notificationDto);
            notificationDto.setTypeName(NotificationTypeEnum.nameOfType(notification.getType()));
            notificationDtos.add(notificationDto);
        }
        paginationDto.setDataList(notificationDtos);
        Integer totalCount = notificationMapper.count(userId);
        paginationDto.setPagination(totalCount,page,size);
        return paginationDto;
    }

    public Integer unreadCount(Integer id) {
        return notificationMapper.unreadCount(id);
    }

    public NotificationDto read(Long id, User user) {
        Notification notification = notificationMapper.selectByPrimaryId(id);
        if (notification == null) {
            throw new CustomizeException(CustomErrorCode.NOTIFICATION_NOT_FOUND);
        }
        if (notification.getReceiveUser() != user.getId()) {
            throw new CustomizeException(CustomErrorCode.READ_NOTIFICATION_FAIL);
        }
        NotificationDto notificationDto = new NotificationDto();
        BeanUtils.copyProperties(notification,notificationDto);
        notificationDto.setTypeName(NotificationTypeEnum.nameOfType(notification.getType()));

        return notificationDto;
    }

    public void setRead(Long id) {
        notificationMapper.setRead(id);
    }
}
