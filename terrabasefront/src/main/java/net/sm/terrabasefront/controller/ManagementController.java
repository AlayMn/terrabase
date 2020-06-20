package net.sm.terrabasefront.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
/*
import net.kzn.onlineshopping.util.FileUploadUtility;
import net.kzn.onlineshopping.validator.ProductValidator;*/
import net.sm.terrabasebackend.dao.BrickCategoryDAO;
import net.sm.terrabasebackend.dao.BrickDAO;
/*
import net.sm.terrabasebackend.dao.BrickDAO;*/
import net.sm.terrabasebackend.dto.BrickCategory;
import net.sm.terrabasebackend.dto.Brick;
/*
import net.sm.terrabasebackend.dto.Brick;*/

@Controller
@RequestMapping("/manage")
public class ManagementController {
	
	
	@Autowired
	private BrickDAO brickDAO;
	
	@Autowired
	private BrickCategoryDAO categoryDAO;
	/*
	@Autowired
	private BrickDAO brickDAO;*/
	
	private static final Logger logger = LoggerFactory.getLogger(ManagementController.class);
	
	@RequestMapping(value="/bricks", method=RequestMethod.GET)
	public ModelAndView showManageProducts(@RequestParam(name="operation", required=false) String operation) {
		
			
			ModelAndView mv = new ModelAndView("page");
			
			mv.addObject("userClickManageProducts", true);
			mv.addObject("title", "Manage Products");
			Brick nProduct = new Brick();
			
			//set few of the fields
			nProduct.setSupplierId(1);
		//	nProduct.setActive(true);
			mv.addObject("brick", nProduct);
			
			if(operation!=null) {
				
				if(operation.equals("brick"))
				{
					mv.addObject("message", "Product Submitted Successfully!");
				}
			}
			
			return mv;
		}
	
	/*
	@RequestMapping(value="/bricks", method=RequestMethod.GET)
	public ModelAndView showManageBricks(@RequestParam(name="operation", required=false) String operation) {
		
			
			ModelAndView mv = new ModelAndView("page");
			
			mv.addObject("userClickManageBricks", true);
			mv.addObject("title", "Manage Bricks");
		//	Brick nBrick = new Brick();
			

			mv.addObject("brick", brickDAO.list());
			
			//mv.addObject("userClickAllBricks",true);
			
			
			
			//set few of the fields
		//	nProduct.setSupplierId(1);
		//	nProduct.setActive(true);
		//	mv.addObject("brick", nBrick);
			
			if(operation!=null) {
				
				if(operation.equals("brick"))
				{
					mv.addObject("message", "Brick Submitted Successfully!");
				}
			}
			
			return mv;
		}*/
	
	
	@RequestMapping(value="/{id}/brick", method=RequestMethod.GET)
	public ModelAndView showEditProducts(@PathVariable int id) {
		
		
		ModelAndView mv = new ModelAndView("page");
		
		mv.addObject("userClickManageProducts", true);
		mv.addObject("title", "Manage Products");
		Brick nProduct = brickDAO.get(id);
		
		//set the product fetch from database
	    mv.addObject("brick", nProduct);
		
	
		
		return mv;
	}
	
	/*
	@RequestMapping(value = "/products", method=RequestMethod.POST)
	public String managePostProduct(@Valid @ModelAttribute("product") Product mProduct, 
			BindingResult results, Model model, HttpServletRequest request) {
		
		// mandatory file upload check
		if(mProduct.getId() == 0) {
			new ProductValidator().validate(mProduct, results);
		}
		else {
			// edit check only when the file has been selected
			if(!mProduct.getFile().getOriginalFilename().equals("")) {
				new ProductValidator().validate(mProduct, results);
			}			
		}
		
		if(results.hasErrors()) {
			model.addAttribute("message", "Validation fails for adding the product!");
			model.addAttribute("userClickManageProduct",true);
			return "page";
		}			

		
		if(mProduct.getId() == 0 ) {
			productDAO.add(mProduct);
		}
		else {
			productDAO.update(mProduct);
		}
	
		 //upload the file
		 if(!mProduct.getFile().getOriginalFilename().equals("") ){
			FileUtil.uploadFile(request, mProduct.getFile(), mProduct.getCode()); 
		 }
		
		return "redirect:/manage/products?success=product";
	}
*/
	
	
	@RequestMapping(value="/bricks", method=RequestMethod.POST)
	public String handleProductSubmission(@Valid @ModelAttribute("brick") Brick mProduct, BindingResult results, Model model, HttpServletRequest request) {
		
		//handle  image validation for new products
	/*	if(mProduct.getId()==0)
		{
		new ProductValidator().validate(mProduct, results);
		}
		else
		{
			if(!mProduct.getFile().getOriginalFilename().equals(""))
			{
				new ProductValidator().validate(mProduct, results);
			}
		}*/
		
		//check if there are any errors
		if(results.hasErrors())
		{
		//	mv.addObject("title", "Manage Products");
			model.addAttribute("userClickManageProducts", true);
			model.addAttribute("title", "Manage Products");
			model.addAttribute("message", "Validation failed for Product Submission");
			
			return "page";
		}
		
		logger.info(mProduct.toString());
		
		// create a new record
		if(mProduct.getId() == 0) {

			brickDAO.add(mProduct);
				
		}
		else
		{
			//udate the product if id is not 0
			brickDAO.update(mProduct);
		}
		
	/*	if(!mProduct.getFile().getOriginalFilename().equals(""))
		{
			FileUploadUtility.uploadFile(request,mProduct.getFile(), mProduct.getCode());
		}*/
		
		
		return "redirect:/manage/bricks?operation=brick";
		
	}
		
  	/*@RequestMapping(value="/product/{id}/activation", method=RequestMethod.POST)
	@ResponseBody
	public String handleProductActivation(@PathVariable int id)
	{
  		// is going to fetch the product from the database
  		Product product = productDAO.get(id);
  		boolean isActive = product.isActive();
  		
  		product.setActive(!product.isActive());
  		
  		productDAO.update(product);
  		
	return (isActive)? "You have successfully deactivated the product with id" + product.getId()
	               : "You have successfully activated the product with id" + product.getId();
	}
	*/
	@RequestMapping(value = "/brickcategory", method=RequestMethod.POST)
	public String managePostCategory(@ModelAttribute("brickcategory") BrickCategory mCategory, HttpServletRequest request) {					
		categoryDAO.add(mCategory);		
		return "redirect:" + request.getHeader("Referer") + "?success=brickcategory";
	}
	
	
	
	@ModelAttribute("brickcategories")
	public List<BrickCategory> getCategories() {
		return categoryDAO.list();
	}
	
	
	
	

	//for bricks

	
	
	}
	


