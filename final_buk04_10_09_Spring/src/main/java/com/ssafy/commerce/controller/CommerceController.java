package com.ssafy.commerce.controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.commerce.model.StoreDto;
import com.ssafy.commerce.model.service.CommerceService;
import com.ssafy.happyhouse.model.HouseInfoDto;

@RestController
@RequestMapping("/commerce")
@CrossOrigin("*")
public class CommerceController {
	
	private CommerceService commerceService;
	
	public CommerceController(CommerceService commerceService) {
		super();
		this.commerceService = commerceService;
	}

	@GetMapping("/storeList")
	public ResponseEntity<?> storeList(@RequestBody Map<String, String> map) throws SQLException{
		
		List<StoreDto> list = commerceService.getStoreList(map);
		
		if (list != null && list.size() > 0) {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(list);
		} else {
			return ResponseEntity
					.status(HttpStatus.NO_CONTENT)
					.build();
		}
	}
}
