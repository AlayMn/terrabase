package net.sm.terrabasebackend.daoimpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import net.sm.terrabasebackend.dao.BrickSupplierDAO;
import net.sm.terrabasebackend.dto.BrickSupplier;


@Repository("bricksupplierDAO")
@Transactional
public class BrickSupplierDAOImpl implements BrickSupplierDAO {

	@Autowired
	private SessionFactory sessionFactory;
	

	@Override
	public List<BrickSupplier> list() {
		
		String selectActiveSupplier = "FROM BrickSupplier ";
		
		Query query = sessionFactory.getCurrentSession().createQuery(selectActiveSupplier);
		
		//query.setParameter("active", true);
		
		
		return query.getResultList();
	}
	
	
}
