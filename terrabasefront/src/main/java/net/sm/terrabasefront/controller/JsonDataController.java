package net.sm.terrabasefront.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sm.terrabasebackend.dao.BrickDAO;
import net.sm.terrabasebackend.dto.Brick;

import net.sm.terrabasebackend.dao.BrickSupplierDAO;

import net.sm.terrabasebackend.dto.BrickSupplier;

@Controller
@RequestMapping("/json/data")
public class JsonDataController {

	
	@Autowired
	private BrickDAO brickDAO;
	
	@Autowired
	private BrickSupplierDAO bricksupplierDAO;

/*
	@Autowired
	private BrickDAO brickDAO;
*/
	
	
	@RequestMapping("/all/bricks")
     @ResponseBody
	public List<Brick> getAllBricks() {
		
		return brickDAO.listActiveBricks();
		
	}
	
/*	@RequestMapping("/all/bricks")
    @ResponseBody
	public List<Brick> getAllBricks() {
		
		return brickDAO.list();
		
	}*/
	
	@RequestMapping("/admin/all/bricks")
	@ResponseBody
	public List<Brick> getAllBricksForAdmin() {		
		return brickDAO.list();
				
	}	
	
	@RequestMapping("/admin/all/suppliers")
	@ResponseBody
	public List<BrickSupplier> getAllSuppliersForAdmin() {		
		return bricksupplierDAO.list();
				
	}	
	
	/*
	@RequestMapping("/admin/all/bricks")
	@ResponseBody
	public List<Brick> getAllBricksForAdmin() {		
		return brickDAO.list();
				
	}	
	
	*/
	
	@RequestMapping("/brickcategory/{id}/bricks")
    @ResponseBody
	public List<Brick> getBricksByCategory(@PathVariable int id) {
		
		return brickDAO.listActiveBricksByCategory(id);
		
	}
	
}
