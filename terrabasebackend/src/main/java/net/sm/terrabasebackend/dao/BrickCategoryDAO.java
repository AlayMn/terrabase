package net.sm.terrabasebackend.dao;

import java.util.List;

import net.sm.terrabasebackend.dto.BrickCategory;

public interface BrickCategoryDAO {

	
	BrickCategory get(int id);
	List<BrickCategory> list();
	
	
	boolean add(BrickCategory category);
	boolean update(BrickCategory category);
	boolean delete(BrickCategory category);
	
}







