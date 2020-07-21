<%@taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>

   <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
   
<div class="container">
<div class="row2">

   <div class="col-md-3">
               
               <%@include file="./shared/sidebar.jsp" %>
               
            </div>



	
		<div class="col-md-offset-2 col-md-7">

			<div class="panel panel-primary">

				<div class="panel-heading">

					<h4>Product Management</h4>

				</div>

				<div class="panel-body">
					<sf:form class="form-horizontal" modelAttribute="brick" action="${contextRoot}/manage/bricks" method="POST" enctype="multipart/form-data">
					<%-- 	<div class="form-group">
							<label class="control-label col-md-4">Supplier Name</label>
							<div class="col-md-8">
								<sf:input type="text" path="supplier_name" id="supplier_name" class="form-control"
									placeholder="Supplier Name" />
								<sf:errors path="supplier_name" cssClass="help-block" element="em"/> 
							</div>
						</div>
						 --%>
						 
						 	<div class="form-group">
							<label class="control-label col-md-4">Supplier Name</label>
							<div class="col-md-8">
						<%-- 	
							<select name="bricksupplier" id="bricksupplier">
							<c:forEach var = "options" items="$ {bricksuppliers}">
							 <option value="${options.id }">${options.name}</option>
							
							</c:forEach>
							</select> --%>
							
								<sf:select path="supplier_name" items="${bricksuppliers}" itemLabel="name" itemValue="name" class="form-control"/>
							
								<div class="text-right">
									<br/>			
									<sf:hidden path="id"/>
								<%-- 	<sf:hidden path="code"/> --%>
									<sf:hidden path="supplierId"/>
									<%-- <sf:hidden path="supplier_name"/> --%>
																						
								</div>							
							</div>
							
						</div>
						 
						 
						 
						<div class="form-group">
							<label class="control-label col-md-4">Challan No.</label>
							<div class="col-md-8">
								<sf:input type="text" path="challan_no" id="challan_no" class="form-control"
									placeholder="Challan No." /> 
								<sf:errors path="challan_no" cssClass="help-block" element="em"/>	
							</div>
						</div>
 
						<%-- <div class="form-group">
							<label class="control-label col-md-4">Brick Size</label>
							<div class="col-md-8">
								<sf:input type="number" path="brick_size" id="brick_size" class="form-control"
									placeholder="Enter Brick Size" />
								<sf:errors path="brick_size" cssClass="help-block" element="em"/>
							</div>
						</div>
 						--%>

	<div class="form-group">
							<label class="control-label col-md-4">Category</label>
							<div class="col-md-8">
								<sf:select path="category" items="${brickcategories}" itemLabel="name" itemValue="name" class="form-control"/>
							
								<div class="text-right">
									<br/>			
									<sf:hidden path="id"/>
									<%-- <sf:hidden path="code"/> --%>
									<sf:hidden path="categoryId"/>
																						
							<!-- 		<button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myCategoryModal">Add New Category</button>
							 -->	</div>							
							</div>
							 
						</div>


						<%-- <div class="form-group">
							<label class="control-label col-md-4">Description</label>
							<div class="col-md-8">
								<sf:textarea path="description" id="description" rows="4" class="form-control"
									placeholder="Enter your description here!" /> 
								<sf:errors path="description" cssClass="help-block" element="em"/>
							</div>
						</div> --%>
						<div class="form-group">
							<label class="control-label col-md-4">Truck Number</label>
							<div class="col-md-8">
								<sf:input type="text" path="truck_no" id="truck_no" class="form-control"
									placeholder="Truck Number" /> 
								<sf:errors path="truck_no" cssClass="help-block" element="em"/>	
							</div>
						</div>
						
						
						

						<div class="form-group">
							<label class="control-label col-md-4">MHL</label>
							<div class="col-md-8">
								<sf:input type="text" path="mhl" id="mhl" class="form-control"
									placeholder="Enter Unit Price" />
								<sf:errors path="mhl" cssClass="help-block" element="em"/>
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4">Quantity</label>
							<div class="col-md-8">
								<sf:input type="number" path="quantity" id="quantity" class="form-control"  oninput="calculate();" 
								 placeholder="Enter Quantity"  />
								<sf:errors path="quantity" cssClass="help-block" element="em"/> 
							</div>
						</div>



		<div class="form-group">
		<label class="control-label col-md-4">Date</label>
							<div class="col-md-8">
							<sf:input type="text" path="date" id="date" class="form-control" data-date-format="YYYY/MM/DD"
									placeholder="Enter Date" />
								<sf:errors path="date" cssClass="help-block" element="em"/> 
							</div>
						</div>
							
							
							
						<div class="form-group">
							<label class="control-label col-md-4">Rate</label>
							<div class="col-md-8">
								<sf:input type="number" path="rate" id="rate" class="form-control" oninput="calculate();" 
									placeholder="Enter Rate" />
								<sf:errors path="rate" cssClass="help-block" element="em"/> 
							</div>
						</div>
							

						
	 <div class="form-group">
							<label class="control-label col-md-4">Amount</label>
							<div class="col-md-8">
								<sf:input type="number" path="amount" id="amount" class="form-control" oninput="calculateOut();" 
									placeholder="Enter Amount" />
								<sf:errors path="amount" cssClass="help-block" element="em"/> 
							</div>
						</div> 	 
						
						
	 <div class="form-group">
							<label class="control-label col-md-4">Paid Amount</label>
							<div class="col-md-8">
								<sf:input type="number" path="paid_amount" id="paid_amount" class="form-control" oninput="calculateOut();" 
									placeholder="Enter Paid Amount" />
								<sf:errors path="paid_amount" cssClass="help-block" element="em"/> 
							</div>
						</div> 	 
						
						
	 <div class="form-group">
							<label class="control-label col-md-4">Outstanding</label>
							<div class="col-md-8">
								<sf:input type="number" path="outstanding" id="outstanding" class="form-control"
									placeholder="Enter Outstanding Amount" />
								<sf:errors path="outstanding" cssClass="help-block" element="em"/> 
							</div>
						</div> 	 
						


					<%-- 	<div class="form-group">
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
							
						</div> --%>


					
						<div class="form-group">
							
							<div class="col-md-offset-4 col-md-4">
							
								<input type="submit" name="submit" id="submit" value="Submit" class="btn btn-primary"/>
								
								<!-- Hidden fields for product--> 
									<sf:hidden path="id"/>
									<%-- <sf:hidden path="code"/> --%>
									<sf:hidden path="supplierId"/>
									<sf:hidden path="categoryId"/>
									
									<%-- <sf:hidden path="active"/>											
									<sf:hidden path="purchases"/>	
									<sf:hidden path="views"/> --%>	
							</div>
						</div>						
										
					</sf:form>

				<script type="text/javascript">

				   
			    function calculate() {
			    	
			        var myBox1 = document.getElementById('quantity').value; 
			        var myBox2 = document.getElementById('rate').value;
			        var amount = document.getElementById('amount'); 
			        var myResult = myBox1 * myBox2;
			          document.getElementById('amount').value = myResult;

			    }
			    
			    function calculateOut() {
			        var myBox1 = document.getElementById('amount').value; 
			        var myBox2 = document.getElementById('paid_amount').value;
			        var amount = document.getElementById('outstanding'); 
			        var myResult = myBox1 - myBox2;
			          document.getElementById('outstanding').value = myResult;

			    }
			    </script>


				</div>

			</div>

		</div>

	</div>
	
	
	
	
	<%-- for ending row before starting a new row --%>
	
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
	
	 
	 
	 
	<!-- 	 <div class="col-md-offset-1 col-md-18"> -->



	
	<c:if test="${not empty message}">	
		<div class="row"> 		
			<div class="col-xs-12 col-md-offset-2 col-md-8">			
				<div class="alert alert-info fade in">${message}</div>				
			</div>
		</div>
	</c:if>
	
