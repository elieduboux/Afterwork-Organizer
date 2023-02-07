package com.projet.projetE4;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/activity")
@ResponseBody
public class RestController {

	private final RestService restService;
	
	public RestController(RestService restService) {
		this.restService = restService;
	}
	@RequestMapping(value = "data", produces = MediaType.APPLICATION_JSON_VALUE) 
	public ResponseEntity onResRequest(@RequestParam(value = "id") String id){
		Long Id = Long.parseLong(id);
		return ResponseEntity.ok(restService.getActivityStats(Id));
	}
}
