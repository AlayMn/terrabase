package net.sm.terrabasebackend.dao;

import java.util.List;

import net.sm.terrabasebackend.dto.Brick;

public interface BrickDAO {

	

	Brick get(int brickId);
	List<Brick> list();	
	boolean add(Brick brick);
	boolean update(Brick brick);
	boolean delete(Brick brick);

	List<Brick> getBricksByParam(String param, int count);	
	
	
	// business methods
	List<Brick> listActiveBricks();	
	List<Brick> listActiveBricksByCategory(int categoryId);
	List<Brick> getLatestActiveBricks(int count);
}
