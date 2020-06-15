<%@taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>

   <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
   
<div class="container">
<div class="row">

   <div class="col-md-3">
               
               <%@include file="./shared/sidebar.jsp" %>
               
            </div>


	<c:if test="${not empty message}">	
		<div class="row">			
			<div class="col-xs-12 col-md-offset-2 col-md-8">			
				<div class="alert alert-info fade in">${message}</div>				
			</div>
		</div>
	</c:if>

	
		<div class="col-md-offset-2 col-md-7">

			<div class="panel panel-primary">

				<div class="panel-heading">

					<h4>Product Management</h4>

				</div>

				<div class="panel-body">
					<sf:form class="form-horizontal" modelAttribute="product" action="${contextRoot}/manage/products" method="POST" enctype="multipart/form-data">
						<div class="form-group">
							<label class="control-label col-md-4">Name</label>
							<div class="col-md-8">
								<sf:input type="text" path="name" id="name" class="form-control"
									placeholder="Product Name" />
								<sf:errors path="name" cssClass="help-block" element="em"/> 
							</div>
						</div>
						
						<div class="form-group">
							<label class="control-label col-md-4">Brand</label>
							<div class="col-md-8">
								<sf:input type="text" path="brand" id="brand" class="form-control"
									placeholder="Brand Name" /> 
								<sf:errors path="brand" cssClass="help-block" element="em"/>	
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4">Description</label>
							<div class="col-md-8">
								<sf:textarea path="description" id="description" rows="4" class="form-control"
									placeholder="Enter your description here!" /> 
								<sf:errors path="description" cssClass="help-block" element="em"/>
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4">Unit Price</label>
							<div class="col-md-8">
								<sf:input type="number" path="unitPrice" id="unitPrice" class="form-control"
									placeholder="Enter Unit Price" />
								<sf:errors path="unitPrice" cssClass="help-block" element="em"/>
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4">Quantity</label>
							<div class="col-md-8">
								<sf:input type="number" path="quantity" id="quantity" class="form-control"
									placeholder="Enter Quantity" />
								<sf:errors path="quantity" cssClass="help-block" element="em"/> 
							</div>
						</div>


						<div class="form-group">
							<label class="control-label col-md-4">Upload a file</label>
							<div class="col-md-8">
								<sf:input type="file" path="file" class="form-control"/>
								<sf:errors path="file" cssClass="help-block" element="em"/> 
							</div>
						</div>


						<div class="form-group">
							<label class="control-label col-md-4">Category</label>
							<div class="col-md-8">
								<sf:select path="categoryId" items="${categories}" itemLabel="name" itemValue="id" class="form-control"/>
							
								<div class="text-right">
									<br/>			
									<sf:hidden path="id"/>
									<sf:hidden path="code"/>
									<sf:hidden path="supplierId"/>
									<sf:hidden path="active"/>														
									<button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myCategoryModal">Add New Category</button>
								</div>							
							</div>
							
						</div>


					
						<div class="form-group">
							
							<div class="col-md-offset-4 col-md-4">
							
								<input type="submit" name="submit" id="submit" value="Submit" class="btn btn-primary"/>
								
								<!-- Hidden fields for product--> 
									<sf:hidden path="id"/>
									<sf:hidden path="code"/>
									<sf:hidden path="supplierId"/>
									<sf:hidden path="active"/>											
									<sf:hidden path="purchases"/>	
									<sf:hidden path="views"/>	
							</div>
						</div>						
										
					</sf:form>

				</div>

			</div>

		</div>

	</div>
	<%-- <!-- Modal -->
	<div class="modal fade" id="myCategoryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">New Category</h4>
	      </div>
	      <div class="modal-body">
	        
	        <sf:form id="categoryForm" class="form-horizontal" modelAttribute="category" action="${contextRoot}/manage/category" method="POST">
	        	
       			<div class="form-group">
					<label class="control-label col-md-4">Name</label>
					<div class="col-md-8 validate">
						<sf:input type="text" path="name" class="form-control"
							placeholder="Category Name" /> 
					</div>
				</div>
       			
       			<div class="form-group">				
					<label class="control-label col-md-4">Description</label>
					<div class="col-md-8 validate">
						<sf:textarea path="description" class="form-control"
							placeholder="Enter category description here!" /> 
					</div>
				</div>	        	        
	        
	        
				<div class="form-group">				
					<div class="col-md-offset-4 col-md-4">					
						<input type="submit" name="submit" value="Save" class="btn btn-primary"/>						
					</div>
				</div>	        
	        </sf:form>
	      </div>
	    </div>
	  </div>
	</div> --%>
	
	
		 <div class="col-md-offset-1 col-md-18">

	
	<hr/>	
	<h1>Available Products</h1>
	<hr/> 
	
	
				
		
		<div class='col-xs-20'>
		   <div style="overflow:auto">
		   
		    <!-- Products table for Admin -->
			<table id="adminProductsTable" class="table table-condensed table-bordered">
							 
				<thead>					
					<tr>					 
						<th>Id</th>
						<th>&#160;</th>
						<th>Name</th>
						<th>Brand</th>
						<th>Qty. Avail</th>
						<th>Unit Price</th>
						<th>Activate</th>				
						<th>Edit</th>
					</tr>					
				</thead>
				
				<%-- <tbody>
				 <tr>
				 <td>4</td>
				 <td>
				  
				  <img class="adminDataTableImg" src="${contextRoot}/resources/images/PRDMNO123PQRX.jpg"
				  alt="Macbook Pro"/>
				 
				 </td>
				 <td>Macbook Pro</td>
				 <td>3</td>
				 <td>&#8377; 54000.00/-</td>
				   <td>60</td>
				   <td>70</td>
				 <td>
				   <label class="switch">
					   <input type="checkbox" checked="checked" value="4"/>
				 	   <div class="slider"/>
				   </label>
				 </td>
				 <td>
				  	<a href="${contextRoot}/manage/4/product" class="btn btn-warning">
				  	  <span class="glyphicon glyphicon-pencil"></span>
				  	</a>
				 </td>
				 
				 
				 </tr>
				 
				 
				  <tr>
				 <td>4</td>
				 <td>
				  
				  <img class="adminDataTableImg" src="${contextRoot}/resources/images/PRDMNO123PQRX.jpg"
				  alt="Macbook Pro"/>
				 
				 </td>
				 <td>Macbook Pro</td>
				 <td>3</td>
				 <td>&#8377; 54000.00/-</td>
				  <td>60</td>
				   <td>70</td>
				 <td>
				   <label class="switch">
				   <input type="checkbox"  value="4"/>
				   <div class="slider"/>
				   </label>
				 </td>
				 <td>
				  	<a href="${contextRoot}/manage/4/product" class="btn btn-warning">
				  	  <span class="glyphicon glyphicon-pencil"></span>
				  	</a>
				 </td>
				 
				 
				 </tr>
				 
				 
				</tbody> --%>
				
				<tfoot>
					<tr>					
						<th>Id</th>
						<th>&#160;</th> 
						<th>Name</th>
						<th>Brand</th>
						<th>Qty. Avail</th>
						<th>Unit Price</th>
						<th>Activate</th>				
						<th>Edit</th>
					</tr>									
				</tfoot>
				
				
							
			</table>
		
			
		
		
		</div>
	
					
				
		
	
	</div>
	
</div>