</div>


<div class="container">

<div class="row">
   <div class="col-md-3">
               
               <p> &#160; </p>
               <p> &#160; </p>
               
            </div>
    </div>
        </div>



<div class="container">

	<div class="row">
	
	<hr/>	
	<h3>Bricks Details </h3>
	<hr/> 
	
	
				
		
		<!-- <div class='col-xs-20'> -->
		<div class='col-xs-12'>
		   <div style="overflow:auto">
		   
		    <!-- Products table for Admin -->
			<table id="adminProductsTable" class="table table-condensed table-bordered">
				 
				<thead>					
					<tr>
				 	    			 
						<th>Id</th>
				    	<!-- 	<th>&#160;</th> -->
					   <!--  <th>Code</th> -->
						<th>Supplier Name</th>
						<th>Challan No.</th>
						<th>Category</th>
						<th>Truck Number</th>
						<th>Mhl</th>
						<th>Quantity</th>
						<th>Rate</th>
						<th>Date</th>
						<th>Amount</th>
						<th>Paid Amount</th>
						<th>Outstanding</th>	
						<th>Edit</th>
						<th>Delete</th>
						<!-- <th>Edit</th> -->
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
				
				<!-- <tfoot>
					<tr>					
						<th>Id</th>
						<th>&#160;</th>
					    <th>Code</th>
						<th>Supplier Name</th>
						<th>Brick Color</th>
						<th>Truck Number</th>
						<th>Mhl</th>
						<th>Quantity</th>
						<th>Date</th>
						<th>Amount Paid</th>
						<th>Excess Paid</th>
						<th>Total Amount</th>
						<th>Edit</th>
					</tr>									
				</tfoot> -->
				  <tfoot>
            <tr>
              <!--   <th colspan="5" style="text-align:right">Total:</th>
 -->                 <th>       </th>
  				    <th>       </th>
                	<th>       </th>
					<th>       </th>
					<th>	   </th>
					<th> 	   </th>
					<th>	   </th>
					<th>       </th>
					<th>       </th>
					<th>       </th>
					<th>       </th>
					<th>       </th>
					<th>       </th>
					<th>       </th>
					
					<!-- 	<th>Supplier Name</th>
						<th>Brick Color</th>
						<th>Truck Number</th>
						<th>Mhl</th>
						<th>Quantity</th>
						<th>Date</th>
						<th>Amount Paid</th>
						<th>Excess Paid</th>
						<th>Total Amount</th>	
						<th>Edit</th>
						<th>Edit</th> -->
                
            </tr>
        </tfoot>
				
				
				
				
				
				
				
				
							
			</table>
		
		   <!-- Modal -->
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
             <h3 class="modal-title pull-right" id="myModalLabel">!!!!!!xx</h3>

        </div>
        <div class="modal-body">
             <p class="alert alert-danger pull-right">!!!!!!!! xxx </p>

        </div>

        <div class="modal-footer">
            <a href="" type="button" class="btn btn-danger" id="btnDelteYes">xx</a>
            <button type="button" class="btn btn-default" data-dismiss="modal">xx</button>
        </div>

    </div>

</div>
		
		
		</div>
	
			
		
	</div>
	
	</div>
	</div>
	
	
	
	
<!-- </div> -->