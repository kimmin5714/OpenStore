package com.ssafy.commerce.model.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssafy.api.model.ComPropDto;
import com.ssafy.api.model.DongCodeLatlngDto;
import com.ssafy.commerce.model.DealCostAvgAndDongDto;
import com.ssafy.commerce.model.DealCostAvgDto;
import com.ssafy.commerce.model.EstateDto;
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

	@Override
	public EstateDto getEstate(String id) {
		return commerceMapper.getEstate(id);
	}

	@Override
	public List<EstateDto> getEstateList(Map<String, String> map) {
		return commerceMapper.getEstateList(map);
	}

	@Override
	public DealCostAvgDto getDealCostAvgByDong(Map<String, String> map) {
		List<ComPropDto> list = commerceMapper.getDealCostAvgByDong(map);
		
		int sum = 0;
		double costAvgPerAreaSum = 0;
		for(int i=0; i<list.size(); i++) {
			sum += list.get(i).getDealAmount();
			costAvgPerAreaSum += list.get(i).getDealAmount() / list.get(i).getBuildingArea();
		}
		
		double costAvg = sum / list.size();
		double costAvgPerArea = costAvgPerAreaSum / list.size();
		
		DealCostAvgDto dealCostAvgDto = new DealCostAvgDto(); 
		dealCostAvgDto.setDealAmountAvg(costAvg);
		dealCostAvgDto.setDealAmountPerArea(costAvgPerArea);
		
		return dealCostAvgDto;
	}

	@Override
	public List<DealCostAvgAndDongDto> getDealCostAvgList(Map<String, String> map) {
		List<DongCodeLatlngDto> dongList = getDongsByCoord(map);
		
		// dongList의 동마다 동별 평균 매매가+면적당매매가를 얻어옴
		// 그 결과를 리스트로 저장
		if(dongList != null && dongList.size() > 0) {
			List<DealCostAvgDto> calcCostList = commerceMapper.getDealCostAvgByDongList(dongList);
			if(calcCostList != null && calcCostList.size() > 0) {
				
				List<DealCostAvgAndDongDto> result = new ArrayList<DealCostAvgAndDongDto>();
				for(int i=0; i<calcCostList.size(); i++) {
					DealCostAvgDto costAvgDto = calcCostList.get(i);
					for(DongCodeLatlngDto dong : dongList) {
						
						System.out.println((dong.getDongCode().substring(0, 5)+
								dong.getDongName()));
						
						if ((dong.getDongCode().substring(0, 5)+
								dong.getDongName()).equals(
										costAvgDto.
										getRegionCodeAndDong()
										)) {
							DealCostAvgAndDongDto dealCostAvgAndDongDto = new DealCostAvgAndDongDto();
							dealCostAvgAndDongDto.setDealCostAvg(costAvgDto);
							dealCostAvgAndDongDto.setDongCodeLatlng(dong);
							result.add(dealCostAvgAndDongDto);
							break;
						}
					}			
				}
				
				return result;
			}
			
		}
		return null;
	}

}
