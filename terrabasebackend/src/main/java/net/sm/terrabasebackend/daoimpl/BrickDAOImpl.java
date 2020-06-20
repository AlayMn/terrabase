package net.sm.terrabasebackend.daoimpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import net.sm.terrabasebackend.dao.BrickDAO;
import net.sm.terrabasebackend.dto.Brick;




@Repository("brickDAO")
@Transactional
public class BrickDAOImpl implements BrickDAO {


	@Autowired
	private SessionFactory sessionFactory;
	
	
	
	
	@Override
	public Brick get(int brickId) {
		// TODO Auto-generated method stub
		try {			
			return sessionFactory
					.getCurrentSession()
						.get(Brick.class,Integer.valueOf(brickId));			
		}
		catch(Exception ex) {		
			ex.printStackTrace();			
		}
		return null;
	}
  
	@Override
	public List<Brick> list() {
		// TODO Auto-generated method stub
		return sessionFactory
				.getCurrentSession()
					.createQuery("FROM Brick" , Brick.class)
						.getResultList();
		
		
		/*String sql = "select * from brick";
		Query query = sessionFactory.getCurrentSession().createNativeQuery(sql);
		return query.getResultList();*/
	}
  
	@Override
	public boolean add(Brick brick) {
		// TODO Auto-generated method stub
		try {			
			sessionFactory
					.getCurrentSession()
						.persist(brick);
			return true;
		}
		catch(Exception ex) {		
			ex.printStackTrace();			
		}		
		return false;
	}

	@Override
	public boolean update(Brick brick) {
		// TODO Auto-generated method stub
		try {			
			sessionFactory
					.getCurrentSession()
						.update(brick);
			return true;
		}
		catch(Exception ex) {		
			ex.printStackTrace();			
		}		
		return false;
	}

	@Override
	public boolean delete(Brick brick) {
		// TODO Auto-generated method stub
try {
			
		//	product.setActive(false);
			// call the update method
			return this.update(brick);
		}
		catch(Exception ex) {		
			ex.printStackTrace();			
		}		
		return false;	
	}

	@Override
	public List<Brick> getBricksByParam(String param, int count) {
		// TODO Auto-generated method stub

		String query = "FROM Brick  ORDER BY " + param + " DESC";
		
		return sessionFactory
					.getCurrentSession()
					.createQuery(query,Brick.class)
					.setFirstResult(0)
					.setMaxResults(count)
					.getResultList();
					
	}

	@Override
	public List<Brick> listActiveBricks() {
		// TODO Auto-generated method stub
		String selectActiveBricks = "FROM Product ";
		return sessionFactory
				.getCurrentSession()
					.createQuery(selectActiveBricks, Brick.class)
						.setParameter("active", true)
							.getResultList();
	}

	@Override
	public List<Brick> listActiveBricksByCategory(int categoryId) {
		// TODO Auto-generated method stub
		String selectActiveBricksByCategory = "FROM Brick  AND categoryId = :categoryId";
		return sessionFactory
				.getCurrentSession()
					.createQuery(selectActiveBricksByCategory, Brick.class)
						.setParameter("active", true)
						.setParameter("categoryId",categoryId)
							.getResultList();
	}

	@Override
	public List<Brick> getLatestActiveBricks(int count) {
		// TODO Auto-generated method stub
		return sessionFactory
				.getCurrentSession()
					.createQuery("FROM Brick  ORDER BY id", Brick.class)
						.setParameter("active", true)
							.setFirstResult(0)
							.setMaxResults(count)
								.getResultList();	
	}

}
