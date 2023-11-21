package com.ssafy.commerce.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.api.model.DongCodeLatlngDto;
import com.ssafy.commerce.model.EstateDto;
import com.ssafy.commerce.model.StoreDto;

@Mapper
public interface CommerceMapper {

	List<StoreDto> getStoreList(Map<String, String> map);

	List<DongCodeLatlngDto> getDongsByCoord(Map<String, String> map);

	EstateDto getEstate(String id);

	List<EstateDto> getEstateList(Map<String, String> map);


}
