package net.sm.terrabasefront.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
/*
import net.sm.terrabasebackend.dao.BrickDAO;*/
import net.sm.terrabasebackend.dao.BrickCategoryDAO;
import net.sm.terrabasebackend.dto.BrickCategory;



@Controller
public class PageController {

	
	private static final Logger logger = LoggerFactory.getLogger(PageController.class);
	
	@Autowired
	private BrickCategoryDAO brickcategoryDAO;
	/*@Autowired 
	private BrickDAO brickDAO;
	*/
	@RequestMapping(value = {"/", "/home", "/index"})
	
	public ModelAndView index() {
		
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title","Home");
		
		logger.info("Inside PageController index method - INFO");
		logger.debug("Inside PageController index method - DEBUG");
		
		mv.addObject("brickcategories", brickcategoryDAO.list());
		
		mv.addObject("userClickHome",true);
		
		return mv;
		
	}
	
	  
    
	@RequestMapping(value ="/about")
	
	public ModelAndView about() {
		
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title","About Us");
		mv.addObject("userClickAbout",true);
		
		return mv;
		
	}
	
	
@RequestMapping(value ="/contact")
	
	public ModelAndView contact() {
		
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title","Contact Us");
		mv.addObject("userClickContact",true);
		
		return mv;
		
	}
	

	


	/*
	 * Methods to load all the products and based on category
	 */
	
@RequestMapping(value = "/show/all/products")

public ModelAndView showAllProducts() {
	
	ModelAndView mv = new ModelAndView("page");
	mv.addObject("title","All Products");
	
	mv.addObject("brickcategories", brickcategoryDAO.list());
	
	mv.addObject("userClickAllProducts",true);
	
	return mv;
	
}

//for bricks
/*
@RequestMapping(value = "/manage/bricks")

public ModelAndView showAllBricks() {
	
	ModelAndView mv = new ModelAndView("page");
	mv.addObject("title","All Bricks");
	
	mv.addObject("brick", brickDAO.list());
	
	mv.addObject("userClickAllBricks",true);
	
	return mv;
	
}

*/


@RequestMapping(value = "/show/brickcategory/{id}/products")

public ModelAndView showCategoryProducts(@PathVariable("id") int id) {
	
	ModelAndView mv = new ModelAndView("page");
	// categoryDAO to fetch a single category
	BrickCategory brickcategory = null;
	brickcategory = brickcategoryDAO.get(id);
	
	
	mv.addObject("title",brickcategory.getName());
	
	//passing the list of categories
	mv.addObject("brickcategories", brickcategoryDAO.list());
	
	//passing the single category object
	mv.addObject("brickcategory", brickcategory);
	
	
	mv.addObject("userClickCategoryProducts",true);
	
	return mv;
	
}


}