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
	
   
    
    
    
    
    

 // code for jquery dataTable
 	
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

    	var jsonUrl = window.contextRoot + '/json/data/admin/all/products';
    	
    	
    	
    	
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
    						/*,
    					mRender: function(data, type, row) {
    						return '<img src="'+window.contextRoot+'/resources/images/'+data+'.jpg"'
    					}*/
    				},
    				
    				{data: 'code'/*,
			           	 bSortable: false,
			           		mRender: function(data,type,row) {
			           			return '<img src="' + window.contextRoot
								+ '/resources/images/' + data 
								+ '.jpg" class="adminDataTableImg"/>';					           			
			           		}*/
			        },
    				
    				{
    					data: 'name'
    					
    				},
    				{
    					data: 'brand'
    				},
    				
    				{
    					data:'quantity',
    					mRender: function(data, type, row)
    					{
    						if(data<1)
    							{
    							  return '<span style="color:red">Out of Stock!</span>';
    							}
    						return data;
    					}
    					
    					
    				},
    				{
    					data: 'unitPrice',
    					mRender: function(data, type, row) {
    						 return '&#8360; ' + data
    					}
    				},
    				{
    					data: 'active',
    					bSortable:false,
    					mRender: function(data,type,row)
    					{
    						var str = '';
    						
    						str +='<label class="switch">'
    					
    							
    							/*if(data) {											
									str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
									
								}else {
									str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
								}*/
    							
    							
    					if(data) {
    						str += '<label class="switch"> <input type="checkbox" checked="checked" value="'+row.id+'"><div class="slider round"> </div></label>';
							
    					}
    					else
    						{
    						str +=  '<label class="switch"> <input type="checkbox"  value="'+row.id+'"><div class="slider round"> </div></label>';
    						}
    						
    						//str += '<div class="slider"></div></label>';

    						return str;
    					}
    					},
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
    				}
    				
    				
    					/*bSortable: false,
    					mRender: function(data, type, row){
    						
    						var str = '';
    			str += '<a href="'+window.contextRoot+ '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"</span></a> &#160'
    						str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"</span></a>'
    						
    						
    						
    						
    						return str;
    					}*/
    				//}
    				
    				
    			],
    			
    		initComplete: function() {
    			
    			var api = this.api();
    			api.$('.switch input[type="checkbox"]').on('change', function(){
    		    	
    		    	var checkbox = $(this);
    		    	var checked = checkbox.prop('checked');
    		    	var dMsg = (checked)? 'You want to activate the product?':
    		    						  'You want to deactivate the product?';
    		    	var value = checkbox.prop('value');
    		    	
    		    	bootbox.confirm({
    		    		size: 'medium',
    		    		title: 'Product Activation & Deactivation',
    		    		message: dMsg,
    		    		callback: function(confirmed) {
    		    			if(confirmed)
    		    				{
    		    				  console.log(value);
    		    				  
    		    				  var activationUrl = window.contextRoot + '/manage/product/' + value + '/activation';
    		    				  
    		    				  $.post(activationUrl, function(data)
    		    				  {
    		    					  bootbox.alert({
        		    					  size:'medium',
        		    					  title:'Information',
        		    					  message: data
        		    				  });
    		    				  });
    		    				 
    		    				}
    		    			else
    		    				{
    		    				  checkbox.prop('checked', !checked);
    		    				}
    		    			
    		    		}
    		    	});
    		    });
    			
    		}	
    		

    			
    		});
    	
    	
    	  
    	}
    
    
    
    //             // 
    
    
    

    // data table for admin
    
   /*var $adminBricksTable = $('#adminBricksTable');
    
    // execute the below code only where we have this table
    if($adminBricksTable.length)
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
    						,
    					mRender: function(data, type, row) {
    						return '<img src="'+window.contextRoot+'/resources/images/'+data+'.jpg"'
    					}
    				},
    				
    				
    				{
    					data: 'name'
    					
    				},
    			
    				{
    					data: 'active',
    					bSortable:false,
    					mRender: function(data,type,row)
    					{
    						var str = '';
    						
    						str +='<label class="switch">'
    					
    							
    							if(data) {											
									str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
									
								}else {
									str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
								}
    							
    							
    					if(data) {
    						str += '<label class="switch"> <input type="checkbox" checked="checked" value="'+row.id+'"><div class="slider round"> </div></label>';
							
    					}
    					else
    						{
    						str +=  '<label class="switch"> <input type="checkbox"  value="'+row.id+'"><div class="slider round"> </div></label>';
    						}
    						
    						//str += '<div class="slider"></div></label>';

    						return str;
    					}
    					},
    					{
    						data: 'id',
    						bSortable: false,
    						mRender:function(data, type,row)
    						{
    							
    							var str = '';
    							
    							
    							str += '<a href="'+window.contextRoot+'/manage/'+data+'/brick" class="btn btn-warning">';
    						  	str +=  '<span class="glyphicon glyphicon-pencil"></span></a>';
    						  	
    							return str;
    							
    							
    						}
    				}
    				
    				
    					bSortable: false,
    					mRender: function(data, type, row){
    						
    						var str = '';
    			str += '<a href="'+window.contextRoot+ '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"</span></a> &#160'
    						str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"</span></a>'
    						
    						
    						
    						
    						return str;
    					}
    				//}
    				
    				
    			],
    			
    		initComplete: function() {
    			
    			var api = this.api();
    			api.$('.switch input[type="checkbox"]').on('change', function(){
    		    	
    		    	var checkbox = $(this);
    		    	var checked = checkbox.prop('checked');
    		    	var dMsg = (checked)? 'You want to activate the product?':
    		    						  'You want to deactivate the product?';
    		    	var value = checkbox.prop('value');
    		    	
    		    	bootbox.confirm({
    		    		size: 'medium',
    		    		title: 'Product Activation & Deactivation',
    		    		message: dMsg,
    		    		callback: function(confirmed) {
    		    			if(confirmed)
    		    				{
    		    				  console.log(value);
    		    				  
    		    				  var activationUrl = window.contextRoot + '/manage/product/' + value + '/activation';
    		    				  
    		    				  $.post(activationUrl, function(data)
    		    				  {
    		    					  bootbox.alert({
        		    					  size:'medium',
        		    					  title:'Information',
        		    					  message: data
        		    				  });
    		    				  });
    		    				 
    		    				}
    		    			else
    		    				{
    		    				  checkbox.prop('checked', !checked);
    		    				}
    		    			
    		    		}
    		    	});
    		    });
    			
    		}	
    		

    			
    		});
    	
    	
    	  
    	}
    
    */
    
    
    
    
	
});