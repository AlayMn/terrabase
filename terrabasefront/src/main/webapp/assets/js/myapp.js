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
	

	 var idnumber;
	
	
    //dismissing the alert after 3 seconds
    var $alert = $('.alert');
    if($alert.length) {
    	
    	setTimeout(function() {
    		$alert.fadeOut('slow');
    	} , 3000)
    }
	

	//var jsonUrl = window.contextRoot + '/json/data/admin/all/bricks';
   /* function deleteData(id){
    	if(confirm("Are you sure you want to delete this ?")) {
    		
    		$.ajax({
    			type : "GET",
    			url : window.contextRoot+'/manage/'+id+'/deletebrick',
    			success : function(data) {
    				$(".inner-jsp").html(data);
    			}
    		
    		});
    	} else {
    		return false;
    	}
    		
    		
    	}*/
    
    
  
 	
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
     				
     			],
     			'select': {
     			      'style': 'multi'
     			   },
     			   'order': [[1, 'asc']]

     			
     		})
     	
     	
     	  
     	}
     
    
    
    
    
    
    
    // data table for admin
    
   var $adminProductsTable = $('#adminProductsTable');
    
    // execute the below code only where we have this table
    if($adminProductsTable.length)
    	{

    	var jsonUrl = window.contextRoot + '/json/data/admin/all/bricks';
   // 	var jsonUrl2 = window.contextRoot + '/json/data2/admin/all/suppliers';
        
    
    		$adminProductsTable.DataTable( {
    			lengthMenu: [[10,30,50,-1], ['10 Records', '30 Records', '50 Records', 'All']],
    			pageLength: 30,
    			ajax: {
    				url: jsonUrl,
    				dataSrc:''
    			},
    			 "responsive": true,
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
    				
    		/*		{
						data2: 'id',
						bSortable: false,
						mRender:function(data,type,row)
						{
							
							data2: 'name'
							
							
						}
				},*/
    				
    				{
    					data: 'challan_no'
    				},
    				
    				{
    					data: 'category'
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
    					data: 'rate'
    				},
    				
    				{
    					data:'date'
    					
    				},
    				
    				{
    					data:'amount'
    					
    				},
    				
    				{
    					data:'paid_amount'
    					
    				},
    				
    				{
    					data:'outstanding'
    					
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
				},
				{
					data: 'id',
					bSortable: false,
					mRender:function(data,type,row)
					{
						
						var str2 = '';
						
						//str2 += '<a id="btn-delete" href="'+window.contextRoot+'/manage/'+data+'/deletebrick">';
				//		str2 +='<button name="deleteRuleButton" class="btn btn-danger">' + '<i class="fa fa-trash-o" style="font-size: large"></i>' +'</button>';   
					//	return '<button id="' + data + '" class="dodo" onclick="deleteClick(this)">Delete</button>'	
						
						return '<button class="yourButton"  data-visitor-wifi="' + data + '"><span class="glyphicon glyphicon-trash"></span> </button>';
						
					//	return str2=" <a href="${pageContext.request.contextPath }/product/delete/${product.id }" onclick="return confirm('Are you sure?')">Delete</a>
						
						
						//str2 +=  '<span class="glyphicon glyphicon-trash"></span></a>';
					  	/*
						  'data': null,
						     'render': function (data, type, row) {
						                       return '<button id="' + row.id + '" class="dodo" onclick="deleteClick(this)">Delete</button>'
						               }	
						*/
					//	str2 += '<a href="javascript:void(0);" onClick="deleteData(${'+data+'})">';
					 //	str2 +=  '<span class="glyphicon glyphicon-trash"></span></a>';
					  	
					
						
						//return str2;
						
						
					}
				
				}
				
    				
    			
    			],
    					
                "footerCallback": function ( row, data, start, end, display ) {
                    var api = this.api(), data;
         
                    // Remove the formatting to get integer data for summation
                    var intVal = function ( i ) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '')*1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
         
                    // Total over all pages
                  /*  total = api
                        .column( 5 )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );*/
         
                    // Total over this page
                    quanTotal = api
                        .column( 7, { page: 'current'} )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );
                    
                    Amount = api
                    .column( 10, { page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
                    
                    Paid = api
                    .column( 11, { page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
                    
                    Outstanding = api
                    .column( 12, { page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
         
                     
                    // Update footers
                    $( api.column( 7 ).footer() ).html(
                        ''+quanTotal /*+' ( '+ total +' total)'*/
                    );
                    $( api.column( 10 ).footer() ).html(
                            ''+Amount /*+' ( '+ total +' total)'*/
                        );
                    $( api.column( 11 ).footer() ).html(
                            ''+Amount /*+' ( '+ total +' total)'*/
                        );
                    $( api.column( 12 ).footer() ).html(
                            ''+Outstanding /*+' ( '+ total +' total)'*/
                        );
                }
                
                
        		/*initComplete: function() {
        			
        			var api = this.api();
        			api.$('.switch input[type="button"]').on('change', function(){
        				data: 'id';
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
        		    			if(confirmed).
        		    				{
        		    				  console.log(value);
        		    				  
        		    				  //var activationUrl = window.contextRoot + '/manage/product/' + value + '/activation';
        		    					//str2 += '<a id="btn-delete" href="'+window.contextRoot+'/manage/'+data+'/deletebrick">';
        		  					
        		    				  
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
        			
        		}	*/
        		//end function
    
    		///
    
    			
    			
    		});
    		
    		
    	//	var api = this.api();
			
/*

    		  $('#adminProductsTable').on( 'click', 'tr', function () {
    			    var id = table.row( this ).id();
    			    alert( 'Clicked row id ' + id );
    			  });
*/
    		 /* function deleteClick (obj) {
    		        var rowID = $(obj).attr('id');
    		        var employeeID = $(obj).closest('tr').find('td:first').html();
    		        alert( 'Clicked row id ' + rowID );
    		  }
    		  
    		  */
    		

				
	    	 var val;
   		  $('#adminProductsTable').on('click', '.yourButton', function(data) { 
   			   val = $(this).closest('tr').find('td:eq(0)').text(); // amend the index as needed
   			//  alert( 'Clicked row id ' + val +data);
   		//	  console.log(val);
   			});
	    	
    		

   		function doAjaxDelete(id){      
   		     $.ajax({
   		            type: "DELETE",
   		            url:  window.contextRoot +  "/manage/"+id+"/deletebrick",
   		            success: function(response){
   		                // we have the response, do something to notify success
   		           /* error: function(e){
   		                //do something to notify failure
   		             alert( 'Success ');

   		            });*/
   		            	
   		            	//var $adminProductsTable = $('#adminProductsTable');
   		            	$adminProductsTable.DataTable().ajax.reload();
   		            	
   		            	$adminProductsTable.draw();
   		   }
   		     });
   		}
   		
    		
			$('#adminProductsTable').on('click', 'button', function (data) {
    		  
    		    	var dMsg =  'You want to delete the product?';
    		    	 
    		    	
    		    	
    		    	bootbox.confirm({
    		    		size: 'medium',
    		    		title: 'Product Activation & Deactivation',
    		    		message: dMsg,
    		    		callback: function(confirmed) {
    		    			if(confirmed)
    		    				  {
    		    				//  console.log(data);
    		    				
    		    				  
    		    				 
		    						
    		    				  
    		    				  //var activationUrl = window.contextRoot + '/manage/product/' + value + '/activation';
    		    					//str2 += '<a id="btn-delete" href="'+window.contextRoot+'/manage/'+data+'/deletebrick">';
    		    				  var deleteUrl = window.contextRoot +  '/manage/'+val+'/deletebrick';
    		    				 
    		    				//  $.post(deleteUrl);
    		    				 // alert( 'Url is ' + deleteUrl);
    		    				  doAjaxDelete(val);
    		    				 /* $.post(deleteUrl, function(data)
    		    				  {
    		    						
    		    					 	
    		    					  
    		    					  bootbox.alert({
        		    					  size:'medium',
        		    					  title:'Information',
        		    					  message: data
        		    					  
        		    					  
        		    				  });
    		    				  });*/
    		    				 
    		    				}
    		    			else
    		    				{
    		    				//  checkbox.prop('checked', !checked);
    		    				}
    		    			
    		    		}
    		    	});
    		        
    		    });
			
			
    		
    		
    		}
  
    /*
	var table = $('#adminProductsTable').DataTable(); 
	$('#adminProductsTable').on( 'click', 'tr', function () {
	    var id = table.row( this ).id();
	 
	    alert( 'Clicked row id '+id );
	} );
	*/


	  


});




