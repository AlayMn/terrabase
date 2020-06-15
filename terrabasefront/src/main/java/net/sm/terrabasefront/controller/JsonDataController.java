package net.sm.terrabasefront.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sm.terrabasebackend.dao.ProductDAO;
import net.sm.terrabasebackend.dto.Product;


@Controller
@RequestMapping("/json/data")
public class JsonDataController {

	
	@Autowired
	private ProductDAO productDAO;

/*
	@Autowired
	private BrickDAO brickDAO;
*/
	
	
	@RequestMapping("/all/products")
     @ResponseBody
	public List<Product> getAllProducts() {
		
		return productDAO.listActiveProducts();
		
	}
	
/*	@RequestMapping("/all/bricks")
    @ResponseBody
	public List<Brick> getAllBricks() {
		
		return brickDAO.list();
		
	}*/
	
	@RequestMapping("/admin/all/products")
	@ResponseBody
	public List<Product> getAllProductsForAdmin() {		
		return productDAO.list();
				
	}	
	
	/*
	@RequestMapping("/admin/all/bricks")
	@ResponseBody
	public List<Brick> getAllBricksForAdmin() {		
		return brickDAO.list();
				
	}	
	
	*/
	
	@RequestMapping("/category/{id}/products")
    @ResponseBody
	public List<Product> getProductsByCategory(@PathVariable int id) {
		
		return productDAO.listActiveProductsByCategory(id);
		
	}
	
}
