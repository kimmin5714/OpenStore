package com.ssafy.commerce.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssafy.api.model.DongCodeLatlngDto;
import com.ssafy.commerce.model.StoreDto;
import com.ssafy.commerce.model.mapper.CommerceMapper;

@Service
public class CommerceServiceImpl implements CommerceService{
	
	CommerceMapper commerceMapper;
	
	public CommerceServiceImpl(CommerceMapper commerceMapper) {
		super();
		this.commerceMapper = commerceMapper;
	}

	@Override
	public List<StoreDto> getStoreList(Map<String, String> map) {
		return commerceMapper.getStoreList(map);
	}

	@Override
	public List<DongCodeLatlngDto> getDongsByCoord(Map<String, String> map) {
		return commerceMapper.getDongsByCoord(map);
	}

	

}
