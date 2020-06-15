package net.sm.terrabasebackend.daoimpl;

import java.util.List;



import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;



import net.sm.terrabasebackend.dao.BrickCategoryDAO;
import net.sm.terrabasebackend.dto.BrickCategory;




@Repository("brickcategoryDAO")
@Transactional
public class BrickCategoryDAOImpl implements BrickCategoryDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public List<BrickCategory> list() {
		
		String selectActiveCategory = "FROM BrickCategory WHERE active = :active";
		
		Query query = sessionFactory.getCurrentSession().createQuery(selectActiveCategory);
		
		query.setParameter("active", true);
		
		
		return query.getResultList();
	}

	
	/*
	 * Getting single category based in id
	 *
	 */

	@Override
	public BrickCategory get(int id) {
		// TODO Auto-generated method stub
		
		
		return sessionFactory.getCurrentSession().get(BrickCategory.class, Integer.valueOf(id));
	
	}


	@Override
	public boolean add(BrickCategory brickcategory) {
		// TODO Auto-generated method stub
		
		try {
			// add the category to the database table
			sessionFactory.getCurrentSession().persist(brickcategory);
			
			return true;
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return false; 
		}
		
		
	}

   /*
    * 
    * Updating a single category
    * */
	
	@Override
	public boolean update(BrickCategory brickcategory) {
		// TODO Auto-generated method stub
		
				try {
					// add the category to the database table
					sessionFactory.getCurrentSession().update(brickcategory);
					
					return true;
				}
				catch(Exception ex)
				{
					ex.printStackTrace();
					return false; 
				}
	}


	@Override
	public boolean delete(BrickCategory brickcategory) {
	  
		brickcategory.setActive(false);
		try {
			// add the category to the database table
			sessionFactory.getCurrentSession().update(brickcategory);
			
			return true;
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return false; 
		}
		
		
	}

}



