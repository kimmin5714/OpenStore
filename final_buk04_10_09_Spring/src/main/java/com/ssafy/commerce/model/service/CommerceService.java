package com.ssafy.commerce.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.commerce.model.StoreDto;

public interface CommerceService {

	List<StoreDto> getStoreList(Map<String, String> map);

	

}
