$(function() {
	
	switch(menu) {
	
	
	case 'About Us':
	  $('#about').addClass('active');
	  break;
	case 'Contact Us':
		$('#contact').addClass('active');
	break;
	case 'All Products':
		$('#listProducts').addClass('active');
	break;
	case 'Manage Products':
		$('#manageProducts').addClass('active');
	break;
		
	default:
		    if(menu == "Home") break;
			$('#listProducts').addClass('active');
	        $('#a_'+menu).addClass('active');
	        break;
	
	}
	
	
	
    
    
    //dismissing the alert after 3 seconds
    var $alert = $('.alert');
    if($alert.length) {
    	
    	setTimeout(function() {
    		$alert.fadeOut('slow');
    	} , 3000)
    }
	
   
    
    
  
 	
     var $table = $('#productListTable');
     
     // execute the below code only where we have this table
     if($table.length)
     	{

     	var jsonUrl = window.contextRoot + '/json/data/all/products';
     
     	
     	
     	
     		$table.DataTable( {
     			lengthMenu: [[10, 30, 50 ,-1], ['10 Records', '30 Records', '10 Records', 'All']],
     			pageLength: 5,
     			ajax: {
     				url: jsonUrl,
     				dataSrc:''
     			},
     			columns: [
     				
     				{
     					data: 'id',
     					mRender: function(data, type, row) {
     						return '<img src="'+window.contextRoot+'/resources/images/'+data+'.jpg"'
     					}
     				},
     				{
     					data: 'name'
     					
     				},
     				{
     					data: 'brand'
     				},
     				{
     					data: 'unitPrice',
     					mRender: function(data, type, row) {
     						 return '&#8360; ' + data
     					}
     				},
     				{
     					data:'quantity'
     				},
     				{
     					data: 'id',
     					bSortable: false,
     					mRender: function(data, type, row){
     						
     						var str = '';
     			str += '<a href="'+window.contextRoot+ '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"</span></a> &#160';
     			str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"</span></a>';
     						
     						return str;
     					}
     				}
     				
     				
     			]

     			
     		})
     	
     	
     	  
     	}
     
    
    
    
    
    
    
    // data table for admin
    
   var $adminProductsTable = $('#adminProductsTable');
    
    // execute the below code only where we have this table
    if($adminProductsTable.length)
    	{

    	var jsonUrl = window.contextRoot + '/json/data/admin/all/bricks';
    	
    	
    		$adminProductsTable.DataTable( {
    			lengthMenu: [[10,30,50,-1], ['10 Records', '30 Records', '50 Records', 'All']],
    			pageLength: 30,
    			ajax: {
    				url: jsonUrl,
    				dataSrc:''
    			},
    			columns: [
    				
    				{
    					data: 'id'
    					
    				},
    				
    			/*	{
    					data: 'code'
			        },
    				*/
    				{
    					data: 'supplier_name'
    					
    				},
    				{
    					data: 'brick_color'
    				},
    				
    				
    				{
    					data: 'truck_no'
    				},
    				
    				{
    					data: 'mhl'
    				},
    				
    				
    				{
    					data:'quantity'
    					
    				},
    				
    				{
    					data:'date'
    					
    				},
    				
    				{
    					data:'amount_paid'
    					
    				},
    				
    				{
    					data:'excess_paid'
    					
    				},
    				
    				{
    					data:'total_amount'
    					
    				},
    				
					{
						data: 'id',
						bSortable: false,
						mRender:function(data,type,row)
						{
							
							var str = '';
							
							str += '<a href="'+window.contextRoot+'/manage/'+data+'/brick" class="btn btn-warning">';
						 	str +=  '<span class="glyphicon glyphicon-pencil"></span></a>';
						  	
							return str;
							
							
						}
				}
				
    				
    				
    				/*,
    				
					{
						data: 'id',
						bSortable: false,
						mRender:function(data, type,row)
						{
							
							var str = '';
							
							
							str += '<a href="'+window.contextRoot+'/manage/'+data+'/product" class="btn btn-warning">';
						  	str +=  '<span class="glyphicon glyphicon-pencil"></span></a>';
						  	
							return str;
							
							
						}
				}*/
    				
    			
    			]
    			
    		
    		});
    	
    	
    	  
    	}
    
    
    
	
});