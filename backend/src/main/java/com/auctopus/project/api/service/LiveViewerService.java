package com.auctopus.project.api.service;

import com.auctopus.project.api.request.LiveEnterRequest;
import com.auctopus.project.db.domain.LiveViewer;

/**
 * 라이브 시청자 관련 로직 처리를 위한 서비스 구현
 */
public interface LiveViewerService {

    // 경매 시청자 입장(생성)
    void createLiveViewer(LiveEnterRequest req);

    // 경매 시청자 정보 가져오기
    LiveViewer getLiveViewer(String userEmail);

    // 경매 시청자 퇴장(삭제)
    void deleteLiveViewer(String userEmail);

}